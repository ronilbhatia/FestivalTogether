import { connect } from "react-redux";
import Home from "./home";

const mapStateToProps = ({ session: { user: currentUser, isAuthenticated } }) => ({
  currentUser,
  isAuthenticated
});

export default connect(mapStateToProps)(Home)