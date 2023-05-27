import React, { useEffect, useState } from "react";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { GetAllUsers } from "../../apis/UserApi";
import "./Dash.css"
import { Doughnut } from "react-chartjs-2";


ChartJs.register(Tooltip, Title, ArcElement, Legend);

const Chartes = () => {
  const [allusers, setAllusers] = useState([]);
  const [allchildern, setAllchildren] = useState([]);

  const isUsers = async () => {
    const uslg = await GetAllUsers();
    setAllusers(uslg);
    // allchildern.push(allusers.map((el)=>el.children.map((item)=>item)))
  };
  const ischildren = async () => {
    let allChildren = [];

    allusers &&
      allusers?.map((el) => {
        allChildren = [...allChildren, ...el.children];
      });
    console.log(allChildren);
    setAllchildren(allChildren);
  };
  console.log(allchildern);

  const Count = () => {
    var poids = 0;
    var taille = 0;
    var nbr = 0;
    allchildern.filter((el) => {
      if (el.isAdmin != true) {
        poids += el.weight;
        taille += el.size;
      }
    });
    nbr = poids / (taille * taille);
    return nbr;
  };
  const nbruser = Count();

  const all = () => {
    var nbr = 0;

    allchildern.filter((el) => {
      if (el.isAdmin != true) {
        nbr += 1;
      }
    });
    return nbr;
  };
  const nbruserss = all();

  const boys = () => {
    var nbr = 0;

    allchildern.filter((el) => {
      if (el.gender == "boy") {
        nbr += 1;
      }
    });
    return nbr;
  };
  const nbrboys = boys();

  const girls = () => {
    var nbr = 0;

    allchildern.filter((el) => {
      if (el.gender == "girl") {
        nbr += 1;
      }
    });
    return nbr;
  };
  const nbrgirls = girls();

  const inject = () => {
    var nbr = 0;

    allchildern.filter((el) => {
      if (el.injected == true) {
        nbr += 1;
      }
    });
    return nbr;
  };
  const nbrinject = inject();

  const notinject = () => {
    var nbr = 0;

    allchildern.filter((el) => {
      if (el.injected == false) {
        nbr += 1;
      }
    });
    return nbr;
  };
  const nbrnotinject = notinject();




  console.log(nbruser);
  useEffect(() => {
    isUsers();
    ischildren();
  }, [allusers.length]);
  console.log(allusers);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Data",
      },
    },
  };

  const data = {
    labels: ["girl", "boy"],
    datasets: [
      {
        label: `${nbruserss} Babies Available`,
        data: [nbrgirls, nbrboys],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const info = {
    labels: ["Not Injected", "Injected"],
    datasets: [
      {
        label: `${nbruserss} Babies Available`,
        data: [nbrnotinject, nbrinject],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  console.log(allusers);
  return (
    
      <div className="scrumban offset-md-2 col-md-10">
        <div className="card col-md-4 w-hover-shadow">
          <div className="card-header">
            {/* <h5 className="card-title">Users</h5>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fas fa-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                >
                  <i className="fas fa-times" />
                </button>
              </div> */}
          </div>
          <div className="card-body">
            <div className="">
              <Doughnut data={data} options={options} />
             
            </div>
          </div>
        </div>
        <div className="card col-md-4 w3-hover-shadow">
          <div className="card-header">
            {/* <h5 className="card-title">Users</h5>
              <div className="card-tools">
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="collapse"
                >
                  <i className="fas fa-minus" />
                </button>
                <button
                  type="button"
                  className="btn btn-tool"
                  data-card-widget="remove"
                >
                  <i className="fas fa-times" />
                </button>
              </div> */}
          </div>
          <div className="card-body">
            <div className="">
              
              <Doughnut data={info} options={options} />
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default Chartes;
