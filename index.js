const path = require("path");
const port = 3000;




//routerat
const session = require('express-session');
const bodyParser= require('body-parser');
        //auth
const login= require("./src/routes/loginRout");
const register= require("./src/routes/registerRout");
        //homepage
const homepage= require("./src/routes/homepageRout");
        //user
const userprofile= require("./src/routes/userprofileRout");



//Expressi dhe configat e tij
const express= require("express");
const app= express();

app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", path.join(__dirname, "views"));
app.set("view engine", "pug");
app.use(express.json());
                //sdipse
app.use(bodyParser.urlencoded({ extended: false }));




//Paths
        //perLogIn diqka sdi qka veq qashtu diqka

app.use(
        session({
                secret: 'my secret',
                resave: false,
                saveUninitialized: false,
        })
);
      
app.use((req, res, next)=>{
        if(!req.session.user){
                req.session.user={
                        role: "user"
                }
        }
        next();
})
        //auth
app.use("/login", login);
app.use("/register", register);
        //homepage
app.use("/", homepage);
        //use
app.use("/userprofile", userprofile);





//midleware per err
app.use((err, req, res, next) => {
    console.error(err.stack);
    console.error(err);
    res.status(404).render("error");
    res.status(500).send("Something broke!");
});  




//eventListner
app.listen(port,()=>console.log("Po nijn ne porten "+ port));