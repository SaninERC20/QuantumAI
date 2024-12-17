// >> Modules
import getVariable from '../../globalVariables';
import Image from 'next/image';
import { Button, Typography, Input } from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-toastify';

// >> Styles
import useStyles from './footerStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import logo from '../../../public/logo.png';

// >> Script
function Footer() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Variables
	const [input, setInput] = useState('');

	// >> Render
	return (
		<div className={styles.outsideDiv}>
			<div className={styles.insideDiv}>
				<div className={styles.top}>
					<div className={styles.logo} data-aos="fade-up">
						<Image
							src={logo}
							alt="KnowieGTX"
							quality={99}
							priority={true}
							className={globalStyles.image}
						/>
					</div>
					<div className={styles.editBox} data-aos="fade-up">
						<div className={styles.input}>
							<Input
								disableUnderline={true}
								fullWidth={true}
								placeholder="Enter your email"
								onChange={(event) => {
									setInput(event.target.value);
								}}
								value={input}
							></Input>
						</div>
						<div className={styles.button}>
							<Button
								className={styles.rightBtn}
								onClick={() => {
									toast.error('Email limit reached!');
								}}
							>
								<Typography>Subscribe</Typography>
							</Button>
						</div>
					</div>
				</div>
				<div className={styles.bottom}>
					<div className={styles.bottomLeft}>
						<Typography>
							© 2024 Quantum AI. All rights reserved.
						</Typography>
					</div>
					<div className={styles.bottomRight}>
						<div className={styles.oneBottomRight}>
							<a href="https://google.com" target="_blank">
								<Typography>Privacy Policy</Typography>
							</a>
						</div>
						<div className={styles.oneBottomRight}>
							<a href="https://google.com" target="_blank">
								<Typography>Terms & Conditions</Typography>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
