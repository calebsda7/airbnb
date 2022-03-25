import React from "react";
import { Box, Typography } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Nearby = () => {
	return (
		<Box sx={{ width: "100%" }}>
			<Typography variant="h3" gutterBottom component="div">
				Discover San Diego Experiences
			</Typography>
			<Carousel
				additionalTransfrom={0}
				arrows
				autoPlaySpeed={3000}
				centerMode={false}
				className=""
				containerClass="container"
				dotListClass=""
				draggable={false}
				focusOnSelect={false}
				infinite
				itemClass="image-item"
				keyBoardControl
				minimumTouchDrag={80}
				renderButtonGroupOutside={false}
				renderDotsOutside={false}
				responsive={{
					desktop: {
						breakpoint: {
							max: 3000,
							min: 1024,
						},
						items: 3,
						partialVisibilityGutter: 40,
					},
					mobile: {
						breakpoint: {
							max: 464,
							min: 0,
						},
						items: 1,
						partialVisibilityGutter: 30,
					},
					tablet: {
						breakpoint: {
							max: 1024,
							min: 464,
						},
						items: 2,
						partialVisibilityGutter: 30,
					},
				}}
				showDots={false}
				sliderClass=""
				slidesToSlide={1}
				swipeable
				ssr
				partialVisbile
				style
			>
				<img
					src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
					alt=""
					style={{
						display: "block",
						height: "100%",
						padding: "20px 0 20px 20px",
						width: "100%",
						borderRadius: "10px",
					}}
				/>
				<img
					src="https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
					alt=""
					style={{
						display: "block",
						height: "100%",
						padding: "20px 0 20px 20px",
						width: "100%",
						borderRadius: "10px",
					}}
				/>
				<img
					src="https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
					alt=""
					style={{
						display: "block",
						height: "100%",
						padding: "20px 0 20px 20px",
						width: "100%",
						borderRadius: "10px",
					}}
				/>
				<img
					src="https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
					alt=""
					style={{
						display: "block",
						height: "100%",
						padding: "20px 0 20px 20px",
						width: "100%",
						borderRadius: "10px",
					}}
				/>
			</Carousel>
		</Box>
	);
};

export default Nearby;
