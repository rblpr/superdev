import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface PortfolioLinkProps {
	to: string;

	className?: string;
	children?: ReactNode;
}

const Wrapper = styled.a`
	height: 60px;
	width: 60px;

	background-color: #202251;
	border-radius: 10px;
`;

const PortfolioLink: React.FC<PortfolioLinkProps> = ({ to, className, children }) => {
	return (
		<Wrapper href={to} target="_blank" rel="noreferrer noopener" className={className}>
			{children}
		</Wrapper>
	);
};

export default PortfolioLink;
