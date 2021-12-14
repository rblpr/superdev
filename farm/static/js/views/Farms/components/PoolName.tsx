import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
	children: ReactNode;
	name: string;
}

const Container = styled.div`
	max-width: 960px;
	width: 100%;
	display: flex;
	align-items: center;

	margin: 40px 0 24px;

	@media only screen and (max-width: 768px) {
		justify-content: center;
	}
`;

const Icon = styled.div``;

const Name = styled.div`
	font-size: 20px;
	font-weight: bold;
	color: var(--color-text);

	margin-left: 12px;

	@media only screen and (max-width: 768px) {
		font-size: 17px;
	}
`;

const PoolName: React.FC<Props> = ({ children, name }) => {
	return (
		<Container>
			<Icon>{children}</Icon>
			<Name>{name}</Name>
		</Container>
	);
};

export default PoolName;
