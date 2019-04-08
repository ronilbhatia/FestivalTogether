import { connect } from "react-redux";
import Home from "./home";

const mapStateToProps = ({ session: { user: isAuthenticated } }) => ({
  isAuthenticated
});

export default connect(mapStateToProps)(Home)