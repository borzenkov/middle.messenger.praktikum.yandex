import express from 'express';
import * as path from "path";

const app = express();
const PORT = 3000;

const distPath = path.join(path.resolve(), "dist");

if (process.env.NODE_ENV === "production") {
    app.use("/", express.static(distPath));
} else {
    app.use(express.static('./'));
}

app.listen(PORT, function () {
    console.log(`Example app listening on port ${PORT}!`);
});