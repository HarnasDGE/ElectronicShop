export const checkAvailableColors = (group) => {
  return [...new Set(group.map((product) => product.color))];
};
