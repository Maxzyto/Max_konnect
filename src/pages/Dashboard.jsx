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
      <h1 className="text-white text-6xl font-bold text-center">Welcome to Max Konnect</h1>
      <div className="text-center mt-4 text-white text-xl">
        <p>Connect with us for all your needs.</p>
        <p>We are here to help you.</p>   
      </div>
    </div>
  );
}

export default Dashboard
