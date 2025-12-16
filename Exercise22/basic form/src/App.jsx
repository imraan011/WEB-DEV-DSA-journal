import React, { useState } from "react";
import Create from "./Components/Create";
import Render from "./Components/Render";
import { nanoid } from "nanoid";

const App = () => {
  const [todo, settodo] = useState([
    {
      id: nanoid(),
      title: "Learn React",
      status: false,
    },
    {
      id: nanoid(),
      title: "Learn JavaScript",
      status: false,
    },
  ]);

  // const [gender, setgender] = useState("female");
  // const [city, setcity] = useState("Amethi");
  

  return (
    <div>
      <Create todo={todo} settodo={settodo} />
      <Render todo={todo} settodo={settodo} />
    </div>
  );
};

export default App;
