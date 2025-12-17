import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import Render from "./Components/Render.jsx";
import Create from "./Components/Create.jsx";

const App = () => {
  const [todo, settodo] = useState([
    {
      id: nanoid(),
      text: "Learn React",
      completed: false,
    },
  ]);

  return (
    <div className="bg-gray-300 h-screen w-screen absolute">
      <div className="h-4/5 w-1/3 relative bg-white rounded-3xl    mt-15 py-8 px-8 left-1/3">
        <Create todo={todo} settodo={settodo} />
        <div className="flex-1 overflow-hidden mt-4">
        <Render todo={todo} settodo={settodo} />
        </div>
      </div>
    </div>
  );
};

export default App;
