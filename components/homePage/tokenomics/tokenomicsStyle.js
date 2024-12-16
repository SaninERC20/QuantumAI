// >> Modules
import getVariable from '../../globalVariables';
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	outsideDiv: {
		width: '100%',
		position: 'relative',
		'z-index': '4',
		borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
	},

	insideDiv: {
		width: '90%',
		maxWidth: '1520px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '190px',

		display: 'flex',
		justifyContent: 'space-between',
	},

	left: {
		position: 'relative',
	},

	right: {
		position: 'relative',
	},

	title: {
		position: 'relative',
		width: '100%',

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

	desc: {
		position: 'relative',
		maxWidth: '580px',
		marginTop: '32px',

		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '20px',
		lineHeight: '150%',
		color: '#BDBDBD',
	},

	tokensNames: {
		position: 'relative',
		width: '580px',
		marginTop: 'calc(106px - 28px)',
		display: 'flex',
		flexWrap: 'wrap',
	},

	oneToken: {
		position: 'relative',
		marginTop: '28px',
		display: 'flex',
		flex: '50%',
		justifyContent: 'flex-start',
	},

	tokenSquare: {
		position: 'relative',
		width: '22px',
		height: '22px',
		borderRadius: '6px',
	},

	tokenName: {
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '18px',
		lineHeight: '100%',
		color: '#FFFFFF',
		marginLeft: '18px',
		marginTop: '4px',
	},

	tokenomicsCircle: {
		position: 'relative',
		width: '850px',
		height: '850px',
		overflow: 'hidden',
		marginTop: '-25%',
	},

	tokenomicsCircleInside: {
		position: 'relative',
		width: '100%',
		height: '100%',
		top: '50%',
	},

	tokenomicsTexts: {
		position: 'absolute',
		width: '100%',
		top: '40%',
		transform: 'translate(0%,-50%)',
		pointerEvents: 'none',
	},

	tokenomicsTitle: {
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '700',
		fontSize: '36px',
		lineHeight: '100%',
		color: '#FFFFFF',
		textAlign: 'center',
	},

	tokenomicsDesc: {
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '24px',
		lineHeight: '100%',
		color: '#BDBDBD',
		textAlign: 'center',
		marginTop: '23px',
	},

	// >>>>>>>>>>>>>> Mobile
	// 1540px
	['@media (max-width: 1540px)']: {
		tokenomicsCircle: {
			width: '600px',
			height: '600px',
		},
	},

	// 1290px
	['@media (max-width: 1290px)']: {
		insideDiv: {
			display: 'block',
		},

		right: {
			marginTop: '70px',
		},

		title: {
			maxWidth: '100%',
			width: '100%',
			textAlign: 'left',
		},

		desc: {
			maxWidth: '100%',
			width: '70%',
			margin: '0 auto',
			marginTop: '32px',
			textAlign: 'left',
		},

		tokensNames: {
			margin: '0 auto',
			marginTop: 'calc(106px - 28px)',
		},

		tokenomicsCircle: {
			margin: '0 auto',
			marginTop: '-25%',
		},
	},

	// 750px
	['@media (max-width: 750px)']: {
		desc: {
			width: '100%',
		},
	},

	// 670px
	['@media (max-width: 670px)']: {
		tokenomicsCircle: {
			width: '400px',
			height: '400px',
		},

		tokensNames: {
			width: '100%',
			flexWrap: 'wrap',
			justifyContent: 'center',
		},

		tokenomicsTitle: {
			fontSize: '24px',
		},

		tokenomicsDesc: {
			fontSize: '17px',
			marginTop: '14px',
		},

		insideDiv: {
			marginTop: '100px',
		},
	},

	// 600px
	['@media (max-width: 600px)']: {
		oneToken: {
			width: '100%',
			flex: '100%',
			display: 'block',
		},

		tokenSquare: {
			margin: '0 auto',
		},

		tokenName: {
			width: '100%',
			marginLeft: '0px',
			marginTop: '12px',
			textAlign: 'center',
		},
	},

	// 460px
	['@media (max-width: 460px)']: {
		tokenomicsCircle: {
			width: '320px',
			height: '320px',
		},

		tokenomicsTitle: {
			fontSize: '14px',
		},

		tokenomicsDesc: {
			fontSize: '10px',
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
