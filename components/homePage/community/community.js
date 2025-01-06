// >> Modules
import getVariable from '../../globalVariables';
import { Button, Typography } from '@mui/material';

// >> Styles
import useStyles from './communityStyle';
import useGlobalStyles from '../../globalStyle';

// >> Script
function Community() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv}>
			<div className={styles.insideDiv}>
				<div className={styles.top}>
					<Typography className={styles.title} data-aos="fade-up">
						Join Our{' '}
						<span className={styles.boldTitle}>Community</span>!
					</Typography>
					<Typography className={styles.desc} data-aos="fade-up">
						Let&apos;s build together a great community that will
						develop the project together with our team. Quantum AI is
						a fully community-driven token!
					</Typography>
					<div className={styles.bottomButtons} data-aos="fade-up">
						<div className={styles.bottomButton}>
							<Button
								className={styles.btn}
								href="https://x.com/quantumaint"
								target="_blank"
							>
								<Typography>Twitter</Typography>
							</Button>
						</div>
						<div className={styles.bottomButton}>
							<Button
								className={styles.btn}
								href="https://t.me/+7Nf-YiKOkFQ1NmI1"
								target="_blank"
							>
								<Typography>Telegram</Typography>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Community;
