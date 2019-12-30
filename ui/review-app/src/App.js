import React, {Component} from 'react';
import Restaurants from './components/restaurants';

class App extends Component {
  render() {
    return (
      <Restaurants restaurants={this.state.restaurants} />
        )
    }

    state = {
        restaurants: []
    };

    componentDidMount() {
        fetch('https://lo3kcg87r8.execute-api.us-east-1.amazonaws.com/dev')
            .then(res => res.json())
            .then((data) => {
                this.setState({ restaurants: data })
            })
            .catch(console.log)
    }
  }

export default App;
