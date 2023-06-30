const express = require('express');
const playerController = require("../controllers/player.controllers");
const router = express.Router();
   
  
    // Create a new Player
    router.post("/players", playerController.create);
    
    // Retrieve all Players
    router.get("/players", playerController.findAll);
  
    // Retrieve a single Player with id
    router.get("/players/:id", playerController.findOne);
  
    // Update a Player with id
    router.put("/players/:id", playerController.update);
  
    // Delete a Player with id
    router.delete("/players/:id", playerController.delete);
  
    // Delete all players
    router.delete("/players", playerController.deleteAll);
  
    //app.use('/api/players', router);


    module.exports = router;