// >> Modules
import getVariable from '../../globalVariables';
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	outsideDiv: {
		width: '100%',
		position: 'relative',
		'z-index': '4',
		paddingBottom: '54px',

		'&:before': {
			content: "''",
			position: 'absolute',
			left: '-20%',
			top: '-100px',
			width: '140%',
			height: '2074px',
			borderRadius: '100%',
			//'z-index': '-3',

			background: 'rgba(18, 20, 22, 0.5)',
			border: '3px solid rgba(255, 255, 255, 0.1)',
			boxShadow:
				'0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 150px 15px rgba(255, 255, 255, 0.05)',
			backdropFilter: 'blur(75px)',
		},
	},

	insideDiv: {
		width: '90%',
		maxWidth: '1520px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '287px',
	},

	top: {
		position: 'relative',
	},

	bottom: {
		position: 'relative',
		display: 'flex',
		justifyContent: 'space-between',
		marginTop: '100px',
	},

	logo: {
		position: 'relative',
		width: '204px',
		height: 'auto',
		margin: '0 auto',
	},

	editBox: {
		position: 'relative',
		width: '480px',
		height: '48px',
		margin: '0 auto',
		marginTop: '55px',

		display: 'flex',
		gap: '12px',
	},

	input: {
		position: 'relative',
		width: '302px',
		height: '100%',

		borderRadius: '4px',
		background: '#17191a',

		'& input': {
			fontFamily: 'Inter',
			fontStyle: 'normal',
			fontWeight: '300',
			fontSize: '12px',
			lineHeight: '125%',
			color: '#ffffff',
			marginTop: '4px',
			padding: '12px 18px 10px 18px',
		},
	},

	button: {
		position: 'relative',
		width: 'calc(100% - 302px)',
		height: '100%',
	},

	rightBtn: {
		position: 'relative',
		width: '100%',
		height: '100%',

		background: '#5342C7',
		borderRadius: '6px',
		boxShadow: 'none',

		'& p': {
			fontFamily: 'Inter',
			fontStyle: 'normal',
			fontWeight: '300',
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

	bottomLeft: {
		'& p': {
			fontFamily: 'Inter',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '14px',
			lineHeight: '100%',
			letterSpacing: '-0.3px',
			color: '#FFFFFF',
		},
	},

	bottomRight: {
		position: 'relative',
		display: 'flex',
		gap: '46px',
	},

	oneBottomRight: {
		position: 'relative',

		'& p': {
			fontFamily: 'Inter',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '14px',
			lineHeight: '100%',
			color: '#FFFFFF',
		},

		'&:hover': {
			cursor: 'pointer',
		},
	},

	// >>>>>>>>>>>>>> Mobile
	// 800px
	['@media (max-width: 800px)']: {
		outsideDiv: {
			'&:before': {
				left: '-50%',
				width: '200%',
			},
		},
	},

	// 625px
	['@media (max-width: 625px)']: {
		bottom: {
			display: 'block',
		},

		bottomLeft: {
			width: '100%',
			textAlign: 'center',
		},

		bottomRight: {
			justifyContent: 'center',
			marginTop: '20px',
		},
	},

	// 600px
	['@media (max-width: 600px)']: {
		outsideDiv: {
			'&:before': {
				left: '-160%',
				width: '420%',
			},
		},
	},

	// 560px
	['@media (max-width: 560px)']: {
		editBox: {
			margin: '0 auto',
			marginTop: '55px',
			height: 'auto',
			display: 'block',
			width: '302px',
		},

		input: {
			width: '100%',
			height: '48px',
		},

		button: {
			width: '100%',
			height: '48px',
			marginTop: '12px',
		},
	},
});

export default useStyles;
