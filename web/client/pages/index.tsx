import React, { useEffect, useState } from 'react';

function Home() {

  const [message, setMessage] = useState("Loading");
  const [people, setPeople] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/home")
      .then(response => response.json())
      .then(data => {
        setMessage(data.message);
        setPeople(data.people);
      })
      .catch(error => {
        setMessage("Error loading data");
        console.error(error);
      });
  }, []);

  return (
    <div>
      <div>{message}</div>
      {people.length > 0 ? (
        people.map((person, index) => (
          <div key={index}>
            {person}
          </div>
        ))
      ) : (
        <div>No people found.</div>
      )}
    </div>
  );
}

export default Home;
