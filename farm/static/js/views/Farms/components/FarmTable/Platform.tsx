import React from 'react';
import styled from 'styled-components';
import Tooltip from '../Tooltip/Tooltip';

export interface PlatformProps {
	type: string;
	percentageFee?: number;
}

const Container = styled.div`
	position: relative;
	display: inline-flex;
	align-items: center;
	vertical-align: middle;

`;

const Label = styled.p`
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

const PlatformFeeIconWrap = styled.div`
	display: inline-block;
	position: relative;
	margin-left: 8px;
	width: 16px;
	height: auto;
	top: 3px;

	${({ theme }) => theme.mediaQueries.sm} {
		display: none;
	}
`;

const Text = styled.div`
	font-size: 20px;
	font-weight: bold;
	color: var(--color-text-8);

	${({ theme }) => theme.mediaQueries.xs} {
		font-size: 12px;
	}

	${({ theme }) => theme.mediaQueries.md} {
		font-size: 15px;
	}
`;


const Platform: React.FunctionComponent<PlatformProps> = ({ percentageFee }) => {
	return (
		<Container>
			{ percentageFee !== undefined
				?
				<Container>
					<Label>Fees earned (yr.)</Label>
					<Text>{percentageFee}%</Text>
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
				</Container>
				: null
			}
		</Container>
	);
};

export default Platform;
