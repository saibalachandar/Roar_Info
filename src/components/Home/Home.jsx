import React from "react";
import "./home.css";
import img from "../../img/program.svg";

export default function Home() {
  // const path = useLocation();
  // console.log(path);

  return (
    <section className="home container">
      <div className="home_container">
        <div className="home_wrapper">
          <h1 className="home_title">
            Information <span className="home_tech">Technology </span>
          </h1>

          <div className="home_content">
            <div className="home_animate">
              <div className="home_quote">You can do IT</div>
              <div className="home_quote">Work Hard Dream Big</div>
              <div className="home_quote">Dreams comes too</div>
              <div className="home_quote">Let's goo party</div>
            </div>
          </div>
        </div>
      </div>
      <div className="home_svg">
        <div className="home_clip"></div>
        <img className="program_svg" src={img} alt="" />
      </div>
    </section>
  );
}
