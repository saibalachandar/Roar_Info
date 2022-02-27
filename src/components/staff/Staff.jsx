import React, { useEffect, useRef, useState } from "react";
import Card from "../card/Card";
import "./staff.css";
import axios from "axios";
import { init } from "ityped";
import { Link } from "react-router-dom";

export default function Staff() {
  const typed = useRef();
  const [staff, setStaff] = useState([]);
  useEffect(() => {
    const staffVisible = async () => {
      try {
        const res = await axios.get(`/users/?type=staff`);

        setStaff(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    staffVisible();
  }, []);

  useEffect(() => {
    init(typed.current, {
      showCursor: false,
      typeSpeed: 300,
      backDelay: 2500,
      disableBackTyping: true,
      strings: ["Techonlogy"],
    });
  }, []);
  return (
    <div>
      <h2 className="staff_title">
        Department of Information <span className="sai" ref={typed}></span>
      </h2>

      {staff.map((p) => (
        <Link className="link" to="/staff/staffId">
          <Card value={p} key={p._id} />
        </Link>
      ))}
    </div>
  );
}
