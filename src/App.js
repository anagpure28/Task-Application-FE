import './App.css';
import { Routes, Route } from "react-router-dom"
import Login from './Pages/Login';
import Register from './Pages/Register';
import { AddTask } from './Pages/AddTask';
import { Tasks } from './Pages/Tasks';
import Navbar from "./components/Navbar"
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/create" element={<AddTask />}/>
        <Route path="/tasks" element={<Tasks />}/>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
