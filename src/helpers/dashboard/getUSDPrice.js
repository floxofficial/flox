import fetch from 'node-fetch';
import store from 'Root/store';
import types from 'Root/actions';

const mapper = async () => {
  const { list } = await fetch(
    'https://confluxscan.io/stat/tokens/list?fields=transferCount,icon,price,totalPrice,quoteUrl,transactionCount,erc20TransferCount&limit=300&orderBy=totalPrice&reverse=true&skip=0&transferType=ERC20',
  ).then((res) => res.json());

  return list.map((x) => ({
    address: x.address,
    name: x.name,
    symbol: x.symbol,
    price: x.price,
  }));
};

export default async () => {
  const m = await mapper();

  store.dispatch({
    type: types.tokens.ADD_PRICE,
    payload: m,
  });

  return true;
};
