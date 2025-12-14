import React, { useState } from "react";
import Create from "./Components/Create";
import Render from "./Components/Render";

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

  
  // const [gender, setgender] = useState("female");
  // const [city, setcity] = useState("Amethi");

  
  return (
    <div>
      <Create todo={todo} settodo={settodo} />
      <Render todo={todo} settodo={settodo}/>
    </div>
  );
};

export default App;
