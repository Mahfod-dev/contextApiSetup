import React from 'react'
import { useGlobalContext } from '../context'

const Header = () => {
	const data = useGlobalContext()
	// voir le log de data et utiliser le destructuring
	return <div>je suis un header</div>
}

export default Header
