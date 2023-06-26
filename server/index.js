const express = require('express')
require("dotenv").config()
const cors = require('cors')
const colors = require('color')
const connectDB = require('./config/db')
const  {graphqlHTTP} = require ('express-graphql')
const port = process.env.PORT || 5000
const schema = require("./schema/schema")
const app = express()

//connect DB
connectDB();
app.use(cors())
app.use('/graphql',graphqlHTTP({    
    schema,
    graphiql: process.env.NODE_ENV === 'development'
}))
app.listen(port,console.log(`Server running on port ${port}`))