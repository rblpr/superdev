import React from 'react';
import styled from 'styled-components';
import { useSettingMode } from 'state/hooks';
import Page from './layout/Page';

const Wrapper = styled(Page)`
	display: flex;
	flex: 1;
	height: calc(100vh);
	justify-content: center;
	align-items: center;
`;

const PageLoader: React.FC = () => {
	const { spaceMode } = useSettingMode();

	return (
		<Wrapper>
			<img src={`/images/farms/loading${spaceMode ? '-space' : ''}.svg`} alt="loading" width="50%" height="50%" />
		</Wrapper>
	);
};

export default PageLoader;
