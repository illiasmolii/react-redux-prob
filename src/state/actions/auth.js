export const authAction = 'AUTH';

export const login = (name, pass) => {
  return {
    type: authAction,
    name: name,
    pass: pass
  }
};

export const logout = () => {
  return {
    type: authAction,
    name: undefined,
    pass: undefined
  }
};