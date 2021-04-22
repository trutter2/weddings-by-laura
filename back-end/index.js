const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const cookieParser = require("cookie-parser");
app.use(cookieParser());

const cookieSession = require('cookie-session');
app.use(cookieSession({
  name: 'session',
  keys: [
    'secretValue'
  ],
  cookie: {
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// import the users module and setup its API path
const users = require("./users.js");

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/comments', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const User = users.model;
const validUser = users.valid;

const reviewSchema = new mongoose.Schema({
  review: String,
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User'
  },

});

// Create a model for items in the museum.
const Review = mongoose.model('Review', reviewSchema);

app.post('/api/reviews', async (req, res) => {
  const user = await User.findOne({
    _id: req.session.userID
  });
  console.log(user)
  const review = new Review({
    review: req.body.review,
    user: user,
  });
  try {
    await review.save();
    res.send(review);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get('/api/reviews', async (req, res) => {
  try {
    let reviews = await Review.find().populate('user');
    return res.send(reviews);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

app.use("/api/users", users.routes);


app.listen(3000, () => console.log('Server listening on port 3000!'));