import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  const [login, setLogin] = useState(true);

  return (
    <div className="header">
      <div className="h50 d-flex my-auto align-items-center">
        <Link to="/" className="mx-5">
          Logo
        </Link>
        <Link to="/proposal" className="mx-5">
          提案
        </Link>
        <Link to="/allCase" className="mx-5">
          接案畫面
        </Link>
        {login || (
          <div className="d-flex ms-auto">
            <Link to="/login" className="mx-2">
              登入
            </Link>
            <Link to="/register" className="mx-2">
              註冊
            </Link>
          </div>
        )}
        {login && (
          <div className="dropdown ms-auto">
            <Link
              to="#"
              className="d-block link-dark text-decoration-none"
              id="dropdownUser2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="40"
                height="40"
                className="rounded-circle"
              />
            </Link>
            <ul
              className="dropdown-menu text-small shadow"
              aria-labelledby="dropdownUser2"
            >
              <li>
                <Link className="dropdown-item" to="/proposal">
                  提案
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/allCase">
                  接案畫面
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="#">
                  Profile
                </Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link
                  className="dropdown-item"
                  to="#"
                  onClick={() => setLogin(false)}
                >
                  登出
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
