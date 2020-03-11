var mongoose = require("mongoose");
var passport = require("passport");
var User = require("../models/User");

var userController = {};


// Restrict access to root page
userController.home = function(req, res) {
  res.render('login', { user : req.user });
};

// Go to registration page
userController.register = function(req, res) {
  res.render('register');
};

// Post registration
userController.doRegister = function(req, res) {
  User.register(new User({ username : req.body.username, name: req.body.name }), req.body.password, function(err, user) {
    if (err) {
      return res.render('register', { user : user });
    }

    passport.authenticate('local')(req, res, function () {
      res.redirect('/home');
    });
  });
};

// Go to login page
userController.login = function(req, res) {
  res.render('login');
};

// Post login
userController.doLogin = function(req, res) {
  passport.authenticate('local')(req, res, function () {
    res.redirect('/home');
  });
};

// logout
userController.logout = function(req, res) {
  req.logout();
  res.redirect('/');
};

userController.dosendmail =function(req, res) {
  
  console.log(req.body.name);
  console.log(req.body.email);
  console.log(req.body.phonenumber);
  console.log(req.body.message);
  /*Transport service is used by node mailer to send emails, it takes service and auth object as parameters.
    here we are using gmail as our service 
    In Auth object , we specify our email and password
  */
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '21pahe1998@gmail.com',
      pass: 'Pahe@1998'//replace with your password
    }
  }); 

  /*
    In mail options we specify from and to address, subject and HTML content.
    In our case , we use our personal email as from and to address,
    Subject is Contact name and 
    html is our form details which we parsed using bodyParser.
  */
  var mailOptions = {
    from: '21pahe1998@gmail.com',//replace with your email
    to: '21pahe1998@gmail.com',//replace with your email
    subject: `Contact name: ${req.body.name}`,
    html:`<h1>Contact details</h1>
          <h2> name:${req.body.name} </h2><br>
          <h2> email:${req.body.email} </h2><br>
          <h2> phonenumber:${req.body.phonenumber} </h2><br>
          <h2> message:${req.body.message} </h2><br>`
  };
  
  /* Here comes the important part, sendMail is the method which actually sends email, it takes mail options and
   call back as parameter 
  */

  // transporter.sendMail(mailOptions, function(error, info){
  //   if (error) {
  //     console.log(error);
  //     res.redirect("/contact2") // if error occurs send error as response to client
  //   } else {
  //     // console.log('Email sent: ' + info.response);
  //     res.redirect("/contact")//if mail is sent successfully send Sent successfully as response
  //   }
  // });

  transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
        res.send('error') // if error occurs send error as response to client
      } else {
        console.log('Email sent: ' + info.response);
        res.send('Sent Successfully')//if mail is sent successfully send Sent successfully as response
      }
    });

  // transporter.sendMail(mailOptions, (err, responce, body) => {
  //     if(err){
  //         res.redirect("/rooms");
  //     } else{
  //         if(responce.statusCode == 200) {
  //             res.redirect("/services2");
  //         } else{
  //             res.redirect("/rooms");
  //         }
  //     }
  // });
};

module.exports = userController;
