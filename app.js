import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import routes from "./routes";

const app = express();

app.use(helmet());
app.use(morgan("common"));

// routes
app.use();

export default app;