import ReactDOM from 'react-dom/client';
import {Counter} from './App';

import { Provider } from 'react-redux';
import store from './store';


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <Counter />
    </Provider>
);