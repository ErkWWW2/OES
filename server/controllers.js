const test = (req, res) => {
    console.log(req);
    res.send({test: "testing"});
}

module.exports = { test };