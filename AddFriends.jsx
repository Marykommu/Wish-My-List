import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AddFriends = () => {
  const [email, setEmail] = useState('');
  const [friends, setFriends] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('friendsList'));
    if (stored) {
      setFriends(stored);
    }
  }, []);

  const AddEmail = () => {
    if (!email) {
      setMessage('Please enter an email address.');
      return;
    }

    const updated = [...friends, email];
    setFriends(updated);
    localStorage.setItem('friendsList', JSON.stringify(updated));
    setEmail('');
    setMessage(' Friend added successfully!');
  };

  return (
    <div style={{ padding: '20px' }}>
      <Link to="/friends"><i className="bi bi-arrow-left"></i> Friends</Link>

      <h3>Add Friend</h3>
      {message && <p>{message}</p>}

      <p>Add someone to your friends by entering their email address. (They must already have an account on My Wishlist.)</p>
     <p>Email</p>
      <input
        type="email" placeholder="Friend's email address" value={email} onChange={(e) => setEmail(e.target.value)}
        style={{ marginRight: '10px' }}/>
      <button onClick={AddEmail}>Add</button>
    </div>
  );
};

export default AddFriends;
