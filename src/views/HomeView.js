import { useEffect, useState } from 'react'
import axios from 'axios';
import CoffeeCard from '../components/CoffeeCard'

const HomeView = () => {
  const [coffees, setCoffees] = useState([])
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    getCoffee();
  }, [])

  const getCoffee = async () => {
    const response = await axios.get(`${apiUrl}/coffees`);
    setCoffees(response.data);  
  }

  return (
    <div className="container mt-5">
      <h2>Home View</h2>      
      <div className="container">
        <div className="row coffeeCards">
          { coffees.map(coffee => (
            <div key={coffee._id} className="cardBox col-lg-4 col-md-6 col-sm-12">
              <CoffeeCard obj={coffee}/>
            </div>  
          ))}
          {/* <div className="cardBox col-lg-4 col-md-6 col-sm-12">
            <CoffeeCard />
          </div>
          <div className="cardBox col-lg-4 col-md-6 col-sm-12">
            <CoffeeCard />
          </div>
          <div className="cardBox col-lg-4 col-md-6 col-sm-12">
            <CoffeeCard />
          </div>
          <div className="cardBox col-lg-4 col-md-6 col-sm-12">
            <CoffeeCard />
          </div>
          <div className="cardBox col-lg-4 col-md-6 col-sm-12">
            <CoffeeCard />
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default HomeView
