// >> Modules
import { useState, useEffect } from 'react';
import { Triangle } from 'react-loader-spinner';

// >> Aos
import Aos from 'aos';
import 'aos/dist/aos.css';

// >> Styles
import useGlobalStyles from '../components/globalStyle';

// >> Pages
import HomePage from '../components/homePage/homePage';

// >> Script
export default function Home() {
	// >> Style
	const styles = useGlobalStyles();

	// >> Variables
	const [isLoaded, setIsLoaded] = useState(false);
	const [loading, setLoading] = useState(true);

	// >> Functions
	useEffect(() => {
		Aos.init({ duration: 700, once: true });
		setIsLoaded(true);
	}, []);

	useEffect(() => {
		if (isLoaded) {
			setLoading(false);
		}
	}, [isLoaded]);

	// >> Render
	return (
		<div className={styles.container}>
			<HomePage />

			{loading === true ? (
				<div className={styles.pageLoader} style={{ opacity: '1' }}>
					<div className={styles.loading}>
						<Triangle color="#5342C7" width="100%" />
					</div>
				</div>
			) : (
				<div
					className={`${styles.pageLoader} ${styles.pageLoaderTransition}`}
					style={{ opacity: '0' }}
				>
					<div className={styles.loading}>
						<Triangle color="#5342C7" width="100%" />
					</div>
				</div>
			)}
		</div>
	);
}
