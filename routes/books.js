const express = require("express");
const router = express.Router();
// get books
router.get("/", (req, res) => {
  const data = {
    data: [
      {
        isbn: 21352,
        "name of the book": "mystery in Japan",
        author: "Janet",
      },
      {
        isbn: 21857,
        "name of the book": "mystery in Israel",
        author: "Ori",
      },
    ],
  };
  res.send(data);
});
//create new book
router.post("/", (req, res) => {
  const paramter = req.body;
  res.send(req.body);
});
//    update book by isbn
router.put("/:isbn", (req, res) => {
  const { isbn } = req.params;
  res.send("book is updated!");
});
// delete book by isbn
router.delete("/:isbn", (req, res) => {
  const { isbn } = req.params;
  res.send("book is deleted!");
});
module.exports = router;
