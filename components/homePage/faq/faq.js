// >> Modules
import getVariable from '../../globalVariables';
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from '@mui/material';
import { withStyles } from '@mui/styles';
import { useState } from 'react';

// >> Styles
import useStyles from './faqStyles';
import useGlobalStyles from '../../globalStyle';

const StyledAccordion = withStyles({
	root: {
		'&:before': {
			display: 'none',
		},

		background: 'none',
		border: 'none',
		boxShadow: 'none',
		transition: 'all .5s',

		'&$expanded': {
			marginTop: '0px',
		},
	},

	expanded: {},
})(Accordion);

const slideProps = {
	timeout: { enter: 500, exit: 500 },
};

// >> Icons
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

// >> Variables
const data = [
	{
		title: 'How can I contact the Team?',
		desc: 'The best way to contact our team is via Telegram. Join our group and ask a question, and we will be happy to answer it.',
	},
	{
		title: 'How can I buy Quantum AI tokens?',
		desc: 'You can buy Quantum AI tokens by Swap ETH on Uniswap Platform.',
	},
	{
		title: 'Is the Contract Renounced?',
		desc: 'Yes, Our Contract will be renounced, 15 minutes after live.',
	},
	{
		title: 'What exactly is Quantum AI?',
		desc: 'Quantum AI is a solution for both private individuals as well as for organizations that want to strengthen their work by integrating additional AI features into their workflow. It is primarily a modern chat platform using ChatGTP and integrating it into current solutions.',
	},
	{
		title: 'What is the Quantum AI token?',
		desc: 'Quantum AI is the native token of our decentralized application - Quantum AI which is a modern chat application for everyone who wants to learn about integration with artificial intelligence in everyday life and work.',
	},
	{
		title: 'Is the token audited?',
		desc: 'Yes, contract will be audit at certik',
	},
];

// >> Script
function Faq() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Variables
	const [expanded, setExpanded] = useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	// >> Render
	return (
		<div className={styles.outsideDiv} id="FAQ">
			<div className={styles.insideDiv}>
				<div className={styles.top}>
					<Typography className={styles.title} data-aos="fade-right">
						Frequenly{' '}
						<span className={styles.boldTitle}>
							Asked Questions
						</span>
					</Typography>
					<Typography className={styles.desc} data-aos="fade-right">
						We answer the most frequently asked questions!
					</Typography>
				</div>

				<div className={styles.bottom}>
					{data.map((accordion, id) => {
						const { title, desc } = accordion;
						return (
							<div
								key={id}
								className={styles.oneAccordion}
								data-aos="fade-up"
							>
								<StyledAccordion
									expanded={expanded === id}
									key={id}
									onChange={handleChange(id)}
									square
									TransitionProps={slideProps}
									disableGutters
								>
									<AccordionSummary
										expandIcon={
											<ArrowBackIosNewRoundedIcon
												className={
													expanded === id
														? `${styles.expandButton} ${styles.expandButtonExpanded}`
														: `${styles.expandButton}`
												}
											></ArrowBackIosNewRoundedIcon>
										}
									>
										<Typography
											className={
												expanded === id
													? `${globalStyles.gradientText} ${styles.accordionTitle}`
													: `${styles.accordionTitle}`
											}
										>
											{title}
										</Typography>
									</AccordionSummary>
									<AccordionDetails>
										<Typography
											className={styles.accordionDesc}
										>
											{desc}
										</Typography>
									</AccordionDetails>
								</StyledAccordion>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Faq;
