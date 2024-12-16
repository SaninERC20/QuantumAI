// >> Modules
import getVariable from '../../globalVariables';
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	outsideDiv: {
		width: '100%',
		position: 'relative',
		'z-index': '4',
	},

	insideDiv: {
		width: '90%',
		maxWidth: '1444px',
		margin: '0 auto',
		position: 'relative',

		marginTop: '114px',
	},

	top: {
		position: 'relative',
		width: '100%',
	},

	title: {
		position: 'relative',
		width: '100%',
		textAlign: 'center',
		margin: '0 auto',

		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '48px',
		lineHeight: '156%',
		color: '#ffffff',
	},

	desc: {
		position: 'relative',
		maxWidth: '580px',
		textAlign: 'center',
		margin: '0 auto',
		marginTop: '32px',

		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '20px',
		lineHeight: '150%',
		color: '#BDBDBD',
	},

	boldTitle: {
		fontWeight: '600',
	},
	bottomButtons: {
		position: 'relative',

		margin: '0 auto',
		marginTop: '32px',
		width: '281px',
		height: '47px',
		display: 'flex',
		gap: '16px',
	},

	bottomButton: {
		position: 'relative',
		width: '132px',
		height: '100%',
	},

	btn: {
		position: 'relative',
		width: '100%',
		height: '100%',

		background: '#5342C7',
		borderRadius: '6px',
		boxShadow: 'none',

		'& p': {
			fontFamily: 'Inter',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '16px',
			lineHeight: '100%',
			color: '#ffffff',
			textTransform: 'none',
		},

		'& span': {
			color: '#ffffff',
		},

		'&:hover': {
			background: '#5342C7',
			boxShadow: 'none',
		},
	},

	// 430px
	['@media (max-width: 430px)']: {
		title: {
			fontSize: '28px',
		},

		desc: {
			fontSize: '16px',
		},
	},
});

export default useStyles;
