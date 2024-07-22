const express = require('express');
const mongoose = require('mongoose');
const syllabusRoutes = require('./routes/syllabus');
const cors = require('cors'); 
const app = express();
const PORT = 5000;

mongoose.connect('mongodb+srv://NalaaamdinniRaju:Raju9398@cluster0.fyoo7mp.mongodb.net/Syllabus?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB successfully');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

app.use(cors());
app.use(express.json());

app.use('/api', syllabusRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
