
import { Router, Request, Response } from 'express';
import express from "express";
import config from '../config/config';
const jwt = require("jsonwebtoken");



export const authentication = express.Router(); 
authentication.use((req, res, next) => {
    const token  = req.headers['access-token'];
 
    if (token) {
      jwt.verify(token, config.jwtSecret, (err, decoded) => {      
        if (err) {
          return res.json({ mensaje: 'Token inválida' });    
        } else {
          next();
        }
      });
    } else {
      res.send({ 
          mensaje: 'Token no proveída.' 
      });
    }
 });