import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <h1>투두리스트 타임어택</h1>
      <div>
        <TodoForm todoList={todoList} setTodoList={setTodoList} />
      </div>
      <div>
        <TodoList
          todoList={todoList}
          setTodoList={setTodoList}
          todoIsDone={false}
        />
        <TodoList
          todoList={todoList}
          setTodoList={setTodoList}
          todoIsDone={true}
        />
      </div>
    </>
  );
}
