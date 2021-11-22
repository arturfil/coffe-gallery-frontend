import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getSingleCoffeeFromApi } from "../services/coffeeService";

const CoffeeDetails = () => {
  const [coffee, setCoffee] = useState({});
  const {id} = useParams();

  useEffect(() => {
    getSingleCoffee();
  }, [])

  const getSingleCoffee = async () => {
    const response = await getSingleCoffeeFromApi(id);
    setCoffee(response.data);
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <h2 style={{fontWeight: "bold", marginTop: '40px'}}>{coffee.name}</h2>     
          <h4>{coffee.bean?.name}</h4> 
          <h4>Roast: {coffee.roast}</h4>
          <h4>Grind Unit Size: {coffee.grind}</h4>
          <Link to={`/editCoffee/${id}`} className="btn-outline-dark btn">Edit</Link>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img style={{height: '500px', margin: '40px auto'}} src={coffee.image} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default CoffeeDetails
