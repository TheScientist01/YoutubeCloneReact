import SideBar from "../components/SideBar"
import Header from "../components/Header"
import VideoList from "../components/VideoList"


const Home = () => {
    return (
        <div style={{ display: "flex" }}>
            <SideBar />
            <div style={{ width: "100%", marginLeft: "80px"}}>
                <Header />
                <nav className="row mr-2 navbar navbar-white bg-white categories" style={{ borderBottom: "2px solid #e5e5e5", justifyContent: "flex-start" }}>
                    <button className="btn my-1 btn-lg py-1 px-3 mx-3 text-white" style={{ background: "black", fontSize: "17px", borderRadius: "500px" }}> All </button>
                    <button className="btn btn-lg py-1 px-3  mr-3 " style={{ fontSize: "17px", borderRadius: "500px" }}> Music </button>
                    <button className="btn btn-lg py-1 px-3  mr-3 " style={{ fontSize: "17px", borderRadius: "500px" }}> Music </button>
                    <button className="btn btn-lg py-1 px-3  mr-3 " style={{ fontSize: "17px", borderRadius: "500px" }}> Music </button>
                    <button className="btn btn-lg py-1 px-3  mr-3 " style={{ fontSize: "17px", borderRadius: "500px" }}> Music </button>
                    <button className="btn btn-lg py-1 px-3  mr-3 " style={{ fontSize: "17px", borderRadius: "500px" }}> Music </button>
                    <button className="btn btn-lg py-1 px-3  mr-3 " style={{ fontSize: "17px", borderRadius: "500px" }}> Music </button>
                    <button className="btn btn-lg py-1 px-3  mr-3 " style={{ fontSize: "17px", borderRadius: "500px" }}> Music </button>
                    <button className="btn btn-lg py-1 px-3  mr-3 " style={{ fontSize: "17px", borderRadius: "500px" }}> Music </button>
                    <button className="btn btn-lg py-1 px-3  mr-3 " style={{ fontSize: "17px", borderRadius: "500px" }}> Music </button>
                    <button className="btn btn-lg py-1 px-3  mr-3 " style={{ fontSize: "17px", borderRadius: "500px" }}> Music </button>
                    <button className="btn btn-lg py-1 px-3  mr-3 " style={{ fontSize: "17px", borderRadius: "500px" }}> Music </button>
                    <button className="btn btn-lg py-1 px-3  mr-3 " style={{ fontSize: "17px", borderRadius: "500px" }}> Music </button>
                    <button className="btn btn-lg py-1 px-3  mr-3 " style={{ fontSize: "17px", borderRadius: "500px" }}> Music </button>
                    <button className="btn btn-lg py-1 px-3  mr-3 " style={{ fontSize: "17px", borderRadius: "500px" }}> Music </button>


                </nav>
                <VideoList type={1}/>
            </div>
        </div>
    )
};

export default Home;