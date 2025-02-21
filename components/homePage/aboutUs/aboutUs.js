// >> Modules
import getVariable from '../../globalVariables';
import { Typography } from '@mui/material';
import Image from 'next/image';

// >> Styles
import useStyles from './aboutUsStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import bscNews from '../../../public/bscNews.png';
import benzinga from '../../../public/benzinga.png';
import marketWatch from '../../../public/marketWatch.png';
import yahoo from '../../../public/yahoo.png';

// >> Script
function AboutUs() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv}>
			<div className={styles.insideDiv}>
				<div className={styles.top} data-aos="fade-up">
					<Typography className={styles.title}>
						Read About <span className={styles.boldTitle}>Us</span>!
					</Typography>
					<Typography className={styles.desc} data-aos="fade-up">
						Upcoming articles on major news sites like Benzinga, Yahoo Finance, MarketWatch, and others.
					</Typography>
				</div>

				<div className={styles.bottom}>
					<div className={styles.oneButton} data-aos="fade-up">
						<a href="https://www.bsc.news/" target="_blank">
							<Image
								src={bscNews}
								alt="BSC News"
								quality={99}
								priority={true}
								className={globalStyles.image}
							/>
						</a>
					</div>
					<div className={styles.oneButton} data-aos="fade-up">
						<a href="https://www.benzinga.com/" target="_blank">
							<Image
								src={benzinga}
								alt="Benzinga"
								quality={99}
								priority={true}
								className={globalStyles.image}
							/>
						</a>
					</div>
					<div className={styles.oneButton} data-aos="fade-up">
						<a href="https://www.yahoo.com/" target="_blank">
							<Image
								src={yahoo}
								alt="yahoo!"
								quality={99}
								priority={true}
								className={globalStyles.image}
							/>
						</a>
					</div>
					<div className={styles.oneButton} data-aos="fade-up">
						<a href="https://www.marketwatch.com/" target="_blank">
							<Image
								src={marketWatch}
								alt="Market Watch"
								quality={99}
								priority={true}
								className={globalStyles.image}
							/>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutUs;
