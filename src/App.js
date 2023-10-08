import './App.css';
import { Routes, Route } from "react-router-dom"
import Login from './Pages/Login';
import Register from './Pages/Register';
import { AddTask } from './Pages/AddTask';
import { Tasks } from './Pages/Tasks';
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <p className='Notes'>Notes Taking Application</p>
      <Routes>
        <Route path="/" element={<h3>Welcome...</h3>}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/create" element={<AddTask />}/>
        <Route path="/tasks" element={<Tasks />}/>
        <Route path="*" element={<h3>No Page Found</h3>}/>
      </Routes>
    </div>
  );
}

export default App;
