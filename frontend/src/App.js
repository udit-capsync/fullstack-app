import React from 'react';
import {Routes,Route,Navigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddPlayer from '../components/AddPlayer';
import EditPlayer from '../components/EditPlayer';
import PlayerDataTable from '../components/layerDataTable';

function App() {

  return (

    <div  class="container card mb-4 box-shadow">

        <div class="card-header">
            <h4 class="my-0 font-weight-normal">TechGeekNext = React CRUD Example</h4>
          </div>

    <Routes>
        <Route path="/" element={<Navigate to="/read" />} />
        <Route exact path="/create" element={<AddPlayer/>}/>
        <Route exact path="/read" element={<PlayerDataTable/>}/>
        <Route path="/edit/:id" element={<EditPlayer/>}/>
      </Routes>

    </div>
  );
}