import json from "../JsonData/login"

export const loginAction = () => dispatch => {
    dispatch({
      type: "ButtonClick",
      payload: json
    });
  };