"use client";
import React, { useState } from "react";

const page = () => {
  const [task, setTask] = useState("")
  const [desc, setDesc] = useState("")
  const [main, setMain] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault();
    setMain([...main,{task,desc}])
    setTask("")
    setDesc("")
    console.log(main)
  }
   
  const deleteHandler = (i) => {
    let copyTask = [...main];
    copyTask.splice(i,1);
    setMain(copyTask)
  }


  let renderTask = <h2>No task Available</h2>
  if(main.length>0){
    renderTask = main.map((t, i) => {
      return (
        <li key={i} className="flex items-center justify-between mb-5">
          <div className="flex items-center justify-between mb-5 w-3/4">
            <h4 className="text-2xl font-semibold">{t.task}</h4>
            <h6 className="text-lg font-medium">{t.desc}</h6>
          </div>
          <button 
          onClick={()=>{
            deleteHandler(i)
          }}
          className="font-bold px-1 bg-red-600  text-white rounded border-2 border-zinc-700">X</button>
        </li>
      );
    });
  }
  return (
    <>
      <h1 className=" text-center text-3xl bg-black  font-bold text-red-500 h-18">
        My TodoList
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter Task"
          className="m-8 w-2/6 px-4 py-2 border-2 text-2xl border-zinc-700 "
          value={task}
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter description"
          className="m-8 w-2/6 px-4 py-2 border-2 text-2xl border-zinc-700 "
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button
          className="bg-blue-500 text-white font-bold rounded-md border-2
         border-zinc-700 px-4 py-3 m-5"
        >
          Add Task
        </button>
      </form>
      <hr />
      <div className="p-8 bg-slate-300">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
