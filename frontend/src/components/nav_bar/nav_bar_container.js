import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = state => ({
  isAuthenticated: state.session.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
