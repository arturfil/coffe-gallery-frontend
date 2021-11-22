import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router";
import { getAllBeans } from "../services/beanService";
import { deleteCoffeeInApi, getSingleCoffeeFromApi, imageUpload, imageUploadToApi, updateCoffeeInApi } from "../services/coffeeService";

const EditCoffeeView = () => {
  const [coffee, setCoffee] = useState({});
  const [beans, setBeans] = useState([]);
  const { id } = useParams();
  const [preview, setPreview] = useState("");

  useEffect(() => {
    getCoffee();
    getBeans();
  }, []);

  const getCoffee = async () => {
    const response = await getSingleCoffeeFromApi(id);
    await setCoffee(response.data);
  };

  const getBeans = async () => {
    const response = await getAllBeans();
    setBeans(response.data);
  };

  const handleChange = (event) => {
    setCoffee({
      ...coffee,
      [event.target.name]: event.target.value,
    });
    console.log(coffee)
  };

  const handleImageChange = async (event) => {
    const option = window.confirm("Are you sure you want to update the image");
    if (!option) return;
    const imageFile = event.target.files[0];
    await imageUploadToApi(id, imageFile);
    getCoffee();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await updateCoffeeInApi(coffee);
    getCoffee();
  };

  const handleDelete = async (event) => {
    event.preventDefault();
    const response = await deleteCoffeeInApi(id);
    return <Navigate to="/" />
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <form className="form">
            <h2>Edit Coffee</h2>
            <label>Name </label>
            <input
              name="name"
              value={coffee.name}
              onChange={handleChange}
              placeholder="name"
              type="text"
              className="form-control"
            />
            <label>Current Bean: {coffee.bean?.name}</label>
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
            <label className="mt-4">Current Roast: {coffee.roast}</label>
            <select
              onChange={handleChange}
              defaultValue={"title"}
              className="form-control"
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
            <br />
            <label>Grind Size</label>
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
              className="form-control btn btn-primary mb-3"
            >
              Update Coffee
            </button>
            <button
              onClick={handleDelete}
              className="form-control btn btn-danger "
            >
              Delete Coffee
            </button>
          </form>
        </div>
        <div className="col-6">
          <img style={{marginTop: '40px', width: '500px'}} src={coffee.image} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default EditCoffeeView;
