import React, { useEffect, useState } from 'react';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/NahidAhmed07/api/main/services.json"
    )
      .then(res => res.json())
      .then(data => setServices(data))
      .catch(err => console.log(err));
  }, [])
  
  console.log(services);
  return (
    <div>
      <h2>services</h2>
    </div>
  );
};

export default Services;