exports.isAuthSuper = async (req, res, next) => {
    if(req.session.user.role==="user"){
        try{
            await res.render('redirect',{message: "Nuk keni privilegje te mjaftueshme"});
        }
        catch(err){
            console.error(err);
        }
    }else{
        if(req.session.user.role==="admin"){
            try{
                await next();
            }catch(err){
                console.error(err);
            }
        }
    }
}