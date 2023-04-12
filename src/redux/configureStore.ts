// Libraries
import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Reducer
import { rootReducer } from '@redux/rootReducer';

// this configuration has a white list and a black list to discriminate the persistence of the data
const persistConfig = {
	key: 'root',
	storage,
	blacklist: [],
};

// connect configuration with reducers modules
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	devTools: true,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			immutableCheck: false,
			serializableCheck: false,
		}),
});

// connect store with redux persistent
const persistor = persistStore(store);

// Export store and persistor to be used in the index
export { store, persistor };

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
