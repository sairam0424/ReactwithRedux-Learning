import React from 'react'
import { connect } from 'react-redux'
// import { connect } from 'http2'
import { buyCake, buyIcecream } from '../redux'
function ItemContainer(ownProps) {
  return (
    <div>

        <h1>

            Item -  {ownProps.item}
        </h1>
      
    </div>
  )
}

const mapStateToProps = (state,ownProps) =>{

    const itemState = ownProps.cake ? state.cake.numCakes : state.cake.numIceCreams

    return {item:itemState}
}

const mapDispatchToProps = (dispatch,ownProps)=>{

    const dispatchFunction = ownProps.cake ? ()=>dispatch(buyCake(1)) : ()=>dispatch (buyIcecream)
    
    return {

      buyItem : dispatchFunction

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)