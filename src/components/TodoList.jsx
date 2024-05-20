import TodoItem from "./TodoItem";

const TodoList = ({ todoList, setTodoList, todoIsDone }) => {
  const removeTodo = (id) => {
    return setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    return setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  return (
    <>
      <h2>{!todoIsDone ? "Work" : "Done"}</h2>
      <div style={{ display: "flex" }}>
        {todoList
          .filter((todo) => todo.isDone === todoIsDone)
          .map((todo) => {
            return (
              <div key={todo.id}>
                <TodoItem
                  todo={todo}
                  removeTodo={removeTodo}
                  toggleTodo={toggleTodo}
                />
              </div>
            );
          })}
      </div>
    </>
  );
};

export default TodoList;
