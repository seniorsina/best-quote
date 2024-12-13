import express, { Application, urlencoded } from "express";
import config from "config";
import connectDB from "./infra/database/connectDB";
import router from "./app/routes/index.routes";

const app: Application = express();
const port = config.get<number>("app.port");
app.use(express.static("public"));
app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use("/api", router);

connectDB();

app.listen(port, () => {
  console.log(`listen to port${port}`);
});
