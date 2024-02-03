import React, { useState } from 'react';
import TodoItem from './TodoItem';
import { TodoType } from '../../types/TodoType';
import SessionCheckHOC from '../../requests/SessionCheckHOC';
import {
  Box,
	Button,
	Card,
	CardBody,
	CardHeader,
	Flex,
	Heading,
	Input,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { LoginType } from '../../store/reducer/LoginType';

const TodoList: React.FC = () => {
	const name = useSelector((state: LoginType) => state.login.data?.user.name);

	const [todos, setTodos] = useState<TodoType[]>([]);
	const [inputValue, setInputValue] = useState('');

	const addTodo = (text: string) => {
		const newTodo: TodoType = { id: todos.length, text };
		setTodos([...todos, newTodo]);
	};

	const removeTodo = (id: number) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && inputValue) {
			addTodo(inputValue);
			setInputValue('');
		}
	};

	const handleAddClick = () => {
		if (inputValue) {
			addTodo(inputValue);
			setInputValue('');
		}
	};

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};

	return (
		<Flex align='center' justifyContent='center' height='full' width='full'>
			<Card w={['80%', '80%', '80%', '80%', '40%']}>
				<CardHeader textAlign='center'>
					<Heading>Olá {name || '!'}</Heading>
				</CardHeader>
				<CardBody textAlign='center'>
					<Input
						value={inputValue}
						onChange={handleOnChange}
						placeholder='Digite a tarefa'
						onKeyDown={handleKeyPress}
						mb='1.25rem'
						color='black'
					/>
          <Button
            onClick={handleAddClick}
            mb='2.25rem'
            w='50%'
            isDisabled={!!!inputValue}
          >
						Adicionar
					</Button>
					{todos.map((todo) => (
            <Box key={todo.id} display='flex' p='0.25rem' w='100%'>
							<TodoItem key={todo.id} todo={todo} />
							<Button onClick={() => removeTodo(todo.id)}>Apagar</Button>
						</Box>
					))}
				</CardBody>
			</Card>
		</Flex>
	);
};

export default SessionCheckHOC(TodoList);
