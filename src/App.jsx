import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Language from "./components/Language";
import Project from "./components/Project";
import Skill from "./components/Skill";

function App() {
  return (
    <>
      <div
        style={{ backgroundColor: "navy", width: "100%", height: "4em" }}
      ></div>
      <div className="container-fluid" style={{ width: "100%" }}>
        <div className="row">
          <div className="col-xs-12 col-sm-4">
            <div className="p-4 m-3">
              <AboutMe />
              <Contact />
              <Skill />
              <Language />
            </div>
          </div>
          <div className="col-xs-12 col-sm-8 ">
            <div className="p-4 m-3">
              <Education />
              <Project />
              <Experience />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{ backgroundColor: "navy", width: "100%", height: "2em" }}
      ></div>
    </>
  );
}

export default App;
