import Inferno from 'inferno';
import Component from 'inferno-component';
import logo from './logo.svg';
import './App.css';
import Message from './message';
import Dropzone from 'react-dropzone'; 
import FileReaderInput from 'react-file-reader-input';


class App extends Component {
  constructor() {
    super();
    // set initial time:
    this.state = {
      messages: [], 
      messagesRendered: []
    };
  }

  onComponentDidUpdate() {

    console.log("did mount");
  }
  onDrop(acceptedFiles, rejectedFiles, context) {
    const num_lines = 40;
    const chatFile = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = function(event) {
      const lines = event.target.result.split('\n');
      this.setState({ messages: lines.slice(0, num_lines) });
      this.renderMessages();
    }.bind(context);

    reader.readAsText(chatFile);
  }

  renderMessages() {
    const messagesRendered = []
    this.state.messages.forEach((msg) => {
      messagesRendered.push(<Message message={msg} />);
    })
    this.setState({ messagesRendered });
  }

  render() {
    // let messages = [<Message message={'eeeeeee'} />, <Message message={'eeeeeee'} />, <Message message={'eeeeeee'} />];
    let msg = '';

    return (
      <div className="App">
        <Dropzone onDrop={(accepted, rejectedFiles) => {this.onDrop(accepted, rejectedFiles, this)}}>
          <div>Try dropping some files here, or click to select files to upload.</div>
        </Dropzone>

        {this.state.messagesRendered}
      </div>
    );
  }
}

export default App;
