"use client";

import { person, social } from "@/resources/content";
import { Button, Row, Stack } from "react-bootstrap";

export const Introduction = () => {
	return (
		<Row className="my-5">
			<p
				className="fw-bold lh-1 text-body-secondary my-4"
				style={{ fontSize: "46px" }}
			>
				"{person.nickname}" {person.name}
			</p>
			<p className="fs-4 fw-medium lh-1 text-body-secondary">{person.role}</p>
			<Stack direction="horizontal" gap={2} className="my-2">
				{social.map((item) => (
					<Button
						key={item.name}
						href={item.link}
						variant="outline-secondary"
						className="px-2 py-1"
						target="_blank"
						rel="noopener noreferrer"
						active={false}
						style={{ fontSize: "14px", borderRadius: "24px" }}
					>
						{new item.icon()}
						<span className="d-none d-sm-inline">{" " + item.name}</span>
					</Button>
				))}
			</Stack>
			<p className="fs-6 fw-base lh-lg text-body-dark my-3">
				{person.description}
			</p>
		</Row>
	);
};
