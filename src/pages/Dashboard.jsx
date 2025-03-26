import Navbar from '../components/Navbar';

const Dashboard = () => {
  const onLogout = () => {
    console.log("User logged out");
  };

  return (
    <div className="p-4 h-100 w-100 bg-cover ps-10 pt-20 pl-52 overflow-hidden ">
      <h1 className="color-black text-3xl text-bold">Welcome to Max Konnect</h1>
      <Navbar user={{ name: "Guest" }} onLogout={onLogout} />
    </div>
  );
}

export default Dashboard
