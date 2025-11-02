"use client";
import { iconLibrary } from "@/resources/icon";
import Image from "next/image";
import { Button, Card, Carousel, Modal } from "react-bootstrap";
import { useState } from "react";
import ReactPlayer from "react-player";

export const Project = ({ project }) => {
	const [isVideoShow, setVideoShow] = useState(false);

	return (
		<Card className="rounded-0 border-0 border-bottom mb-5">
			<div className="pt-5" id={project.id} />
			<Carousel
				fade
				pause="hover"
				indicators={project.pics.length > 1}
				controls={project.pics.length > 1}
				className="shadow bg-body-tertiary"
				style={{ width: "100%", borderRadius: "6px", overflow: "hidden" }}
			>
				{project.pics.map((pic, int) => (
					<Carousel.Item
						key={`${project.id}-pic${int}`}
						className="bg-light"
						style={{ aspectRatio: "16/9" }}
					>
						<Image
							src={pic}
							alt="Project Cover"
							fill
							style={{ objectFit: "cover", height: "100%" }}
						/>
					</Carousel.Item>
				))}
			</Carousel>
			<Card.Body className="my-3">
				<Card.Title className="fs-3 lh-base fw-semibold text-body-dark">
					{new iconLibrary.rocket()} {project.title}
					{project.video && (
						<Button
							variant="dark"
							size="sm"
							className="ms-2 mb-1"
							onClick={() => setVideoShow(true)}
						>
							{new iconLibrary.videoPlayer()}
						</Button>
					)}
				</Card.Title>
				<Card.Text className="fs-0 lh-base fw-semibold text-body-secondary">
					{new iconLibrary.person()} {project.role}
				</Card.Text>
				<Card.Text className="fs-0 lh-base fw-normal text-body-dark">
					{project.desc}
				</Card.Text>
				{project.techspecs && (
					<ul className="fs-0 lh-base fw-normal text-body-secondary">
						{project.techspecs.map((item) => (
							<li key={`${project.id}-techspecs-${item}`}>{item}</li>
						))}
					</ul>
				)}
			</Card.Body>
			{project.video && (
				<Modal
					size="xl"
					show={isVideoShow}
					centered
					// fullscreen={true}
					onHide={() => setVideoShow(false)}
					aria-labelledby="project-video"
				>
					{/* <Modal.Header closeButton>
					<Modal.Title id="project-video">{project.title}</Modal.Title>
				</Modal.Header> */}
					<Modal.Body className="p-0 bg-light rounded">
						<ReactPlayer
							src={project.video}
							controls={true}
							className="w-100 h-100 rounded"
							style={{ maxHeight: "80vh" }}
						/>
					</Modal.Body>
				</Modal>
			)}
		</Card>
	);
};
