const initialstate= 0;

const inc_dec = (state = initialstate, action) => {
  switch (action.type) {
    case 'INCREAMENT':
        return state+1
    case 'DECREAMENT':
        return state-1
    case 'ADD20':
        return state + action.payload
    case 'RESET':
        return initialstate
    default:
        return state;
  }
}

export default inc_dec
