import { useEffect, useState } from 'react'
import CoffeeCard from '../components/CoffeeCard'
import { getAllCoffees } from '../services/coffeeService';

const HomeView = () => {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    getCoffee();
  }, [])

  const getCoffee = async () => {
    const response = await getAllCoffees();
      setCoffees(response.data);  
  }

  return (
    <div className="container mt-5">
      <h2>Home View</h2>      
      <div className="container">
        { coffees.length === 0 && (
          <h2>No Coffees Added Yet</h2>
        )}
        <div className="row coffeeCards">
          { coffees.map(coffee => (
            <div key={coffee._id} className="cardBox col-lg-4 col-md-6 col-sm-12">
              <CoffeeCard obj={coffee}/>
            </div>  
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeView
