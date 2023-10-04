const express = require("express");

const test = (req, res) => {
    
    console.log("Test route accessed");

    res.send("Test route accessed");
};

module.exports = {
    test,
}