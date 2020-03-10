import { combineReducers } from 'redux';
import ShoppingListReducer from './ShoppingList/reducer';

const rootReducer = combineReducers({
    shoppingList: ShoppingListReducer
});

export default rootReducer;