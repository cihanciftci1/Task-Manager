import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProjectBoard from "./components/ProjectBoard";
import { Routes, Route,useNavigate} from "react-router-dom";
import AddProjectTask from "./components/ProjectTask/AddProjectTask";
import UpdateProjectTask from "./components/ProjectTask/UpdateProjectTask";

function App() {
  const navigate=useNavigate();
  return (

    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProjectBoard />} />
        <Route path="/add-project-task" element={<AddProjectTask  navigate={navigate} />} />
        <Route path="/update-project-task/*" element={<UpdateProjectTask navigate={navigate}  />} />
      </Routes>
    </div>

  );
}

export default App;
