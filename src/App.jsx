import Challenge01 from "./challenges/Challenge01";
import DescribingTheUi from "./components/DescribingTheUi";
import Gallery from "./components/Gallery";
import { Profile } from "./components/Profile";

function App() {
  return (
    <div>
      <h1>Describing the UI</h1>
      {/* <DescribingTheUi />
      <Challenge01 /> */}
      <Gallery />
      <Profile />
    </div>
  );
}

export default App;
