
export const increase = () => {         // action creater
  return {
    type:"INCREAMENT"
  }
}
export const decrease = () => {          // action creater
  return {
    type:"DECREAMENT"
  }
}
export const add20= () =>{
  return{
    type:"ADD20",
    payload:10,
  }
}
export const reset = () => {          // action creater
  return {
    type:"RESET"
  }
}


