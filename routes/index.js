
/*
 * GET home page.
 */

exports.index = function (req, res) {
    res.render('index', { title: 'Express', year: new Date().getFullYear() });
};

exports.about = function (req, res) {
    res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Your application description page' });
};

exports.contact = function (req, res) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page' });
};

exports.game = function (req, res) {
    res.render('game', { title: 'Game', year: new Date().getFullYear(), message: 'Would you like to play a game?' });
};

exports.signup = function (req, res) {
    res.render('signup', { title: 'Signup', year: new Date().getFullYear(), message: 'Sign up to play' });
};
