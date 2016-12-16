import Inferno from 'inferno';
import Component from 'inferno-component';

class Message extends Component {
  render() {
    return (
      <div className="message">
        {this.props.message}
      </div>
    );
  }
}

export default Message;
