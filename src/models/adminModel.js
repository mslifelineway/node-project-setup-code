const db = require("../../dbConnection");
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;
const { INTEGER, STRING, DATE } = Sequelize;

exports.admin = sequelize.define(
  "admin",
  {
    id: { type: INTEGER, primaryKey: true },
    name: { type: STRING },
    email: { type: STRING },
    password: { type: STRING },
    created_at: {
      type: DATE,
    },
    updated_at: {
        type: DATE,
      },
  },
  {
    tableName: "admin",
    underscored: true,
  }
);
