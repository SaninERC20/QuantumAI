// >> Modules
import Head from 'next/head';
import getVariable from '../globalVariables';
import { ToastContainer } from 'react-toastify';

// >> Styles
import useStyles from './homePageStyle';
import useGlobalStyles from '../globalStyle';
import 'react-toastify/dist/ReactToastify.css';

// >> Components
import NavBar from './navBar/navBar';
import Hero from './hero/hero';
import WhatIs from './whatIs/whatIs';
import Community from './community/community';
import AboutUs from './aboutUs/aboutUs';
import Partners from './partners/partners';
import Roadmap from './roadmap/roadmap';
import Features from './features/features';
import ChatGPT from './chatGPT/chatGPT';
import Tokenomics from './tokenomics/tokenomics';
import Faq from './faq/faq';
import Footer from './footer/footer';

// >> Script
function HomePage() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<>
			<Head>
				<title>{getVariable['texts']['pageTitle']}</title>
				<meta charSet="utf-8" />
				<meta
					name="theme-color"
					content={getVariable['colors']['pageMainColor']}
				/>
				<meta
					name="description"
					content={getVariable['texts']['pageDesc']}
				/>

				<meta
					property="og:url"
					content={`https://${getVariable['texts']['pageLink']}/`}
				/>
				<meta property="og:type" content="website" />
				<meta
					property="og:title"
					content={getVariable['texts']['pageTitle']}
				/>
				<meta
					property="og:description"
					content={getVariable['texts']['pageDesc']}
				/>
				<meta
					property="og:image"
					content={getVariable['texts']['pageImage']}
				/>

				<meta name="twitter:card" content="summary_large_image" />
				<meta
					property="twitter:domain"
					content={getVariable['texts']['pageLink']}
				/>
				<meta
					property="twitter:url"
					content={`https://${getVariable['texts']['pageLink']}/`}
				/>
				<meta
					name="twitter:title"
					content={getVariable['texts']['pageTitle']}
				/>
				<meta
					name="twitter:description"
					content={getVariable['texts']['pageDesc']}
				/>
				<meta
					name="twitter:image"
					content={getVariable['texts']['pageImage']}
				/>
			</Head>
			<div className={styles.mainDiv}>
				<ToastContainer
					position="bottom-left"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss={false}
					draggable
					pauseOnHover={false}
					theme={'dark'}
					bodyClassName={styles.toastStyle}
					toastClassName={styles.toastStyle}
				/>
				<div className={styles.bgClouds}></div>
				<NavBar />
				<Hero />
				<div className={styles.bgCircle}>
					<Partners />
					<WhatIs />
					<Community />
					<AboutUs />
				</div>
				<div className={styles.bottomBg}>
					<div className={styles.bottomBgBg}></div>
					<Features />
					<Roadmap />
					<ChatGPT />
					<Tokenomics />
					<Faq />
					<Footer />
				</div>
			</div>
		</>
	);
}

export default HomePage;
