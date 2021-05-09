import React, { useState } from 'react'
import { newMessage } from '../state/actions'
import { useAppContext } from './hooks'

const PublishMessage = () => {
	const {
		state: { username },
		pubsub: { publish },
	} = useAppContext()
	const [message, setMessage] = useState('')
	const publishMessage = () => {
		publish(newMessage({ message, username }))
		setMessage('')
	}
	const handleKeyPress = (e) => {
		if (e.key === 'Enter') publishMessage()
	}
	return (
		<div>
			<h3>Got Something to say ?</h3>
			<input
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				onKeyPress={handleKeyPress}
			/>{' '}
			<button onClick={publishMessage}>Publish This Message</button>
		</div>
	)
}

export default PublishMessage
