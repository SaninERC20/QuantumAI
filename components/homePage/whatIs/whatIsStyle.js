// >> Modules
import getVariable from '../../globalVariables';
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	outsideDiv: {
		width: '100%',
		position: 'relative',
		'z-index': '4',

		'&:before': {
			content: "''",
			position: 'absolute',
			left: '-100vw',
			bottom: '6px',
			width: '300vw',
			height: '1px',

			background: 'rgba(255, 255, 255, 0.15)',
		},
	},

	insideDiv: {
		width: '90%',
		maxWidth: '1444px',
		margin: '0 auto',
		position: 'relative',

		marginTop: '127px',
	},

	top: {
		position: 'relative',
		width: '100%',
	},

	bottom: {
		position: 'relative',
		width: '100%',
		marginTop: '113px',
		'z-index': '-1',
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

	bottomButton: {
		position: 'relative',

		margin: '0 auto',
		marginTop: '32px',
		width: '150px',
		height: '47px',
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

	app: {
		position: 'relative',
		width: '100%',
		height: 'auto',
	},

	appBg: {
		position: 'absolute',
		width: '120%',
		height: 'auto',
		left: '50%',
		top: '35%',
		translate: '-50% -50%',
		'z-index': '-1',
	},

	// 700px
	['@media (max-width: 700px)']: {
		bottom: {
			marginTop: '40px',
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
