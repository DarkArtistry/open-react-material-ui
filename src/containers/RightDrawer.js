import { connect } from 'react-redux'

import { updateSelectedComponent } from '../actions'
import RightDrawer from '../components/RightDrawer'

const mapStateToProps = state => ({
    selectedComponent: state.components.selectedComponent,
})
  
const mapDispatchToProps = dispatch => ({
    updateSelectedComponent: (data) => dispatch(updateSelectedComponent(data)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(RightDrawer)