const Author = require('../models/author');

exports.show = (req, res) => {
    const path = (req.path === '/') ? '/home' : req.path;
    
    //render the view
    res.render(`pages${path}`);
};


exports.create = (req, res) => {
  Author.create(req.body.author)
    .then(() => {
      req.flash('success', 'Thank you for your Feedback 😍🤗');
      res.redirect('./#contact');
    })
    .catch(err => {
      req.flash('error', `ERROR: ${err}`);
      res.redirect('/pages');
    });
};