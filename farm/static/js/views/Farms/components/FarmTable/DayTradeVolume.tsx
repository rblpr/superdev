import React from 'react';
import styled from 'styled-components';
import BigNumber from 'bignumber.js';

export interface DayTradeVolumeProps {
	dayTradeVolume: any;
}

const Label = styled.span`
	font-weight: 500;
	font-size: 10px;
	color: var(--color-text-2);
	margin-right: 5px;
	text-align: center;

	${({ theme }) => theme.mediaQueries.xs} {
		font-size: 10px;
	}

	${({ theme }) => theme.mediaQueries.sm} {
		font-size: 10px;
	}

	${({ theme }) => theme.mediaQueries.lg} {
		font-size: 14px;
	}
`;

const Title = styled.span`
	display: block;
	text-align: center;
	font-weight: 500;
	font-size: 10px;
	color: var(--color-text-5);
	margin-right: 5px;

	${({ theme }) => theme.mediaQueries.sm} {
		display: none;
	}
`;

const DayTradeVolumeWrapper = styled.div`
	display: inline-block;
	min-width: 110px;
	font-weight: 600;
	text-align: center;

	${({ theme }) => theme.mediaQueries.sm} {
		text-align: center;
	}
`;

const Container = styled.div`
	display: flex;
	align-items: center;
	text-align: center;

	svg {
		margin-left: 14px;
	}

	${({ theme }) => theme.mediaQueries.sm} {
		svg {
			margin-left: 0;
		}
	}
`;

const DayTradeVolume: React.FunctionComponent<DayTradeVolumeProps> = ({ dayTradeVolume }) => {
	const displayDayTradeVolume = dayTradeVolume
		? `$${new BigNumber(dayTradeVolume).toFormat(2)}`
		: '';

	return (
		<div>
			{ dayTradeVolume !== undefined
				?
				<Container>
					<Title>Volume 24H</Title>
					<Label>{displayDayTradeVolume}</Label>
				</Container>
				: null
			}
		</div>
	);
};

export default DayTradeVolume;
