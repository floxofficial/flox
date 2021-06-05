export default (text, size = 7) => `${text.slice(0, size)}...${text.slice(text.length - (size + 1))}`;
