import { useState } from "react";
import TodoList from "../TodoList/TodoList";
import TodoForm from "../TodoForm/TodoForm";

interface ITodoItem {
  id: number;
  title: string;
  body: string;
  completed: boolean;
}

function App() {
  const [todoList, setTodoList] = useState<ITodoItem[]>([
    {
      id: 1,
      title: "title 1",
      body: "body 1",
      completed: false
    },
    {
      id: 2,
      title: "title 2",
      body: "body 2",
      completed: true
    }
  ]);

  const addTodoItem = (todo: ITodoItem) => {
    setTodoList((prev) => [...prev, todo]);
  };

  const toggleTodoCompleted = (id: number) => {
    setTodoList(
      todoList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const removeTodoItem = (id: number) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <TodoList
        todoList={todoList}
        toggleTodoCompleted={toggleTodoCompleted}
        removeTodoItem={removeTodoItem}
      />
      <TodoForm addTodoItem={addTodoItem} />
    </>
  );
}

export default App;
