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
      default:
        return prevState;
    }
  }
});

export default rootReducer;
