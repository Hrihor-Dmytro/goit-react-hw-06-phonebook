import { createSlice } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const phonebookSlice = createSlice({
  name: 'phonebook',
  initialState: { contacts: [], filter: '' },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },

    removeContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },

    filterChange(state, action) {
      state.filter = action.payload;
    },
  },
});
export const { addContact, removeContact, filterChange } =
  phonebookSlice.actions;

export const getContactsValue = state => state.phonebook;

console.log(phonebookSlice);

const persistConfig = {
  key: 'root',
  storage,
};

const PhonebookReducer = persistReducer(persistConfig, phonebookSlice.reducer);

export const store = configureStore({
  reducer: {
    phonebook: PhonebookReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});
export const persistor = persistStore(store);
