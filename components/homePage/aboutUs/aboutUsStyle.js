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
		maxWidth: '1520px',
		margin: '0 auto',
		position: 'relative',

		marginTop: '170px',
	},

	top: {
		position: 'relative',
		width: '100%',
	},

	bottom: {
		position: 'relative',
		width: '100%',
		marginTop: '80px',
		display: 'flex',
		justifyContent: 'space-between',
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

	oneButton: {
		position: 'relative',
		width: '277px',
		height: '89px',
		transition: 'opacity .5s',

		background:
			'radial-gradient(104.78% 104.78% at 50% 15.45%, rgba(110, 88, 255, 0) 43.98%, rgba(110, 88, 255, 0.2) 100%), #121416',
		border: '2px solid #363739',
		backdropFilter: 'blur(12.5px)',

		borderRadius: '25px',
		top: '15px',

		'&:first-child': {
			top: '-60px',
		},

		'&:last-child': {
			top: '-60px',
		},

		'&:hover': {
			cursor: 'pointer',
			opacity: '.7',
		},
	},

	// >>>>>>>>>>>>>> Mobile
	// 1282px
	['@media (max-width: 1282px)']: {
		oneButton: {
			width: '200px',
			height: 'auto',

			'&:first-child': {
				top: '-100px',
			},

			'&:last-child': {
				top: '-100px',
			},
		},
	},

	// 1060px
	['@media (max-width: 1060px)']: {
		bottom: {
			justifyContent: 'space-between',
			gap: '30px',
		},

		oneButton: {
			marginTop: '0px',
			height: 'auto',

			'&:nth-child(1)': {
				top: '-60px',
			},

			'&:nth-child(2)': {
				top: '20px',
			},

			'&:nth-child(3)': {
				top: '-60px',
			},

			'&:last-child': {
				display: 'none',
			},
		},
	},

	// 700px
	['@media (max-width: 700px)']: {
		insideDiv: {
			marginTop: '65px',
		},

		bottom: {
			justifyContent: 'space-between',
			gap: '30px',
		},

		oneButton: {
			width: '150px',
			height: 'auto',

			'&:nth-child(1)': {
				top: '-30px',
			},

			'&:nth-child(2)': {
				top: '20px',
			},

			'&:nth-child(3)': {
				top: '-30px',
			},

			'&:last-child': {
				display: 'none',
			},
		},
	},

	// 500px
	['@media (max-width: 500px)']: {
		oneButton: {
			width: '180px',
			height: 'auto',
			borderRadius: '16px',

			'&:nth-child(1)': {
				top: '15px',
			},

			'&:nth-child(2)': {
				top: '15px',
			},

			'&:nth-child(3)': {
				display: 'none',
			},

			'&:last-child': {
				display: 'none',
			},
		},

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
