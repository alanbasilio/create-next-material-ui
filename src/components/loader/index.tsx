import ScaleLoader from 'react-spinners/ScaleLoader';
import { useTheme } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

// Loader Component
const Loader = (): JSX.Element => {
	const theme = useTheme();
	return (
		<Box width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
			<ScaleLoader color={theme.palette.primary.main} width={200} />
		</Box>
	);
};

export default Loader;
