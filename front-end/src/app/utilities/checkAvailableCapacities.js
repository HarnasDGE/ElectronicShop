export const checkAvailableCapacities = (group) => {
  return [...new Set(group.map((product) => product.capacity))];
};
