import { connect } from 'react-redux';

import { selectSetsByStage } from '../../reducers/selectors';
import { fetchFestivalByName } from '../../actions/festival_actions';
import { addUserToSet, removeUserFromSet } from '../../actions/set_actions';
import { openSetModal } from '../../actions/modal_actions';
import Schedule from './schedule';

const mapStateToProps = state => ({
  festivalId: state.ui.currFestival,
  sets: selectSetsByStage(Object.values(state.entities.sets)),
  currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
  fetchFestivalByName: (name, year) => dispatch(fetchFestivalByName(name, year)),
  addUserToSet: (festivalId, setId) => dispatch(addUserToSet(festivalId, setId)),
  removeUserFromSet: (festivalId, setId) => dispatch(removeUserFromSet(festivalId, setId)),
  openSetModal: (modal, set) => dispatch(openSetModal(modal, set))
});

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);