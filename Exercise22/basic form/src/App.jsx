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
    </div>
  );
};

export default App;
