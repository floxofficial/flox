export default (privateKey) => {
  if (!privateKey) {
    return '';
  }

  let pk = privateKey;

  if (!pk.startsWith('0x')) {
    pk = `0x${pk}`;
  }

  return pk;
};
