var seed = require('../server/seed.js');
var Sequelize = require('Sequelize');

const db = new Sequelize("postgres://localhost:5432/tripplanner");

const Place = db.define(
  "place" , {
    addres:{
      type: Sequelize.STRING
    },
    city:{
      type: Sequelize.STRING
    },
    state:{
      type:Sequelize.STRING
    },
    phone:{
      type:Sequelize.STRING
    },
    location:{
      type:Sequelize.ARRAY(Sequelize.FLOAT)
    }
  }
)
const Hotel = db.define(
  "hotel" ,{
    name:{
      type:Sequelize.STRING
    },
    num_stars:{
      type:Sequelize.FLOAT
    },
    amenities:{
      type:Sequelize.STRING
    }
  }
)
const Activity = db.define(
 "activity",{
      name:{
        type:Sequelize.STRING
      },
      age_range:{
        type:Sequelize.STRING
      }
  }
)
const Restaurant = db.define(
 "restaurant",{
    name:{
      type:Sequelize.STRING
    },
    cusine:{
      type:Sequelize.STRING
    },
    price:{
      type:Sequelize.INTEGER
    }
  }
)

Hotel.belongsTo(Place, {aS:"home"});
Restaurant.belongsTo(Place, {aS:"home"});
Activity.belongSTo(Place, {aS:"home"});
