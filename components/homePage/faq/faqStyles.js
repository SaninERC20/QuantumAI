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
		maxWidth: '1518px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '195px',
	},

	top: {
		position: 'relative',
		width: '100%',
	},

	bottom: {
		position: 'relative',
		width: '100%',
		maxWidth: '1000px',
		margin: '0 auto',
		marginTop: '104px',
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

	oneAccordion: {
		minHeight: '65px',
		paddingBottom: '20px',
		paddingTop: '20px',
		position: 'relative',

		borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
	},

	accordionTitle: {
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '18px',
		lineHeight: '120%',
		color: '#ffffff',
		marginLeft: '-16px',
	},

	accordionDesc: {
		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '300',
		fontSize: '14px',
		lineHeight: '130%',
		color: '#BDBDBD',
		paddingRight: '5%',
		marginLeft: '-16px',
	},

	expandButton: {
		width: '13px',
		height: 'auto',
		color: '#ffffff',
		transform: 'rotate(-90deg)',
	},

	// 730px
	['@media (max-width: 730px)']: {
		insideDiv: {
			marginTop: '50px',
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
