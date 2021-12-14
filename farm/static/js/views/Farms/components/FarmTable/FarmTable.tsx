import React, { useRef, useState, useCallback } from 'react';
import styled from 'styled-components';
import { useTable, ColumnType } from '@pancakeswap-libs/uikit';
import { useSettingMode } from 'state/hooks';
import Tooltip from '../Tooltip/Tooltip';
import Row, { RowProps } from './Row';
import { PoolType } from '../../../../config/constants/types'

export interface ITableProps {
	data: RowProps[];
	columns: ColumnType<RowProps>[];
	sortColumn?: string;
}

const Container = styled.div`

	width: 100%;
`;

const TableWrapper = styled.div`
	overflow: visible;

	&::-webkit-scrollbar {
		display: none;
	}
`;

const StyledTable = styled.table`
	${({ theme }) => theme.mediaQueries.md} {
		table-layout:fixed;
	}
	border-collapse: collapse;
	font-size: 14px;
	border-radius: 4px;
	margin-left: auto;
	margin-right: auto;
	width: 100%;
	filter: ${({ theme }) => theme.card.dropShadow};
`;

const TableBody = styled.tbody`
	& tr {
		td {
			font-size: 16px;
			vertical-align: middle;
			padding: 0px;
		}
	}
	tr:last-of-type td:first-of-type {
		${({ theme }) => theme.mediaQueries.md} {
			padding: unset;
		}
		border-bottom-left-radius: 30px;
		overflow: hidden;
	}
	tr:last-of-type td:last-of-type {
		${({ theme }) => theme.mediaQueries.md} {
			padding: unset;
		}
		border-bottom-right-radius: 30px;
		overflow: hidden;
	}

	@media screen and (max-width: 768px) {
		tr:first-of-type td:first-of-type {
			border-top-left-radius: 30px;
		}

		tr:first-of-type td:last-of-type {
			border-top-right-radius: 30px;

			div {
				border-top-right-radius: 30px;
			}
		}
	}
`;

const TableHeader = styled.thead`
	& tr {
		display: none;
		background: var(--color-background);
		padding: 36px 64px;
		height: 73px;
		border-bottom: 1px solid var(--color-border-2);

		th:first-of-type {
      border-top-left-radius: 30px;
    }
    th:last-of-type {
      border-top-right-radius: 30px;
    }

		th {
			background: var(--color-background);
			font-size: 13px;
			font-weight: 400;
			vertical-align: middle;
			color: var(--color-text-2);

			&:nth-child(1) {
				width: 25%
			}

			&:nth-child(3) {
				width: 15%
			}
		}
	}

	${({ theme }) => theme.mediaQueries.sm} {
		& tr {
			display: table-row;
		}
	}
`;

const TableContainer = styled.div`
	position: relative;
	background: var(--color-background-2);
	border-radius: 30px;
`;

const SortContainer = styled.div`
	display: inline-block;
	position: relative;
	height: 15px;
	width: 15px;
	cursor: pointer;
`;

const PlatformFeeIconWrap = styled.div`
	display: inline-block;
	position: relative;
	margin-left: 10px;
	height: auto;
	top: 6px;
`;

const SortUp = styled.img`
	width: 8px;
	height: 6px;
	position: absolute;
	top: 4px;
	left: 10px;
`;

const SortDown = styled.img`
	width: 8px;
	height: 6px;
	position: absolute;
	bottom: -4px;
	left: 10px;
`;

const FarmTable: React.FC<ITableProps> = (props) => {
	const [sortColumn, setSort] = useState('');
	const [sortOrder, setOrder] = useState('desc');
	const setSortColumn = useCallback((col) => setSort(col), [setSort]);
	const setSortOrder = useCallback((order) => setOrder(order), [setOrder]);
	const tableWrapperEl = useRef<HTMLDivElement>(null);
	const { data, columns } = props;
	const { rows } = useTable(columns, data, { sortable: true, sortColumn });
	const { spaceMode } = useSettingMode();
	const selected = columns.find((c) => c.name === sortColumn);

	const renderSort = (colName, type) => {
		if (spaceMode) {
			return type === 'up' ? '/images/sort_up-space.svg' : '/images/sort_down-space.svg';
		}

		if (sortColumn === colName && sortOrder === 'desc') {
			return type === 'up' ? '/images/sort_up_selected.svg' : '/images/sort_down_selected.svg';
		}

		return type === 'up' ? '/images/sort_up.svg' : '/images/sort_down.svg';
	};

	if (selected) {
		rows.sort((a, b) => {
			if (a.original.farm.label < b.original.farm.label) {
				return -1;
			}
			return 1;
		});

		rows.sort((a, b) => {
			if (sortOrder === 'asc') {
				return selected.sort(a, b);
			}
			return selected.sort(b, a);
		});
	}

	return (
		<Container>
			<TableContainer>
				<TableWrapper ref={tableWrapperEl}>
					<StyledTable>
						<TableHeader>
							<tr>
								{columns.map((col) => {
									return (
										data[0].platform.type === PoolType.STAKE  && ['Fees earned (yr.)', 'Volume 24H'].includes(col.label)
											?
												<th key={`${col.label}-${col.name}`}> </th>
											:
												<th key={`${col.label}-${col.name}`}>
												{col.label}
												{col.name !== 'details' && (
													<SortContainer>
														<SortUp
															onClick={() => {
																setSortColumn(col.name);
																setSortOrder('desc');
															}}
															src={renderSort(col.name, 'up')}
														/>
														<SortDown
															onClick={() => {
																setSortColumn(col.name);
																setSortOrder('asc');
															}}
															src={renderSort(col.name, 'down')}
														/>
													</SortContainer>
												)}
												{col.name === 'platform' && (
												<PlatformFeeIconWrap>
													<Tooltip
													content={
														<div>
															Annualized earning base on 24hr trading volume
														</div>
													}
												>
													<img src="/images/icon-info.svg" alt="icon-info" />
												</Tooltip>
												</PlatformFeeIconWrap>
												)}
											</th>
									);
								})}
							</tr>
						</TableHeader>
						<TableBody>
							{rows.map((row) => {
								return <Row {...row.original} key={`table-row-${row.id}`} />;
							})}
						</TableBody>
					</StyledTable>
				</TableWrapper>
			</TableContainer>
		</Container>
	);
};

export default FarmTable;
