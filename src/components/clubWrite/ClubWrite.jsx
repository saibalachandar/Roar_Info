import React, { useContext, useState } from "react";
import "./clubWrite.css";
import { MdAddAPhoto } from "react-icons/md";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export default function ClubWrite() {
  const [file, setFile] = useState(null);
  const [eventName, setEventName] = useState("");
  const [organisar, setOrganisar] = useState("");
  const [speech, setSpeech] = useState("");
  const { user } = useContext(AuthContext);

  const handleWriteSubmit = async (e) => {
    e.preventDefault();

    const newWrite = {
      eventName,
      organisar,
      speech,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newWrite.clubImg = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error.message);
      }
    }
    try {
      const res = await axios.post("/clubpost", newWrite);
      window.location.replace("/clubactivity/" + res.data._id);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="write">
      {file && (
        <img
          className="writeimg"
          src={window.URL.createObjectURL(file)}
          alt=""
        />
      )}

      <form className="writeform" onSubmit={handleWriteSubmit}>
        <div className="formgrp">
          <label htmlFor="fileinput" className="writeicon">
            <MdAddAPhoto />
          </label>
          <input
            type="file"
            id="fileinput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />

          <div className="input_container">
            <input
              type="text"
              id="inputtext"
              placeholder="Event Name"
              className="writeinput"
              autoFocus
              onChange={(e) => setEventName(e.target.value)}
            />
            <input
              type="text"
              id="inputtext"
              placeholder="Organisar"
              className="writeinput"
              //   autoFocus
              onChange={(e) => setOrganisar(e.target.value)}
            />

            <input
              type="text"
              id="inputtext"
              placeholder="Speech"
              className="writeinput"
              //   autoFocus
              onChange={(e) => setSpeech(e.target.value)}
            />
          </div>
          {user.isAdmin && (
            <button className="writesubmit" type="submit">
              Publish
            </button>
          )}
        </div>
        {/* <div className="formgrp">
          <textarea
            placeholder="Tell your story"
            className="writeinput writetext"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div> */}
      </form>
    </div>
  );
}
