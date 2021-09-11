import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import '../../src/styles.css'
import { api } from "../services/api";

const Cards = (props) => {
  const [data, setData] = useState([]);

  const getPlaces = async () => {
    await axios
      .get(api)
      .then((response) => {
        console.log(response.data.places);
        setData(response.data.places);
      })
      .catch(() => {
        console.log("erro tende mas tarde");
      });
  };

  useEffect(() => {
    getPlaces();
  });

  return (
    <div>
      <div className="container ">
        <div className="row m-3">
          {data.map((item) => (
            <div className="card m-3 col-xs-12"  key={item.id}>
              <img src={item.Images} className="img-fluid card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.namePlaces}</h5>
                <p className="card-text">
                 {item.description}
                </p>
                <Link to={"/visualizar/" + item.id} className="btn btn-primary">
                  ver lugar
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
