import React from 'react';
import styled from 'styled-components';

const ModalActions: React.FC = ({ children }) => {
	return (
		<StyledModalActions>
			{React.Children.map(children, (child) => (
				<>
					<StyledModalAction>{child}</StyledModalAction>
				</>
			))}
		</StyledModalActions>
	);
};

const StyledModalActions = styled.div`
	align-items: center;
	background-color: ${(props) => props.theme.colors.primaryDark}00;
	display: flex;
	margin: 0;
	padding: ${(props) => props.theme.spacing[4]}px 0;
	${({ theme }) => theme.mediaQueries.xs} {
		display: block;
		padding: 0;
		padding-top: 56px;
	}

	${({ theme }) => theme.mediaQueries.sm} {
		display: block;
		padding: 0;
		padding-top: 56px;
	}

	${({ theme }) => theme.mediaQueries.lg} {
		display: flex;
		padding: ${(props) => props.theme.spacing[4]}px 0;
	}
`;

const StyledModalAction = styled.div`
	flex: 1;
`;

export default ModalActions;
