import React, { useState } from "react";
import TodoItem from "./TodoItem";
import { TodoType } from "../../types/TodoType";
import SessionCheckHOC from "../../requests/SessionCheckHOC";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Flex,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { LoginType } from "../../store/reducer/LoginType";

const TodoList: React.FC = () => {
  const name = useSelector((state: LoginType) => state.login.data?.user.name);

  const [todos, setTodos] = useState<TodoType[]>([]);
  const [inputValue, setInputValue] = useState("");

  const addTodo = (text: string) => {
    const newTodo: TodoType = { id: todos.length, text };
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && inputValue) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  const handleAddClick = () => {
    if (inputValue) {
      addTodo(inputValue);
      setInputValue("");
    }
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <Flex align="center" justifyContent="center" height="full" width="full">
      <Card className="w-4/5 xl:w-2/5">
        <CardHeader textAlign="center">
          <Heading>Olá {name || "!"}</Heading>
        </CardHeader>
        <CardBody textAlign="center">
          <Input
            value={inputValue}
            onChange={handleOnChange}
            placeholder="Digite a tarefa"
            onKeyDown={handleKeyPress}
            className="mb-5"
            color="black"
          />
          <Button
            onClick={handleAddClick}
            className={"mb-10 w-2/4"}
            isDisabled={!!!inputValue}
          >
            Adicionar
          </Button>
          {todos.map((todo) => (
            <div key={todo.id} className="flex p-1 w-full">
              <TodoItem key={todo.id} todo={todo} />
              <Button onClick={() => removeTodo(todo.id)}>Apagar</Button>
            </div>
          ))}
        </CardBody>
      </Card>
    </Flex>
  );
};

export default SessionCheckHOC(TodoList);