"use client";
import { iconLibrary } from "@/resources/icon";
import { skill } from "@/resources/content";
import Image from "next/image";
import Link from "next/link";
import { Badge, Button, Card, Col, Stack, Row } from "react-bootstrap";

export const Skill = () => {
	return (
		<Stack className="mb-5">
			{skill.map((item) => (
				<Card key={item.id} className="border-0">
					<Card.Body className="px-0">
						<Card.Title className="text-body-dark fs-5 fw-semibold">
							{item.title}
						</Card.Title>
						<Card.Text className="text-body-dark fs-0 fw-normal">
							{item.desc}
						</Card.Text>
						<Stack direction="horizontal" gap={1} className="d-flex flex-wrap w-100">
							{item.tools.map((tool) => (
								<Button
									key={tool.name}
									variant="dark"
									size="sm"
									className="mx-1 py-0 px-1"
								>
									{new tool.icon()} {tool.name}
								</Button>
							))}
						</Stack>
						<Stack
							direction="horizontal"
							className="mx-0 my-4"
							style={{ width: "100%", overflow: "scroll" }}
						>
							{item.pics.map((link, index) => (
								<Image
									key={`${item.id}-pic${index}-${link}`}
									src={link}
									width={240}
									height={135}
									alt="..."
									className="rounded mx-1 object-fit-cover"
									style={{ aspectRatio: "16/9" }}
								/>
							))}
						</Stack>
					</Card.Body>
				</Card>
			))}
		</Stack>
	);
};
