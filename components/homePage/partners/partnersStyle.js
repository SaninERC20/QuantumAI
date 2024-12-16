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
		maxWidth: '1271px',
		margin: '0 auto',
		position: 'relative',
	},

	top: {
		position: 'relative',
		width: '100%',

		display: 'flex',
		justifyContent: 'space-between',
	},

	bottom: {
		position: 'relative',
		width: '100%',
		paddingTop: '40px',
	},

	title: {
		position: 'relative',
		width: '100%',
		textAlign: 'center',
		margin: '0 auto',
		marginTop: '-60px',

		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '48px',
		lineHeight: '156%',
		color: '#ffffff',
	},

	boldTitle: {
		fontWeight: '600',
	},

	onePartner: {
		position: 'relative',
		width: '105px',
		height: '105px',
		borderRadius: '100%',
		overflow: 'hidden',
		transition: 'opacity .5s',

		background: '#27292D',
		border: '2px solid rgba(255, 255, 255, 0.15)',

		'&:nth-child(1)': {
			top: '60px',
		},

		'&:nth-child(2)': {
			top: '-10px',
		},

		'&:nth-child(3)': {
			top: '-50px',
		},

		'&:nth-child(4)': {
			top: '-50px',
		},

		'&:nth-child(5)': {
			top: '-10px',
		},

		'&:nth-child(6)': {
			top: '60px',
		},

		'&:hover': {
			cursor: 'pointer',
			opacity: '.7',
		},
	},

	// >>>>>>>>>>>>>> Mobile
	// 1715px
	['@media (max-width: 1715px)']: {
		onePartner: {
			'&:nth-child(1)': {
				top: '80px',
			},

			'&:nth-child(6)': {
				top: '80px',
			},
		},
	},

	// 1600px
	['@media (max-width: 1600px)']: {
		onePartner: {
			'&:nth-child(1)': {
				top: '100px',
			},

			'&:nth-child(2)': {
				top: '0px',
			},

			'&:nth-child(5)': {
				top: '0px',
			},

			'&:nth-child(6)': {
				top: '100px',
			},
		},
	},

	// 1470px
	['@media (max-width: 1470px)']: {
		onePartner: {
			'&:nth-child(1)': {
				top: '135px',
			},

			'&:nth-child(2)': {
				top: '10px',
			},

			'&:nth-child(5)': {
				top: '10px',
			},

			'&:nth-child(6)': {
				top: '135px',
			},
		},
	},

	// 830px
	['@media (max-width: 830px)']: {
		onePartner: {
			'&:nth-child(1)': {
				top: '25px',
			},

			'&:nth-child(2)': {
				top: '-45px',
			},

			'&:nth-child(3)': {
				top: '25px',
			},

			'&:nth-child(4)': {
				display: 'none',
			},

			'&:nth-child(5)': {
				display: 'none',
			},

			'&:nth-child(6)': {
				display: 'none',
			},
		},
	},

	// 600px
	['@media (max-width: 600px)']: {
		title: {
			marginTop: '-20px',
		},
	},

	// 460px
	['@media (max-width: 460px)']: {
		onePartner: {
			width: '80px',
			height: '80px',

			'&:nth-child(1)': {
				top: '10px',
			},

			'&:nth-child(2)': {
				top: '-40px',
			},

			'&:nth-child(3)': {
				top: '10px',
			},
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

		onePartner: {
			'&:nth-child(1)': {
				top: '-15px',
			},

			'&:nth-child(2)': {
				top: '-40px',
			},

			'&:nth-child(3)': {
				top: '-15px',
			},
		},
	},
});

export default useStyles;
