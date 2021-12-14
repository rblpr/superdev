import React from 'react';
import styled from 'styled-components';
import { ChevronDownIcon, useMatchBreakpoints } from '@pancakeswap-libs/uikit';

interface DetailsProps {
	actionPanelToggled: boolean;
}

const Container = styled.div`
	display: flex;
	width: 100%;
	justify-content: flex-end;
	padding-right: 8px;
	color: var(--color-text);
	font-size: 14px;

	${({ theme }) => theme.mediaQueries.sm} {
		padding-right: 0px;
	}
`;

const ArrowIcon = styled(ChevronDownIcon)<{ toggled: boolean }>`
	transform: ${({ toggled }) => (toggled ? 'rotate(180deg)' : 'rotate(0)')};
	height: 16px;

	${({ theme }) => theme.mediaQueries.xs} {
		height: 25px;
		width: 30px;
	}

	${({ theme }) => theme.mediaQueries.sm} {
		height: 25px;
		width: 30px;
	}

	${({ theme }) => theme.mediaQueries.lg} {
		height: 16px;
	}
`;

const Details: React.FC<DetailsProps> = ({ actionPanelToggled }) => {
	const { isXl } = useMatchBreakpoints();
	const isMobile = !isXl;

	return (
		<Container>
			{!isMobile && 'Info'}
			<ArrowIcon color="var(--color-text)" toggled={actionPanelToggled} />
		</Container>
	);
};

export default Details;
