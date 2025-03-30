import Navbar from '../components/Navbar';

const Dashboard = () => {


  return (
    <div
      className="p-4 h-full w-full bg-cover overflow-hidden flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('/pngwing.com.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "repeat",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "overlay",
      }}
    >
      <h1 className="text-white text-6xl font-bold text-center mt-8">PRINTING <br/> CREATIVITY <br/> SOLUTION</h1>
      
    </div>
  );
}

export default Dashboard
