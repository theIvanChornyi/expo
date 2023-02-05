export const blobPhoto = async photo => {
  const responce = await fetch(photo);
  const file = await responce.blob();
  return file;
};
