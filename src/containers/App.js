import { connect } from 'react-redux'

import { } from '../actions'
import App from '../components/App'

const mapStateToProps = state => ({
    // openDrawer: state.navDrawers.isOpen,
})
  
const mapDispatchToProps = dispatch => ({
    // getMe: () => dispatch(getMe()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)