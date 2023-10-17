export const getPagesNumber = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
};
