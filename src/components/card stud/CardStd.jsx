import React, { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

import axios from "axios";
import Card from "../card/Card";

export default function CardStd() {
  const [std, setStd] = useState([]);

  const { search } = useLocation();

  useEffect(() => {
    const fatchStd = async () => {
      const res = await axios.get(`/users/${search}`);

      setStd(res.data);
    };
    fatchStd();
  }, [search]);

  return (
    <div>
      {std.map((v) => (
        <Card value={v} key={v._id} />
      ))}
    </div>
  );
}
