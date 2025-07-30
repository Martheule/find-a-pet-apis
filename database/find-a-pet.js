import { Sequelize } from "sequelize";

const sequelize = new Sequelize(process.env.NEON_URI, {
  logging: false,
});

export default sequelize;
