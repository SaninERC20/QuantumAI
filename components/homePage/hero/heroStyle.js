// >> Modules
import getVariable from '../../globalVariables';
import { makeStyles } from '@mui/styles';

// >> Images
import bgClouds from '../../../public/bgClouds.png';

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
		alignItems: 'flex-start',
		marginTop: '175px',
	},

	left: {
		position: 'relative',
	},

	right: {
		position: 'relative',
		width: '651px',
		background: '#1D1F20',
		borderRadius: '15px',
		padding: '20px 17px',
		marginTop: '37px',
	},

	title: {
		position: 'relative',
		maxWidth: '770px',

		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '62px',
		lineHeight: '121%',
		color: '#ffffff',
	},

	desc: {
		position: 'relative',
		maxWidth: '720px',
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
		marginTop: '21px',

		display: 'flex',
		gap: '18px',
	},

	oneButton: {
		position: 'relative',
		width: '150px',
		height: '47px',
	},

	leftBtn: {
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

	rightBtn: {
		position: 'relative',
		width: '100%',
		height: '100%',

		background: '#27292D',
		border: '1px solid rgba(255, 255, 255, 0.15)',
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
			background: '#27292D',
			boxShadow: 'none',
		},
	},

	rightButtons: {
		position: 'relative',
		display: 'flex',
		gap: '12px',
		marginTop: '24px',
	},

	rightButton: {
		position: 'relative',
		width: '180px',
		height: '53px',
	},

	button1: {
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
			fontSize: '18px',
			lineHeight: '100%',
			color: '#ffffff',
			textTransform: 'none',
		},

		'& span': {
			color: '#ffffff',
		},

		'& .rightArrow': {
			color: '#BDBDBD',
			transform: 'rotate(90deg)',
			marginLeft: '10px',
			width: '22px',
		},

		'&:hover': {
			background: '#5342C7',
			boxShadow: 'none',
		},
	},

	button2: {
		position: 'relative',
		width: '100%',
		height: '100%',

		background: '#27292D',
		border: '1px solid rgba(255, 255, 255, 0.15)',
		borderRadius: '6px',
		boxShadow: 'none',

		'& p': {
			fontFamily: 'Inter',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '18px',
			lineHeight: '100%',
			color: '#ffffff',
			textTransform: 'none',
		},

		'& span': {
			color: '#ffffff',
		},

		'& .rightText': {
			color: '#BDBDBD',
			marginLeft: '8px',
		},

		'&:hover': {
			background: '#27292D',
			boxShadow: 'none',
		},
	},

	textBox: {
		width: '100%',
		height: '180px',
		position: 'relative',
		border: '2px solid rgba(255, 255, 255, 0.15)',
		background: '#27292D',
		borderRadius: '5px',

		'& textarea': {
			fontFamily: 'Inter',
			fontStyle: 'normal',
			fontWeight: '400',
			fontSize: '16px',
			lineHeight: '160%',
			textTransform: 'none',
			color: '#bdbdbd',
			marginTop: '0px',
			padding: '10px 12px',
		},
	},

	// >>>>>>>>>>>>>> Mobile
	// 1290px
	['@media (max-width: 1290px)']: {
		insideDiv: {
			display: 'block',
		},

		right: {
			marginTop: '50px',
			width: '100%',
		},

		left: {
			width: '100%',
		},

		title: {
			maxWidth: '100%',
			width: '100%',
			//textAlign: 'center',
		},

		desc: {
			maxWidth: '100%',
			width: '70%',
			//margin: '0 auto',
			marginTop: '32px',
			//textAlign: 'center',
		},

		bottomButtons: {
			width: '350px',
			//margin: '0 auto',
			marginTop: '32px',
		},

		oneButton: {
			width: '100%',
		},
	},

	// 700px
	['@media (max-width: 700px)']: {
		insideDiv: {
			marginTop: '75px',
		},

		title: {
			fontSize: '48px',
		},

		desc: {
			width: '100%',
		},
	},

	// 450px
	['@media (max-width: 450px)']: {
		right: {
			padding: '17px',
			marginTop: '50px',
		},

		rightButtons: {
			marginTop: '14px',
		},

		textBox: {
			height: '120px',
		},

		button1: {
			'& p': {
				fontWeight: '400',
			},
		},

		button2: {
			'& p': {
				fontWeight: '400',
			},
		},
	},

	// 410px
	['@media (max-width: 410px)']: {
		bottomButtons: {
			width: '100%',
		},
	},
});

export default useStyles;
