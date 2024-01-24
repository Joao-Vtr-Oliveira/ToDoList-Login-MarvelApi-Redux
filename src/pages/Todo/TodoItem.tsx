import { useState } from "react";
import { TodoType } from "../../types/TodoType";
import { Checkbox } from "@chakra-ui/react";

type TodoItemProps = {
  todo: TodoType;
};

function TodoItem({ todo }: TodoItemProps) {
  const [checked, setChecked] = useState(false);

  return (
    <div className="text-gray-500 w-full h-auto font-mono text-lg flex items-center">
      <Checkbox
        defaultChecked={checked}
        onChange={() => setChecked(!checked)}
        colorScheme="purple"
        className="ml-3 mr-3 h-6 w-6"
      />
      <span
        className={
          checked ? "line-through text-custom-purple font-bold" : "no-underline"
        }
      >
        {todo.text}
      </span>
    </div>
  );
}

export default TodoItem;