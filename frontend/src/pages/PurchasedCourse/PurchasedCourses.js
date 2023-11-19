import { useEffect, useState } from "react";
// import { useAuthContext } from "../hooks/useAuthContext";
// import { useChapterContext } from "../hooks/useChapterContext";
import ClassIcon from "@mui/icons-material/Class";
import { Grid } from "@mui/material";
import PurchaseCourseTiles from "../../componets/PurchaseCourseTiles";
import { useChapterContext } from "../../hooks/useChapterContext";
import { useAuthContext } from "../../hooks/useAuthContext";

const PurchasedCourses = () => {
  const [purchasedCourse, setPurchasedCourse] = useState([]);
  const [loading, setLoading] = useState(false);
  const { chapters, dispatch } = useChapterContext();
  const { user } = useAuthContext();
  const [buttonPopup, setButtonPopup] = useState(false);
  useEffect(() => {
    setLoading(true);
      const fetchChapters = async () => {
        const response = await fetch("http://localhost:4000/api/chapters/st", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const json = await response.json();

        if (response.ok) {
          dispatch({ type: "SET_CHAPTERS", payload: json });
          setLoading(false);
        }
      };
      if (user) {
        fetchChapters();
      }
  }, [dispatch, user]);

  useEffect(()=>{
    let purchase = [];
    if(chapters){
    chapters.map((chapter)=>{
      if(chapter?.paymentCourse){
        const findPaymentUser  = chapter?.paymentCourse.find(chap=>chap.email === user.email);
        if(findPaymentUser){
          chapter.paymentHistory = findPaymentUser;
          // setPurchasedCourse([...chapter]);
          purchase.push(chapter)
        }
      }
     })
    }
    setPurchasedCourse(purchase);
  },[chapters])

//   const handleSubmit = async (e) => {
//     setLoading(true);
//     e.preventDefault();

//     if (!user) {
//       setError("you must be logged in");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("title", title);
//     formData.append("price", price);
//     formData.append("duration", duration);
//     formData.append("description", description);
//     formData.append("teacher", teacher);
//     formData.append("img", file);

//     const response = await fetch("http://localhost:4000/api/chapters/", {
//       method: "POST",
//       body: formData,
//       headers: {
//         Authorization: `Bearer ${user.token}`,
//       },
//     });
//     const json = await response.json();

//     if (!response.ok) {
//       setError(json.error);
//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Something went wrong!",
//         footer: '<a href="">Why do I have this issue?</a>',
//       });
//     }
//     if (response.ok) {
//       setTitle("");
//       setFile("");
//       setButtonPopup(false);
//       setError(null);
//       setLoading(false);
//       Swal.fire({
//         position: "center",
//         icon: "success",
//         title: "New Course Added successfully",
//         showConfirmButton: false,
//         timer: 2000,
//       });
//       console.log("new chapter added", json);
//       dispatch({ type: "CREATE_CHAPTERS", payload: json });
//     }
//   };
  const centerContentStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
console.log("chapters: ", chapters)
  return (
    // <Layout>
    <>
      <div className="ml-12">
        <h1 className="md:mt-10 text-md md:text-xl font-black  flex">
          {" "}
          <ClassIcon />
           Courses
        </h1>
     
      </div>
      <div>
         <Grid container spacing={{md: '-8px'}} columns={{ xs: 4, sm: 8, md: 12 }}  style={centerContentStyle}>
                 {purchasedCourse &&
                  purchasedCourse?.map((chapter) => (
                    <PurchaseCourseTiles key={chapter?._id} chapter={chapter} />
                  ))}
            </Grid>
      </div>
      {/* <div className="flex flex-wrap h-screen items-center justify-center">
        {chapters &&
          chapters.map((chapter) => (
            <CourseTiles key={chapter._id} chapter={chapter} />
          ))}
      </div> */}
     
      </>
    // {/* </Layout> */}
  );
};

export default PurchasedCourses;
