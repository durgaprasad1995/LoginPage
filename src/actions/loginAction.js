import json from "../JsonData/login"

export const loginAction = () => dispatch => {
  console.log("json",json)
    dispatch({
      type: "ButtonClick",
      payload: json
    });
  };