export default (state = {}, action) => {
 
    switch (action.type) {
      
      case "ButtonClick":
        return {
          result: action.payload
        };
      default:
        return state;
    }
  };
  