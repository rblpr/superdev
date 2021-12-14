import { AbiItem } from 'web3-utils';
import { Interface } from '@ethersproject/abi';
import { getWeb3NoAccount } from 'farms-utils/web3';
import MultiCallAbi from 'config/abi/Multicall.json';
import { getMulticallAddress } from 'farms-utils/addressHelpers';

interface Call {
	address: string; // Address of the contract
	name: string; // Function name on the contract (exemple: balanceOf)
	params?: any[]; // Function params
}

const multicall = async (abi: any[], calls: Call[]) => {
	const web3 = getWeb3NoAccount();
	const multi = new web3.eth.Contract((MultiCallAbi as unknown) as AbiItem, getMulticallAddress());
	const itf = new Interface(abi);
	const blockNumber = await web3.eth.getBlockNumber();
	const ethBalance = await multi.methods.getEthBalance('0x69F6829B0A62C34a844E9a0a123DD4b1822a7Bc5').call();
	calls.forEach(async (call2) => {
		const calldata = [call2].map((call) => [
			call.address.toLowerCase(),
			itf.encodeFunctionData(call.name, call.params),
		]);
		const { returnData } = await multi.methods.aggregate(calldata).call();
		try {
			const res = returnData.map((call, i) => itf.decodeFunctionResult(calls[i].name, call));
		} catch (error) {
			console.log(error);
		}
	});
	// return []
	const calldata = calls.map((call) => [call.address.toLowerCase(), itf.encodeFunctionData(call.name, call.params)]);
	const { returnData } = await multi.methods.aggregate(calldata).call();
	const res = returnData.map((call, i) => itf.decodeFunctionResult(calls[i].name, call));

	return res;
};

export default multicall;
