import React from "react";
import {  Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="homeDiv">
      <div className="container">
        <div className="add_btn mt-2">
          <Link to={`/register`}>
            <button className="btn btn-primary">Add Data</button>
          </Link>
        </div>
        <table className="table mt-3">
          <thead>
            <tr className="table-dark">
              <th scope="col">Id</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Job</th>
              <th scope="col">Number</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Ahmed Raza</td>
              <td>ahmedraza</td>
              <td>ahmadraza@art.com</td>
              <td>92+3222665676</td>
              <td className="d-flex justify-content-between">
                <button className="btn btn-success">
                  <i className="fa-brands fa-readme"></i>
                </button>
                <button className="btn btn-primary">
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>
                <button className="btn btn-danger">
                  <i className="fa-sharp fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Ahmed Raza</td>
              <td>ahmedraza</td>
              <td>ahmadraza@art.com</td>
              <td>92+3222665676</td>
              <td className="d-flex justify-content-between">
                <button className="btn btn-success">
                  <i className="fa-brands fa-readme"></i>
                </button>
                <button className="btn btn-primary">
                  <i className="fa-regular fa-pen-to-square"></i>
                </button>
                <button className="btn btn-danger">
                  <i className="fa-sharp fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
