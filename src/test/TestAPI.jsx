import { useEffect } from "react";

const TestAPI = () => {
  useEffect(() => {
    fetch("http://localhost:5000/mediaPhoto")
      .then((response) => response.json())
      .then((data) => {
        console.log("API DATA: ", data);
      })
      .catch((error) => {
        console.log("API ERROR: ", error);
      });
  }, []);

  return <div>API TEST</div>;
};

export default TestAPI;
