import React, { useState } from 'react';

const App = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Jim', age: 35 }
  ]);
  const [filteredData, setFilteredData] = useState([]);

  const handleFilter = (e) => {
    const searchTerm = e.target.value;
    setFilteredData(
      data.filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  };

  return (
    <div>
      <input type="text" onChange={handleFilter} />
      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>
            Name: {item.name}, Age: {item.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
