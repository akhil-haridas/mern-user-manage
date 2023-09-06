require("dotenv").config();

module.exports = {
  database: {
    url: process.env.MONGO_URI,
  },
  server: {
    port: process.env.PORT || 3000,
    ORIGIN: "https://mern-crud-demo.vercel.app",
  },
};
