"use client";
import { iconLibrary } from "@/resources/icon";
import Image from "next/image";
import Link from "next/link";
import { Button, Card, Col, Stack } from "react-bootstrap";

export const Job = () => {
	return (
		<Card className="px-0" style={{ border: "none", maxWidth: "800px" }}>
			<Card.Header className="d-flex justify-content-between">
				<span className="fw-medium lh-base text-body-dark">
					叽里呱啦文化有限公司
				</span>
				<span className="fw-medium lh-base text-body-secondary">2020-2024</span>
			</Card.Header>
			<Card.Body>
				<Card.Title className="text-body-dark" style={{ fontSize: "16px" }}>
					项目负责人
				</Card.Title>
				<Card.Text className="fw-normal lh-lg text-body-secondary px-3">
					<li>
						牵头公司科学启蒙课项目的0到1，带领核心团队开发基于Unity(C#)的立项Demo
					</li>
					<li>
						负责领导项目的MVP制作、商业价值分析验证、用户调研，基于线上数据和用户调研结论进行MVP迭代
					</li>
					<li>
						搭建业务团队，制定产品的商业/内容规划目标、预算计划，在推进产品研发中进行过程把控和结果验收。
					</li>
				</Card.Text>
				<Link href="/work">See Projects {new iconLibrary.arrowRight()}</Link>
			</Card.Body>
			<Stack
				direction="horizontal"
				className="mx-2 mb-4"
				style={{ width: "100%", overflow: "scroll" }}
			>
				<Image
					src="https://static.eileen-yu.com/portfolio/su.jpg"
					width={300}
					height={180}
					alt="..."
					className="rounded mx-1"
				/>
				<Image
					src="https://static.eileen-yu.com/portfolio/su.jpg"
					width={300}
					height={180}
					alt="..."
					className="rounded mx-1"
				/>
				<Image
					src="https://static.eileen-yu.com/portfolio/su.jpg"
					width={300}
					height={180}
					alt="..."
					className="rounded mx-1"
				/>
				<Image
					src="https://static.eileen-yu.com/portfolio/su.jpg"
					width={300}
					height={180}
					alt="..."
					className="rounded mx-1"
				/>
			</Stack>
		</Card>
	);
};
