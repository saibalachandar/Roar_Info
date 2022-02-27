import React, { useContext, useState } from "react";
import "./clubPost.css";
import { MdDelete } from "react-icons/md";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { useLocation } from "react-router-dom";

export default function ClubPost({ posts }) {
  const PF = "http://localhost:8000/images/";
  const { user } = useContext(AuthContext);

  // const path = search + posts._id;
  // const [remove, setRemove] = useState([posts]);
  // console.log(path);
  const handleDelete = async (id) => {
    await axios.delete("/clubpost/" + id);
    window.location.reload();
    // console.log(id);
  };
  // console.log(handleDelete());
  return (
    <div className="club">
      <div className="club_post">
        <div className="club_event">
          <img className="club_img" src={PF + posts.clubImg} alt="" />
        </div>
        <div className="club_activity">
          <h3 className="club_details">
            <span>Name:</span> {posts.eventName}
          </h3>

          <h3 className="club_details">
            <span>Organisar:</span>
            {posts.organisar}
          </h3>
          <h3 className="club_details">
            <span>Speech:</span> {posts.speech}
          </h3>
          <div className="icon_club">
            <span>{new Date(posts.createdAt).toDateString()}</span>
            <p className="club_author">Posted By:{user.username}</p>
            {user.isAdmin && (
              <div
                className="club_icon"
                onClick={() => handleDelete(posts._id)}
              >
                <MdDelete className="icon_delete" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
