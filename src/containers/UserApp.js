import { connect } from 'react-redux'

import { setRoot, addComponent } from '../actions'
import UserApp from '../components/UserApp'

const mapStateToProps = state => ({
    components: state.components.components,
})
  
const mapDispatchToProps = dispatch => ({
    setRoot: (data) => dispatch(setRoot(data)),
    addComponent: (data) => dispatch(addComponent(data)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserApp)