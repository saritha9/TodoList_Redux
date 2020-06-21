import { connect } from 'react-redux'
import {setVisibilityFilter} from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
})
const mapDisptchToprops = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})
export default connect( mapStateToProps, mapDisptchToprops)(Link)