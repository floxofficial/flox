export default (params) => {
  const T = params.blockNumber - params.depositTime;

  const algorithm = params.amount * (1 + 0.04 / 63072000) ** T - params.amount;

  return algorithm;
};
