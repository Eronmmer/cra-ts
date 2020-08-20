import React from "react";

interface Props {
	first: number;
	second: string | number;
	third: boolean | number;
}

const Footer = (props: Props) => {
	const { first, second, third } = props;
	return (
		<footer>
			<p>{first}</p>
			<p>{second}</p>
			<p>{third}</p>
		</footer>
	);
};

export default Footer;
