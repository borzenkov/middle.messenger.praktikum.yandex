import express from 'express';
import * as path from "path";

const app = express();
const PORT = 3000;

const distPath = path.join(path.resolve(), "dist");

app.use("/", express.static(distPath));

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});
