// >> Modules
import getVariable from '../../globalVariables';
import { Typography } from '@mui/material';
import Image from 'next/image';

// >> Styles
import useStyles from './featuresStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import robot from '../../../public/robot.png';
import robot_anim from '../../../public/robot.webp';
import features1 from '../../../public/features/features1.png';
import features2 from '../../../public/features/features2.png';
import features3 from '../../../public/features/features3.png';
import features4 from '../../../public/features/features4.png';
import features5 from '../../../public/features/features5.png';
import features6 from '../../../public/features/features6.png';

// >> Variables
let features = [
	{
		icon: features1,
		rotate: '-165deg',
		title1: 'Low',
		titleBold: 'Tax',
		desc: 'Our token has no taxes! Every transaction is 5/5 and all tax for marketing purpose',
	},
	{
		icon: features2,
		rotate: '8deg',
		title1: 'CMC',
		titleBold: 'Prelisted',
		desc: 'We submitted an application for CMC Prelisted to ensure the greatest possible interest in our project.',
	},
	{
		icon: features3,
		rotate: '0deg',
		title1: '100%',
		titleBold: 'Safe',
		desc: '100% Community Driven.',
	},
	{
		icon: features4,
		rotate: '0deg',
		title1: 'Quantum AI',
		titleBold: 'App',
		desc: 'Our chat app is ready in Beta version now for you to check out on our website! Full project utility ready in phase 2',
	},
	{
		icon: features5,
		rotate: '0deg',
		title1: 'Tier 1',
		titleBold: 'Kols',
		desc: 'We will work with tier 1 ETH Caller',
	},
	{
		icon: features6,
		rotate: '0deg',
		title1: 'Influencers',
		titleBold: '',
		desc: 'We are working with many well-known personalities from the crypto world who will promote us and support our project at every stage. Everyone will be talking about us for sure!',
	},
];

// >> Script
function Features() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv} id="Features">
			<div className={styles.insideDiv}>
				<div className={styles.top}>
					<div className={styles.topLeft} data-aos="fade-right">
						<Typography className={styles.title}>
							Great{' '}
							<span className={styles.boldTitle}>Solutions</span>
						</Typography>
						<Typography
							className={styles.desc}
							data-aos="fade-right"
						>
							We have designed some reliable solutions for our
							project that will make KnowieGTX one of the best on
							the cryptocurrency market. We are up to date with
							the market and we know what the market of investors
							expect from projects!
						</Typography>
					</div>
				</div>

				<div className={styles.bottom}>
					{features.map((element, index) => {
						return (
							<div
								className={styles.oneFeature}
								key={index}
								data-state={
									(index + 1) % 2 === 0 ? 'even' : 'notEvent'
								}
								data-aos={
									(index + 1) % 2 === 0
										? 'fade-left'
										: 'fade-right'
								}
							>
								<div
									className={styles.featureIcon}
									style={{
										transform: `rotate(${element.rotate})`,
									}}
								>
									<Image
										src={element.icon}
										alt=""
										quality={99}
										priority={true}
										className={globalStyles.image}
									/>
								</div>
								<div className={styles.featureTexts}>
									<Typography className={styles.featureTitle}>
										{element.title1}{' '}
										<span className={styles.boldTitle}>
											{element.titleBold}
										</span>
									</Typography>
									<Typography className={styles.featureDesc}>
										{element.desc}
									</Typography>
								</div>
							</div>
						);
					})}
					<div className={styles.featureRobot} data-aos="fade-up">
						{/*<div className={styles.normalRobot}>
							<Image
								src={robot}
								alt=""
								quality={99}
								priority={true}
								className={globalStyles.image}
							/>
				</div>*/}

						{/*<Image
								src={robot_anim}
								alt=""
								quality={99}
								priority={true}
								className={globalStyles.image}
							/>*/}
						<picture>
							<source srcSet="robot.webp" type="image/webp" />
							<img
								srcSet="robot.webp"
								alt=""
								className={styles.robot_anim}
							/>
						</picture>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Features;
