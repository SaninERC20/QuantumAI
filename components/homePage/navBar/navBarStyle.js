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
		maxWidth: '1514px',
		margin: '0 auto',
		position: 'relative',

		display: 'flex',
		justifyContent: 'space-between',
	},

	left: {
		position: 'relative',
	},

	center: {
		position: 'relative',

		display: 'flex',
		gap: '64px',
	},

	right: {
		position: 'relative',
	},

	logo: {
		position: 'relative',
		width: '204px',
		height: 'auto',
		marginTop: '41px',
	},

	oneCenterElement: {
		position: 'relative',
		marginTop: '52px',
		transition: 'opacity .5s',

		'& p': {
			fontFamily: 'Inter',
			fontStyle: 'normal',
			fontWeight: '500',
			fontSize: '16px',
			lineHeight: '23px',
			color: '#ffffff',
		},

		'&:hover': {
			cursor: 'pointer',
			opacity: '.8',
		},
	},

	rightButton: {
		position: 'relative',
		marginTop: '40px',
		width: '150px',
		height: '47px',
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

	// >>>>>>>>>>>>>> Mobile
	// 1150px
	['@media (max-width: 1150px)']: {
		center: {
			display: 'none',
		},
	},

	// 430px
	['@media (max-width: 430px)']: {
		logo: {
			width: '143px',
			marginTop: '20px',
		},

		rightButton: {
			marginTop: '17px',
			width: '105px',
			height: '40px',
		},

		rightBtn: {
			'& p': {
				fontSize: '12px',
			},
		},
	},
});

export default useStyles;
