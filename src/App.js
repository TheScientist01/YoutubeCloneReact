import Header from "./components/Header";
import VideoList from "./components/VideoList";
import SideBar from "./components/SideBar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./screens/Home";
import Watch from "./screens/Watch";

function App() {
  const categories=["Autos & Vehicles","Film & Animation","Music","Pets & Animals","Sports","Short Movies","Travel & Events","Gaming","Videoblogging","People & Blogs","Comedy","Entertainment","News & Politics","Howto & Style","Education","Science & Technology","Nonprofits & Activism","Movies","Anime/Animation","Action/Adventure","Classics","Comedy","Documentary","Drama","Family","Foreign","Horror","Sci-Fi/Fantasy","Thriller","Shorts","Shows","Trailers"];
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/watch" element={<Watch />}></Route>
        </Routes>


      </Router>



    </div>
  );
}

export default App;
