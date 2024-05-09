import React from "react";

const Header = ({ item }) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
    window.location = "/";
  };
  return (
    <div className="navbar bg-base-100 flex flex-col justify-center items-center  ">
      <div>
        <h1>
          <a href="/" className="btn btn-ghost text-3xl hover:text-blue-500">
            Swordmaster Youngest Son
          </a>
        </h1>
      </div>
      <div>
        <div className="flex flex-row child:m-5 justify-center items-center">
          <details>
            <summary className=" hover:text-blue-500">Navigate</summary>
            <ul className="p-2 bg-base-100 rounded-t-none child-hover:text-blue-400 child-hover:scale-105">
              <li>
                <a href="/">Homepage</a>
              </li>
              <li>
                <a href="/Contact">Contact</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              {!item && (
                <li>
                  {" "}
                  <a href="/admin">Admin Login</a>
                </li>
              )}
              {item && (
                <li>
                  <a href="/addchapter">Addchapter</a>
                </li>
              )}

              {item && (
                <li>
                  <button
                    className="p-3 m-5 bg-red-500 rounded-md text-white hover:scale-105"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </details>
        </div>
      </div>
    </div>
  );
};

export default Header;
