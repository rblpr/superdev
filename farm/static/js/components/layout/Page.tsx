import styled from 'styled-components';
import Container from './Container';

const Page = styled(Container)`
	padding-top: 16px;

	${({ theme }) => theme.mediaQueries.sm} {
		padding-top: 37px;
	}

	${({ theme }) => theme.mediaQueries.lg} {
		padding-top: 100px;
	}
`;

export default Page;
