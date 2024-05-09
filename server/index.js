const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const chapterroutes = require("./routes/ChapterRoutes");
const authroutes = require("./routes/Authroutes");
const connectdb = require("./mongodb/ConnectMongo");
const app = express();
dotenv.config();

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.use("/api", chapterroutes);
app.use("/auth", authroutes);

app.listen(PORT, () => {
  try {
    console.log(`server running on http://localhost:${PORT}`);
    try {
      connectdb();
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error.message);
  }
});

app.use("/", (req, res) => {
  res.send("hello world");
});
