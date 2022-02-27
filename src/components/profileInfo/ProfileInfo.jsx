import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import "./profileInfo.css";

export default function ProfileInfo() {
  const [title, setInfoTitle] = useState("");
  const [knowledge, setKnowledge] = useState();
  const [know, setKnow] = useState("");
  const [skills, setSkills] = useState("");
  const [info, setInfo] = useState("");
  const { user } = useContext(AuthContext);
  const handleTarget = () => {
    let king = [know, skills, info];
    setKnowledge(king);
  };

  const handleProfileSumbmit = async (e) => {
    e.preventDefault();
    const newProfileValue = {
      username: user.username,
      userId: user._id,
      title,
      knowledge,
    };

    try {
      await axios.post("/profileCard/new", newProfileValue);
      window.location.replace("/profileCard/" + user._id);
    } catch (error) {
      console.log(error.message);
    }
  };
  // console.log(user._id);

  //   useEffect(() => {
  //     const infoCard = async () => {
  //       const res = await axios.post("/profileCard/new", {
  //         infoTitle,
  //         knowledge,
  //       });
  //     };
  //     infoCard();
  //   }, []);
  // console.log(infoTitle);
  // console.log(knowledge);

  return (
    <div className="info_profile">
      <h2 className="info_profile_title">ProfileInfo</h2>
      <form className="info_profile_form" onSubmit={handleProfileSumbmit}>
        <div className="user_details">
          <div className="input_box">
            <label>Title</label>
            <input
              className="info_profile_input"
              type="text"
              placeholder="Enter Title"
              required
              onChange={(e) => setInfoTitle(e.target.value)}
            />
          </div>
          <div className="input_box">
            <label>Knowledge</label>
            <input
              className="info_profile_input"
              type="text"
              placeholder="Enter skill"
              required
              onChange={(e) => setKnow(e.target.value)}
            />
            <input
              className="info_profile_input"
              type="text"
              placeholder="Enter skill"
              required
              onChange={(e) => setSkills(e.target.value)}
            />
            <input
              className="info_profile_input"
              type="text"
              placeholder="Enter skill"
              required
              onChange={(e) => setInfo(e.target.value)}
            />
          </div>
          {/* <div className="input_box">
            <label>skill</label>
            <input
              className="info_profile_input"
              type="text"
              placeholder="Enter skill"
              required
              onChange={(e) => setSkills(e.target.value)}
            />
          </div>
          <div className="input_box">
            <label>Knowledge</label>
            <input
              className="info_profile_input"
              type="text"
              placeholder="Enter skill"
              required
              onChange={(e) => setInfo(e.target.value)}
            />
          </div> */}
          <div className="info_profile_btn">
            <button className="btn_info_profile" onClick={() => handleTarget()}>
              posted
            </button>
          </div>
        </div>

        {/* <span>something went wrong</span> */}
      </form>
    </div>
  );
}
