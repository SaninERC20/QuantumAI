// >> Modules
import getVariable from '../../globalVariables';
import Image from 'next/image';
import { Link } from 'react-scroll';
import { Button, Typography } from '@mui/material';

// >> Styles
import useStyles from './navBarStyle';
import useGlobalStyles from '../../globalStyle';

// >> Images
import logo from '../../../public/logo.png';

// >> Script
function NavBar() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv}>
			<div className={styles.insideDiv} data-aos="fade-down">
				<div className={styles.left}>
					<div className={styles.logo}>
						<Image
							src={logo}
							alt="KnowieGTX"
							quality={99}
							priority={true}
							className={globalStyles.image}
						/>
					</div>
				</div>
				<div className={styles.center}>
					<div className={styles.oneCenterElement}>
						<Link to="Partners">
							<Typography>Partners</Typography>
						</Link>
					</div>
					<div className={styles.oneCenterElement}>
						<Link to="Features">
							<Typography>Features</Typography>
						</Link>
					</div>
					<div className={styles.oneCenterElement}>
						<Link to="Audits">
							<Typography>Audits</Typography>
						</Link>
					</div>
					<div className={styles.oneCenterElement}>
						<Link to="Roadmap">
							<Typography>Roadmap</Typography>
						</Link>
					</div>
					<div className={styles.oneCenterElement}>
						<Link to="FAQ">
							<Typography>FAQ</Typography>
						</Link>
					</div>
				</div>
				<div className={styles.right}>
					<div className={styles.rightButton}>
						<Button
							className={styles.rightBtn}
							href="https://google.com"
							target="_blank"
						>
							<Typography>Whitepaper</Typography>
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default NavBar;
