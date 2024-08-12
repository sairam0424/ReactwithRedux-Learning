
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import rootReducer from './rootReducer';
//importing a default export
import logger  from 'redux-logger';

import { composeWithDevTools } from '@redux-devtools/extension/lib/types/logOnly';
const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)))
export default store
