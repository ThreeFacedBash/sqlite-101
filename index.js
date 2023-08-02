

//CREATING AN API
//Import the library which was installed on the command terminal
import express from 'express';
import {getGreetings, addGreeting} from './db.js';

//Creating a variable to store the functionalities of express.js
const app = express();

//Adding middleware that allows us to use our imported functions within our API
app.use(express.json());

//Setting the port number
const PORT = process.env.PORT || 3008; //'process.env.PORT makes the port no. configurable
//Configurability means that other deployment apps can give you a port number or use the one you have provided


//Getting all the greetings using the commands
app.get('/api/greetings', async (req, res) =>{
    const greetingsAPI = await getGreetings();
    console.log(greetingsAPI)
    res.json({
        greetings: greetingsAPI
    })
})

//Creating a route to add the language via the API endpoint
app.post('/api/greetings', async (req, res)=> {
    const greeting = req.body.greeting
    const language = req.body.language

    await addGreeting(language, greeting)
    //res.json is what you want your API to display after you have sent the request
    res.json({
        status: 'success',
        message: `Added a greeting for ${language}`
    })
})

//Adding a listening event that allows us to check if our port is running
app.listen(PORT, () => console.log(`App running on port: ${PORT}`))

//CREATING AN API (ABOVE)
