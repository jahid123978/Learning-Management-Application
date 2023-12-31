import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Profile from "./pages/Profile";
import Chat from "./pages/Chat";
import Grades from "./pages/Grades";
import Meet from "./pages/Meet";
import Todo from "./pages/Todo";
import AddNewModule from "../src/componets/teach/AddNewModule";
import OpenCourse from "./pages/OpenCourse";
import StudentsList from "./pages/StudentsList";
import Login from "./pages/Auth/login";
import Signup from "./pages/Auth/signup";
import Header from "./pages/Pages/Header/Header";
import Footer from "./pages/Pages/Footer/Footer"
import About from "./pages/Pages/About/About";
import PurchasedCourse from "./pages/PurchasedCourse/PurchasedCourse";
import PurchasedCourses from "./pages/PurchasedCourse/PurchasedCourses";
import PurchasedHistory from "./pages/PurchasedHistory/PurchasedHistory";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="  ">
      <Header></Header>
      <Routes>
        {/* <Route
          path="/"
          element={user ? <Dashboard /> : <Navigate to="/login" />}
        /> */}
        <Route
          path="/"
          element= {<Dashboard />}
        />
        {/* <Route
          path="/Dashboard"
          element={user ? <Dashboard /> : <Navigate to="/login" />}
        /> */}
        <Route
          path="/Dashboard"
          element={<Dashboard />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route
          path="/profile"
          element={user ? <Profile /> : <Navigate to="/login" />}
        /> */}
        <Route
          path="/profile"
          element={ <Profile />}
        />

        {/* <Route
          path="/Courses"
          element={user ? <Courses /> : <Navigate to="/login" />}
        /> */}
        <Route
          path="/Courses"
          element={ <Courses />}
        />
        {/* <Route
          path="/Chat"
          element={user ? <Chat /> : <Navigate to="/login" />}
        /> */}
        <Route
          path="/Chat"
          element={<Chat />}
        />
        {/* <Route
          path="/Meet"
          element={user ? <Meet /> : <Navigate to="/login" />}
        /> */}
        <Route
          path="/Meet"
          element={<Meet />}
        />
        {/* <Route
          path="/OpenCourse"
          element={user ? <OpenCourse /> : <Navigate to="/login" />}
        /> */}
        <Route
          path="/OpenCourse"
          element={<OpenCourse />}
        />
        <Route
          path="/purchasedCourse"
          element={<PurchasedCourse />}
        />
        <Route
          path="/purchasedCourses"
          element={<PurchasedCourses />}
        />
        <Route
          path="/purchasedHistory"
          element={<PurchasedHistory />}
        />
        <Route
          path="/About"
          element={<About/>}
        />
        {/* <Route
          path="/Todo"
          element={user ? <Todo /> : <Navigate to="/login" />}
        /> */}
        <Route
          path="/Todo"
          element={ <Todo />}
        />
        {/* <Route
          path="/AddNewModule"
          element={user ? <AddNewModule /> : <Navigate to="/login" />}
        /> */}
        <Route
          path="/AddNewModule"
          element={ <AddNewModule />}
        />
        {/* <Route
          path="/Grades"
          element={user ? <Grades /> : <Navigate to="/login" />}
        /> */}
        <Route
          path="/Grades"
          element={<Grades />}
        />
        {/* <Route
          path="/Student-List"
          element={user ? <StudentsList /> : <Navigate to="/login" />}
        /> */}
        <Route
          path="/Student-List"
          element={<StudentsList />}
        />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
