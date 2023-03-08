import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Form from './Form';

export default class Example extends React.Component {
  constructor(props) {
    super(props)
  }
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <nav>
          {this.props.media.matches && <h1>users</h1>}
          <Form users={this.props.users}/>
          <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
        </nav>
      </Menu>
    );
  }
}