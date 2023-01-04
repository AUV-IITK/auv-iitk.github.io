import React, { useEffect, useState } from "react";
import { Container, Row, Spinner } from "reactstrap";
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar";

/**
 * accessing 'blogData' property
 * from "../../data/Blogs.json"
 * and storing it as 'blogData'
 */
import blogs_data_json from "../../data/Blogs.json";

import Blog from "./components/Blog";

export default function BlogsPage() {
	// will store all the blog items mapped from "../../data/Blogs.json"
	let [blogsItem, setBlogsItem] = useState(() => <Spinner />);

	useEffect(() => {
		setBlogsItem(() => {
			return blogs_data_json.blogsData.map((recievedBlog) => {
				return (
					<div key={recievedBlog.heading}>
						<Blog
							heading={recievedBlog.heading}
							author={recievedBlog.author}
							date={recievedBlog.date}
							bannerImage={recievedBlog.bannerImage}
							abstract={recievedBlog.abstract}
							id={recievedBlog.blogId}
						></Blog>
					</div>
				);
			});
		});
	}, []);

	return (
		<>
			<ExamplesNavbar />
			<div className="section text-center ">
				<Container className="reduce-margin">
					<Row>
						<h2
							className="heading-main"
							style={{ fontSize: "4.3rem" }}
						>
							BLOGS
						</h2>
					</Row>
				</Container>
			</div>
			<div className="main">{blogsItem}</div>
		</>
	);
}
