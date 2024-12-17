// >> Modules
import getVariable from '../../globalVariables';
import { IconButton, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import { useCallback, useRef } from 'react';
import Image from 'next/image';
import { useWindowSize } from '../../../hooks/useWindowSize';

// >> Styles
import useStyles from './roadmapStyle';
import useGlobalStyles from '../../globalStyle';

import 'swiper/css';
import 'swiper/css/free-mode';

// >> Icons
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';

// >> Images
import roadmapBg from '../../../public/roadmapBg.png';

// >> Variables
let roadmap1 = [
	{
		title: 'Team formation',
		done: true,
	},
	{
		title: 'Website launch',
		done: true,
	},
	{
		title: 'Prelaunch Marketing',
		done: true,
	},
	{
		title: 'Uniswap Launch',
		done: true,
	},
];

let roadmap2 = [
	{
		title: 'Dexs & Dext Update',
		done: true,
	},
	{
		title: 'Post Launch Marketing',
		done: true,
	},
	{
		title: 'Dapps Launch',
		done: true,
	},
	{
		title: 'Strategic Partnerships',
		done: true,
	},
	{
		title: 'Strategic Partnerships',
		done: true,
	},
];

let roadmap3 = [
	{
		title: 'More Upcoming',
		done: false,
	},
	{
		title: 'More Upcoming',
		done: false,
	},
	{
		title: 'More Upcoming',
		done: false,
	},
	{
		title: 'More Upcoming',
		done: false,
	},
	{
		title: 'More Upcoming',
		done: false,
	},
];

let roadmap4 = [
	{
		title: 'More Upcoming',
		done: false,
	},
	{
		title: 'More Upcoming',
		done: false,
	},
	{
		title: 'More Upcoming',
		done: false,
	},
	{
		title: 'More Upcoming',
		done: false,
	},
	{
		title: 'More Upcoming',
		done: false,
	},
];

// >> Script
function Roadmap() {
	// >> Style
	const styles = useStyles();
	const globalStyles = useGlobalStyles();

	// >> Functions
	const sliderRef = useRef(null);
	const size = useWindowSize();

	const handlePrev = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slidePrev();
	}, []);

	const handleNext = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slideNext();
	}, []);

	// >> Render
	return (
		<div className={styles.outsideDiv} id="Roadmap">
			<div className={styles.insideDiv}>
				<div className={styles.top}>
					<div className={styles.topLeft} data-aos="fade-right">
						<Typography className={styles.title}>
							Roadmap
						</Typography>
						<Typography
							className={styles.desc}
							data-aos="fade-right"
						>
							Our Roadmap has been designed so that each point has
							a real impact on the development of the project.
						</Typography>
					</div>
					<div className={styles.topRight} data-aos="fade-left">
						<IconButton
							className={styles.topBtnLeft}
							onClick={handlePrev}
						>
							<EastRoundedIcon className="arrow" />
						</IconButton>
						<IconButton
							className={styles.topBtnRight}
							onClick={handleNext}
						>
							<EastRoundedIcon className="arrow" />
						</IconButton>
					</div>
				</div>

				<div className={styles.bottom} data-aos="fade-up">
					<Swiper
						slidesPerView={
							size.width < 1445
								? size.width < 1240
									? size.width < 940
										? size.width < 640
											? 1
											: 2
										: 2.2
									: 3
								: 3.7
						}
						spaceBetween={34}
						className={styles.swiper}
						freeMode={true}
						modules={[FreeMode]}
						ref={sliderRef}
					>
						<SwiperSlide className={styles.swiperSlide}>
							<div className={styles.swiperBg}>
								<Image
									src={roadmapBg}
									alt=""
									quality={99}
									priority={true}
									className={globalStyles.image}
								/>
							</div>
							<div className={styles.swiperSlideInside}>
								<div className={styles.swiperTitle}>
									<Typography>Phase 1</Typography>
								</div>
								{roadmap1.map((element, index) => {
									return (
										<div
											className={styles.swiperElement}
											key={index}
											data-state={index}
											data-done={element.done}
										>
											<div
												className={styles.elementLeft}
												data-state={element.done}
											>
												<div
													className={
														styles.elementDone
													}
													hidden={!element.done}
													data-state={element.done}
												>
													<DoneRoundedIcon className="icon" />
												</div>
												<div
													className={
														styles.elementDone
													}
													hidden={element.done}
													data-state={element.done}
												>
													<AccessTimeRoundedIcon className="icon" />
												</div>
											</div>
											<Typography
												className={styles.elementTitle}
											>
												{element.title}
											</Typography>
										</div>
									);
								})}
							</div>
						</SwiperSlide>
						<SwiperSlide className={styles.swiperSlide}>
							<div className={styles.swiperSlideInside}>
								<div className={styles.swiperTitle}>
									<Typography>Phase 2</Typography>
								</div>
								{roadmap2.map((element, index) => {
									return (
										<div
											className={styles.swiperElement}
											key={index}
											data-state={index}
											data-done={element.done}
										>
											<div
												className={styles.elementLeft}
												data-state={element.done}
											>
												<div
													className={
														styles.elementDone
													}
													hidden={!element.done}
													data-state={element.done}
												>
													<DoneRoundedIcon className="icon" />
												</div>
												<div
													className={
														styles.elementDone
													}
													hidden={element.done}
													data-state={element.done}
												>
													<AccessTimeRoundedIcon className="icon" />
												</div>
											</div>
											<Typography
												className={styles.elementTitle}
											>
												{element.title}
											</Typography>
										</div>
									);
								})}
							</div>
						</SwiperSlide>
						<SwiperSlide className={styles.swiperSlide}>
							<div className={styles.swiperSlideInside}>
								<div className={styles.swiperTitle}>
									<Typography>Phase 3</Typography>
								</div>
								{roadmap3.map((element, index) => {
									return (
										<div
											className={styles.swiperElement}
											key={index}
											data-state={index}
											data-done={element.done}
										>
											<div
												className={styles.elementLeft}
												data-state={element.done}
											>
												<div
													className={
														styles.elementDone
													}
													hidden={!element.done}
													data-state={element.done}
												>
													<DoneRoundedIcon className="icon" />
												</div>
												<div
													className={
														styles.elementDone
													}
													hidden={element.done}
													data-state={element.done}
												>
													<AccessTimeRoundedIcon className="icon" />
												</div>
											</div>
											<Typography
												className={styles.elementTitle}
											>
												{element.title}
											</Typography>
										</div>
									);
								})}
							</div>
						</SwiperSlide>
						<SwiperSlide className={styles.swiperSlide}>
							<div className={styles.swiperSlideInside}>
								<div className={styles.swiperTitle}>
									<Typography>Phase 4</Typography>
								</div>
								{roadmap4.map((element, index) => {
									return (
										<div
											className={styles.swiperElement}
											key={index}
											data-state={index}
											data-done={element.done}
										>
											<div
												className={styles.elementLeft}
												data-state={element.done}
											>
												<div
													className={
														styles.elementDone
													}
													hidden={!element.done}
													data-state={element.done}
												>
													<DoneRoundedIcon className="icon" />
												</div>
												<div
													className={
														styles.elementDone
													}
													hidden={element.done}
													data-state={element.done}
												>
													<AccessTimeRoundedIcon className="icon" />
												</div>
											</div>
											<Typography
												className={styles.elementTitle}
											>
												{element.title}
											</Typography>
										</div>
									);
								})}
							</div>
						</SwiperSlide>
						<SwiperSlide
							className={styles.leaveMeEmpty}
						></SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	);
}

export default Roadmap;
