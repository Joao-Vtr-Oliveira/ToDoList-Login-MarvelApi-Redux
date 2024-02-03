import Svg from './Svg';
import AnchorSvg from './AnchorSvg';
import { Box } from '@chakra-ui/react';

function Header() {
	return (
		<Box
			w='100vw'
			h='4rem'
			display='flex'
			alignItems='center'
			justifyContent='space-between'
			bg='customPurple'
		>
			<Box
				display='flex'
				alignItems='center'
				justifyContent='space-around'
				w='13rem'
			>
				<Svg type='home' _hover={{ textColor: 'white', fill: 'white' }} />
				<AnchorSvg type='github' />
				<AnchorSvg type='linkedin' />
				<AnchorSvg type='reddit' />
			</Box>
			<div>
				<Svg
					type='disconnect'
					_hover={{ textColor: 'red.400', fill: 'red.400' }}
				/>
			</div>
		</Box>
	);
}

export default Header;
