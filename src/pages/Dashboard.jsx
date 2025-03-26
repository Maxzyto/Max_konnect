import Navbar from '../components/Navbar';

const Dashboard = () => {
  const onLogout = () => {
    console.log("User logged out");
  };

  return (
    <div className="p-4 h-100 w-100 bg-cover ps-10 pt-20 pl-52 overflow-hidden" >
      <Navbar user={{ name: "Guest" }} onLogout={onLogout} />
      <h1 className="color-black text-6xl text-bold w-screen ">Welcome to Max Konnect</h1>
    </div>
  );
}

export default Dashboard
