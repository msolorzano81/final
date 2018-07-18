import React from 'react';
import axios from 'axios';
class Subscriptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        subscriptions: []
    }
  }


  componentWillMount(){
      const self = this
      axios.get('http://localhost:3002/subscriptions').then(function(thingFromDb){
          self.setState({subscriptions: thingFromDb.data});
      })
  }

  render() {
      console.log("this is the state!!", this.state);
    return (
      <div>
          <h1>Hi!</h1>
          {this.state.subscriptions.map(function(singleThing){
              return(
                  <h1>{singleThing.name}</h1>
              )
          })}
      </div>
    );
  }
}

export default Subscriptions;