import { connect } from 'react-redux'

import { setRoot, addComponent } from '../actions'
import RightDrawer from '../components/RightDrawer'

const mapStateToProps = state => ({
    selectedComponent: state.components.selectedComponent,
})
  
const mapDispatchToProps = dispatch => ({
    // setRoot: (data) => dispatch(setRoot(data)),
    // addComponent: (data) => dispatch(addComponent(data)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RightDrawer)