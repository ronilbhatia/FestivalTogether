import { connect } from 'react-redux';

import { addUserToSet, removeUserFromSet } from '../../actions/set_actions';
import SetShow from './set_show';

const mapStateToProps = (state, ownProps) => ({
  set: state.entities.sets[ownProps.setId]
});

const mapDispatchToProps = dispatch => ({
  addUserToSet: (festivalId, setId) => dispatch(addUserToSet(festivalId, setId)),
  removeUserFromSet: (festivalId, setId) => dispatch(removeUserFromSet(festivalId, setId))
});

export default connect(mapStateToProps, mapDispatchToProps)(SetShow);