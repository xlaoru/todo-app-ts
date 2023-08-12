interface ITodoItem {
  id: number;
  title: string;
  body: string;
  completed: boolean;
}

function TodoItem({
  todoItem,
  toggleTodoCompleted,
  removeTodoItem
}: {
  todoItem: ITodoItem;
  toggleTodoCompleted: (id: number) => void;
  removeTodoItem: (id: number) => void;
}) {
  return (
    <div>
      <input
        type="checkbox"
        checked={todoItem.completed}
        onChange={() => toggleTodoCompleted(todoItem.id)}
      />
      {todoItem.title}
      {todoItem.body}
      <button onClick={() => removeTodoItem(todoItem.id)}>Remove</button>
    </div>
  );
}

export default TodoItem;
