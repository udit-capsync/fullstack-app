const Player = require("../models/player.model");


// Create a new player
exports.create= async (req, res) => {
  try {
    console.log("data",req.body)
    // let data = {
    //   playerName: req.body.playerName,
    //   age: req.body.age,
    //   prev_team: req.body.prev_team,
    //   phone_no:req.body.phone_no,
    //   batting_style:req.body.batting_style,
    //   bowling_style:req.body.bowling_style,
    //   isWicketKeeper:req.body.isWicketKeeper,
    //   prev_auction_sold_price:req.body.prev_auction_sold_price,
    // }
    // const { playerName, age, prev_team,phone_no,batting_style,bowling_style,isWicketKeeper,prev_auction_sold_price } = req.body;
    
    const player = await Player.create({
      playerName: req.body.playerName,
      age: req.body.age,
      prev_team: req.body.prev_team,
      phone_no:req.body.phone_no,
      batting_style:req.body.batting_style,
      bowling_style:req.body.bowling_style,
      isWicketKeeper:req.body.isWicketKeeper,
      prev_auction_sold_price:req.body.prev_auction_sold_price,
    });
    res.status(201).json(player);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};



// Retrieve all Players from the database.
exports.findAll = (req, res) => {
  const playerName = req.query.playerName;
  var condition = playerName ? { playerName: { [Op.iLike]: `%${playerName}%` } } : null;

  Player.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Player.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};

// Update a Player by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Player.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Player was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Player with id=${id}. Maybe Player was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Player with id=" + id
      });
    });
  
};

// Delete a Player with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Player.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Player was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Player with id=${id}. Maybe Player was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Player with id=" + id
      });
    });
  
};

// Delete all Player from the database.
exports.deleteAll = (req, res) => {
  Player.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Player were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Player."
      });
    });
};

// Find all published Tutorials
// exports.findAllPublished = (req, res) => {
  
// };
