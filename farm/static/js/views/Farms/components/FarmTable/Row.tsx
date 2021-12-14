import React, { useState } from 'react';
import styled from 'styled-components';
import { FarmWithStakedValue } from 'views/Farms/components/FarmCard/FarmCard';
import { useMatchBreakpoints } from '@pancakeswap-libs/uikit';
import useI18n from 'hooks/useI18n';

import Apr, { AprProps } from './Apr';
import Farm, { FarmProps } from './Farm';
import Earned, { EarnedProps } from './Earned';
import Details from './Details';
import Multiplier, { MultiplierProps } from './Multiplier';
import Liquidity, { LiquidityProps } from './Liquidity';
import Platform, { PlatformProps } from './Platform';
import DayTradeVolume, { DayTradeVolumeProps } from './DayTradeVolume';
import ActionPanel from './Actions/ActionPanel';
import CellLayout from './CellLayout';
import { DesktopColumnSchema, MobileColumnSchema } from '../types';

export interface RowProps {
	farm: FarmProps;
	earned: EarnedProps;
	multiplier: MultiplierProps;
	liquidity: LiquidityProps;
	details: FarmWithStakedValue;
	platform?: PlatformProps;
	dayTradeVolume?: string;
}

const cells = {
	farm: Farm,
	earned: Earned,
	details: Details,
	multiplier: Multiplier,
	liquidity: Liquidity,
	platform: Platform,
};

const CellInner = styled.div`
	background: var(--color-background);
	padding: 24px 0px;
	display: block;
	width: 100%;
	align-items: center;
	text-align: center;
`;

const StyledTr = styled.tr`
	background: var(--color-background);
	padding: 0;
	cursor: pointer;
	border-bottom: 1px solid var(--color-border-2);

	:last-of-type {
		border-bottom: none;
	}
`;

const InActiveTr = styled.tr`
	padding: 0;
	cursor: pointer;
	border-bottom: 1px solid var(--color-border-2);

	:last-of-type {
		border-bottom: none;
	}
`;

const EarnedMobileCell = styled.td`
	background: var(--color-background);
	padding: 16px 16px 24px 0;
`;

const AprMobileCell = styled.div`
	padding-left: 40px;
`;

const FarmMobileCell = styled.td`
	background: var(--color-background);
	padding: 16px 0 16px 20px !important;

	${({ theme }) => theme.mediaQueries.lg} {
		padding: 0;
	}
`;

const Row: React.FunctionComponent<RowProps> = (props) => {
	const { details, farm } = props;
	const [actionPanelToggled, setActionPanelToggled] = useState(false);
	const TranslateString = useI18n();

	const toggleActionPanel = () => {
		setActionPanelToggled(!actionPanelToggled);
	};

	let UseTr = StyledTr;
	if (farm.multiplier === '0X') {
		UseTr = InActiveTr;
	}

	const { isXl, isXs, isSm } = useMatchBreakpoints();

	const isMobile = !isXl;
	const tableSchema = isMobile ? MobileColumnSchema : DesktopColumnSchema;
	const columnNames = tableSchema.map((column) => column.name);

	const handleRenderRow = () => {
		if (!isXs && !isSm) {
			return (
				<UseTr onClick={toggleActionPanel}>
					{Object.keys(props).map((key) => {
						const columnIndex = columnNames.indexOf(key);
						if (columnIndex === -1) {
							return null;
						}
						switch (key) {
							case 'details':
								return (
									<td
										key={key}
										style={{ background: 'var(--color-background)', padding: 0, width: '20%' }}
									>
										<CellInner>
											<CellLayout>
												<Details actionPanelToggled={actionPanelToggled} />
											</CellLayout>
										</CellInner>
									</td>
								);
							case 'liquidity':
								return (
									<td
										key={key}
										style={{ background: 'var(--color-background)', padding: 0, width: '10%' }}
									>
										<CellInner>
											<CellLayout label={TranslateString(736, 'TVL')}>
												<Liquidity {...props.liquidity} />
											</CellLayout>
										</CellInner>
									</td>
								);
							case 'platform':
								return (
									<td
										key={key}
										style={{ background: 'var(--color-background)', padding: 0, width: '15%' }}
									>
										<CellInner>
											<CellLayout>
												<Platform {...props.platform} />
											</CellLayout>
										</CellInner>
									</td>
								);
							case 'dayTradeVolume':
								return (
									<td
										key={key}
										style={{ background: 'var(--color-background)', padding: 0, width: '15%' }}
									>
										<CellInner>
											<CellLayout>
												<DayTradeVolume dayTradeVolume={props.dayTradeVolume}/>
											</CellLayout>
										</CellInner>
									</td>
								);
							default:
								return (
									<td
										key={key}
										style={{
											background: 'var(--color-background)',
											padding: 0,
											width: key === 'earn' ? '20%' : '30%',
										}}
									>
										<CellInner>
											<CellLayout
												label={TranslateString(
													tableSchema[columnIndex].translationId,
													tableSchema[columnIndex].label,
												)}
											>
												{React.createElement(cells[key], props[key])}
											</CellLayout>
										</CellInner>
									</td>
								);
						}
					})}
				</UseTr>
			);
		}

		return (
			<UseTr onClick={toggleActionPanel}>
				<FarmMobileCell>
					<CellLayout>
						<Farm {...props.farm} />
					</CellLayout>
					{
						props.dayTradeVolume !== undefined && props.platform.percentageFee !== undefined
						?
						<AprMobileCell>
							<div>
								<DayTradeVolume dayTradeVolume={props.dayTradeVolume}/>
							</div>
							<div>
								<Platform {...props.platform} />
							</div>
						</AprMobileCell>
						: null
					}
				</FarmMobileCell>
				<EarnedMobileCell>
					<CellLayout label={TranslateString(1072, 'Earned')}>
						<Earned {...props.earned} />
					</CellLayout>
				</EarnedMobileCell>
				<td>
					<CellInner>
						<CellLayout>
							<Details actionPanelToggled={actionPanelToggled} />
						</CellLayout>
					</CellInner>
				</td>
			</UseTr>
		);
	};

	return (
		<>
			{handleRenderRow()}
			{actionPanelToggled && details && (
				<tr>
					<td colSpan={6} style={{ backgroundColor: 'var(--color-background-8)' }}>
						<ActionPanel {...props} />
					</td>
				</tr>
			)}
		</>
	);
};

export default Row;
