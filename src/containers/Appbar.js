import { connect } from 'react-redux'

import { togglePreview, selectComponent } from '../actions'
import Appbar from '../components/Appbar'

const mapStateToProps = state => ({
    preview: state.app.preview,
})

const mapDispatchToProps = dispatch => ({
    togglePreview: () => dispatch(togglePreview()),
    selectComponent: (data) => dispatch(selectComponent(data)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Appbar)