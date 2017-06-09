import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'
import sty from './Header.styles'

export default class Header extends React.Component {
	static propTypes = {
		text: PropTypes.string.isRequired
	}
	render() {
		return (
			<View style={sty.container}>
				<Text style={sty.text}>
					{this.props.text || "Woops, pass a prop."}
				</Text>
			</View>
		)
	}
}
