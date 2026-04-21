import { useState, useEffect, useContext } from "react";
import CareerContext from "../context/CareerContext";

const useCareerName = () => {
  const { careerData } = useContext(CareerContext);
  const [careerName, setCareerName] = useState("");

  useEffect(() => {
    if (careerData) {
      console.log("Career data:", careerData);
      setCareerName(careerData.name); // opsional
    }
  }, [careerData]);

  return { careerName, setCareerName };
};

export default useCareerName;
