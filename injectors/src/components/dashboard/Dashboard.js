import React, { useEffect, useState } from "react";
import { Badge, Table } from "react-bootstrap";
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { GetAllUsers } from "../../apis/UserApi";
import "./Dash.css";

const Dashboard = () => {
  const [allusers, setAllusers] = useState([]);
  const isUsers = async () => {
    const uslg = await GetAllUsers();
    setAllusers(uslg);
  };

  const Count = () => {
    var nbr = 0;

    allusers.filter((el) => {
      if (el.isAdmin != true) {
        nbr += 1;
      }
    });
    return nbr;
  };
  const nbruser = Count();

  useEffect(() => {
    isUsers();
  }, []);
  console.log(allusers);
  return (
    <div className="mdd ">
      <div className="content-wrapper">
        <section className="content pt-4">
          <div className="container-fluid">
            <div className="row  ">
              <div className="col-12 col-sm-6 col-md-3">
                <div className="info-box">
                  <span className="info-box-icon bg-info elevation-1">
                    <i className="fas fa-user-plus" />
                  </span>
                  <div className="info-box-content">
                    <span className="info-box-text">All Users</span>
                    <span className="info-box-number">{nbruser}</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-3"></div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="card ">
                  <div className="card-header border-transparent">
                    <h3 className="card-title">All Users</h3>
                    <div className="card-tools"></div>
                  </div>
{/* modification here */}

                  <div className="card-body p-0">
                    <div className="table-responsive">
                      <ReactHTMLTableToExcel   id="test-table-xls-button"
                    className="download-table-xls-button btn btn-success mb-3"
                    table="table-to-xls"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Export Data to Excel Sheet"/>
                    <table className="table" id="table-to-xls">
                        <thead className="">
                          <tr>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Email</th>
                          </tr>
                        </thead>
                        <tbody className="">
                          {allusers
                            .filter((el) => el.isAdmin != true)
                            .map((el) => (
                              <tr>
                                <td>{el.username}</td>
                                <td>
                                  <Badge bg="success">{el.role}</Badge>
                                </td>
                                <td>
                                  <div
                                    className="sparkbar"
                                    data-color="#00a65a"
                                    data-height={20}
                                  >
                                    {el.email}
                                  </div>
                                </td>
                              </tr>
                            ))}
                        </tbody>
                        </table>
                    </div>
                  </div>

{/* finish here */}
                  <div className="card-footer clearfix"></div>
                </div>
              </div>

              <div className="col-md-4"></div>
            </div>
          </div>

          <table class="table table-success table-striped">
            <thead>
              <tr>
                <th scope="col">Vaccine</th>
                <th scope="col">Age</th>
                <th scope="col">age interval</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>BGG</td>
                <td>at birth</td>
                <td>As soon as possible after birth</td>
              </tr>
              <tr>
                <td>HBV-0</td>
                <td>at birth</td>
                <td>within 24 hours of birth</td>
              </tr>
              <tr>
                <td>Pentavalent-1+VPI+PCV1</td>
                <td>2 months</td>
                <td></td>
              </tr>

              <tr>
                <td>Pentavalent-2+VPI</td>
                <td>3 months</td>
                <td></td>
              </tr>

              <tr>
                <td>PCV2</td>
                <td>4 months</td>
                <td>w2,4,6-18 months , 4-6 years</td>
              </tr>

              <tr>
                <td>Pentavalent-3+VPI</td>
                <td>6 months</td>
                <td>2,4,6 and 12-15 months</td>
              </tr>

              <tr>
                <td>PCV3</td>
                <td>11 months</td>
                <td>2,4,6 and 12-15 months</td>
              </tr>

              <tr>
                <td>RR-1 HVA</td>
                <td>12 months</td>
                <td>2,4,6 and 12-15 months</td>
              </tr>

              <tr>
                <td>RR-1 HVA</td>
                <td>18 months</td>
                <td>6 years</td>
              </tr>

              <tr>
                <td>VPO + VHA</td>
                <td>at school age</td>
                <td>6 years</td>
              </tr>
              <tr>
                <td>dT</td>
                <td>at school age</td>
                <td>7 years</td>
              </tr>
              <tr>
                <td>dT + VPO</td>
                <td>at school age</td>
                <td>12 years</td>
              </tr>
              <tr>
                <td>dT + VPO</td>
                <td>at school age</td>
                <td>18 years</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
