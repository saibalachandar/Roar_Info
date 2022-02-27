import axios from "axios";
import React, { useContext, useState } from "react";
import {
  MdOutlineAddAPhoto,
  MdOutlineAccountCircle,
  MdMarkEmailRead,
  MdImportContacts,
  MdOutlineInsertEmoticon,
} from "react-icons/md";
import { AuthContext } from "../context/AuthContext";

import "./account.css";

export default function Account() {
  const { user, dispatch } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const [quotes, setQuotes] = useState("");

  const PF = "http://localhost:8000/images/";

  const handleAccount = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });

    const updateUser = {
      // userId: user._id,
      quotes,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updateUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (error) {
        console.log(error.message);
      }
    }
    try {
      const res = await axios.put("/users/" + user._id, updateUser);
      window.location.reload();
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (error) {
      console.log(error.message);
      dispatch({ type: "UPDATE_FAILURE" });
    }
  };
  console.log(file);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    window.location.replace("/login");
  };

  return (
    <div className="nothing">
      <div className="info_account">
        <form className="form_collection" onSubmit={handleAccount}>
          {/* <label>Account Picture</label> */}
          <div className="account_img">
            <img
              className="img_account"
              src={file ? URL.createObjectURL(file) : PF + user.profilePic}
              alt=""
            />

            <label htmlFor="fileinput">
              <MdOutlineAddAPhoto className="account_icon" />
            </label>
            <input
              type="file"
              id="fileinput"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>

          <label>
            <MdOutlineAccountCircle />
            UserName
          </label>

          <input
            className="account_input"
            autoFocus
            placeholder={user.username}
          />
          <label>
            <MdMarkEmailRead /> Email
          </label>
          <input
            className="account_input"
            type="text"
            placeholder={user.email}
          />
          <label>
            <MdImportContacts /> Degree
          </label>
          <input
            className="account_input"
            type="text"
            placeholder={user.degree}
          />
          <label>
            <MdOutlineInsertEmoticon /> Quotes
          </label>
          <input
            className="account_input"
            type="text"
            placeholder={user.quotes}
            onChange={(e) => setQuotes(e.target.value)}
          />
          <div className="btn">
            <button className="account_btn" onClick={handleLogout}>
              LogOut
            </button>
            <button className="account_btn" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
