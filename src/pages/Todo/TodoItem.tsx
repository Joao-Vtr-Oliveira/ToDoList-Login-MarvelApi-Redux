import { useState } from 'react';
import { TodoType } from '../../types/TodoType';
import { Box, Checkbox, Text } from '@chakra-ui/react';

type TodoItemProps = {
	todo: TodoType;
};

function TodoItem({ todo }: TodoItemProps) {
	const [checked, setChecked] = useState(false);

	return (
		<Box
			textColor='grat.500'
			w='100%'
			h='auto'
			fontFamily='monospace'
			fontSize='1.125rem'
			lineHeight='1.75rem'
			display='flex'
			alignItems='center'
		>
			<Checkbox
				defaultChecked={checked}
				onChange={() => setChecked(!checked)}
				colorScheme='purple'
				marginLeft='0.75rem'
				marginRight='0.75rem'
				h='1.5rem'
				w='1.5rem'
			/>
			<Text
				as='span'
				style={
					checked
						? {
								color: '#570FA0',
								textDecorationLine: 'line-through',
								fontWeight: 700,
						  }
						: { textDecorationLine: 'none' }
				}
			>
				{todo.text}
			</Text>
		</Box>
	);
}

export default TodoItem;