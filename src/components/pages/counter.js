import React from "react";
import { connect } from "react-redux";
import { decrement, increment } from "../../redux/slices";
// import { decrement, increment, login, logout } from "../redux/actions";

const mapStateToProps = (state) => {
  return {
    counter: state.coutnerReducer.counter,
    message: state.coutnerReducer.payload,

  };
};

function mapDispatchToProps(dispatch) {
  return {
    incrementCounter: (message) => dispatch(increment(message)),
    decrementCounter: (message) => dispatch(decrement(message)),

  };
}
const Counter = (props) => {
  console.log("props", props);
  return (
    <>

      <button className="btn" onClick={() => props.incrementCounter("Inceremented!")}>
        +
      </button>
      <button className="btn" onClick={() => props.decrementCounter("Decremented!")}>
        -
      </button>
      <br />
      <h2> {props.message}</h2>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);