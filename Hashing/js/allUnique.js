const allUnique = (items) => {
  const uniqueItems = new Set(items);
  return uniqueItems.size === items.length;
};
