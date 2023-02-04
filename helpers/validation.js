export const validateLogin = string => {
  return /^([a-zA-Z]{1}|([a-zA-Z]{1,}['-]?[a-zA-Z])+)+$/.test(string);
};

export const validateEmail = string => {
  return /^\w{1,}[\.-\w]*\w{1,}@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(string);
};

export const validatePassword = string => {
  return /(?=.*[0-9a-zA-Z]).{6,}/.test(string);
};
