import React from "react";
import { useRef } from "react";

import { AiFillEdit } from "react-icons/ai";
import { GiCheckMark } from "react-icons/gi";
import { AiFillDelete } from "react-icons/ai";
import { motion } from "framer-motion";

const TodoItem = (props) => {
  const { item, updateTodo, removeTodo, completedTodo } = props;

  const inputRef = useRef(true);
  const changeFocus = () => {
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const update = (id, value, e) => {
    if (e.which === 13) {
      updateTodo({ id, item: value });
      inputRef.current.disabled = true;
    }
  };

  return (
    <motion.li
      initial={{
        x: "150vw",
        transition: { type: "spring", duration: 1.5 },
      }}
      animate={{ x: 0, transition: { type: "spring", duration: 1.5 } }}
      whileHover={{ scale: 0.9, transition: { type: "spring", duration: 1 } }}
      exit={{
        x: "-60vw",
        scale: [1, 0],
        transition: { type: "spring", duration: 1 },
        backgroundColor: "rgba(62, 13, 126, 0.849)"
      }}
      key={item.id}
      className="card"
    >
      <textarea
        ref={inputRef}
        disabled={inputRef}
        defaultValue={item.item}
        onKeyPress={(e) => update(item.id, inputRef.current.value, e)}
      />
      <div className="btns">
        <motion.button
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => changeFocus()}
        >
          <AiFillEdit />
        </motion.button>
        {item.completed === false && (
          <motion.button
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: "green" }}
            onClick={() => completedTodo(item.id)}
          >
            <GiCheckMark />
          </motion.button>
        )}

        <motion.button
          whileHover={{ scale: 1.3 }}
          whileTap={{ scale: 0.9 }}
          style={{ color: "red" }}
          onClick={() => removeTodo(item.id)}
        >
          <AiFillDelete />
        </motion.button>
      </div>
      {item.completed && <span className="completed">Done</span>}
    </motion.li>
  );
};

export default TodoItem;
