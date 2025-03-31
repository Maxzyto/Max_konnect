import Navbar from '../components/Navbar';

const Dashboard = () => {


  return (
    <div
      className="p-4 h-screen w-screen scroll-m-0 bg-transparent overflow-clip flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/pngwing.com.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "overlay",
        overflow: "hidden",
        position: "fixed",
        zIndex: 0,
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        display: "flex",
        justifyContent: "center",

      }}
    >
      <h1 className="text-white text-6xl font-bold p-20 text-center mt-6">PRINTING <br/> CREATIVITY <br/> SOLUTION</h1>
    </div>
  );
}

export default Dashboard
