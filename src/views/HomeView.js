import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import CoffeeCard from "../components/CoffeeCard";
import { getAllCoffees } from "../services/coffeeService";

const HomeView = () => {
  const [coffees, setCoffees] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getCoffee();
  }, []);

  const getCoffee = async () => {
    setLoading(true);
    setTimeout(async () => {

      const response = await getAllCoffees();
      setCoffees(response.data);
      setLoading(false);
    }, 2000)
  };

  const handleSearch = (event) => setSearch(event.target.value.toLowerCase());

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
        {loading && (
          <div style={{textAlign: 'center', marginTop: 20}}>
            <Spinner style={{height: 80, width: 80, fontWeight: 'bold'}} animation="border"/>
            <h4>Loading...</h4>
          </div>
        )}
        {coffees === null && <h2>No Coffees Results</h2>}
        <div className="row coffeeCards">
          {/* We are filtering at the same time we are maping that way we get in-time search results */}
          {coffees.filter(coffee => search ? coffee.name.toLowerCase().includes(search) : coffee ).map((coffee) => (
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
