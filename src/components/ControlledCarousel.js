"use client";

import { Carousel, Card, Row, Col, Button } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { iconLibrary } from "@/resources/icon";

export const ControlledCarousel = ({ displayItem, itemType }) => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex) => {
		setIndex(selectedIndex);
	};
	return (
		<Card className="border-0 rounded-0 my-5">
			<Carousel
				fade
				activeIndex={index}
				onSelect={handleSelect}
				style={{ width: "100%", borderRadius: "6px", overflow: "hidden" }}
			>
				{displayItem.map((item) => (
					<Carousel.Item key={item.id} style={{ aspectRatio: "4/3" }}>
						<Image
							src={item.pics[0]}
							placeholder="blur"
							blurDataURL="/images/placeholder.png"
							fill
							alt="Project Cover"
							style={{ objectFit: "cover", height: "100%" }}
							priority
						/>
						{/* <Carousel.Caption>
							<p className="fs-4 fw-semibold mb-5">{displayItem[index].title}</p>
						</Carousel.Caption> */}
					</Carousel.Item>
				))}
			</Carousel>
			<Row className="mt-4" style={{ height: "160px" }}>
				<Col sm="5" className="fs-4 fw-semibold text-body-secondary px-4">
					<p>{displayItem[index].title}</p>
				</Col>
				<Col sm="7" className="fw-normal lh-base text-body-dark px-2">
					<p>{displayItem[index].brief}</p>
					<Button
						variant="outline-secondary"
						href={`/${itemType}#${displayItem[index].id}`}
					>
						项目详情 {new iconLibrary.arrowRight()}
					</Button>
				</Col>
			</Row>
		</Card>
	);
};
