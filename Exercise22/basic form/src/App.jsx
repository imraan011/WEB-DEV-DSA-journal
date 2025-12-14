import React, { useState } from "react";

const App = () => {
  // const [task, settask] = useState("");
  // const [todo, settodo] = useState([
  //   {
  //     title: "Learn React",
  //     status: false,
  //   },
  //   {
  //     title: "Learn JavaScript",
  //     status: false,
  //   },
  // ]);
  const [done, setdone] = useState(true);
  const [title, settitle] = useState("");
  const [gender, setgender] = useState("female");
  const [city, setcity] = useState("Amethi");

  return (
    <div>
      <h1>TO DO LIST</h1>
      <form action="">
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
          checked={done}
          type="checkbox"
          name=""
          id=""
          onChange={(e) => {
            setdone(e.target.checked);
          }}
        />
        Completed <br /> <br />
        <input
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
        Female <br />
        <br />
        <button>CREATE TODO</button>
      </form>
      <br />
      <br />
      <select
        value={city}
        name=""
        onChange={(e) => setcity(e.target.value)}
        id=""
      >
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Amethi">Amethi</option>
        <option value="Chanderiya">Chanderiya</option>
      </select>
    </div>
  );
};

export default App;
