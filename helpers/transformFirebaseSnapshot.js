export const transformFirebaseSnapshot = snapshot =>
  Object.entries(snapshot.val()).map(([id, fields]) => ({ id, ...fields }));
