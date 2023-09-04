import './App.css';
import ImageDisplay from './ImageDisplay/ImageDisplay';
import TextInput from './TextInput/TextInput';
import TextOverlay from './TextOverlay/TextOverlay';
import './App.css'; 


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Initialize your state variables here if needed
    };
  }

  render() {
    return (
      <div className="App">
        {/* Render the ImageDisplay component */}
        <ImageDisplay />

        {/* Render the TextInput component */}
        <TextInput />

        {/* Render the TextOverlay component */}
        <TextOverlay />
      </div>
    );
  }
}



export default App;
