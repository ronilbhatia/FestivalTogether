import { connect } from 'react-redux';

import { selectSetsForUser } from '../../reducers/selectors'
import { fetchFestival } from '../../actions/festival_actions';
import { addUserToSet, removeUserFromSet } from '../../actions/set_actions';
import { openSetModal } from '../../actions/modal_actions';
import MySchedule from './my_schedule'

const mapStateToProps = state => ({
  sets: selectSetsForUser(Object.values(state.entities.sets), state.session.user),
  currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
  fetchFestival: festivalId => dispatch(fetchFestival(festivalId)),
  addUserToSet: (festivalId, setId) => dispatch(addUserToSet(festivalId, setId)),
  removeUserFromSet: (festivalId, setId) => dispatch(removeUserFromSet(festivalId, setId)),
  openSetModal: (modal, set) => dispatch(openSetModal(modal, set))
});

export default connect(mapStateToProps, mapDispatchToProps)(MySchedule);