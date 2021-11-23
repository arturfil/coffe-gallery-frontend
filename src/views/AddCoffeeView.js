import { useEffect, useState } from "react";
import { isAuthenticated } from "../services/authService";
import { getAllBeans } from "../services/beanService";
import { createCoffeeInApi } from "../services/coffeeService";

const AddCoffeeView = () => {
  const [preview, setPreview] = useState("");
  const [beans, setBeans] = useState([]);
  const [coffee, setCoffee] = useState({
    name: "",
    bean: "",
    roast: "",
    grind: 0,
    image: "",
  });

  useEffect(() => {
    fetchBeans();
  }, []);

  const fetchBeans = async () => {
    const response = await getAllBeans();
    setBeans(response.data);
  };

  const handleChange = (event) => {
    setCoffee({
      ...coffee,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    console.log("Here")
    setCoffee({
      ...coffee,
      image: imageFile,
    });
    console.log("Change", coffee)
    setPreview(URL.createObjectURL(imageFile));
  };

  const handleSubmit = (event) => {
    console.log(coffee)
    event.preventDefault();
    createCoffeeInApi(coffee);
  };

  return (
    <div className="container">
      <div className="row" style={{margin: '0 auto'}}>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <form className="form">
            <h2>Add New Coffee</h2>
            <input
              name="name"
              value={coffee.name}
              onChange={handleChange}
              placeholder="name"
              type="text"
              className="form-control"
            />
            <select
              onChange={handleChange}
              defaultValue={"Choose Bean"}
              className="form-control"
              name="bean"
              id=""
            >
              <option disabled value="Choose Bean">
                Choose Your bean
              </option>
              {beans.map((bean) => (
                <option key={bean._id} value={bean._id}>
                  {bean.name}
                </option>
              ))}
            </select>
            <select
              onChange={handleChange}
              defaultValue={"title"}
              className="form-control mt-4"
              name="roast"
              id=""
            >
              <option disabled value="title">
                Select type of roast
              </option>
              <option value="LIGHT">Light</option>
              <option value="MEDIUM">Medium</option>
              <option value="HEAVY">Heavy</option>
            </select>
            <input
              min="1"
              max="10"
              name="grind"
              value={coffee.grind}
              onChange={handleChange}
              placeholder="grind"
              type="number"
              className="form-control"
            />
            <input
              onChange={handleImageChange}
              placeholder="image"
              accept="image/*"
              name="image"
              type="file"
              className="form-control"
            />
            <button
              onClick={handleSubmit}
              className="form-control btn btn-primary"
            >
              Add New Coffee
            </button>
          </form>
        </div>
        <div  className="col-lg-6 col-md-6 col-sm-12">
          <img style={{height: '300px', margin: '40px auto 40px auto', display: 'flex'}} src={preview} />
        </div>
      </div>
    </div>
  );
};

export default AddCoffeeView;
