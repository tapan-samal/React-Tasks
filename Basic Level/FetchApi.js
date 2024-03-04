import React, { useEffect, useState } from "react";

const FetchApi = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const handleDeleteItem = (itemId) => {
      return setData(data.filter(item => item.id !== itemId))
   };

  return (
    <>
      <h2>Fetch Data from API</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td><button onClick={() => handleDeleteItem(item.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table> <br />
      <button onClick={() => setData([])}>Clear Data</button>
    </>
  );
};
export default FetchApi;
