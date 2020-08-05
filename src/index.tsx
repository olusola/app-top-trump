import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import 'bootstrap/dist/css/bootstrap.css'

import * as serviceWorker from './serviceWorker'
import App from './App'
import HistoryContainer from './containers/History/HistoryContainer'
import gameReducer from './reduxStore/gameReducer'
import historyReducer from './reduxStore/historyReducer'

const client = new ApolloClient({
  uri: 'https://swapi.graph.cool/',
  cache: new InMemoryCache()
})

const root = combineReducers({
  game: gameReducer,
  history: historyReducer
})
const store = createStore(root)

ReactDOM.render(
  <ApolloProvider client={client}>
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Route path="/" component={App} exact/>
            <Route path="/history" component={HistoryContainer} exact/>
          </Router>
        </Provider>
      </React.StrictMode>
    </ApolloProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
