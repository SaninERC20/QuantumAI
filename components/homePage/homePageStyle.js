// >> Modules
import { makeStyles } from '@mui/styles';
import getVariable from '../globalVariables';

// >> Images
import bgClouds from '../../public/bgClouds.png';
import bg from '../../public/bg.png';

// >> Styling
const useStyles = makeStyles({
	mainDiv: {
		width: '100%',
		margin: '0 auto',
		position: 'relative',
	},

	bgClouds: {
		position: 'absolute',
		left: '0px',
		top: '0px',
		width: '100%',
		height: '1198px',
		background: `url(${bgClouds.src}) center bottom / cover no-repeat`,
	},

	toastStyle: {
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '400',
		fontSize: '14px',
	},

	bgCircle: {
		position: 'relative',
		width: '100%',
		maxWidth: '2074px',
		height: '100%',
		margin: '0 auto',
		marginTop: '180px',

		'&:before': {
			content: "''",
			position: 'absolute',
			left: '-20%',
			top: '0px',
			width: '140%',
			height: '100%',
			borderRadius: '100%',
			//'z-index': '-3',

			background: 'rgba(18, 20, 22, 0.5)',
			border: '3px solid rgba(255, 255, 255, 0.1)',
			boxShadow:
				'0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 150px 15px rgba(255, 255, 255, 0.05)',
			backdropFilter: 'blur(75px)',
		},
	},

	bottomBg: {
		position: 'relative',
		width: '100%',
		margin: '0 auto',
	},

	bottomBgBg: {
		position: 'absolute',
		left: '0px',
		top: '0px',
		width: '100%',
		height: '500vh',
		margin: '0 auto',

		background: `url(${bg.src}) center bottom / cover no-repeat`,
	},

	// >>>>>>>>>>>>>> Mobile
	// 1150px
	['@media (max-width: 1150px)']: {
		bgClouds: {
			height: '800px',
		},
	},

	// 830px
	['@media (max-width: 830px)']: {
		bgCircle: {
			'&:before': {
				left: '-50%',

				width: '200%',
			},
		},
	},

	// 460px
	['@media (max-width: 460px)']: {
		bgCircle: {
			'&:before': {
				left: '-90%',
				width: '280%',
			},
		},
	},

	// 430px
	['@media (max-width: 430px)']: {
		bgClouds: {
			top: '-20px',
		},
	},
});

export default useStyles;
