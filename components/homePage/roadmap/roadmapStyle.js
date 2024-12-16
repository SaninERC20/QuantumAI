// >> Modules
import getVariable from '../../globalVariables';
import { makeStyles } from '@mui/styles';

// >> Styling
const useStyles = makeStyles({
	outsideDiv: {
		width: '100%',
		position: 'relative',
		'z-index': '4',

		'&:before': {
			content: "''",
			position: 'absolute',
			right: '-240px',
			bottom: '0px',
			width: '700px',
			height: '500px',

			background:
				'linear-gradient(90deg, rgba(18, 20, 22, 0) -56.61%, #121416 65.52%)',
			'z-index': '3',
		},
	},

	insideDiv: {
		width: '90%',
		maxWidth: '1518px',
		margin: '0 auto',
		position: 'relative',
		marginTop: '200px',
	},

	top: {
		position: 'relative',
		width: '100%',
	},

	topLeft: {
		position: 'relative',
		width: '100%',
	},

	topRight: {
		position: 'absolute',
		right: '0px',
		top: '0px',

		display: 'flex',
		gap: '8px',
	},

	bottom: {
		position: 'relative',
		width: '100%',
		marginTop: '98px',
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

	topBtnLeft: {
		width: '61px',
		height: '61px',
		boxShadow: 'none',
		background:
			'radial-gradient(104.78% 104.78% at 50% 15.45%, rgba(110, 88, 255, 0) 43.98%, rgba(110, 88, 255, 0.2) 100%), #121416',
		border: '1px solid rgba(255, 255, 255, 0.15)',

		'&:hover': {
			boxShadow: 'none',
			background:
				'radial-gradient(104.78% 104.78% at 50% 15.45%, rgba(110, 88, 255, 0) 43.98%, rgba(110, 88, 255, 0.2) 100%), #121416',
		},

		'& .arrow': {
			color: '#ffffff',
			opacity: '.5',
			transform: 'rotate(-180deg)',
		},

		'& span': {
			color: '#ffffff',
		},
	},

	topBtnRight: {
		width: '61px',
		height: '61px',
		boxShadow: 'none',
		background:
			'radial-gradient(104.78% 104.78% at 50% 15.45%, rgba(110, 88, 255, 0) 43.98%, rgba(110, 88, 255, 0.2) 100%), #121416',
		border: '1px solid rgba(255, 255, 255, 0.15)',

		'&:hover': {
			boxShadow: 'none',
			background:
				'radial-gradient(104.78% 104.78% at 50% 15.45%, rgba(110, 88, 255, 0) 43.98%, rgba(110, 88, 255, 0.2) 100%), #121416',
		},

		'& .arrow': {
			color: '#ffffff',
			opacity: '.5',
		},

		'& span': {
			color: '#ffffff',
		},
	},

	swiper: {
		width: '100%',
		position: 'relative',
		overflow: 'visible',
	},

	swiperBg: {
		position: 'absolute',
		left: '-310px',
		top: '100px',
		width: '1982px',
		height: 'auto',
		'z-index': '-5',
	},

	swiperSlide: {
		position: 'relative',
	},

	swiperSlideInside: {
		background: '#121416',
		border: '1px solid rgba(255, 255, 255, 0.15)',
		borderRadius: '16px',
		padding: '24px',
		position: 'relative',
	},

	leaveMeEmpty: {
		position: 'relative',
		background: 'none',
		padding: '24px',
	},

	swiperTitle: {
		position: 'relative',
		width: '98px',
		height: '40px',
		background: 'rgba(255, 255, 255, 0.18)',
		borderRadius: '99px',

		'& p': {
			width: '100%',
			paddingTop: '11px',
			textAlign: 'center',
			fontFamily: 'Inter',
			fontStyle: 'normal',
			fontWeight: '600',
			fontSize: '16px',
			lineHeight: '100%',
			color: 'rgba(255, 255, 255, 0.88)',
		},
	},

	swiperElement: {
		position: 'relative',
		width: '100%',
		marginTop: '48px',
		display: 'flex',

		'&:before': {
			content: "''",
			position: 'absolute',
			left: '18px',
			top: '-40px',
			width: '1px',
			height: '27px',

			background: 'rgba(255, 255, 255, 0.88)',
		},

		'&[data-state="0"]': {
			marginTop: '24px',

			'&:before': {
				display: 'none',
			},
		},

		'&[data-done="true"]': {
			'&:before': {
				background: '#5342C7',
			},
		},
	},

	elementLeft: {
		position: 'relative',
		width: '36px',
		height: '36px',

		background: 'rgba(255, 255, 255, 0.88)',
		borderRadius: '99px',

		'&[data-state="true"]': {
			background: '#5342C7',
		},
	},

	elementDone: {
		position: 'relative',
		width: '100%',
		height: '100%',

		'& .icon': {
			position: 'absolute',
			width: '50%',
			height: 'auto',
			left: '50%',
			top: '50%',
			translate: '-50% -50%',
			color: 'rgba(33, 33, 33, 0.72)',
		},

		'&[data-state="true"]': {
			'& .icon': {
				color: 'rgba(255, 255, 255, 0.72)',
			},
		},
	},

	elementTitle: {
		position: 'relative',
		marginLeft: '16px',
		marginTop: '10px',

		fontFamily: 'Inter',
		fontStyle: 'normal',
		fontWeight: '600',
		fontSize: '16px',
		lineHeight: '100%',
		color: '#ffffff',
	},

	// 800px
	['@media (max-width: 800px)']: {
		outsideDiv: {
			'&:before': {
				right: '-600px',
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
