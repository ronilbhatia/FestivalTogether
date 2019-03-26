import { connect } from "react-redux";
import Home from "./home";
import { logoutUser } from "../../actions/session_actions";

const mapStateToProps = ({ session: { user: currentUser, isAuthenticated } }) => ({
  currentUser,
  isAuthenticated
});

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)