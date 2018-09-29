const initialState = {
  user: null
};

function auth(state = initialState, { type, payload }) {
  console.log(payload);
  switch (type) {
    case 'SET_USER':
      return {
        user: payload
      };
    case 'GET_USER':
      return {
        user: payload
      };
    default:
      return state;
  }
}

export default auth;
