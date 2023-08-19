import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Update = () => {
  const [formdata, setformdata] = useState({
    name: '',
    email: '',
  });
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:2000/Update/select/${id}`).then((res) => {
      setformdata({
        name: res.data.name,
        email: res.data.email,
      });
    });
  }, []);

  const updateHandling = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:2000/update/data/${id}`, {
        name: formdata.name,
        email: formdata.email,
      })
      .then((res) => {
        if (res.data.message === 'updated') {
          window.alert('updated successfully');
           window.location.href='/table/:id';
        }
      });
  };

  return (
    <div>
      <form onSubmit={updateHandling}>
        <input
          type="text"
          value={formdata.name}
          name="name"
          onChange={(e) => {
            setformdata({ ...formdata, name: e.target.value });
          }}
        />
        <input
          type="email"
          value={formdata.email}
          name="email"
          onChange={(e) => {
            setformdata({ ...formdata, email: e.target.value });
          }}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Update;
