const express = require('express');
const req = require('express/lib/request');
const routes = express.Router();

const getLanguages = (req, resp) => {
    resp.json('rapido ptm ');
}

export const methods = {
    getLanguages
};