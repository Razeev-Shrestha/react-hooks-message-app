import React, { useEffect, useReducer } from 'react'
import Context from './context'

import MessageBoard from './components/MessageBoard'
import PublishMessage from './components/PublishMessage'
import reducer, { initialState } from './state/reducer'

import PubSub from './pubsub'
import SetUserName from './components/SetUserName'

const pubsub = new PubSub()

const App = () => {
	const [state, dispatch] = useReducer(reducer, initialState)

	useEffect(() => {
		pubsub.addListener({
			message: (messageObject) => {
				const { channel, message } = messageObject
				console.log('Received message', message, 'channel', channel)

				dispatch(message)
			},
		})
	}, [])
	console.log('state', state)

	return (
		<Context.Provider value={{ state, dispatch, pubsub }}>
			<h2>Message App !!!</h2>
			<SetUserName />
			<hr />
			<PublishMessage />
			<hr />
			<MessageBoard />
		</Context.Provider>
	)
}

export default App
