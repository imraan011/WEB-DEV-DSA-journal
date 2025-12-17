import React from "react";

const Render = (props) => {
  const todo = props.todo;
  const settodo = props.settodo;

  const render = todo.map((e) => {
    return (
      <div className="bg-amber-200 mb-2 p-1 px-4" key={e.id}>
        {e.text}
      </div>
    );
  });
  return (
    <div>
      <h1>{render}</h1>
    </div>
  );
};

export default Render;
