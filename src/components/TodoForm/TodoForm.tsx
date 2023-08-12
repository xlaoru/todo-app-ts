import { useRef } from "react";

interface ITodoItem {
  id: number;
  title: string;
  body: string;
  completed: boolean;
}

interface ITodoProps {
  addTodoItem: (todo: ITodoItem) => void;
}

function TodoForm({ addTodoItem }: { addTodoItem: ITodoProps }) {
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLInputElement>(null);

  function submitNewTodoItem() {
    addTodoItem({
      id: new Date().getTime(),
      title: titleRef.current.value,
      body: bodyRef.current.value,
      completed: false
    });
  }

  return (
    <>
      <input type="text" ref={titleRef} />
      <input type="text" ref={bodyRef} />
      <button onClick={submitNewTodoItem}>Submit</button>
    </>
  );
}

export default TodoForm;
