import React, { useState } from "react";
import axios from "axios";

function Randomuser() {
  const [userList, setUserList] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const HandleChange = (event) => {
    if (event.target.id === "female") {
      setFilterData(
        userList.filter((user) => {
          return user.gender === "female";
        })
      );
    } else if (event.target.id === "male") {
      setFilterData(
        userList.filter((user) => {
          return user.gender === "male";
        })
      );
    } else {
      setFilterData(userList);
    }
  };

  const GetRandomUsers = () => {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then((res) => {
        setUserList(res.data.results);
        setFilterData(res.data.results);
      })
      .catch((err) => {
        alert("something went wrong");
        console.log(err);
      });
  };
  return (
    <>
      <div>
        <h1>User List</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero iste
          itaque magnam quisquam optio at nemo a, mollitia ea iure vitae ut
          alias voluptatibus dignissimos? Nostrum provident, expedita placeat
          explicabo, laboriosam nulla illo ipsa ad harum accusantium ipsam rem
          beatae. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
          dignissimos pariatur ad dolore omnis, beatae qui molestias voluptas
          neque animi!
        </p>
        <button onClick={GetRandomUsers}>Get Users</button>
        {userList.length > 0 && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <div>
              <input
                type="radio"
                name="gender"
                id="all"
                onChange={HandleChange}
              />
              All
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                id="male"
                onChange={HandleChange}
              />
              Male
            </div>
            <div>
              <input
                type="radio"
                name="gender"
                id="female"
                onChange={HandleChange}
              />
              Female
            </div>
          </div>
        )}
      </div>
      <div>
        {filterData.length > 0 ? (
          <table
            frame="box"
            rules="all"
            cellPadding={10}
            width={1000}
            style={{
              textAlign: "center",
              margin: "10px auto",
            }}
          >
            <thead>
              <tr>
                <td>IMAGE</td>
                <td>NAME</td>
                <td>GENDER</td>
                <td>EMAIL</td>
              </tr>
            </thead>
            <tbody>
              {filterData.map((user, index) => {
                return (
                  <tr key={index}>
                    <th>
                      <img src={user.picture.medium} alt="userimage" />
                    </th>
                    <th>
                      {user.name.first}
                      {user.name.last}
                    </th>
                    <th>{user.gender}</th>
                    <th>{user.email}</th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        ) : (
          <h4>No User found</h4>
        )}
      </div>
    </>
  );
}

export default Randomuser;
