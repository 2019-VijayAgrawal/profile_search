import React, { useEffect, useState } from "react";
import "./page.css";

const Page = () => {
  // const{email,first_name,last_name,avatar} = props.users;
  const [id, setId] = useState("");
  const [list, setList] = useState([]);
  const [loading, setLaoding] = useState(false);
  const [error, setError] = useState(false);
  const [msg, setMessage] = useState("");
  const [click, setClick] = useState(false);

  function handler(e) {
    e.preventDefault();
    setClick(true);

    fetch(`https://reqres.in/api/users/${id}`)
      .then((res) => {
        // console.log(res.json());
        if (res.status >= 400) {
          throw new Error("Server responds with error!");
        }
        res.json().then((result) => {
          setList(result.data);
          setError(false);
          setLaoding(false);
          //console.log(result);
        });
      })
      .catch((err) => {
        setError(true);
        setLaoding(true);
        setMessage(err.message);
      });
  }

  return (
    <>
      <div className="main-content">
        {click ? (
          error && loading ? (
            <div className="right-only">
            <h1>Search User Profile</h1>
              <input
                type="number"
                value={id}
                onChange={(e) => {
                  setId(e.target.value);
                  if (e.target.value == "") {
                    setClick(false);
                    setId("");
                  }
                }}
                required
              />
              <br/>
              <button disabled={!id} onClick={handler}>
                Submit
              </button>
              <h3 style={{ color: "red", marginTop: "7rem" }}>{msg}</h3>
            </div>
          )
           :
            (
            <div className="main-content">
              <div className="left">
                <img src={list.avatar} alt="profile_pic" />

                <div className="line"></div>
                <h2 style={{ color: "yellow" }}>Name </h2>
                <h4>
                  {list.first_name} {list.last_name}
                </h4>
                <div className="line"></div>
                <br />
                <h2 style={{ color: "yellow" }}>Email</h2>
                <p> {list.email}</p>
                <div className="line"></div>
                <h2 style={{ color: "yellow" }}>Description :</h2>
                <p>
                  This is the{" "}
                  <span style={{ color: "red" }}>
                    {list.first_name} {list.last_name}
                  </span>{" "}
                  profiles
                </p>
              </div>
              <div className="right">
                <h1>Search User Profile</h1>
                <input
                  type="number"
                  value={id}
                  onChange={(e) => {
                    setId(e.target.value);
                    if (e.target.value === "") {
                  setClick(false);
                  setId("");
                }
                  }}
                />
                   <br/>
                <button disabled={!id} onClick={handler}>
                  Submit
                </button>
              </div>
            </div>
          )
        ) : (
          <div className="right-only">
            <h1>Search User Profile</h1>
            <input
              type="number"
              value={id}
              onChange={(e) => {
                setId(e.target.value);
                if (e.target.value === "") {
                  setClick(false);
                  setId("");
                }
              }}
            />
             <br/>
            <button disabled={!id} onClick={handler}>
              Submit
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
