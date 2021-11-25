import { useEffect, useState } from "react";
import CoffeeCard from "../components/CoffeeCard";
import { getAllCoffees } from "../services/coffeeService";

const HomeView = () => {
  const [coffees, setCoffees] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getCoffee();
  }, []);

  const getCoffee = async () => {
    const response = await getAllCoffees();
    setCoffees(response.data);
  };

  const handleSearch = (event) => {
    if (search === "") getCoffee();
    setSearch(event.target.value);
  }

  const resetCoffees = () => {
    getCoffee();
    setSearch("");
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 col-sm-6">
          <h2>Home View</h2>
        </div>
        <div className="col-md-3 col-sm-6 mb-3">
          <input
            className="form-control"
            onChange={handleSearch}
            style={{ display: "flex", alignSelf: "flex-end" }}
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="col-md-3 col-sm-6">
          <button onClick={resetCoffees} className="btn btn-outline-dark">reset</button>
        </div>
      </div>
      <div className="container">
        {coffees.length === 0 && <h2>No Coffees Results</h2>}
        <div className="row coffeeCards">
          {coffees.filter(coffee => search ? coffee.name.includes(search) : coffee ).map((coffee) => (
            <div
              key={coffee._id}
              className="cardBox col-lg-3 col-md-4 col-sm-6 col-xs-12"
            >
              <CoffeeCard obj={coffee} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeView;
