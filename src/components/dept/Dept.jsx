import React from "react";
import "./dept.css";
import { Link } from "react-router-dom";

export default function Dept() {
  return (
    <div>
      <div className="dept">
        <div>
          <Link className="link" to={"/CardStd?type=2Year"}>
            <div className="year">
              <div className="img">
                <picture>
                  <img
                    className="year__img"
                    src="https://cdn.pixabay.com/photo/2018/06/19/10/01/internet-3484137_1280.jpg"
                    alt="team"
                  />
                </picture>
              </div>
              <div className="year__info">
                <h3 className="year__name">
                  <span>2</span>year
                </h3>

                <p className="year__thought">
                  Work Hard Dream Big, Let's Go Visit
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link className="link" to={"/CardStd?type=3Year"}>
            <div className="year">
              <div className="img">
                <picture>
                  <img
                    className="year__img"
                    src="https://cdn.pixabay.com/photo/2018/06/19/10/01/internet-3484137_1280.jpg"
                    alt="team"
                  />
                </picture>
              </div>
              <div className="year__info">
                <h3 className="year__name">
                  <span>3</span>year
                </h3>

                <p className="year__thought">
                  Work Hard Dream Big, Let's Go Visit
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link className="link" to={"/CardStd?type=finalYear"}>
            <div className="year">
              <div className="img">
                <picture>
                  <img
                    className="year__img"
                    src="https://cdn.pixabay.com/photo/2018/06/19/10/01/internet-3484137_1280.jpg"
                    alt="team"
                  />
                </picture>
              </div>
              <div className="year__info">
                <h3 className="year__name">
                  <span>final</span>year
                </h3>

                <p className="year__thought">
                  Work Hard Dream Big, Let's Go Visit
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
