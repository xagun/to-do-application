
import './css/style.css';
import Todo from "./components/Todo";
import DisplayTodo from "./components/DisplayTodo";

import { motion } from "framer-motion";

function App() {
  return (
    <div className="App">
      <motion.h1
      initial = {{x: -200}}
      animate = {{x: 0}}
      transition = {{type: "spring", duration: 1}}
      whileHover = {{ scale: 1.1}}>To Do List Application</motion.h1>
 <motion.div
       initial = {{y: 1000}}
       animate = {{y: 0}}
       transition = {{type: "spring", duration: 1.5}}
     >
 <Todo />
 <DisplayTodo />
 </motion.div>
    </div>
  );
}

export default App;
