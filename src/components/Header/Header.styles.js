import { STATUS_BAR_HEIGHT, NAVIGATION_BAR_HEIGHT } from '../../util/dimensions'
import { colors } from '../../common/theme'

export default {
	container: {
		marginTop: STATUS_BAR_HEIGHT,
		backgroundColor: colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
		height: NAVIGATION_BAR_HEIGHT,
	},
	text: {
		color: 'white',
		textAlign: 'center'
	}
}
