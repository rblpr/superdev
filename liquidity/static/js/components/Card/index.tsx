import styled from 'styled-components';

const Card = styled.div<any>`
	width: 100%;
	padding: 1.25rem;
	padding: ${({ padding }) => padding};
	border: ${({ border }) => border};
`;
export default Card;

export const LightCard = styled(Card)`
	border: 1px solid var(--color-background);
	background-color: var(--color-background);
	text-align: center;
`;

export const GreyCard = styled(Card)`
	background-color: ${({ theme }) => theme.colors.tertiary};
`;
