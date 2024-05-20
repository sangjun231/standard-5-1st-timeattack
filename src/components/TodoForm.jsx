import { useState } from "react";

const TodoForm = ({ todoList, setTodoList }) => {
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const addTodo = (submit) => {
    submit.preventDefault();

    const todo = {
      id: crypto.randomUUID(),
      title: newTitle,
      content: newContent,
      isDone: false,
    };

    if (newTitle === "" || newContent === "") {
      alert("값을 모두 입력하세요.");
      setNewTitle("");
      setNewContent("");
      return;
    }

    setTodoList([...todoList, todo]);
    setNewTitle("");
    setNewContent("");
  };

  return (
    <form onSubmit={addTodo}>
      제목:{" "}
      <input
        type="text"
        value={newTitle}
        onChange={(event) => {
          setNewTitle(event.target.value);
        }}
      />
      내용:{" "}
      <input
        type="text"
        value={newContent}
        onChange={(event) => {
          setNewContent(event.target.value);
        }}
      />
      <button>추가</button>
    </form>
  );
};

export default TodoForm;
