import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { openModal } from '../../actions/modal_actions';
import { logoutUser } from '../../actions/session_actions';

const mapStateToProps = state => ({
  isAuthenticated: state.session.isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  openModal: modal => dispatch(openModal(modal)),
  logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
