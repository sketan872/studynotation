const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// ketanBackend
// ketan873
// ketanBackend
// ketanBackend

// MongoDB Atlas connection
const uri = 'mongodb+srv://ketan873:ketanBackend@studynotationbackend.d0wcq.mongodb.net/studynotationbackend';

mongoose.connect(uri)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

// Define a schema and model
const DataSchema = new mongoose.Schema({
    Firstname: String,
    Lastname: String,
    Email: String,
    createpassword: String,
    confirmpassword: String
});

const DataModel = mongoose.model('Data', DataSchema);

// POST endpoint to save data
app.post('/api/data/newUser', async (req, res) => {
    const { Firstname, Lastname, Email, createpassword, confirmpassword } = req.body;
    const newData = new DataModel({ Firstname, Lastname, Email, createpassword, confirmpassword });

    try {
        await newData.save();
        res.status(201).send('Data saved successfully');
        console.log('data saved successfully')
    } catch (error) {
        res.status(500).send('Error saving data');
        console.log("error saving data")
    }
});

app.get('/api/data/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await DataModel.findOne({ email });
        if (!user) {
            return res.status(401).send('Invalid email or password');
        }

        // Compare the provided password with the stored hashed password
        const isMatch = password == user.password;
        if (!isMatch) {
            return res.status(401).send('Invalid email or password');
        }

        // Successful login
        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        res.status(500).send('Server error');
        console.error('Error logging in:', error);
    }
})

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


