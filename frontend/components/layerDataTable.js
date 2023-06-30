import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import editIcon from "./../assets/edit.png";
import deleteIcon from "./../assets/delete.JPG";
import "../App.css";


const PlayerDataTable = () => {

  const navigate = useNavigate();
  const baseURL = "http://localhost:8080";
  const [players, setPlayers] = useState([]);

  const setPlayerData = () => {
    axios.get(baseURL + "/players").then((response) => {
        setPlayers(response.data);
    }).catch(error => {
      alert("Error Ocurred while loading data:" + error);
    });
  }

  useEffect(() => {
    setPlayerData();
  }, []);


  const removePlayer = (id) => {
    axios.delete(baseURL + "/players/" + id).then((response) => {
      alert("Employee record " + id + " deleted!");
      setPlayerData();
      navigate('/read')

    }).catch(error => {
      alert("Error Ocurred in removeEmployee:" + error);
    });
  }

  const removeAllPlayer = (id) => {
    axios.delete(baseURL + "/player").then((response) => {
      alert("All Players deleted!");
      setPlayerData();
      navigate('/read')
    }).catch(error => {
      alert("Error Ocurred in removePlayer:" + error);
    });
  }

  return (
    <div class="card-body">
      <br>
      </br>
      <nav>
        <button
          className="btn btn-primary nav-item active"
          onClick={() => navigate("/create")}>
          Create New Player
        </button>
      </nav>


      <br></br>
      <div className="col-md-6">
        <h4>Players List</h4>

        <div class="container">
          <div class="row">
            <div class="col-12">
              <table class="table table-bordered table-striped">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Role</th>
                    <th scope="col">Action</th>

                  </tr>
                </thead>
                <tbody>

                  {
                    players&&
                    players.map((players, index) => (

                      <tr>
                        <th scope="row">{players.id}</th>
                        <td>{players.name}</td>
                        <td>{players.role}</td>


                        <td >

                          <Link to={"/edit/" + players.id}><img src={editIcon} alt="Edit" width="50" height="30" title="Edit" />
                          </Link>


                          <button
                            onClick={() => removePlayer(players.id)} className="button"
                          > <img src={deleteIcon} alt="Remove" title="Remove" width="30" height="30" />
                          </button>

                        </td>
                      </tr>

                    ))
                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>
        <button className="btn btn-sm btn-danger"
          onClick={() => removeAllPlayer()}>
          Remove All
        </button>
      </div>

    </div>

  );
}
export default PlayerDataTable;