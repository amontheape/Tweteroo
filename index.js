import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

let user = [];

app.post('/sign-up', (req, res) => {
  user.push(req.body);
  console.log(user);
  res.send("OK");
})

app.listen(5000);