import styled from 'styled-components';
import { Box } from 'rebass/styled-components';

const Row = styled(Box)<{ align?: string; padding?: string; border?: string; borderRadius?: string }>`
	width: 100%;
	display: flex;
	padding: 0;
	align-items: ${({ align }) => align || 'center'};
	padding: ${({ padding }) => padding};
	border: ${({ border }) => border};
	border-radius: ${({ borderRadius }) => borderRadius};
`;

export const RowBetween = styled(Row)`
	justify-content: space-between;
`;

export const RowFlat = styled.div<{ width?: string; mb?: string; mt?: string; justify?: string }>`
	width: ${({ width }) => (width ? `${width}` : '100%')};
	display: flex;
	align-items: center;
	justify-content: ${({ justify }) => (justify ? `${justify}` : 'center')};
	margin-bottom: ${({ mb }) => (mb ? `${mb}` : 0)};
	margin-top: ${({ mt }) => (mt ? `${mt}` : 0)};
`;

export const AutoRow = styled(Row)<{ gap?: string; justify?: string }>`
	flex-wrap: wrap;
	margin: ${({ gap }) => gap && `-${gap}`};
	justify-content: ${({ justify }) => justify && justify};

	& > * {
		margin: ${({ gap }) => gap} !important;
	}
`;

export const RowFixed = styled(Row)<{ width?: string; gap?: string; justify?: string }>`
	width: ${({ width }) => (width ? `${width}` : '35%')};
	display: inline-flex;
	justify-content: space-between;
`;

export const RowSpace = styled(Row)<{ gap?: string; justify?: string; mb?: string }>`
	width: 100%;
	display: inline-flex;
	justify-content: space-between;
	margin-bottom: ${({ mb }) => (mb ? `${mb}` : 0)};
`;

export default Row;
