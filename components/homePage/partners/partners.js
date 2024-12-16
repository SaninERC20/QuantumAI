// >> Modules
import getVariable from '../../globalVariables';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';

// >> Styles
import useStyles from './partnersStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import partner1 from '../../../public/partners/partner1.png';
import partner2 from '../../../public/partners/partner2.png';
import partner3 from '../../../public/partners/partner3.png';
import partner4 from '../../../public/partners/partner4.png';
import partner5 from '../../../public/partners/partner5.png';
import partner6 from '../../../public/partners/partner6.png';

// >> Script
function Partners() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv}>
			<div className={styles.insideDiv}>
				<div className={styles.top}>
					<div className={styles.onePartner} data-aos="fade-up">
						<a href="https://google.com" target="_blank">
							<Image
								src={partner1}
								alt="Partner 1"
								quality={99}
								priority={true}
								className={globalStyles.image}
							/>
						</a>
					</div>
					<div className={styles.onePartner} data-aos="fade-up">
						<a href="https://google.com" target="_blank">
							<Image
								src={partner2}
								alt="Partner 2"
								quality={99}
								priority={true}
								className={globalStyles.image}
							/>
						</a>
					</div>
					<div className={styles.onePartner} data-aos="fade-up">
						<a href="https://google.com" target="_blank">
							<Image
								src={partner3}
								alt="Partner 3"
								quality={99}
								priority={true}
								className={globalStyles.image}
							/>
						</a>
					</div>
					<div className={styles.onePartner} data-aos="fade-up">
						<a href="https://google.com" target="_blank">
							<Image
								src={partner4}
								alt="Partner 4"
								quality={99}
								priority={true}
								className={globalStyles.image}
							/>
						</a>
					</div>
					<div className={styles.onePartner} data-aos="fade-up">
						<a href="https://google.com" target="_blank">
							<Image
								src={partner5}
								alt="Partner 5"
								quality={99}
								priority={true}
								className={globalStyles.image}
							/>
						</a>
					</div>
					<div className={styles.onePartner} data-aos="fade-up">
						<a href="https://google.com" target="_blank">
							<Image
								src={partner6}
								alt="Partner 6"
								quality={99}
								priority={true}
								className={globalStyles.image}
							/>
						</a>
					</div>
				</div>

				<div className={styles.bottom} data-aos="fade-up">
					<Typography className={styles.title}>
						<span className={styles.boldTitle}>Our</span> Partners
					</Typography>
				</div>
			</div>
		</div>
	);
}

export default Partners;
