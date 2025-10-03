import { Nav, Navbar } from "react-bootstrap";

export default function About() {
	return (
		<div className="row">
			<div className="col-4">
				<Navbar>
					<Nav className="h-100 flex-column align-items-stretch pe-4 border-end">
						<Nav className="nav nav-pills flex-column">
							<a className="nav-link" href="#simple-list-item-1">
								Introduction
							</a>
							<a className="nav-link" href="#simple-list-item-2">
								Work Experience
							</a>
							<a className="nav-link" href="#simple-list-item-3">
								School Studies
							</a>
							<a className="nav-link" href="#simple-list-item-4">
								Skills
							</a>
						</Nav>
					</Nav>
				</Navbar>
			</div>
			<div className="col-8">
				<div
					data-bs-spy="scroll"
					data-bs-target="#navbar-example3"
					data-bs-smooth-scroll="true"
					tabIndex="0"
				>
					<h4 id="simple-list-item-1">Mark Zheng Ma</h4>
					<p>
						(node:37980) ExperimentalWarning: CommonJS module
						/opt/homebrew/lib/node_modules/npm/node_modules/debug/src/node.js is
						loading ES Module
						/opt/homebrew/lib/node_modules/npm/node_modules/supports-color/index.js
						using require(). Support for loading ES Module in require() is an
						experimental feature and might change at any time (Use `node
						--trace-warnings ...` to show where the warning was created) npm notice
						Beginning October 4, 2021, all connections to the npm registry - including
						for package installation - must use TLS 1.2 or higher. You are currently
						using plaintext http to connect. Please visit the GitHub blog for more
						information:
						https://github.blog/2021-08-23-npm-registry-deprecating-tls-1-0-tls-1-1/
					</p>
					<h4 id="simple-list-item-2">Work Experience</h4>
					<p>
						(node:37980) ExperimentalWarning: CommonJS module
						/opt/homebrew/lib/node_modules/npm/node_modules/debug/src/node.js is
						loading ES Module
						/opt/homebrew/lib/node_modules/npm/node_modules/supports-color/index.js
						using require(). Support for loading ES Module in require() is an
						experimental feature and might change at any time (Use `node
						--trace-warnings ...` to show where the warning was created) npm notice
						Beginning October 4, 2021, all connections to the npm registry - including
						for package installation - must use TLS 1.2 or higher. You are currently
						using plaintext http to connect. Please visit the GitHub blog for more
						information:
						https://github.blog/2021-08-23-npm-registry-deprecating-tls-1-0-tls-1-1/
					</p>
					<h4 id="simple-list-item-3">School Studies</h4>
					<p>
						(node:37980) ExperimentalWarning: CommonJS module
						/opt/homebrew/lib/node_modules/npm/node_modules/debug/src/node.js is
						loading ES Module
						/opt/homebrew/lib/node_modules/npm/node_modules/supports-color/index.js
						using require(). Support for loading ES Module in require() is an
						experimental feature and might change at any time (Use `node
						--trace-warnings ...` to show where the warning was created) npm notice
						Beginning October 4, 2021, all connections to the npm registry - including
						for package installation - must use TLS 1.2 or higher. You are currently
						using plaintext http to connect. Please visit the GitHub blog for more
						information:
						https://github.blog/2021-08-23-npm-registry-deprecating-tls-1-0-tls-1-1/
					</p>
					<h4 id="simple-list-item-4">Skills</h4>
					<p>
						(node:37980) ExperimentalWarning: CommonJS module
						/opt/homebrew/lib/node_modules/npm/node_modules/debug/src/node.js is
						loading ES Module
						/opt/homebrew/lib/node_modules/npm/node_modules/supports-color/index.js
						using require(). Support for loading ES Module in require() is an
						experimental feature and might change at any time (Use `node
						--trace-warnings ...` to show where the warning was created) npm notice
						Beginning October 4, 2021, all connections to the npm registry - including
						for package installation - must use TLS 1.2 or higher. You are currently
						using plaintext http to connect. Please visit the GitHub blog for more
						information:
						https://github.blog/2021-08-23-npm-registry-deprecating-tls-1-0-tls-1-1/
					</p>
				</div>
			</div>
		</div>
	);
}
