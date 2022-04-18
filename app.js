const express = require('express');
const sgMail = require("@sendgrid/mail");
const CORS = require('cors');
const keys = require('./config/keys')
const path = require('path');


const port = process.env.PORT || 5000;
const API_KEY = keys.Key;

sgMail.setApiKey(API_KEY);

const app = express();
app.use(express.json());
app.use(CORS());


app.post("/mail", (req, res) => {
    console.log(req.body);
    sgMail.send({
        to: req.body.data,
        from: 'mewriteto86@gmail.com',
        subject: 'Regarding Care Club Donation',
        text: 'Thank you for your donation. Your generosity is appreciated !, Stay Tuned !'
    })
    .then(() => {
        console.log('Email sent....')
        res.redirect("/mail")
    }).catch((error) => {
        console.log(error)
    })
});

if(process.env.NODE_ENV === "production"){
    app.use(express.static('Client/build'));

    app.get('*',(req, res)=>{
        res.sendFile(path.join(__dirname,'Client', 'build', 'index.html'));
    })
}
app.get("/mail" , (req,res) => {
    res.status(200).send();
})

app.listen(port, () => {
    console.log(`server is up on ${port}`);
});