import React from 'react'
import { View, Text } from 'react-native'
import sty from './Layout.styles'
import Header from '../../components/Header'

export default class Layout extends React.Component {
	render() {
		return (
			<View style={sty.container}>
				<Header text="breezykermo's WORLD" />
				<View style={sty.body}>
					<Text>Ciao bella</Text>
				</View>
			</View>
		)
	}
}
