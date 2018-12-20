import { connect } from "react-redux";
import PumpItUp from "../components/PumpItUp";
import { makeInflateBalloonAction } from "../_actions/actions";

const mapStateToProps = state => ({
  pumpItUp: state.pumpItUp
});

const mapDispatchToProps = dispatch => ({
  inflateBalloon: score => dispatch(makeInflateBalloonAction(score))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PumpItUp);
