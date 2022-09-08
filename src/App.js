import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import VideoList from "./components/VideoList";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App" style={{display: "flex"}}>
        <SideBar />
        
        <div style={{width:"100%"}}>
          <Header />
          <nav className="row mr-2 navbar navbar-white bg-white" style={{borderBottom: "2px solid #e5e5e5"}}>
            <button className="btn btn-lg bg-light">Music</button>
          </nav>
          <VideoList />
        </div>
          
        
    </div>
  );
}

export default App;
