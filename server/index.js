const PORT = process.env.PORT || 3001;
const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(
  'mongodb://localhost:27017/test',
  { useNewUrlParser: true, 
  useUnifiedTopology: true },
  (err) => {
    if(err){
      console.log("error connecting to mongodb -- ❌")
      console.err(err.message)
    } else {
      console.log("connected to mongodb -- ✅")
    }
  }
)

app.get("/", (req, res) => {
  res.json({ message : "Hello from the server" })
})

// app.use(require("./routes/index"))

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
