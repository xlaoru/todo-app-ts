import TodoItem from "../TodoItem/TodoItem";

interface ITodoItem {
  id: number;
  title: string;
  body: string;
  dompleted: boolean;
}

function TodoList({
  todoList,
  toggleTodoCompleted,
  removeTodoItem
}: {
  todoList: ITodoItem[];
  toggleTodoCompleted: (id: number) => void;
  removeTodoItem: (id: number) => void;
}) {
  return (
    <>
      {todoList.map((todoItem: ITodoItem, index: number) => (
        <TodoItem
          key={index}
          todoItem={todoItem}
          toggleTodoCompleted={toggleTodoCompleted}
          removeTodoItem={removeTodoItem}
        />
      ))}
    </>
  );
}

export default TodoList;
