import React, { Component } from 'react';

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
            <div><a href='https://localhost:3000' className='navbar-brand'>게시판</a></div>
            <div><a href='https://localhost:3000' className='navbar-brand'> 다른게시판</a></div>
            <div><a href='https://localhost:3000' className='navbar-brand'> 또 다른 게시판</a></div>
          </nav>

        </header>
      </div>
    )
      ;
  }
}

export default HeaderComponent;