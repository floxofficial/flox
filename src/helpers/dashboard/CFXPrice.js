import CoinGecko from 'coingecko-api';

import store from 'Root/store';
import types from 'Root/actions';

export default async () => {
  const CoinGeckoClient = new CoinGecko();

  const data = await CoinGeckoClient.simple.price({
    ids: ['conflux-token'],
    vs_currencies: ['usd'],
  });

  store.dispatch({
    type: types.options.USD_PRICE,
    payload: data.data['conflux-token'].usd,
  });
};
