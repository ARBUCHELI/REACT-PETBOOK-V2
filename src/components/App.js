import React from 'react';
import { Profile } from './Profile';
import { Directory } from './Directory';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUsername: null,
    };
    this.handleChoose = this.handleChoose.bind(this);
    this.handleReturnToDirectoryClick = this.handleReturnToDirectoryClick.bind(
      this
    );
  }

  handleChoose(newUsername) {
    this.setState({ currentUsername: newUsername });
  }

  handleReturnToDirectoryClick() {
    this.setState({ currentUsername: null });
  }

  render() {
    let body;
    if (this.state.currentUsername) {
      body = (
        <Profile
          username={this.state.currentUsername}
          onChoose={this.handleChoose}
        />
      );
    } else {
      body = <Directory onChoose={this.handleChoose} />;
    }

    return (
      <div className="App">
        <header style={{marginTop: '2em', borderRadius: '10px'}}>
          <h1 style={{marginLeft: '1em', fontSize: '3em', color: 'white'}}>PetBook</h1>
          <nav>
            {this.state.currentUsername && (
              <button className="GoDirectory" onClick={this.handleReturnToDirectoryClick} style={{backgroundColor: 'white', borderRadius: '5px', marginRight: '1em', padding: '0.5em 1em 0.5em 1em', fontWeight: 'bold', color: '#3b5998'}}>
                PETS
              </button>
            )}
          </nav>
        </header>
        <main>{body}</main>
        <footer>
          <p>Author: ANDRES R. BUCHELI</p>
          <p>Bucheli Web Development ©</p>
          <p><a href="radio_seattle@hotmail.com">radio_seattle@hotmail.com</a></p>
        </footer>
      </div>
    );
  }
}

export default App;