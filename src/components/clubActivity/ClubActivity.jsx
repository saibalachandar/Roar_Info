import axios from "axios";
import React, { useEffect, useState } from "react";
import ClubPost from "../clubPost/ClubPost";
import "./clubActivity.css";

export default function ClubActivity() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    const fatchPost = async () => {
      const res = await axios.get("/clubpost/all");

      setPost(res.data);
    };
    fatchPost();
  }, []);

  return (
    <div className="club_active_title">
      <h2 className="club_title">ClubActivity</h2>
      {post.map((v) => (
        <ClubPost posts={v} key={v._id} />
      ))}
    </div>
  );
}
