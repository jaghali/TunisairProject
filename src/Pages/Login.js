import React, { useState } from "react";

const Login = () => {
  const [matricule, setMatricule] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [pncData, setPncData] = useState([]); // To store the PNC table data

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const userCredentials = { MATRICULE: matricule, Pwd: password };

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userCredentials),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }
      
      const data = await response.json();
      localStorage.setItem("token", data.token); // Save JWT token in localStorage
      window.location.href = "/dashboard"; // Redirect on successful login

      // Now fetch the PNC data after login
      fetchPncData();
    } catch (err) {
      setError("Login failed: " + err.message);
    }
  };

  const fetchPncData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/pnc", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch PNC data");
      }

      const data = await response.json();
      console.log("PNC data received: ", data); // Log the response
      setPncData(data); // Set the data to the state
    } catch (err) {
      setError("Error fetching PNC data: " + err.message);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>MATRICULE:</label>
          <input
            type="text"
            value={matricule}
            onChange={(e) => setMatricule(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}

      {/* Display PNC data after login */}
      {pncData.length > 0 ? (
        <div>
          <h3>PNC Table Data</h3>
          <table>
            <thead>
              <tr>
                <th>MATRICULE</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>BASE</th>
                <th>COLLEGE</th>
                <th>SECTEUR</th>
                <th>Pwd</th>
              </tr>
            </thead>
            <tbody>
              {pncData.map((user, index) => (
                <tr key={index}>
                  <td>{user.MATRICULE}</td>
                  <td>{user.Nom}</td>
                  <td>{user.Prenom}</td>
                  <td>{user.BASE}</td>
                  <td>{user.COLLEGE}</td>
                  <td>{user.SECTEUR}</td>
                  <td>{user.Pwd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Login;
