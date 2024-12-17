// >> Modules
import getVariable from '../../globalVariables';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';

// >> Styles
import useStyles from './whatIsStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import app from '../../../public/app.png';
import appBg from '../../../public/appBg.png';

// >> Script
function WhatIs() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv}>
			<div className={styles.insideDiv}>
				<div className={styles.top}>
					<Typography className={styles.title} data-aos="fade-up">
						What is Quantum
						<span className={styles.boldTitle}>AI</span>?
					</Typography>
					<Typography className={styles.desc} data-aos="fade-up">
						Quantum AI is a modern messenger for work and/or everyday
						activities that uses ChatGPT API to integrate its
						functions with our chat. Enjoy artificial intelligence
						when communicating with people!
					</Typography>
					<div className={styles.bottomButton} data-aos="fade-up">
						<Button
							className={styles.btn}
							href="https://google.com"
							target="_blank"
						>
							<Typography>Download App</Typography>
						</Button>
					</div>
				</div>

				<div className={styles.bottom} data-aos="fade-up">
					<div className={styles.app}>
						<Image
							src={app}
							alt="App"
							quality={99}
							priority={true}
							className={globalStyles.image}
						/>
						<div className={styles.appBg}>
							<Image
								src={appBg}
								alt=""
								quality={99}
								priority={true}
								className={globalStyles.image}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default WhatIs;
