import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/cake/cakeAction";
import { buyIcecream } from "../redux/icecream/icecreamAction";

function CakeContainer(props) {
  return (
    <>
      <div>
        <h2>Number of cakes: {props.numCakes}</h2>
        <button onClick={props.buyCake}>Buy Cake</button>
      </div>

      <div>
        <h2>Number of ice creams: {props.numIcecream}</h2>
        <button onClick={props.buyIcecream}>Buy Ice Cream</button>
      </div>
    </>
  );
}

// Convert state to props
const mapStateToProps = (state) => {
  return {
    numCakes: state.cake.numCakes,
    numIcecream: state.iceCream.numIceCream,
  };
};

// Convert dispatch to props
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    buyIcecream: () => dispatch(buyIcecream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
