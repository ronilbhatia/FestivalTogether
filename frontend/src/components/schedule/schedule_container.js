import { connect } from 'react-redux';

import { selectSetsByStage } from '../../reducers/selectors';
import { fetchFestivals } from '../../actions/festival_actions';
import Schedule from './schedule';

const mapStateToProps = state => ({
  sets: selectSetsByStage(state.entities.sets)
});

const mapDispatchToProps = dispatch => ({
  fetchFestivals: festivalId => dispatch(fetchFestivals())
});

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);