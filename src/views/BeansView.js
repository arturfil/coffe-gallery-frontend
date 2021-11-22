import { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import { deleteBeanInApi } from "../services/beanService";

const BeansView = () => {
  const [beans, setBeans] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    getBeans();
    console.log(beans);
  }, []);

  const getBeans = async () => {
    const response = await axios.get(`${apiUrl}/beans`);
    setBeans(response.data);
  };

  const deleteBean = (id) => {
    const filtered = beans.filter((bean) => {
      return bean._id !== id;
    })
    deleteBeanInApi(id);
    setBeans(filtered);
  }

  return (
    <div className="container mt-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Type of Coffee Bean</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {beans.map((bean, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{bean.name}</td>
              <td>
                <button
                  onClick={() => deleteBean(bean._id)} 
                  className="btn btn-danger">
                    Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default BeansView;
