import { combineReducers, createStore, Store } from "redux";
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from "../reducers/authReducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const authPersistConfig = {
    key: 'auth',
    storage: storage,
    whitelist: ['isLoggedIn', 'token'], // 로그인 정보만 영구적으로 저장
};

// 여러 리듀서를 사용할 때
const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
});

// RootState 타입정의
export type RootState = ReturnType<typeof rootReducer>;

const store: Store<RootState> = createStore(rootReducer, composeWithDevTools());
const persistor = persistStore(store);

export {store, persistor};
