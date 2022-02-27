import React, { useContext, useEffect, useState } from "react";
import "./profileCard.css";
import {
  MdVerified,
  MdOutlineMenuBook,
  MdDelete,
  MdOutlineEditNote,
} from "react-icons/md";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

export default function ProfileCard() {
  const [update, setUpdate] = useState(false);
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);
  const [demo, setDemo] = useState([]);
  const PF = "http://localhost:8000/images/";

  const { user } = useContext(AuthContext);

  const location = useLocation();
  const path = location.pathname.split("/")[2];

  const [userProfile, setUserProfile] = useState([]);

  useEffect(() => {
    const fatchStd = async () => {
      const res = await axios.get(`/users/${path}`);
      setUserProfile(res.data);
    };
    fatchStd();
  }, [path]);

  useEffect(() => {
    const getProfile = async () => {
      const res = await axios.get("/profileCard/" + path);
      setDemo(res.data);
      // setTitle(res.data[0].title);
      setData(res.data);
    };
    getProfile();
  }, [path]);
  // setDome();
  // console.log(title);
  // console.log(data);
  // const user = true;

  const handleDelete = async (id) => {
    await axios.delete(`/profileCard/${id}`);
    window.location.reload();
  };
  // console.log(demo[0]._id);

  return (
    <section>
      <div className="profile">
        <div className="profile_left">
          <div className="profile_container">
            <img
              className="profile_img"
              src={PF + userProfile.profilePic}
              alt=""
            />
          </div>
          <h2 className="profile_name">
            {userProfile.username}
            <MdVerified className=" profile_icon" />
          </h2>
          <p>
            <MdOutlineMenuBook color="red" /> {userProfile.degree}
          </p>
          <p>{userProfile.quotes}</p>
        </div>
        <div className="profile_right">
          {user && (
            <div className="icon_profile">
              {/* <MdOutlineEditNote className="icon_color" /> */}
              {/* <MdDelete className="icon_delete" /> */}
            </div>
          )}
          <div className="profile_details">
            {demo.map((v) => (
              <div className="profile_achive">
                {/* {update ? (
                  <input
                    type="text"
                    autoFocus
                    value={title}
                    className="profile_knowlege"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                ) : ( */}

                <h2 className="profile_knowledge">
                  {v.title}
                  <MdDelete
                    className="icon_delete"
                    onClick={() => handleDelete(v._id)}
                  />
                </h2>
                {/* )} */}

                {/* {update ? (
                  <input
                    type="text"
                    autoFocus
                    value={title}
                    className="profile_knowlege"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                ) : ( */}
                <ul>
                  <li>{v.knowledge[0]}</li>
                  <li>{v.knowledge[1]}</li>
                  <li>{v.knowledge[2]}</li>
                </ul>
                {/* )} */}
              </div>
            ))}
            {/* <div className="profile_achive">
              <h2 className="profile_knowledge">Interest</h2>
              <ul>
              <li>saibalachandar</li>
              <li>saibalachandar </li>
              <li>saibalachandar</li>
              <li>saibalachandar</li>
              </ul>
              </div>
              </div>
              <div className="profile_details">
              <div className="profile_achive">
              <h2 className="profile_knowledge">Achivement</h2>
              
              <ul>
              <li>saibalachandar</li>
              <li>saibalachandar</li>
              <li>saibalachandar</li>
              <li>saibalachandar</li>
              </ul>
              </div>
              <div className="profile_achive">
              <h2 className="profile_knowledge">Interest</h2>
              <ul>
              <li>saibalachandar</li>
              <li>saibalachandar</li>
              <li>saibalachandar</li>
              <li>saibalachandar</li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
