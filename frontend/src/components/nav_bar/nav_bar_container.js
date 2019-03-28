import { connect } from 'react-redux';
import NavBar from './nav_bar';

const mapStateToProps = state => ({
  isAuthenticated: state.entities.session.isAuthenticated
});

export default connect(mapStateToProps)(NavBar);
