// >> Modules
import getVariable from '../../globalVariables';
import { Typography } from '@mui/material';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip);

// >> Styles
import useStyles from './tokenomicsStyle';
import useGlobalStyles from '../../globalStyle';

// >> Variables
// zjebie jak tu nie ogarniasz to zapytaj, 50% musi byc puste dlatego ze jest pół diagramu tylko bo tak sobie macius wymyslil
const tokenAmount = 100000000;
const tokenInfo = {
	[1]: {
		title: 'Liquidity Pool',
		percent: 90,
		color: '#5342C7',
	},
	[2]: {
		title: 'Ecosystem',
		percent: 4,
		color: '#27292D',
	},
	[3]: {
		title: 'DONT TOUCH THIS',
		percent: 100,
		color: '#FF0000',
	},
	[4]: {
		title: 'CEX',
		percent: 4,
		color: '#FFFFFF',
	},
	[5]: {
		title: 'Marketing',
		percent: 2,
		color: '#27292D',
	},
};

// >> Chart
ChartJS.register(ArcElement, Tooltip);
export const data = {
	labels: [
		tokenInfo[1].title,
		tokenInfo[2].title,
		tokenInfo[3].title,
		tokenInfo[4].title,
		tokenInfo[5].title,
	],
	datasets: [
		{
			data: [
				tokenInfo[1].percent / 1,
				tokenInfo[2].percent / 1,
				tokenInfo[3].percent / 1,
				tokenInfo[4].percent / 1,
				tokenInfo[5].percent / 1,
			],
			backgroundColor: [
				tokenInfo[1].color,
				tokenInfo[2].color,
				tokenInfo[3].color,
				tokenInfo[4].color,
				tokenInfo[5].color,
			],
			borderColor: '#00000055',
			borderWidth: 3,
			padding: 100,
			cutout: '60%',
			hoverOffset: 10,
		},
	],
};

// >> Script
function Tokenomics() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Render
	return (
		<div className={styles.outsideDiv} id="Tokenomics">
			<div className={styles.insideDiv}>
				<div className={styles.left} data-aos="fade-right">
					<Typography className={styles.title}>Tokenomics</Typography>
					<Typography className={styles.desc}>
						Our Tokenomics has been divided in such a way as to
						ensure the future of the project and investment
						certainty for our investors. Everything has been
						balanced and carefully thought out.
					</Typography>
					<div className={styles.tokensNames}>
						<div className={styles.oneToken}>
							<div
								className={styles.tokenSquare}
								style={{ background: tokenInfo[1].color }}
							></div>
							<Typography className={styles.tokenName}>
								{tokenInfo[1].title} ({tokenInfo[1].percent}%)
							</Typography>
						</div>
						<div className={styles.oneToken}>
							<div
								className={styles.tokenSquare}
								style={{ background: tokenInfo[2].color }}
							></div>
							<Typography className={styles.tokenName}>
								{tokenInfo[2].title} ({tokenInfo[2].percent}%)
							</Typography>
						</div>
						<div className={styles.oneToken}>
							<div
								className={styles.tokenSquare}
								style={{ background: tokenInfo[4].color }}
							></div>
							<Typography className={styles.tokenName}>
								{tokenInfo[4].title} ({tokenInfo[4].percent}%)
							</Typography>
						</div>
						<div className={styles.oneToken}>
							<div
								className={styles.tokenSquare}
								style={{ background: tokenInfo[5].color }}
							></div>
							<Typography className={styles.tokenName}>
								{tokenInfo[5].title} ({tokenInfo[5].percent}%)
							</Typography>
						</div>
					</div>
				</div>

				<div className={styles.right} data-aos="fade-left">
					<div className={styles.tokenomicsCircle}>
						<div className={styles.tokenomicsCircleInside}>
							<Doughnut
								data={data}
								options={{
									plugins: {
										tooltip: {
											callbacks: {
												label: (item) =>
													`${(
														(item.formattedValue /
															100) *
														tokenAmount
													).toLocaleString()} Tokens`,
											},
										},
									},
								}}
							/>
							<div className={styles.tokenomicsTexts}>
								<Typography className={styles.tokenomicsTitle}>
									{tokenAmount.toLocaleString()}
								</Typography>
								<Typography className={styles.tokenomicsDesc}>
									Total Supply
								</Typography>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Tokenomics;
