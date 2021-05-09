import { NEW_MESSAGE, SET_USERNAME } from './types'
import uuid from 'uuid/dist/v4'

export const newMessage = ({ message, username }) => ({
	type: NEW_MESSAGE,
	item: { id: uuid(), message, username, timestamp: Date.now() },
})

export const setUsername = (username) => ({
	type: SET_USERNAME,
	username,
})

export const createReaction = ({ type, emoji, username, messageId }) => ({
	type,
	item: { id: uuid(), timestamp: Date.now(), emoji, username, messageId },
})
