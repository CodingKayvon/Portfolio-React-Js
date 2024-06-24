import "./App.css";
import './index.css';
import Particles from './components/Particles'
import Profile from "./components/Profile/Profile";
import Contact from "./components/Contact/Contact";
import Completion from "./components/Completion/Completion";
import Proficiency from "./components/Proficiency/Proficiency";
import Courses from "./components/Courses/Courses";
import Friends from "./components/Friends/Friends";




function App() {

  return (
    <div className="App">
      <Particles />  {/* Background Theme */}

      <div className="App-Content">
        <div className="App-ContentLeft">
          <Profile /> {/* User Profile */}
          <Contact /> {/* Personal Links */}
        </div>

        <div className="App-ContentRight">
          <Completion /> {/* Progress Towards Degree */}
          <Proficiency /> {/* Skill In Languages */}

          <div className="App-ContentRightSplit">
            <Courses /> {/* Completed Courses */}
            <Friends /> {/* Networking Friends */}
          </div>

        </div>
      </div>

    </div>
  );
}

export default App;
