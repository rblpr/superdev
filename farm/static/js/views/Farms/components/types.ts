export type TableProps = {
	data?: TableDataTypes[];
	selectedFilters?: string;
	sortBy?: string;
	sortDir?: string;
	onSort?: (value: string) => void;
};

export type ColumnsDefTypes = {
	id: number;
	label: string;
	name: string;
	translationId: number;
	sortable: boolean;
};

export type ScrollBarProps = {
	ref: string;
	width: number;
};

export type TableDataTypes = {
	POOL: string;
	APY: string;
	EARNED: string;
	STAKED: string;
	DETAILS: string;
	LINKS: string;
};

export const MobileColumnSchema: ColumnsDefTypes[] = [
	{
		id: 1,
		name: 'farm',
		translationId: 999,
		sortable: true,
		label: '',
	},
	{
		id: 2,
		name: 'platform',
		translationId: 999,
		sortable: true,
		label: 'Fees earned (yr.)',
	},
	{
		id: 3,
		name: 'earned',
		translationId: 1072,
		sortable: true,
		label: 'Earned',
	},
	{
		id: 4,
		name: 'dayTradeVolume',
		translationId: 999,
		sortable: true,
		label: 'Volume 24H',
	},
	{
		id: 5,
		name: 'liquidity',
		translationId: 999,
		sortable: true,
		label: 'TVL',
	},
	{
		id: 6,
		name: 'details',
		translationId: 999,
		sortable: true,
		label: '',
	},
];

export const DesktopColumnSchema: ColumnsDefTypes[] = [
	{
		id: 1,
		name: 'farm',
		translationId: 999,
		sortable: true,
		label: 'LP Tokens Name',
	},
	{
		id: 2,
		name: 'earned',
		translationId: 1072,
		sortable: true,
		label: 'Earned',
	},
	{
		id: 3,
		name: 'platform',
		translationId: 999,
		sortable: true,
		label: 'Fees earned (yr.)',
	},
	{
		id: 5,
		name: 'dayTradeVolume',
		translationId: 999,
		sortable: true,
		label: 'Volume 24H',
	},
	{
		id: 6,
		name: 'liquidity',
		translationId: 999,
		sortable: true,
		label: 'TVL',
	},
	// {
	//   id: 4,
	//   name: 'liquidity',
	//   translationId: 999,
	//   sortable: true,
	//   label: 'Liquidity',
	// },
	// {
	//   id: 5,
	//   name: 'multiplier',
	//   translationId: 999,
	//   sortable: true,
	//   label: 'Multiplier',
	// },
	{
		id: 6,
		name: 'details',
		translationId: 999,
		sortable: false,
		label: 'Detail',
	},
];

export enum ViewMode {
	'TABLE' = 'TABLE',
	'CARD' = 'CARD',
}
