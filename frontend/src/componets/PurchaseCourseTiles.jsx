import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import Swal from "sweetalert2";
import { useChapterContext } from "../hooks/useChapterContext";
import { useAuthContext } from "../hooks/useAuthContext";
import DeleteIcon from "@mui/icons-material/Delete";
import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

const PurchaseCourseTiles = (props) => {
  const location = useLocation();
  const { dispatch } = useChapterContext();
  const { user } = useAuthContext();
 console.log("props: ", props)
  const chapterd = {
    _id: props?.chapter?._id,
    price: props?.chapter?.price,
    duration: props?.chapter?.duration,
    teacher: props?.chapter?.teacher,
    description: props?.chapter?.description,
    title: props?.chapter?.title,
    img: props?.chapter?.img,
    file: props?.chapter?.file,
    fileLink: props?.chapter?.links,
  };

  return (
    <div className="flex my-4 flex-col relative w-100 mx-6 bg-white bg-100 p-5 border-solid rounded-lg drop-shadow-2xl  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ">
      <div className="border-white w-72 ">
           

        <img
          src={props?.chapter?.img}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src =
              "https://img.freepik.com/free-vector/online-tutorials-concept_52683-37480.jpg?w=1380&t=st=1678376734~exp=1678377334~hmac=5c4cfbd4678e55f5b00ee505e37fd7c2474945362aa7c577172fcc9863fa764c";
          }}
          className="h-40 w-80 mt-3 rounded-lg"
          alt="err"
        />
      </div>
      <Link to="/purchasedCourse" state={chapterd}>
        <div className=" flex  flex-col bg-white border-b  h-20 mt-2">
          <h3 className="mx-auto text-lg font-bold">{props?.chapter?.title}</h3>
          <p className="mx-auto text-xs">
            Tk.{props?.chapter?.price} &nbsp; Duration: {props?.chapter?.duration}
          <br/>
          <p className="mx-auto text-xs">
          &nbsp; &nbsp; &nbsp;{props?.chapter?.teacher}
          </p>
          </p> 
        </div>
        <div className="flex h-8 ">
          <button className="text-xs mx-auto  my-auto text-red-400 font-black  ">
            {" "}
            Details
          </button>
        </div>
      </Link>
    </div>
  );
};

export default PurchaseCourseTiles;
