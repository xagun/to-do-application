import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodo,
  completedTodo,
  removeTodo,
  updateTodo,
} from "../redux/reducer";
import TodoItem from "./TodoItem";

const mapStateToProps = (state) => {
  return {
    todo: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodo(obj)),
    removeTodo: (id) => dispatch(removeTodo(id)),
    updateTodo: (obj) => dispatch(updateTodo(obj)),
    completedTodo: (id) => dispatch(completedTodo(id)),
  };
};

const DisplayTodo = (props) => {
  const [sort, setSort] = useState("active");
  return (
    <div className="displayTodo">
      <div className="buttons">
        <motion.button
        whileHover = {{scale:1.1}}
        whileTap = {{scale:0.9}} onClick={() => setSort("active")}>Active</motion.button>
        <motion.button
        whileHover = {{scale:1.1}}
        whileTap = {{scale:0.9}} onClick={() => setSort("completed")}>Completed</motion.button>
        <motion.button
        whileHover = {{scale:1.1}}
        whileTap = {{scale:0.9}} onClick={() => setSort("all")}>All</motion.button>
      </div>
      <ul>
     <AnimatePresence>
     {props.todo.length > 0 && sort === "active"
          ? props.todo.map((item) => {
              return (
                item.completed === false && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completedTodo={props.completedTodo}
                  />
                )
              );
            })
          : null}
        {/* for all tasks */}
        {props.todo.length > 0 && sort === "all"
          ? props.todo.map((item) => {
              return (
                <TodoItem
                  key={item.id}
                  item={item}
                  removeTodo={props.removeTodo}
                  updateTodo={props.updateTodo}
                  completedTodo={props.completedTodo}
                />
              );
            })
          : null}

        {/* for completed tasks */}

        {props.todo.length > 0 && sort === "completed"
          ? props.todo.map((item) => {
              return (
                item.completed === true && (
                  <TodoItem
                    key={item.id}
                    item={item}
                    removeTodo={props.removeTodo}
                    updateTodo={props.updateTodo}
                    completedTodo={props.completedTodo}
                  />
                )
              );
            })
          : null}
     </AnimatePresence>
      </ul>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayTodo);
