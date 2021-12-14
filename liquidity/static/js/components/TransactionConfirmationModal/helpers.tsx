import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Heading, IconButton, CloseIcon } from '@pancakeswap-libs/uikit';
import { AutoColumn, ColumnCenter } from '../Column';

export const Wrapper = styled.div`
	width: 100%;
	overflow-y: auto;
`;
export const Section = styled(AutoColumn)`
	padding: 10px 0;
`;

export const ConfirmedIcon = styled(ColumnCenter)`
	padding: 0;
`;

export const BottomSection = styled(Section)`
	background-color: var(--color-background);
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
`;

/**
 * TODO: Remove this when modal system from the UI Kit is implemented
 */
const StyledContentHeader = styled.div`
	align-items: center;
	display: flex;

	& > ${Heading} {
		flex: 1;
		color: #202251;
	}
`;

type ContentHeaderProps = {
	children: ReactNode;
	onDismiss: () => void;
};

export const ContentHeader = ({ children, onDismiss }: ContentHeaderProps) => (
	<StyledContentHeader>
		<Heading>{children}</Heading>
		<IconButton onClick={onDismiss} variant="text">
			<CloseIcon color="primary" />
		</IconButton>
	</StyledContentHeader>
);
