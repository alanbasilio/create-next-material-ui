import ScaleLoader from 'react-spinners/ScaleLoader';
import { Box } from '@material-ui/core';

import theme from '~/config/theme';

//Loader Component
const Loader = (): JSX.Element => {
	return (
		<Box width={'100%'} height={'100%'} display="flex" alignItems="center" justifyContent="center">
			<ScaleLoader color={theme.palette.primary.main} width={200} />
		</Box>
	);
};

export default Loader;
