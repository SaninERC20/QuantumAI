// >> Modules
import getVariable from '../../globalVariables';
import { makeStyles } from '@mui/styles';

// >> Images
import robot_anim from '../../../public/robot.webp';

// >> Styling
const useStyles = makeStyles({
	outsideDiv: {
		width: '100%',
		position: 'relative',
		'z-index': '4',
	},

	insideDiv: {
		width: '90%',
		maxWidth: '1518px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '130px',
	},

	top: {
		position: 'relative',
		width: '100%',
	},

	topLeft: {
		position: 'relative',
		width: '100%',
	},

	bottom: {
		position: 'relative',
		width: '100%',
		marginTop: '80px',
		display: 'flex',
		flexWrap: 'wrap',
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

	oneFeature: {
		position: 'relative',
		display: 'flex',
		flex: '50%',
		marginTop: '50px',

		'&[data-state="even"]': {
			justifyContent: 'flex-end',
		},
	},

	featureIcon: {
		position: 'relative',
		width: '130px',
		height: '130px',
	},

	featureTexts: {
		position: 'relative',
		marginLeft: '20px',
	},

	featureTitle: {
		position: 'relative',

		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '32px',
		lineHeight: '120%',
		color: '#ffffff',
		textShadow: '0px 0px 5px #000000',
	},

	featureDesc: {
		position: 'relative',
		maxWidth: '255px',
		marginTop: '14px',

		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '14px',
		lineHeight: '136%',
		color: '#BDBDBD',
		textShadow: '0px 0px 5px #000000',
	},

	featureRobot: {
		position: 'absolute',
		left: '50%',
		top: '50%',
		translate: '-50% -50%',
		width: '580px',
		height: '688px',
		'z-index': '-1',
	},

	normalRobot: {
		position: 'absolute',
		left: '0px',
		top: '0px',
		width: '100%',
		height: '100%',
	},

	robot_anim: {
		position: 'absolute',
		left: '-10%',
		top: '-10%',
		width: '120%',
		height: '120%',
	},

	// >>>>>>>>>>>>>> Mobile
	// 1280px
	['@media (max-width: 1280px)']: {
		featureDesc: {
			color: '#eeeeee',
		},
	},

	// 900px
	['@media (max-width: 900px)']: {
		featureRobot: {
			position: 'relative',
			left: 'auto',
			top: 'auto',
			translate: 'none',
			width: '100%',
			height: 'auto',
			'z-index': '0',
			marginTop: '80px',
		},

		normalRobot: {
			position: 'relative',
		},

		robot_anim: {
			position: 'relative',
			top: '-40%',
		},

		bottom: {
			display: 'block',
		},

		oneFeature: {
			width: '100%',
			flex: '100%',

			'&[data-state="even"]': {
				justifyContent: 'flex-start',
			},
		},
	},

	// 600px
	['@media (max-width: 600px)']: {
		featureIcon: {
			position: 'absolute',
			width: '80px',
			height: '80px',
			top: '50%',
			translate: '0 -50%',
		},

		featureTexts: {
			marginLeft: '100px',
		},

		featureTitle: {
			fontSize: '18px',
		},

		featureDesc: {
			maxWidth: '100%',
			marginTop: '14px',

			fontSize: '14px',
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
