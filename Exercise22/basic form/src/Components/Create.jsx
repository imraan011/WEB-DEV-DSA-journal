import { nanoid } from "nanoid";

import { useState } from "react";

const Create = (props) => {
  const todo = props.todo;
  const settodo = props.settodo;
  const [status, setstatus] = useState(false);
  const [title, settitle] = useState("");
  const submithandler = (e) => {
    e.preventDefault();
    const newtodo = {
      id: nanoid(),
      title,
      status: false,
    };

    //simple way to add new todo
    // const copytodo = [...todo];
    // copytodo.push(newtodo);
    // settodo(copytodo);
    
    settodo([...todo, newtodo]);
    settitle("");
  };

  return (
    <div>
      <h1>TO DO LIST</h1>
      <form onSubmit={submithandler} action="">
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />
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

export default Create;
