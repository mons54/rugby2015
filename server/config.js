module.exports = function (app, express, connect) {
    app.use(express.static(dirname + '/public/'));
    app.use(require('body-parser')());
};
