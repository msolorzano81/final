import React from 'react';
import axios from 'axios';
import SubCard from '../components/SubCard';

class Subscriptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        subscriptions: [],
        category: ''
    }
  }


  componentDidMount() {
      axios.get('http://localhost:3002/api/all')
      .then(subs => {
          console.log('! from the db', subs)
          this.setState({
            subscriptions: subs.data
        });
      })
  }

  

  render() {
      console.log("this is the state!!", this.state);
    return (
      <div>
          <h1>Search by Category</h1>

            <div className="control">
            <div className="select">
                <select>
                <option>Food</option>
                <option>Beverage</option>
                <option>Home/Garden</option>
                <option>Beauty</option>
                <option>Fashion</option>
                <option>Health/Wellness</option>
                <option>Crafting/DIY</option>
                <option>All</option>
                </select>
            </div>
            </div>

            <h1>Search by Delivery Frequency</h1>

            <div className="control">
            <div className="select">
                <select>
                <option>All</option>
                <option>Monthly</option>
                <option>Weekly</option>
                <option>Every 2 Weeks</option>
                <option>Bimonthly</option>
                <option>Quarterly</option>
                </select>
            </div>
            </div>

            <div className="field has-addons">
                <div className="control">
                    <input className="input" type="text" placeholder="Search By Keyword" />
                </div>
                <div className="control">
                    <a className="button is-primary">
                    Search
                    </a>
                </div>
                </div>

            
          {this.state.subscriptions.map(function(sub){
              return(
                  <SubCard
                    name={sub.name}
                    description={sub.description}
                    link={sub.link}
                    price={sub.price}
                    frequency={sub.frequency}
                    category={sub.category}
                  />
              )
          })}
      </div>
    );
  }
}

export default Subscriptions;