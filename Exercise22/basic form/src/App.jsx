import React, { useState } from "react";
import { nanoid } from "nanoid";

const App = () => {
  const [todo, settodo] = useState([
    {
      id: 1,
      title: "Learn React",
      status: false,
    },
    {
      id: 2,
      title: "Learn JavaScript",
      status: false,
    },
  ]);

  const [status, setstatus] = useState(false);
  const [title, settitle] = useState("");
  // const [gender, setgender] = useState("female");
  // const [city, setcity] = useState("Amethi");

  const submithandler = (e) => {
    e.preventDefault();
    const newtodo = {
      id: nanoid(),
      title,
      status: false,
    };
    console.log(newtodo);
  };

  return (
    <div>
      <h1>TO DO LIST</h1>
      <form onSubmit={submithandler} action="">
        <input
          type="text"
          placeholder="title"
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />{" "}
        <br />
        <br />
        <input
          checked={status}
          type="checkbox"
          name=""
          id=""
          onChange={(e) => {
            setstatus(e.target.checked);
          }}
        />
        Completed <br /> <br />
        {/* <input
          type="radio"
          name=""
          id=""
          onChange={(e) => {
            setgender(e.target.value);
          }}
          checked={gender == "male" && true}
        />{" "}
        Male
        <input
          type="radio"
          name=""
          id=""
          onChange={(e) => setgender(e.target.value)}
          checked={gender == "female" && true}
        />
        Female <br /> */}
        <br />
        <button>CREATE TODO</button>
      </form>
      <br />
      <br />
      {/* <select
        value={city}
        name=""
        onChange={(e) => setcity(e.target.value)}
        id=""
      >
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Amethi">Amethi</option>
        <option value="Chanderiya">Chanderiya</option>
      </select> */}
    </div>
  );
};

export default App;
