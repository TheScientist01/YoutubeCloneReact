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
          <nav className="row mr-2 navbar navbar-white bg-white categories" style={{borderBottom: "2px solid #e5e5e5", justifyContent:"flex-start"}}>
            <button className="btn btn-lg py-1 px-3 mx-3 text-white" style={{background:"black" ,fontSize: "17px", borderRadius:"500px"}}> All </button>
            <button className="btn btn-lg py-1 px-3  mr-3 " style={{fontSize: "17px", borderRadius:"500px"}}> Music </button>
            <button className="btn btn-lg py-1 px-3  mr-3 " style={{fontSize: "17px", borderRadius:"500px"}}> Music </button>
            <button className="btn btn-lg py-1 px-3  mr-3 " style={{fontSize: "17px", borderRadius:"500px"}}> Music </button>
            <button className="btn btn-lg py-1 px-3  mr-3 " style={{fontSize: "17px", borderRadius:"500px"}}> Music </button>
            <button className="btn btn-lg py-1 px-3  mr-3 " style={{fontSize: "17px", borderRadius:"500px"}}> Music </button>
            <button className="btn btn-lg py-1 px-3  mr-3 " style={{fontSize: "17px", borderRadius:"500px"}}> Music </button>
            <button className="btn btn-lg py-1 px-3  mr-3 " style={{fontSize: "17px", borderRadius:"500px"}}> Music </button>
            <button className="btn btn-lg py-1 px-3  mr-3 " style={{fontSize: "17px", borderRadius:"500px"}}> Music </button>
            <button className="btn btn-lg py-1 px-3  mr-3 " style={{fontSize: "17px", borderRadius:"500px"}}> Music </button>
            <button className="btn btn-lg py-1 px-3  mr-3 " style={{fontSize: "17px", borderRadius:"500px"}}> Music </button>
            <button className="btn btn-lg py-1 px-3  mr-3 " style={{fontSize: "17px", borderRadius:"500px"}}> Music </button>
            <button className="btn btn-lg py-1 px-3  mr-3 " style={{fontSize: "17px", borderRadius:"500px"}}> Music </button>
            <button className="btn btn-lg py-1 px-3  mr-3 " style={{fontSize: "17px", borderRadius:"500px"}}> Music </button>
            <button className="btn btn-lg py-1 px-3  mr-3 " style={{fontSize: "17px", borderRadius:"500px"}}> Music </button>
            
            
          </nav>
          <VideoList />
        </div>
          
        
    </div>
  );
}

export default App;
