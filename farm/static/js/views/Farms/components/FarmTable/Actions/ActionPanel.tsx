import React from 'react';
import styled from 'styled-components';
import useI18n from 'hooks/useI18n';
import { LinkExternal, useMatchBreakpoints } from '@pancakeswap-libs/uikit';
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard';
import getLiquidityUrlPathParts from 'utils/getLiquidityUrlPathParts';
import getLiquidityUrlPathPartsForPancake from 'utils/getLiquidityUrlPathPartsForPancake';
import { communityFarms } from 'config/constants';
import { CommunityTag, CoreTag, DualTag } from 'components/Tags';
import { useSettingMode } from 'state/hooks';

import HarvestAction from './HarvestAction';
import StakedAction from './StakedAction';
import Apr, { AprProps } from '../Apr';
import Multiplier, { MultiplierProps } from '../Multiplier';
import Liquidity, { LiquidityProps } from '../Liquidity';

import { PoolType } from '../../../../../config/constants/types';

export interface ActionPanelProps {
	multiplier: MultiplierProps;
	liquidity: LiquidityProps;
	details: FarmWithStakedValue;
}

const ActionPanel: React.FunctionComponent<ActionPanelProps> = ({ details, multiplier, liquidity }) => {
	const farm = details;
	const poolType = farm?.poolType;

	const { spaceMode } = useSettingMode();

	const TranslateString = useI18n();
	const { quoteTokenAdresses, tokenAddresses, tokenSymbol, dual, pid } = farm;
	const lpLabel = farm.lpSymbol && farm.lpSymbol.toUpperCase().replace('PANCAKE', '');

	let liquidityUrlPathParts = ''
	if(poolType === PoolType.LP_PANCAKE && pid === 999) {
		liquidityUrlPathParts = getLiquidityUrlPathPartsForPancake({ quoteTokenAdresses, tokenAddresses })
	} else {
		liquidityUrlPathParts = getLiquidityUrlPathParts({ quoteTokenAdresses, tokenAddresses });
	}

	const lpAddress = farm.lpAddresses[process.env.REACT_APP_CHAIN_ID];
	const bsc = `https://bscscan.com/address/${lpAddress}`;
	// Unused
	const info = `https://pancakeswap.info/pair/${lpAddress}`;
	const isCommunityFarm = communityFarms.includes(tokenSymbol);

	const { isXl } = useMatchBreakpoints();
	const isMobile = !isXl;

	let addLink = '';
	switch (poolType) {
		case PoolType.STAKE:
			addLink =
				'htps://wtww.wardenswap.finance/#/best-rate-swap?from=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee&to=0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc';
			break;
		case PoolType.LP:
			addLink = `https://liquidity.wardenswap.finance/#/${liquidityUrlPathParts}`;
			break;
		case PoolType.LP_PANCAKE:
			addLink = `https://pancakeswap.finance/add/${liquidityUrlPathParts}`;
			break;
		default:
			addLink =
				'htps://wtww.wardenswap.finance/#/best-rate-swap?from=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee&to=0x0fEAdcC3824E7F3c12f40E324a60c23cA51627fc';
	}
	const addLabel = details.pid === 0 ? 'Buy WAD' : `Add ${lpLabel}`;

	if (!isMobile) {
		return (
			<div
				style={{
					padding: '0',
					borderBottom: '1px solid var(--color-border-2)',
					backgroundColor: 'var(--color-background-2)',
				}}
			>
				<div style={{ width: '100%', display: 'flex' }}>
					<div style={{ width: '33.33%', display: 'inline-block' }}>
						<div
							style={{
								fontSize: '13px',
								background: 'var(--color-background-8)',
								width: '100%',
								padding: '10px 0',
								textAlign: 'center',
								borderRight: '1px solid var(--color-border-5)',
								color: 'var(--color-text)',
							}}
						>
							Information
						</div>
						<div
							style={{
								minHeight: '200px',
								width: '100%',
								padding: '30px 25px',
								borderLeft: '1px solid var(--color-border-5)',
								borderRight: '1px solid var(--color-border-5)',
							}}
						>
							<a rel="noreferrer" target="_blank" href={addLink}>
								<p
									style={{
										color: 'var(--color-text-2)',
										fontSize: '13px',
										display: 'flex',
										justifyContent: 'left',
									}}
								>
									{addLabel}

									<img
										src={`/images/farms/external-link${spaceMode ? '-space' : ''}.svg`}
										alt="link"
										style={{
											width: '18px',
											height: '18px',
											marginLeft: '5px',
											verticalAlign: 'middle',
										}}
									/>
								</p>
							</a>
							<p style={{ color: 'var(--color-text-2)', fontSize: '13px', marginTop: '20px' }}>
								<a
									rel="noreferrer"
									target="_blank"
									href={bsc}
									style={{ display: 'flex', justifyContent: 'left' }}
								>
									{details.pid === 0 ? 'Token Contract' : 'Farm Contract'}
									<img
										src={`/images/farms/external-link${spaceMode ? '-space' : ''}.svg`}
										alt="link"
										style={{
											width: '18px',
											height: '18px',
											marginLeft: '5px',
											verticalAlign: 'middle',
										}}
									/>
								</a>
							</p>
						</div>
					</div>
					<div style={{ width: '33.33%', display: 'inline-block' }}>
						<HarvestAction {...farm} />
					</div>
					<div style={{ width: '33.33%', display: 'inline-block' }}>
						<StakedAction {...farm} />
					</div>
				</div>
			</div>
		);
	}

	return (
		<div
			style={{
				padding: '0',
				borderBottom: '1px solid var(--color-border-2)',
				backgroundColor: 'var(--color-background-2)',
			}}
		>
			<div>
				<HarvestAction {...farm} />
			</div>
			<div>
				<StakedAction {...farm} />
			</div>
			<div style={{ display: 'block', textAlign: 'center', paddingBottom: '25px' }}>
				<p style={{ color: 'var(--color-text-2)', fontSize: '13px' }}>
					<a
						style={{ display: 'flex', justifyContent: 'center' }}
						rel="noreferrer"
						target="_blank"
						href={addLink}
					>
						Add {lpLabel}
						<img
							src={`/images/farms/external-link${spaceMode ? '-space' : ''}.svg`}
							alt="link"
							style={{ width: '18px', height: '18px', marginLeft: '5px', verticalAlign: 'middle' }}
						/>
					</a>
				</p>
				<p style={{ color: 'var(--color-text-2)', fontSize: '13px', marginTop: '20px' }}>
					<a
						style={{ display: 'flex', justifyContent: 'center' }}
						rel="noreferrer"
						target="_blank"
						href={bsc}
					>
						Farm Contract
						<img
							src={`/images/farms/external-link${spaceMode ? '-space' : ''}.svg`}
							alt="link"
							style={{ width: '18px', height: '18px', marginLeft: '5px', verticalAlign: 'middle' }}
						/>
					</a>
				</p>
			</div>
		</div>
	);
};

export default ActionPanel;
