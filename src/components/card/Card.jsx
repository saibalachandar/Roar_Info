import React from "react";
import "./card.css";

import { MdVerified } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Card({ value }) {
  const PF = "http://localhost:8000/images/";
  return (
    <section className="card">
      <Link className="link" to={`/profileCard/${value._id}`}>
        <div className="card_container">
          <div className="badge">
            {value.profilePic && (
              <img className="card_img" src={PF + value.profilePic} alt="" />
            )}

            <MdVerified className="icon" />
          </div>

          <div className="card_title">
            <h3 className="card_name">
              {value.username}
              <span className="card_deg"> {value.degree}</span>
            </h3>

            <p className="card_des">{value.quotes}</p>
          </div>
        </div>
      </Link>
    </section>
  );
}
