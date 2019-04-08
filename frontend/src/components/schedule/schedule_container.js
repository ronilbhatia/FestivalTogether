import { connect } from 'react-redux';

import { selectSetsByStage } from '../../reducers/selectors';
import { fetchFestival } from '../../actions/festival_actions';
import Schedule from './schedule';

const mapStateToProps = state => ({
  sets: selectSetsByStage(state.entities.sets)
});

const mapDispatchToProps = dispatch => ({
  fetchFestival: festivalId => dispatch(fetchFestival(festivalId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);