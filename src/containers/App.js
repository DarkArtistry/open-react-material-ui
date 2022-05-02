import { connect } from 'react-redux'

import { } from '../actions'
import App from '../components/App'

const mapStateToProps = state => ({
    preview: state.app.preview,
})
  
const mapDispatchToProps = dispatch => ({
    // getMe: () => dispatch(getMe()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)