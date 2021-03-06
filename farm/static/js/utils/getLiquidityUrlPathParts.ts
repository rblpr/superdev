import { getWbnbAddress } from 'utils/addressHelpers';

// Constructing the two forward-slash-separated parts of the 'Add Liquidity' URL
// Each part of the url represents a different side of the LP pair.
const getLiquidityUrlPathParts = ({ quoteTokenAdresses, tokenAddresses }) => {
	const chainId = process.env.REACT_APP_CHAIN_ID;
	let firstPart;
	if (quoteTokenAdresses[chainId] === getWbnbAddress()) {
		firstPart = 'ETH';
	} else {
		firstPart = quoteTokenAdresses[chainId];
	}
	const secondPart = tokenAddresses[chainId];
	return `${firstPart}/${secondPart}`;
};

export default getLiquidityUrlPathParts;
