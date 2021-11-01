import { connect, } from 'react-redux';
import App from '../App';
import { getContadorValue, } from '../selectors/counter';

import { reset, thick, } from '../actions/counterActions';

const mapStateToProps = (state, ownProps) => ({
    counter: getContadorValue(state),
})

const mapDispatchToProps = dispatch => ({
    thick: () => dispatch(thick()),
    reset: () => dispatch(reset()),
});

// We normally do both in one step, like this:
export default connect(mapStateToProps, mapDispatchToProps)(App);