import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  locations:function(prevState = {}, action){
    switch (action.type) {
      case 'LOCATIONS':
          return {
            ...prevState,
            locations:action.payload
          }
        break;
        case 'LOCATIONSBYID':
            return {
              ...prevState,
              locations:action.payload
            }
          break;
        case 'LOCATION':
          return {
            ...prevState,
            location:action.payload
          }
          break;
      default:
        return prevState;
    }
  }
});

export default rootReducer;
