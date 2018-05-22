import React, {Component} from 'react';

class Hello extends Component{
  constructor(props){
    super(props);
    this.state = {greeting:'Howdy',}
  };
  render(){
      return(
          <div>
            <h1>{this.state.greeting}</h1>
            <h2>{this.props.friend}</h2>
            <p>Congrats you have created your first React Component...kinda</p>
          </div>
        );
      }
}

Hello.defaultProps = {
  friend: 'Partner!!',
};

export default Hello;
