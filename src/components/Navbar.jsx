import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    // Simulate fetching user data
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const onLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };
  return (
    <div className='bg-blue-800 text-white p-4'>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
          <li>
            <Link to="/upload">Upload</Link>
          </li>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
          <li>
            <Link to="/receipts">Receipts</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          {user && (
            <li>
              <button onClick={onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Navbar