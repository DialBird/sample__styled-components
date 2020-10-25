import React from 'react'
import styled, { keyframes } from 'styled-components'

/** Animation dots, we use the styled.span syntax
 *  because keyframes aren't supported in the object syntax
 */
const transition = keyframes({
	'0%': { opacity: 0.3 },
	'50%': { opacity: 1 },
	'100%': { opacity: 0.3 },
})

const Dot = styled.span`
	font-size: 180px;
	animation: ${transition} 1.5s ease-out infinite;
`

export const AnimatingDots = () => (
	<>
		<span role="presentation">
			<Dot>·</Dot>
			<Dot style={{ animationDelay: '200ms' }}>·</Dot>
			<Dot style={{ animationDelay: '400ms' }}>·</Dot>
		</span>
	</>
)
