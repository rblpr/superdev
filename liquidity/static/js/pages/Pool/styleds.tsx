import { Text } from '@pancakeswap-libs/uikit';
import styled from 'styled-components';

export const Wrapper = styled.div`
	position: relative;
	padding-bottom: 20px;
`;

export const ClickableText = styled(Text)`
	:hover {
		cursor: pointer;
	}
	color: ${({ theme }) => theme.colors.primary};
`;

export const Dots = styled.span`
	color: var(--color-text);

	&::after {
		display: inline-block;
		animation: ellipsis 1.25s infinite;
		content: '.';
		width: 1em;
		text-align: left;
	}

	@keyframes ellipsis {
		0% {
			content: '.';
		}
		33% {
			content: '..';
		}
		66% {
			content: '...';
		}
	}
`;
