import app from "./app";

const port = 3002;
const host = '0.0.0.0';

app.listen(port, host, () => {
  console.log(`Microsservice started on port ${port}.`)
});