const express = require("express");
const  mongoose  = require("mongoose");
const app = express();
const port = 3000;
app.use(express.json());

const usersRouter = require("./routes/users");
app.use("/api/users", usersRouter);
const booksRouter = require("./routes/books");
app.use("/api/books", booksRouter);
const peopleRouter = require("./routes/peopleRouter");
app.use("/api/people", peopleRouter);

mongoose.connect("mongodb://localhost:27017/people", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false,
    //useCreateIndex: true,
  })
  .then(console.log("connect to DB people!"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
