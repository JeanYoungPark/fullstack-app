import { combineReducers, createStore, Store } from "redux";
import authReducer from "../reducers/authReducer";

// 여러 리듀서를 사용할 때
const rootReducer = combineReducers({
    auth: authReducer,
});

// RootState 타입정의
export type RootState = ReturnType<typeof rootReducer>;

const store: Store<RootState> = createStore(rootReducer);

export default store;
