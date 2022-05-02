import { connect } from 'react-redux'

import { setRoot, addComponent, updateComponent, selectComponent } from '../actions'
import UserApp from '../components/UserApp'

const mapStateToProps = state => ({
    components: state.components.components,
    selectedComponent: state.components.selectedComponent,
    preview: state.app.preview,
})
  
const mapDispatchToProps = dispatch => ({
    setRoot: (data) => dispatch(setRoot(data)),
    addComponent: (data) => dispatch(addComponent(data)),
    updateComponent: (data) => dispatch(updateComponent(data)),
    selectComponent: (data) => dispatch(selectComponent(data)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserApp)