// >> Modules
import getVariable from '../../globalVariables';
import { Button, Typography } from '@mui/material';
import Image from 'next/image';
import { useState, useEffect } from 'react';

// >> Styles
import useStyles from './chatGPTStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import app2_1 from '../../../public/app2_1.png';
import app2_2 from '../../../public/app2_2.png';
import app2_3 from '../../../public/app2_3.png';
import app2_4 from '../../../public/app2_4.png';
import app2_5 from '../../../public/app2_5.png';
import app2_bg from '../../../public/app2_bg.png';
import appBg from '../../../public/appBg.png';

let position = 1;

// >> Script
function ChatGPT() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Variables
	const [openedImage, setOpenedImage] = useState(1);

	function changePosition() {
		if (position === 5) {
			position = 1;
		} else {
			position = position + 1;
		}
		setOpenedImage(position);
	}

	useEffect(() => {
		const interval = setInterval(() => {
			changePosition();
		}, 15000);

		return () => clearInterval(interval);
	}, []);

	// >> Render
	return (
		<div className={styles.outsideDiv}>
			<div className={styles.insideDiv}>
				<div className={styles.left} data-aos="fade-right">
					<div className={styles.topSwitches}>
						<div
							className={
								openedImage === 1
									? `${styles.oneSwitch} ${styles.selectedSwitch}`
									: `${styles.oneSwitch}`
							}
							onClick={() => {
								setOpenedImage(1);
							}}
						></div>
						<div
							className={
								openedImage === 2
									? `${styles.oneSwitch} ${styles.selectedSwitch}`
									: `${styles.oneSwitch}`
							}
							onClick={() => {
								setOpenedImage(2);
							}}
						></div>
						<div
							className={
								openedImage === 3
									? `${styles.oneSwitch} ${styles.selectedSwitch}`
									: `${styles.oneSwitch}`
							}
							onClick={() => {
								setOpenedImage(3);
							}}
						></div>
						<div
							className={
								openedImage === 4
									? `${styles.oneSwitch} ${styles.selectedSwitch}`
									: `${styles.oneSwitch}`
							}
							onClick={() => {
								setOpenedImage(4);
							}}
						></div>
						<div
							className={
								openedImage === 5
									? `${styles.oneSwitch} ${styles.selectedSwitch}`
									: `${styles.oneSwitch}`
							}
							onClick={() => {
								setOpenedImage(5);
							}}
						></div>
					</div>
					<Typography className={styles.title}>
						Check out!{' '}
						<span className={styles.boldTitle}>KnowieGTX</span>
					</Typography>
					<Typography className={styles.desc}>
						Check out our chat application, used in everyday
						conversations, but also at work, integrated with
						artificial intelligence thanks to the ChatGPT API.
					</Typography>
					<div className={styles.bottomButton}>
						<Button
							className={styles.bottomBtn}
							href="https://google.com"
							target="_blank"
						>
							<Typography>Download App</Typography>
						</Button>
					</div>
				</div>

				<div className={styles.right} data-aos="fade-left">
					<div className={styles.app}>
						<div className={styles.appImage}>
							<div
								className={
									openedImage === 1
										? `${styles.oneImage} ${styles.oneImageVisible}`
										: `${styles.oneImage}`
								}
							>
								<Image
									src={app2_1}
									alt="App"
									quality={99}
									priority={true}
									className={globalStyles.image}
								/>
							</div>
							<div
								className={
									openedImage === 2
										? `${styles.oneImage} ${styles.oneImageVisible}`
										: `${styles.oneImage}`
								}
							>
								<Image
									src={app2_2}
									alt="App"
									quality={99}
									priority={true}
									className={globalStyles.image}
								/>
							</div>
							<div
								className={
									openedImage === 3
										? `${styles.oneImage} ${styles.oneImageVisible}`
										: `${styles.oneImage}`
								}
							>
								<Image
									src={app2_3}
									alt="App"
									quality={99}
									priority={true}
									className={globalStyles.image}
								/>
							</div>
							<div
								className={
									openedImage === 4
										? `${styles.oneImage} ${styles.oneImageVisible}`
										: `${styles.oneImage}`
								}
							>
								<Image
									src={app2_4}
									alt="App"
									quality={99}
									priority={true}
									className={globalStyles.image}
								/>
							</div>
							<div
								className={
									openedImage === 5
										? `${styles.oneImage} ${styles.oneImageVisible}`
										: `${styles.oneImage}`
								}
							>
								<Image
									src={app2_5}
									alt="App"
									quality={99}
									priority={true}
									className={globalStyles.image}
								/>
							</div>
							<div className={styles.bgImage}>
								<Image
									src={app2_bg}
									alt=""
									quality={99}
									priority={true}
									className={globalStyles.image}
								/>
							</div>
						</div>
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

export default ChatGPT;
