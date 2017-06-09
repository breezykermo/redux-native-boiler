import React from 'react'
import { Provider } from 'react-redux'
import Layout from './containers/Layout'
import configureStore from './redux/configureStore'

const store = configureStore({})

export default () => (
	<Provider store={store}>
		<Layout />
	</Provider>
)
