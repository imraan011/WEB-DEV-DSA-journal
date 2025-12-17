import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";

const Create = (props) => {
  const todo = props.todo;
  const settodo = props.settodo;

  const [title, settitle] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
    const newtodo = {
      id: nanoid(),
      text: title,
      completed: false,
    };
    console.log(newtodo);
    settitle("");
    settodo([...todo, newtodo]);
  };

  return (
    <>
      <form action="" onSubmit={submithandler}>
        <h1 className="text-4xl text-stone-700 tracking-tight justify-center text-center font-bold uppercase">
          Your To Do
        </h1>
        <br />
        <div className="flex w-full justify-between">
          <input
            type="text"
            className=" text-2xl w-full  outline-0 border-b-2"
            value={title}
            placeholder="hello"
            onChange={(e) => settitle(e.target.value)}
            name=""
            id=""
          />
          <button className="transition duration-200 active:scale-90 ease-out">
            <i className="ri-add-box-fill text-4xl"></i>
          </button>
        </div>
        <br />
      </form>
    </>
  );
};

export default Create;
