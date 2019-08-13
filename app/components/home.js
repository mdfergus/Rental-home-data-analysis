import React, { Component } from 'react';
import Axios from 'axios';
import Spinner from 'react-spinkit';
import Card from './article-card';

class Home extends Component {
  state = {
    info: []
  };

  async componentDidMount() {
    const res = await Axios.get('/api/rental/sfh/zip/18966');
    const info = res.data;
    this.setState({ info })
  }

  handleSubmit = value => {
    console.log(value);
  };

  render() {
    const info = this.state.info;
    if (!info[0]) {
      return (
        <div className="center">
          <Spinner name="ball-spin-fade-loader" color="coral" />
        </div>
      );
    }
    return (
      <div>
        {info.map(ele => <Card info={ele} key={ele.RegionID} />)}
      </div>
    );
  }
}

export default Home;