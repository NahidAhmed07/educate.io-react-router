import React, { useEffect, useState } from 'react';

const useServises = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const url =
      "https://raw.githubusercontent.com/NahidAhmed07/api/main/services.json";
    fetch("/servises.json")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.log(err));
  }, []);
  return [services, setServices];
};

export default useServises;