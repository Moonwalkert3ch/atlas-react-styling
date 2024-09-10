import Footer from "./components/Footer";
import MusicPlayer from "./MusicPlayer";
import { CoverArt } from "./components/CoverArt";
import { SongTitle } from "./components/SongTitle";
import { PlayControls } from "./components/PlayControls";
import { VolumeControl } from "./components/VolumeControl";

function App() {
  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-screen">
      <CoverArt />
      <SongTitle />
      <PlayControls />
      <VolumeControl />
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
