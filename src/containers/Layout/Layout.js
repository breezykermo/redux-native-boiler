import React from 'react'
import { View, Text } from 'react-native'
import styles from './Layout.styles'

export default class Layout extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>Ciao bella</Text>
			</View>
		)
	}
}
