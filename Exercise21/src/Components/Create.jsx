import { useState } from "react";

const Create = (props) => {
  console.log(props);
  const user = props.user;
  const setuser = props.setuser;

  const [name, setname] = useState("");
  const [age, setage] = useState();
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const newuser = { name, age };
          console.log(newuser);
        }}
      >
        <input
          type="text"
          onChange={(e) => {
            setname(e.target.value);
          }}
          placeholder="Full name"
          value={name}
        />
        <input
          type="number"
          placeholder="age"
          onChange={(e) => {
            setage(e.target.value);
          }}
          value={age}
        />
        <br />
        <br />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Create;
