import React from "react";
import { connect } from "react-redux";
import { showName, setName } from "../redux/actions/playAction";
import { ReduxState } from "../redux/reducers";

type Props = {
	setName: any;
	showName: any;
	name: string;
	age: number;
} & typeof defaultProps;

const defaultProps = {
	country: "Nigeria",
};

interface NeededState {
	play: { name: string; age: number };
}

const Main = (props: Props) => {
	const { name, age, showName, setName, country } = props;
	const handleClick = () => {
		setName("new nameeeeeeeee");
	};
	return (
		<main>
			<button onClick={handleClick}>click me</button>
			<button onClick={showName}>click me to show original</button>
			<p>{name}</p>
			<p>{age}</p>
			<p>{country}</p>
		</main>
	);
};

const mapStateToProps = (state: ReduxState) => ({
	name: state.play.name,
	age: state.play.age,
});

const mapDispatchToProps = {
	showName,
	setName,
};

Main.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(Main);
