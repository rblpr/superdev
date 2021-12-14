import React from 'react';
import styled from 'styled-components';
import { Text } from '@pancakeswap-libs/uikit';
import { useSettingMode } from 'state/hook';
import { Spinner } from '../Shared';
import { AutoColumn } from '../Column';
import { Wrapper, Section, ConfirmedIcon, ContentHeader } from './helpers';

type ConfirmationPendingContentProps = { onDismiss: () => void; pendingText: string };

const CustomLightSpinner = styled(Spinner)<{ size: string }>`
	height: ${({ size }) => size};
	width: ${({ size }) => size};
`;

const ConfirmationPendingContent = ({ onDismiss, pendingText }: ConfirmationPendingContentProps) => {
	const { spaceMode } = useSettingMode();

	return (
		<Wrapper>
			<Section>
				<ConfirmedIcon>
					<img src={`/images/farms/loading${spaceMode ? '-space' : ''}.svg`} alt="loader" />
				</ConfirmedIcon>
				<AutoColumn gap="12px" justify="center">
					<AutoColumn justify="center">
						<p
							style={{
								fontSize: '20px',
								fontWeight: 'bold',
								color: 'var(--color-text-2)',
								textAlign: 'center',
							}}
						>
							{pendingText}
						</p>
					</AutoColumn>
					<p
						style={{
							fontSize: '18px',
							fontWeight: 'bold',
							color: 'var(--color-text-2)',
							textAlign: 'center',
						}}
					>
						Confirm this transaction in your wallet
					</p>
				</AutoColumn>
			</Section>
		</Wrapper>
	);
};

export default ConfirmationPendingContent;
