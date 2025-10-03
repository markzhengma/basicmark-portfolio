"use client";

import { useState } from "react";
import { Image, Row, Carousel, Card } from "react-bootstrap";

export const ControlledCarousel = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel
			activeIndex={index}
			onSelect={handleSelect}
			style={{ width: "100%", borderRadius: "6px", overflow: "hidden" }}
		>
			<Carousel.Item style={{ aspectRatio: "4/3" }}>
				<Card.Img
					text="First slide"
					src="https://static.eileen-yu.com/portfolio/background.jpg"
					style={{ objectFit: "cover", height: "100%" }}
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item style={{ aspectRatio: "4/3" }}>
				<Card.Img
					text="First slide"
					src="https://static.eileen-yu.com/portfolio/beijing.jpg"
					style={{ objectFit: "cover", height: "100%" }}
				/>
				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item style={{ aspectRatio: "4/3" }}>
				<Card.Img
					text="First slide"
					src="https://static.eileen-yu.com/portfolio/su.jpg"
					style={{ objectFit: "cover", height: "100%" }}
				/>
				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};
