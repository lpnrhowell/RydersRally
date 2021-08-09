import React from "react";
import "../styles/_search.scss";

export default function SearchAppBar() {
	return (
		<div className="search">
			<div className="container">
				<div id="content">
					<form className="form-inline">
						<div className="input-group">
							<i className="fa fa-search"></i>
							<input
								type="text"
								id="search"
								class="form-control search-form"
								placeholder="Find Events"
							/>
							<span
								className="input-group-btn"
								style={{ width: "39px" }}
							></span>
						</div>
					</form>
					<p class="text-center">Find MC Events</p>
				</div>
			</div>
		</div>
	);
}
