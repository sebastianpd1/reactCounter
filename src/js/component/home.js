import React from "react";
import PropTypes from "prop-types";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state == { counter: 0 };
	}

	render() {
		return (
			<div className="container">
				<div className="row align-items-center">
					<div className="bg-dark col text-white">
						<h1 className="display-1 mt-0">
							<i className="fas fa-clock" />
						</h1>
					</div>
					<div className="bg-dark col text-white">
						<h1 className="display-1 mt-0">
							{this.props.digit1 % 10}
						</h1>
					</div>
					<div className="bg-dark col text-white">
						<h1 className="display-1 mt-0">
							{this.props.digit2 % 10}
						</h1>
					</div>
					<div className="bg-dark col text-white">
						<h1 className="display-1 mt-0">
							{this.props.digit3 % 10}
						</h1>
					</div>
					<div className="bg-dark col text-white">
						<h1 className="display-1 mt-0">
							{this.props.digit4 % 10}
						</h1>
					</div>
				</div>
			</div>
		);
	}
}

Home.propTypes = {
	digit1: PropTypes.number,
	digit2: PropTypes.number,
	digit3: PropTypes.number,
	digit4: PropTypes.number
};
