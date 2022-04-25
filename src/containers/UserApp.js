import { connect } from 'react-redux'

import { setRoot } from '../actions'
import UserApp from '../components/UserApp'

const mapStateToProps = state => ({
    // openDrawer: state.navDrawers.isOpen,
})
  
const mapDispatchToProps = dispatch => ({
    setRoot: (data) => dispatch(setRoot(data)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserApp)