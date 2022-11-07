const functions = require("firebase-functions");
const admin=require('firebase-admin');
const express= require('express');
const cors=require('cors');
const app=express();
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
   functions.logger.info("Hello logs!", {structuredData: true});
   response.send("Hello from Firebase!");
 });

 //Route
 app.get('/hello-world', (req,res) => {
  return res.status(200).send('HELLO WORLD');
 })

 app.get('/hello-world', (req,res) => {
  return res.status(200).send('HELLO WORLD');
 })

 exports.app=functions.https.onRequest(app);