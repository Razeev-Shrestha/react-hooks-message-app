import React from 'react'
import { setUsername } from '../state/actions'
import { useAppContext } from './hooks'

const SetUserName = () => {
	const {
		state: { username },
		dispatch,
	} = useAppContext()

	const updateUsername = (e) => {
		dispatch(setUsername(e.target.value))
	}
	return (
		<div>
			<h3>UserName</h3>
			<input value={username} onChange={updateUsername} />
		</div>
	)
}

export default SetUserName
