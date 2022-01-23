import express from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

let user = [];
let tweets = [];

app.post('/sign-up', (req, res) => {
  user.push(req.body);
  res.send("OK");
})

app.post('/tweets', (req, res) => {
  tweets.push( { ...req.body, avatar: user[0].avatar } );
  res.send("OK");
})

app.get('/tweets', (req , res) => {
  res.send(tweets.slice(-10).reverse());
})

app.listen(5000);