import React, { useState, useEffect } from 'react';
import './App.css';

function Exhibit({ heading, children }) {
  return (
    <div className="Exhibit">
      <h2>{heading}</h2>
      <div className="Exhibit-content">
        {children}
      </div>
    </div>
  );
}

function IPAddressComponent({ ipVersion }) {
  const [ipAddress, setIPAddress] = useState('');

  useEffect(() => {
    // Fetch the IP address from the ipify API
    fetch(`https://api64.ipify.org?format=json&${ipVersion}`)
      .then(response => response.json())
      .then(data => setIPAddress(data.ip))
      .catch(error => console.error('Error fetching IP address:', error));
  }, [ipVersion]);

  return (
    <div>
      <p>Your public {ipVersion} address is: {ipAddress}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Exhibit heading="IPv4 Address">
          <IPAddressComponent ipVersion="ipv4" />
        </Exhibit>
        <Exhibit heading="IPv6 Address">
          <IPAddressComponent ipVersion="ipv6" />
        </Exhibit>
      </header>
    </div>
  );
}

export default App;
