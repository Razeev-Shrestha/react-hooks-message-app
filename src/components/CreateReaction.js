import React from 'react'
import { REACTION_OBJECTS } from '../state/types'
import { useAppContext } from './hooks'
import { createReaction } from '../state/actions'

const CreateReaction = ({ messageId }) => {
	const {
		pubsub: { publish },
		state: { username },
	} = useAppContext()
	const publishReaction = ({ type, emoji }) => () => {
		publish(createReaction({ type, emoji, username, messageId }))
	}
	return (
		<div className='CreateReaction'>
			{REACTION_OBJECTS.map(({ type, emoji }) => {
				return (
					<span key={type} onClick={publishReaction({ type, emoji })}>
						{emoji}
					</span>
				)
			})}
		</div>
	)
}

export default CreateReaction
