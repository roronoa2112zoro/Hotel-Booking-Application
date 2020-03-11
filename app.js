//jshint esversion6
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const mongoose = require('mongoose'); 
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var nodemailer = require('nodemailer');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/auth', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false })
  .then(() =>  console.log('Connection succesful'))
  .catch((err) => console.error(err));

    var index = require('./routes/index');
    var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

//newly added 
app.use(express.static(__dirname + '/views'));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index2.html");
});

app.get("/home", function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.get("/blog", function(req, res){
    res.sendFile(__dirname + "/blog.html");
});

app.get("/blog-single", function(req, res){
    res.sendFile(__dirname + "/blog-single.html");
});

app.get("/contact", function(req, res){
    res.sendFile(__dirname + "/contact.html");
});

app.get("/profile", function(req, res){
    res.sendFile(__dirname + "/profile.html");
});

app.get("/rooms", function(req, res){
    res.sendFile(__dirname + "/rooms.html");
});

app.get("/services", function(req, res){
    res.sendFile(__dirname + "/services.html");
});

app.get("/about", function(req, res){
    res.sendFile(__dirname + "/about.html");
});

app.get("/payment", function(req, res){
    res.sendFile(__dirname + "/payment.html");
});

app.get("/rooms2", function(req, res){
    res.sendFile(__dirname + "/rooms2.html");
});

app.get("/blog2", function(req, res){
    res.sendFile(__dirname + "/blog2.html");
});

app.get("/about2", function(req, res){
    res.sendFile(__dirname + "/about2.html");
});

app.get("/services2", function(req, res){
    res.sendFile(__dirname + "/services2.html");
});

app.get("/contact2", function(req, res){
    res.sendFile(__dirname + "/contact2.html");
});

app.post("/newsletter", function(req,res){
    const {email} = req.body;

   const data = {
       members: [
           {
            email_address: email,
            status: "subscribed"
           } 
       ]
   }
   
   const postData = JSON.stringify(data);

   var options = {
    url: "https://us4.api.mailchimp.com/3.0/lists/3ba6bf3b24",
    method: "POST",
    headers: {
        "Authorization":"Roronoa 4c9daeccbdfa4ea1ff480576bd513e6c-us4"
    },
    body: postData
};

    request(options, function(err, responce, body){
        if(err){
            res.redirect("/rooms");
        } else{
            if(responce.statusCode == 200) {
                res.redirect("/home");
            } else{
                res.redirect("/rooms");
            }
        }

    });
});

//newsletter for landing page
app.post("/newsletterhome", function(req,res){
    const {email} = req.body;

   const data = {
       members: [
           {
            email_address: email,
            status: "subscribed"
           } 
       ]
   }
   
   const postData = JSON.stringify(data);

   var options = {
    url: "https://us4.api.mailchimp.com/3.0/lists/3ba6bf3b24",
    method: "POST",
    headers: {
        "Authorization":"Roronoa 4c9daeccbdfa4ea1ff480576bd513e6c-us4"
    },
    body: postData
};

    request(options, function(err, responce, body){
        if(err){
            res.redirect("/rooms");
        } else{
            if(responce.statusCode == 200) {
                res.redirect("/");
            } else{
                res.redirect("/rooms");
            }
        }

    });
});

//Newsletter for rooms page
app.post("/newsletterrooms", function(req,res){
    const {email} = req.body;

   const data = {
       members: [
           {
            email_address: email,
            status: "subscribed"
           } 
       ]
   }
   
   const postData = JSON.stringify(data);

   var options = {
    url: "https://us4.api.mailchimp.com/3.0/lists/3ba6bf3b24",
    method: "POST",
    headers: {
        "Authorization":"Roronoa 4c9daeccbdfa4ea1ff480576bd513e6c-us4"
    },
    body: postData
};

    request(options, function(err, responce, body){
        if(err){
            res.redirect("/home");
        } else{
            if(responce.statusCode == 200) {
                res.redirect("/rooms");
            } else{
                res.redirect("/home");
            }
        }

    });
});

//Newsletter for services page
app.post("/newsletterservices", function(req,res){
    const {email} = req.body;

   const data = {
       members: [
           {
            email_address: email,
            status: "subscribed"
           } 
       ]
   }
   
   const postData = JSON.stringify(data);

   var options = {
    url: "https://us4.api.mailchimp.com/3.0/lists/3ba6bf3b24",
    method: "POST",
    headers: {
        "Authorization":"Roronoa 4c9daeccbdfa4ea1ff480576bd513e6c-us4"
    },
    body: postData
};

    request(options, function(err, responce, body){
        if(err){
            res.redirect("/rooms");
        } else{
            if(responce.statusCode == 200) {
                res.redirect("/services");
            } else{
                res.redirect("/rooms");
            }
        }

    });
});

//Newsletter for blog page
app.post("/newsletterblog", function(req,res){
    const {email} = req.body;

   const data = {
       members: [
           {
            email_address: email,
            status: "subscribed"
           } 
       ]
   }
   
   const postData = JSON.stringify(data);

   var options = {
    url: "https://us4.api.mailchimp.com/3.0/lists/3ba6bf3b24",
    method: "POST",
    headers: {
        "Authorization":"Roronoa 4c9daeccbdfa4ea1ff480576bd513e6c-us4"
    },
    body: postData
};

    request(options, function(err, responce, body){
        if(err){
            res.redirect("/rooms");
        } else{
            if(responce.statusCode == 200) {
                res.redirect("/blog");
            } else{
                res.redirect("/rooms");
            }
        }

    });
});

//Newsletter for contact page
app.post("/newslettercontact", function(req,res){
    const {email} = req.body;

   const data = {
       members: [
           {
            email_address: email,
            status: "subscribed"
           } 
       ]
   }
   
   const postData = JSON.stringify(data);

   var options = {
    url: "https://us4.api.mailchimp.com/3.0/lists/3ba6bf3b24",
    method: "POST",
    headers: {
        "Authorization":"Roronoa 4c9daeccbdfa4ea1ff480576bd513e6c-us4"
    },
    body: postData
};

    request(options, function(err, responce, body){
        if(err){
            res.redirect("/rooms");
        } else{
            if(responce.statusCode == 200) {
                res.redirect("/contact");
            } else{
                res.redirect("/rooms");
            }
        }

    });
});

//Newsletter for about page
app.post("/newsletterabout", function(req,res){
    const {email} = req.body;

   const data = {
       members: [
           {
            email_address: email,
            status: "subscribed"
           } 
       ]
   }
   
   const postData = JSON.stringify(data);

   var options = {
    url: "https://us4.api.mailchimp.com/3.0/lists/3ba6bf3b24",
    method: "POST",
    headers: {
        "Authorization":"Roronoa 4c9daeccbdfa4ea1ff480576bd513e6c-us4"
    },
    body: postData
};

    request(options, function(err, responce, body){
        if(err){
            res.redirect("/rooms");
        } else{
            if(responce.statusCode == 200) {
                res.redirect("/about");
            } else{
                res.redirect("/rooms");
            }
        }

    });
});

app.post("/newsletterabout2", function(req,res){
    const {email} = req.body;

   const data = {
       members: [
           {
            email_address: email,
            status: "subscribed"
           } 
       ]
   }
   
   const postData = JSON.stringify(data);

   var options = {
    url: "https://us4.api.mailchimp.com/3.0/lists/3ba6bf3b24",
    method: "POST",
    headers: {
        "Authorization":"Roronoa 4c9daeccbdfa4ea1ff480576bd513e6c-us4"
    },
    body: postData
};

    request(options, function(err, responce, body){
        if(err){
            res.redirect("/rooms");
        } else{
            if(responce.statusCode == 200) {
                res.redirect("/about2");
            } else{
                res.redirect("/rooms");
            }
        }

    });
});

app.post("/newsletterblog2", function(req,res){
    const {email} = req.body;

   const data = {
       members: [
           {
            email_address: email,
            status: "subscribed"
           } 
       ]
   }
   
   const postData = JSON.stringify(data);

   var options = {
    url: "https://us4.api.mailchimp.com/3.0/lists/3ba6bf3b24",
    method: "POST",
    headers: {
        "Authorization":"Roronoa 4c9daeccbdfa4ea1ff480576bd513e6c-us4"
    },
    body: postData
};

    request(options, function(err, responce, body){
        if(err){
            res.redirect("/rooms");
        } else{
            if(responce.statusCode == 200) {
                res.redirect("/blog2");
            } else{
                res.redirect("/rooms");
            }
        }

    });
});

app.post("/newslettercontact2", function(req,res){
    const {email} = req.body;

   const data = {
       members: [
           {
            email_address: email,
            status: "subscribed"
           } 
       ]
   }
   
   const postData = JSON.stringify(data);

   var options = {
    url: "https://us4.api.mailchimp.com/3.0/lists/3ba6bf3b24",
    method: "POST",
    headers: {
        "Authorization":"Roronoa 4c9daeccbdfa4ea1ff480576bd513e6c-us4"
    },
    body: postData
};

    request(options, function(err, responce, body){
        if(err){
            res.redirect("/rooms");
        } else{
            if(responce.statusCode == 200) {
                res.redirect("/contact2");
            } else{
                res.redirect("/rooms");
            }
        }

    });
});

app.post("/newsletterrooms2", function(req,res){
    const {email} = req.body;

   const data = {
       members: [
           {
            email_address: email,
            status: "subscribed"
           } 
       ]
   }
   
   const postData = JSON.stringify(data);

   var options = {
    url: "https://us4.api.mailchimp.com/3.0/lists/3ba6bf3b24",
    method: "POST",
    headers: {
        "Authorization":"Roronoa 4c9daeccbdfa4ea1ff480576bd513e6c-us4"
    },
    body: postData
};

    request(options, function(err, responce, body){
        if(err){
            res.redirect("/");
        } else{
            if(responce.statusCode == 200) {
                res.redirect("/rooms2");
            } else{
                res.redirect("/");
            }
        }

    });
});

app.post("/newsletterservices2", function(req,res){
    const {email} = req.body;

   const data = {
       members: [
           {
            email_address: email,
            status: "subscribed"
           } 
       ]
   }
   
   const postData = JSON.stringify(data);

   var options = {
    url: "https://us4.api.mailchimp.com/3.0/lists/3ba6bf3b24",
    method: "POST",
    headers: {
        "Authorization":"Roronoa 4c9daeccbdfa4ea1ff480576bd513e6c-us4"
    },
    body: postData
};

    request(options, function(err, responce, body){
        if(err){
            res.redirect("/rooms");
        } else{
            if(responce.statusCode == 200) {
                res.redirect("/services2");
            } else{
                res.redirect("/rooms");
            }
        }

    });
});


app.use('/', index);//Check this one
// app.use('/users', users);

// passport configuration
var User = require('./models/User');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));


// app.post("/", function(req, res){

//     var email = req.body.email;


// var jsonData = JSON.stringify(data);

//     var options = {
//         url: "https://us4.api.mailchimp.com/3.0/lists/ea30a63b58",
//         method: "POST",
//         headers: {
//             "Authorization":"Roronoa 06ad65b9efa2ca17953f7fec17520a11-us4"
//         },
//         body: jsonData
//     };

//     request(options, function(error, response, body){
//             if(response.statusCode == 200){
//                 alert("Thanx for signing up for our newsletter!!")
//                 window.location = "/";
//             }
//     });
// }); 
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());



app.listen(3000, function(){
    console.log("Server is running on http://localhost:3000/");
});

module.exports = app;