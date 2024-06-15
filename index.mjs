import express from 'express';

const app = express();
const port = 5500;

console.log("hello world");

app.listen(port, () => {
  console.log(`Success! Your application is running on port ${port}.`);
});
