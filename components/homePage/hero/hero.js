// >> Modules
import getVariable from '../../globalVariables';
import { Button, Typography, Input } from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-toastify';

// >> Styles
import useStyles from './heroStyle';
import useGlobalStyles from '../../globalStyle';

// >> Icons
import UTurnLeftIcon from '@mui/icons-material/UTurnLeft';

// >> Script
function Hero() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Variables
	const [input, setInput] = useState('');

	// >> Render
	return (
		<div className={styles.outsideDiv}>
			<div className={styles.insideDiv}>
				<div className={styles.left} data-aos="fade-right">
					<Typography className={styles.title}>
						Work and daily activities{' '}
						<span className={styles.boldTitle}>are easier</span>{' '}
						with Quantum AI
					</Typography>
					<Typography className={styles.desc}>
						Nothing makes life easier than using artificial
						intelligence during everyday activities or at work. All
						in one offers a modern messenger - Quantum AI
					</Typography>
					<div className={styles.bottomButtons}>
						<div className={styles.oneButton}>
							<Button
								className={styles.leftBtn}
								href="#"
								target="_blank"
							>
								<Typography>Telegram</Typography>
							</Button>
						</div>
						<div className={styles.oneButton}>
							<Button
								className={styles.rightBtn}
								href="#"
								target="_blank"
							>
								<Typography>Ape Store</Typography>
							</Button>
						</div>
					</div>
				</div>

				<div className={styles.right} data-aos="fade-left">
					<div className={styles.textBox}>
						<Input
							disableUnderline={true}
							fullWidth={true}
							placeholder="Ask anything Quantum AI"
							onChange={(event) => {
								setInput(event.target.value);
							}}
							value={input}
							multiline={true}
							maxRows={5.5}
						></Input>
					</div>
					<div className={styles.rightButtons} id="Partners">
						<div className={styles.rightButton}>
							<Button
								className={styles.button1}
								onClick={() => {
									toast.error('Temporary disactivated');
								}}
							>
								<Typography>Generate</Typography>
								<UTurnLeftIcon className="rightArrow" />
							</Button>
						</div>
						<div className={styles.rightButton}>
							<Button className={styles.button2}>
								<Typography>
									Cancel
									<span className="rightText">ESC</span>
								</Typography>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
