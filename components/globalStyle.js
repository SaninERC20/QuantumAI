// >> Modules
import { makeStyles } from '@mui/styles';
import getVariable from './globalVariables';

// >> Styling
const useGlobalStyles = makeStyles({
	container: {
		width: '100%',
		minHeight: '100vh',
		position: 'relative',
		overflow: 'hidden',
		background: '#121416',
		color: '#FFFFFF',
	},

	containerPrivacy: {
		width: '100%',
		position: 'relative',
		overflow: 'hidden',
		marginLeft: '50px',
		marginTop: '40px',
		paddingRight: '10%',
		paddingBottom: '40px',
		background: '#121416',
		color: '#FFFFFF',
	},

	image: {
		position: 'relative',
		layout: 'responsive',
		objectFit: 'contain',
		width: '100%',
		height: 'auto',
	},

	imageCover: {
		position: 'relative',
		layout: 'responsive',
		objectFit: 'cover',
		width: '100%',
		height: 'auto',
	},

	pageLoader: {
		width: '100%',
		height: '100%',
		position: 'fixed',
		background: '#121416',
		'z-index': '6',
		top: '0',
		left: '0',
		pointerEvents: 'none',
	},

	pageLoaderTransition: {
		transition: 'opacity .7s',
	},

	loading: {
		position: 'fixed',
		width: '160px',
		height: 'auto',
		left: '50%',
		top: '50%',
		transform: 'translate(-50%,-50%)',
	},
});

export default useGlobalStyles;
