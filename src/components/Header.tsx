import React from "react";

interface Props {
	one: string;
	two: number;
	three: any;
}

interface Married {
	first: string;
	second?: number;
	third: number[];
}

const Header: React.FC<Props> = (props) => {
	const { one, two, three } = props;
	const [married, setMarried] = React.useState<Married | null>(null);
	React.useEffect(() => {
		setMarried({ first: "first", third: [1, 2, 3] });
	}, []);
	return married ? (
		<div>
			<p>{one}</p>
			<p>{two}</p>
			<p>{three}</p>
		</div>
	) : null;
};

export default Header;
