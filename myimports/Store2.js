import { createStore, combineReducers} from 'redux';
import CountReducer from './countReducer2';
 
const rootReducer = combineReducers({
  data: CountReducer,
});
 
export const store = createStore(rootReducer);