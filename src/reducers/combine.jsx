import userReducer from './user-reducer';

const reducers = combineReducers({
    userState: userReducer()
});