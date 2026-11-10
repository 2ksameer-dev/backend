const jwt = require("jsonwebtoken");

//autentiacation 
const authMiddleware = (req, res, next) =>{
    const authHeader = req.headers.authorization;

    // console.log(req.headers.authorization);
    if (!authHeader || !authHeader.startsWith("Bearer")){
        return res.status(401).json({
            meaasge: "token not exists! plss login!"
        });
    } 
    const token = authHeader.split(" ")[1];
    console.log(token)
    try{
        const decoded = jwt.verify(token,process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }catch (error){
        return res. status(401).json({
            message: "invlalidor expired token"
        });
    }
};

// role based anthorization middleware

const authorizeRole = (...roles) =>{
    return (req, res, next)=>{
        console.log("Token user:", req.user);
console.log("User role:", req.user?.role);
        if(!req.user){
            return res.status(401).json({
                messsage:"please login first"
            });
            
        }
        if(!roles.includes(req.user.role)){
            return res.status(403).json({
                message:"forbidden. you do nothave permission"
            });
        }
        next();
    };
};

//allows users to their own profile or authorizedroloes

const checkSelfOrRole  = (...roles) =>{
    return(req, res, next) =>{
        if(!req.user){
            return res.status(401).json({
                message:"please login first"
            });
        }
        const requestedUserId = req.params.id;
        const loggedInUserId = req.user.id;


// check if user is updating their own profile 

const ifSelf = requestedUserId === String(loggedInUserId);

//check if user has an authorized role

const hasRole = roles.includes(req.user.role);
if(isSelf || hasRole){
    return next();
}
return res.status(403).json({
    message:"forbidden. you can only update your own profile."
});

    };
};
module.exports = {authMiddleware, authorizeRole, checkSelfOrRole};