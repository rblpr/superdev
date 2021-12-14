import { ChainId } from '@wardenswap/sdk';
import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { Button, LinkExternal } from '@pancakeswap-libs/uikit';
import { ArrowUpCircle } from 'react-feather';
import { AutoColumn } from '../Column';
import { getBscScanLink } from '../../utils';
import { Wrapper, Section, ConfirmedIcon, ContentHeader } from './helpers';
import { useSettingMode } from '../../state/hook';

type TransactionSubmittedContentProps = {
	onDismiss: () => void;
	hash: string | undefined;
	chainId: ChainId;
};

export const StyledLinkExternal = styled.div`
	color: #202251;
	font-size: 18px;
	font-weight: 500;
	display: flex;
	align-items: center;
`;

const TransactionSubmittedContent = ({ onDismiss, chainId, hash }: TransactionSubmittedContentProps) => {
	const theme = useContext(ThemeContext);
	const { spaceMode } = useSettingMode();

	return (
		<Wrapper>
			<Section>
				<ConfirmedIcon>
					<img
						src="/images/swap-status-success.svg"
						width="400px"
						height="auto"
						alt="link"
						style={{ margin: '20px 0' }}
					/>
				</ConfirmedIcon>
				<AutoColumn gap="8px" justify="center">
					{chainId && hash && (
						<StyledLinkExternal>
							<a
								target="_blank"
								rel="noreferrer"
								href={getBscScanLink(chainId, hash, 'transaction')}
								style={{ color: 'var(--color-text-2)', display: 'flex' }}
							>
								View on BscScan
								<img
									src={`/images/farms/external-link${spaceMode ? '-space' : ''}.svg`}
									width="23px"
									height="23px"
									alt="link"
									style={{ marginLeft: '5px' }}
								/>
							</a>
						</StyledLinkExternal>
					)}
				</AutoColumn>
			</Section>
		</Wrapper>
	);
};

export default TransactionSubmittedContent;
