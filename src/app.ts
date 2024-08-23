import express, { Request, Response } from "express";
import { router } from "./routes";
import { notFount } from "./app/modules/middlewares/notFound";
import cookieParser from "cookie-parser";
import cors from "cors";

export const app = express();

//parsers
app.use(
  cors({
    origin: [
      "https://assignment-4-l2-frontend.netlify.app",
      "http://localhost:5173",
    ],
    credentials: true,
  }),
);
app.use(express.json());
app.use(cookieParser());

// application routes
app.use("/api", router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Examiner!");
});

// not found middleware
app.use(notFount);
