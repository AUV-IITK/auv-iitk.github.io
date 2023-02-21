import React, { useEffect, useState } from "react";
import "./SingleBlog.css";
import ExamplesNavbar from "components/Navbars/ExamplesNavbar";
import data from "../../data/Blogs.json";
import { Spinner } from "reactstrap";

function SingleBlog({ location }) {
	const [pathId, setPathId] = useState("");
	const [blogId, setBlogId] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setPathId(location.pathname);
		setBlogId(pathId.substring(pathId.lastIndexOf("/") + 1));
		if (data) {
			setIsLoading(false);
		}
	}, [pathId]);

	const blogContent = data.blogsData.map((receivedBlog) => {
		if (blogId === receivedBlog.blogId) {
			return (
				<div className="single-blog" key={receivedBlog.heading}>
					<h1
						className="blog-heading-single-page"
						style={{ fontSize: "3.4rem" }}
					>
						{receivedBlog.heading}
					</h1>
					<h2
						className="single-blog-author"
						style={{ fontSize: "1.8rem" }}
					>
						{receivedBlog.author}
					</h2>
					<h2
						className="single-blog-date"
						style={{ fontSize: "1.8rem" }}
					>
						{" "}
						{receivedBlog.date}{" "}
					</h2>
					<div>
						{receivedBlog.body.map((contentobject, index) => {
							if (contentobject.type === "para") {
								return (
									<p
										className="blogs-description text-left mb-5"
										key={`para${index}`}
									>
										{contentobject.content}
									</p>
								);
							} else if (contentobject.type === "image") {
								return (
									<img
										className="single-blog-image"
										src={require("assets/img/blog/BlogImages/" +
											contentobject.src)}
										key={`img${index}`}
									></img>
								);
							} else if (contentobject.type === "h2") {
								return (
									<h2
										className="blog-secondary-heading text-left"
										key={`h2${index}`}
									>
										{contentobject.content}
									</h2>
								);
							} else if (contentobject.type === "list-block") {
								return (
									<div
										className="blog-list-block"
										key={`lb${index}`}
									>
										<h3 className="blog-list-heading">
											{contentobject.listHeading}
										</h3>
										{contentobject.listItems.map(
											(listItem, index) => {
												return (
													<li
														className="blog-list-item"
														key={`bli${index}`}
													>
														{listItem}
													</li>
												);
											}
										)}
									</div>
								);
							} else {
								return;
							}
						})}
					</div>
				</div>
			);
		} else {
			return;
		}
	});

	return (
		<div className="mobile-responsive">
			<ExamplesNavbar activePage="/blogs" />
			{isLoading ? <Spinner /> : blogContent}
		</div>
	);
}

export default SingleBlog;
