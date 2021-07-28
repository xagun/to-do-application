import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/reducer";
import { GoPlus } from "react-icons/go";
import { motion } from "framer-motion";

const mapStateToProps = (state) => {
  return {
    todo: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodo(obj)),
  };
};

const Todo = (props) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const add = () => {
 if(todo === ""){
     alert("The to-do item is empty. Empty task is passed.")
 }
 else{
    props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
 }
  };

  console.log("props from store", props);

  return (
    <div className="addTodo">
      <input
        type="text"
        className="todo-input"
        onChange={(e) => handleChange(e)}
        value={todo}
      />
      <motion.button
      whileHover = {{scale: 1.1}}
      whileTap = {{scale:0.9}}
      className="add-btn" onClick={() => add()}>
        <GoPlus />
      </motion.button>
      <br />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todo);
