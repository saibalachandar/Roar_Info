import React, { useContext, useState } from "react";
import "./navBar.css";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function NavBar() {
  const [open, setsOpen] = useState(false);

  const { user } = useContext(AuthContext);
  const PF = "http://localhost:8000/images/";
  // const { isAdmin } = useContext(AuthContext);
  // console.log(user);
  return (
    // <section>
    <nav className="nav">
      <h2 className="nav_brand">
        Roar<span>Info</span>
      </h2>
      <ul className="nav_bar">
        <Link className="link" to="/">
          <li className="nav_link">Home</li>
        </Link>
        <Link className="link" to="/staff">
          <li className="nav_link">Staff</li>
        </Link>
        <Link className="link" to="/student">
          <li className="nav_link">Student</li>
        </Link>
        {user && (
          <Link className="link" to="/clubactivity">
            <li className="nav_link">ClubActivity</li>
          </Link>
        )}

        {user && (
          <Link className="link" to="/clubwrite">
            <li className="nav_link">Write</li>
          </Link>
        )}
      </ul>

      {user ? (
        <ul className="nav_bar">
          <Link className="link" to={`/account/${user._id}`}>
            <img
              className="nav_profile nav_link"
              src={PF + user.profilePic}
              alt=""
            />
          </Link>
          <Link className="link" to="/profileInfo">
            <li className="nav_link">ProfileInfo</li>
          </Link>
        </ul>
      ) : (
        <ul className="nav_account">
          <Link className="link" to="/login">
            <li className="nav_link">Login</li>
          </Link>
          <Link className="link" to="/register">
            <li className="nav_link">Register</li>
          </Link>
        </ul>
      )}
      {/* </nav> */}
      <div className="nav_menu" onClick={() => setsOpen(!open)}>
        <HiMenuAlt3 className="navbar_menu" />
      </div>
      <ul
        onClick={() => setsOpen(false)}
        className="menu"
        style={{ right: open ? "0px" : "-50vw" }}
      >
        <div className="menu_bar">
          <Link className="link" to="/">
            <li className="menu_link">Home</li>
          </Link>
          <Link className="link" to="/staff">
            <li className="menu_link">Staff</li>
          </Link>
          <Link className="link" to="/student">
            <li className="menu_link">Student</li>
          </Link>
          <Link className="link" to="/clubactivity">
            <li className="menu_link">ClubActivity</li>
          </Link>
          {user && (
            <Link className="link" to="/clubwrite">
              <li className="menu_link">Write</li>
            </Link>
          )}
          {!user && (
            <Link className="link" to="/login">
              <li className="menu_link">Login</li>
            </Link>
          )}
          {user && (
            <Link className="link" to="/register">
              <li className="menu_link">Register</li>
            </Link>
          )}

          <div className="menu_block">
            {user ? (
              <ul className="nav_bar">
                <Link className="link" to="/account">
                  <img
                    className="menu_account  nav_link"
                    src="https://www.mofatechno.com/saibala.6b98a604.webp"
                    alt=""
                  />
                </Link>
              </ul>
            ) : (
              <ul className="nav_account">
                <Link className="link" to="/login">
                  <li className="nav_link">Login</li>
                </Link>
                <Link className="link" to="/register">
                  <li className="nav_link">Register</li>
                </Link>
              </ul>
            )}
          </div>
        </div>
      </ul>
    </nav>
    // </section>
  );
}
