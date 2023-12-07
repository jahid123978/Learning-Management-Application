import { useModuleContext } from "../hooks/useModuleContext";
import { useLocation,useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Collapsible from "../componets/Collapsible";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import AddLinkIcon from "@mui/icons-material/AddLink";
import { useAuthContext } from "../hooks/useAuthContext";
import Popup from "../componets/teach/AddNewModule";
import TextField from "@mui/material/TextField";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import BreadCrumbs from "../componets/BreadCrumb";
import { ProgressBar } from "react-loader-spinner";
import Swal from "sweetalert2";
import Layout from "../componets/Layout/Layout";
import { Grid } from "@mui/material";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
const OpenCourse = () => {
  const location = useLocation();
  const propsData = location.state;
  // const {module,dispatch}=useModuleContext()
  const { file, fileLink} = propsData;
  console.log("file: ", file, " fileLink: ", fileLink)
  const navigate=useNavigate()
  const moduleAdd = {
    _id: propsData._id,
  };
  // useEffect(()=>{
  //     dispatch({type:'SET_MODULE',payload:units})
  // },[dispatch])
  const { _id } = propsData;
  const [units, setUnits] = useState("");
  const [files, setFile] = useState("");
  const [head, setHead] = useState("");
  const [linktxt, setLinktxt] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(null);
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopup2, setButtonPopup2] = useState(false);
  const { user } = useAuthContext();
  const {dispatch}=useModuleContext()
  console.log("use: ", user)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!user) {
      setError("you must be logged in");
      return;
    }

    const formData = new FormData();
    formData.append('title', units);
    formData.append("doc", files);
    formData.append("_id", _id);
    const response = await fetch("http://localhost:4000/api/module/", {
      method: "POST",
      body: formData,
      headers: {
        Authorization : `Bearer ${user.token}`
      },
    });
    const json = await response.json();
    // console.log("response json: ", response.json())
    // console.log("response: ", response)
    // console.log("json: ", json)
    if (!response.ok) {
      setError(json.error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
    if (response.ok) {
      setUnits("");
      setError(null);
      setLoading(false);
      setButtonPopup(false);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "New note Added successfully",
        showConfirmButton: false,
        timer: 2000,
      });
      console.log("new module added", json);
      console.log(JSON.stringify(json));
      navigate('/Courses')
      // dispatch({type:'CREATE_MODULE',payload:json})
    }
  };
  const handleSubmit2 = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!user) {
      setError("you must be logged in");
      return;
    }

    const response = await fetch("http://localhost:4000/api/module/addLink", {
      method: "POST",
      body: JSON.stringify({ head, linktxt, _id }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
    if (response.ok) {
      setHead("");
      setLinktxt("");
      setButtonPopup2(false);
      setError(null);
      setLoading(false);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "New link Added successfully",
        showConfirmButton: false,
        timer: 2000,
      });
      navigate('/Courses')
      console.log("new LINK added", json);
      console.log(JSON.stringify(json));
    }
  };

  return (
      <>
      <BreadCrumbs />

      {propsData? <div className=" flex flex-col ">
        <div className="flex  flex-col justify-between md:mx-6">
          <h1 className="ml-4 md:mt-10  mt-2 mb-4 text-xl font-black  flex">
            Course overview
          </h1>
          <div className="inline-flex text-white  my-4" role="group">
            {user?.role === "Admin" ? (
              <button
                type="button"
                onClick={() => setButtonPopup(true)}
                className="inline-flex w-max items-center px-2 md:px-28 py-3 md:mx-4  rounded-xl drop-shadow-md text-xs md:text-sm   font-medium  transition ease-in-out delay-150 bg-green-600 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300  "
              >
                <PictureAsPdfIcon className="mr-2" /> Upload a Note
              </button>
            ) : null}

            {user?.role === "Admin" ? (
              <button
                type="button"
                onClick={() => setButtonPopup2(true)}
                className="inline-flex w-max items-center px-2 md:px-28 py-3 md:mx-4  rounded-xl drop-shadow-md text-xs md:text-sm   font-medium  transition ease-in-out delay-150 bg-rose-600 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 "
              >
                <AddLinkIcon className="mr-2" /> Upload a link
              </button>
            ) : null}
          </div>
        </div>
        <Grid container  columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12} sm={12} md={6}>
                <img style={{width: '600px', height: '400px', marginTop: '20px'}} src={propsData?.img} alt="" />
            </Grid>
            <Grid item xs={12} sm={12} md={4} sx={{marginTop: '20px', textAlign:'left'}}>
           <h1>Course Name: {propsData?.title}</h1>
            <h2>Course Duration: {propsData?.duration}</h2>
            <h2>Course Price: {propsData?.price}</h2>
            <p><span className='font-size'>Description</span>: {propsData?.description}</p>
            <div className="md:mx-10 mx-2 mt-10">
              <CheckoutForm
               propsData = {propsData}
               user = {user}
              ></CheckoutForm>
          {/* {file && file.map((files) => <Collapsible unit={files} />)}
          {fileLink && fileLink.map((files) => <Collapsible unit={files} />)} */}
        </div>
            </Grid>
            </Grid>
       
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <div className=" flex items-center justify-center ">
            {loading ? (
              <div className="flex flex-col">
                <ProgressBar
                  height="100"
                  width="200"
                  ariaLabel="progress-bar-loading"
                  wrapperStyle={{}}
                  wrapperClass="progress-bar-wrapper"
                  borderColor="#000000"
                  barColor="#07fc03"
                />
                <h1 className="text-4xl font-black mb-4">UPLOADING..</h1>
              </div>
            ) : (
              <form
                className="flex flex-col"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                <h2 className="mx-auto text-lg font-black">
                  Upload A New Note
                </h2>
                <label className="mt-10 mb-2 font-black">File name</label>
                <TextField
                  id="outlined-helperText"
                  label="Enter a heading"
                  defaultValue="Default Value"
                  helperText="Required *"
                  type="text"
                  onChange={(e) => setUnits(e.target.value)}
                  value={units}
                  className=""
                />

                <label
                  className="block mb-2 text-sm font-black  dark:text-black mt-5"
                  for="file_input"
                >
                  Upload file
                </label>
                <input
                  className="block w-full py-3 pl-6 text-sm text-black border border-gray-200 rounded-md cursor-pointer bg-gray-100 dark:text-black hover:border-blue-500  hover:border-2 focus:outline-none dark:bg-gray-200 dark:border-gray-400 dark:placeholder-gray-400"
                  aria-describedby="file_input_help"
                  id="file_input"
                  type="file"
                  accept=".pdf"
                  onChange={(e) => setFile(e.target.files[0])}
                />
                <p
                  className="mt-1 text-sm text-gray-500 dark:text-gray-500"
                  id="file_input_help"
                >
                  PDF only(MAX. 10MB)
                </p>

                <button className=" mt-10 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg py-2">
                  <CloudUploadIcon className="mr-2" />
                  UPLOAD
                </button>

                {error && <div>{error}</div>}
              </form>
            )}
          </div>
        </Popup>
        <Popup trigger={buttonPopup2} setTrigger={setButtonPopup2}>
          <div className=" flex items-center justify-center ">
            {loading ? (
              <div className="flex flex-col">
                <ProgressBar
                  height="100"
                  width="200"
                  ariaLabel="progress-bar-loading"
                  wrapperStyle={{}}
                  wrapperClass="progress-bar-wrapper"
                  borderColor="#000000"
                  barColor="#07fc03"
                />
                <h1 className="text-4xl font-black mb-4">UPLOADING..</h1>
              </div>
            ) : (
              <form className="flex flex-col" onSubmit={handleSubmit2}>
                <h2 className="mx-auto text-lg font-black">
                  Upload A New Note
                </h2>
                <label className="mt-10 mb-2 font-black">Enter title</label>
                <TextField
                  id="outlined-helperText"
                  label="Enter a heading"
                  defaultValue="Default Value"
                  helperText="Required *"
                  type="text"
                  onChange={(e) => setHead(e.target.value)}
                  value={head}
                  style={{ width: "340px" }}
                />
                <label className="mt-2 mb-2 font-black">Paste a link</label>
                <TextField
                  id="outlined-helperText"
                  label="anything"
                  defaultValue="Default Value"
                  helperText="Required *"
                  type="text"
                  onChange={(e) => setLinktxt(e.target.value)}
                  value={linktxt}
                  className=""
                />

                <button className=" mt-10 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg py-2">
                  <CloudUploadIcon className="mr-2" />
                  UPLOAD
                </button>

                {error && <div>{error}</div>}
              </form>
            )}
          </div>
        </Popup>
      </div>:  <div className="flex flex-col">
                <ProgressBar
                  height="100"
                  width="200"
                  ariaLabel="progress-bar-loading"
                  wrapperStyle={{}}
                  wrapperClass="progress-bar-wrapper"
                  borderColor="#000000"
                  barColor="#07fc03"
                />
                <h1 className="text-4xl font-black mb-4">Loading..</h1>
              </div>}
      </>
  );
};

export default OpenCourse;
