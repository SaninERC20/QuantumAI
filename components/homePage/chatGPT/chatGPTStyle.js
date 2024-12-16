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
		maxWidth: '1520px',
		margin: '0 auto',
		position: 'relative',

		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'flex-start',
		marginTop: '192px',
	},

	left: {
		position: 'relative',
		marginTop: '100px',
		width: '530px',
	},

	right: {
		position: 'relative',
	},

	topSwitches: {
		position: 'relative',
		display: 'flex',
		gap: '8px',
	},

	oneSwitch: {
		position: 'relative',
		width: '14px',
		height: '14px',

		background: '#27292D',
		border: '1px solid rgba(255, 255, 255, 0.15)',
		borderRadius: '10px',
		transition: 'all .5s',

		'&:hover': {
			cursor: 'pointer',
		},
	},

	selectedSwitch: {
		position: 'relative',
		width: '62px',
		background: '#5342C7',
		border: '1px solid rgba(255, 255, 255, 0)',
	},

	title: {
		position: 'relative',
		maxWidth: '770px',
		marginTop: '32px',

		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '48px',
		lineHeight: '121%',
		color: '#ffffff',
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

	boldTitle: {
		fontWeight: '600',
	},

	bottomButton: {
		position: 'relative',
		marginTop: '32px',

		width: '175px',
		height: '48px',
	},

	bottomBtn: {
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
		width: '900px',
		height: 'auto',
	},

	appImage: {
		position: 'relative',
		width: '100%',
		height: 'auto',
	},

	oneImage: {
		position: 'absolute',
		left: '0px',
		top: '0px',
		width: '100%',
		height: 'auto',
		opacity: '0.01',
		transition: 'opacity 1s',
		'z-index': '-5',
	},

	bgImage: {
		position: 'relative',
		left: '0px',
		top: '0px',
		width: '100%',
		height: 'auto',
		opacity: '1',
		'z-index': '-1',
	},

	oneImageVisible: {
		opacity: '1',
		'z-index': '1',
	},

	appBg: {
		position: 'absolute',
		width: '170%',
		height: 'auto',
		left: '-35%',
		top: '-10%',

		'z-index': '-6',
	},

	// >>>>>>>>>>>>>> Mobile
	// 1445px
	['@media (max-width: 1445px)']: {
		insideDiv: {
			marginTop: '102px',
		},

		app: {
			width: '700px',
			marginTop: '100px',
		},
	},

	// 1275px
	['@media (max-width: 1275px)']: {
		insideDiv: {
			display: 'block',
		},

		app: {
			width: '100%',
			marginTop: '100px',
		},

		left: {
			width: '100%',
		},

		topSwitches: {
			width: '100%',
			//justifyContent: 'center',
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

		bottomButton: {
			//margin: '0 auto',
			marginTop: '32px',
		},
	},

	// 750px
	['@media (max-width: 750px)']: {
		desc: {
			width: '100%',
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

		right: {
			marginTop: '-40px',
		},
	},
});

export default useStyles;
