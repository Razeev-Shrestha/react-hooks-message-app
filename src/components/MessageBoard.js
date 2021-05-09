import React from 'react'
import CreateReaction from './CreateReaction'
import { useAppContext } from './hooks'
import MessageReactions from './MessageReactions'

const MessageBoard = () => {
	const {
		state: { messages, reactionsMap },
	} = useAppContext()
	return (
		<div>
			{messages.map(({ id, message, username, timestamp }) => {
				return (
					<div key={id}>
						<h4>{new Date(timestamp).toLocaleString()}</h4>
						<p>{message}</p>
						<h4>--{username}</h4>
						<CreateReaction messageId={id} />
						<MessageReactions messageReactions={reactionsMap[id]} />
						<hr />
					</div>
				)
			})}
		</div>
	)
}

export default MessageBoard
