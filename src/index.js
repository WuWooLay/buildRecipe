import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { RootReducer } from './reducer';

import App from './component/App';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Theme from './Theme';

const store = createStore(RootReducer);
store.subscribe(() => {
	console.log('store.getState()', store.getState());
});

const ReactApp = () => (
	<MuiThemeProvider theme={Theme}>
		<Provider store={store}>
			<App />
		</Provider>
	</MuiThemeProvider>
);

ReactDOM.render(<ReactApp />, document.getElementById('root'));
