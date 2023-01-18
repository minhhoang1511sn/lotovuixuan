import BackgroundImg from './backgroundImg/backgroundimg';
import VideoBackground from './videobackground/VideoBackground';
import Header from './header/header';
import Panel from './panel/panel';
import Sodagoi from './sodagoi/sodagoi';
import Buttons  from './buttons/buttons';
import './App.css';


function App() {
  return (
    <div className="App">
      <VideoBackground/>
      <BackgroundImg/>
      <Header/>
      <Panel/>
      <Sodagoi/>
      <Buttons/>
    </div>
  );
}

export default App;
