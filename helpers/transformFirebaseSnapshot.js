export const transformFirebaseSnapshot = (snapshot = {}) => {
  const obj = snapshot?.val();
  if (!obj) return [];

  return Object.entries(obj).map(([id, fields]) => ({ id, ...fields }));
};
