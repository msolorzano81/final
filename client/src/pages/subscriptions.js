import React from 'react';
import axios from 'axios';
import SubCard from '../components/SubCard';
import SavedCard from '../components/SavedCard';
import NavSignIn from '../components/NavBar_signin'

class Subscriptions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subscriptions: [],
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        // this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.get('/api/posts/category/' + event.target.value)
            .then(subs => {
                console.log('! from the db', subs)
                this.setState({
                    subscriptions: subs.data
                });
            })
    }

    // handleInputChange = event => {

        handleInputChange = (event) => {
        
            // const target = event.target.value.name;
            // const target = event.target.value.category;

            
          
        
            this.setState({
            

            });
          }
    //     this.setState ({
    //     [event.target.elements.name]: event.target.elements.name.value,
    //     [event.target.elements.description]: event.target.elements.description.value,
    //     [event.target.elements.link.value]: event.target.elements.link.value,
    //     [event.target.elements.price.value]: event.target.elements.price.value,
    //     [event.target.elements.frequency.value]: event.target.elements.frequency.value,
    //     [event.target.elements.category.value]: event.target.elements.category.value
    //     });

    // }

    handleFormSubmit(event) {
        
        event.preventDefault();
        axios.post('/api/posts/' + event.target.value)
            .then(subs => {
                console.log('! from the db', subs)
                this.setState({
                    subscriptions: subs.data
                });
            })
    }


  componentDidMount() {
      axios.get('/api/all')
      .then(subs => {
          console.log('! from the db', subs)
          this.setState({
            subscriptions: subs.data
        });
      })
  }

  

  render() {
      
    return (
        <div>
            <NavSignIn />
            <div className="columns">
                <div className="column no-scroll">
                    <div className="boxSearch">
                        <h1>Search by Category</h1>

                            <div className="control">
                            <div className="select">
                                <select onChange={this.handleSubmit} value={this.state.value}>
                                <option value="All">All</option>
                                <option value="Food">Food</option>
                                <option value="Bevs">Beverage</option>
                                <option value="Home & Garden">Home/Garden</option>
                                <option value="Beauty">Beauty</option>
                                <option value="Fashion">Fashion</option>
                                <option value="Health & Wellness">Health/Wellness</option>
                                <option value="Crafting & DIY">Crafting/DIY</option>

                                
                                </select>
                            </div>
                            </div>

                        <br />
                        <h2>Or</h2>
                        <br />

                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="text" placeholder="Search By Keyword" />
                            </div>
                            <div className="control">
                                <a className="button is-link">Search</a>
                            </div>
                        </div>
                    </div>
                    
                    <br />

                    <div className="field addBox" onSubmit={this.handleFormSubmit}>
                        <label class="label">Add a Subscription Box</label>
                        <div class="control">
                            <input 
                                value={this.state.name}
                                onChange={this.handleInputChange}
                                class="input" 
                                type="text" 
                                placeholder="Name of Subscription Box (Required)" 
                            />
                        </div>

                        <br />

                        <label class="label">Description</label>
                        <div class="control">
                            <textarea 
                                value={this.state.description}
                                onChange={this.handleInputChange}
                                class="textarea" 
                                placeholder="Write Description of Box Here">
                            </textarea>
                        </div>

                        <br />
                        
                        <label class="label">Link</label>
                        <div class="control">
                            <input
                                value={this.state.link}
                                onChange={this.handleInputChange} 
                                class="input" 
                                type="text" 
                                placeholder="Subscription Box Link (Required)"
                            />
                        </div>

                        <br />
                        
                        <label class="label">Price</label>
                        <div class="control">
                            <input 
                                value={this.state.price}
                                onChange={this.handleInputChange}
                                class="input" 
                                type="text" 
                                placeholder="Write Price of Box Here"
                            />
                        </div>

                        <br />
                        
                        <label class="label">Frequency</label>
                        <div class="control">
                            <input
                                value={this.state.frequency}
                                onChange={this.handleInputChange} 
                                class="input" 
                                type="text" 
                                placeholder="Write Delivery Frequency of Box Here"
                            />
                        </div>

                        <br/>

                        <label class="label">Choose Category</label>
                        <div className="control">
                        <div className="select">
                            <select onChange={this.handleFormSubmit} value={this.state.value}>
                            <option value="Food">Food</option>
                            <option value="Bevs">Beverage</option>
                            <option value="Home & Garden">Home/Garden</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Fashion">Fashion</option>
                            <option value="Health & Wellness">Health/Wellness</option>
                            <option value="Crafting & DIY">Crafting/DIY</option>
                            
                            </select>
                        </div>
                        </div>

                        <br />

                        <a class="button is-link">Add a New Subscription Box</a>
                    </div>
                </div>
        
                <div className="column boxlist">
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

            </div>
            


      </div>
    );
  }
}

export default Subscriptions;