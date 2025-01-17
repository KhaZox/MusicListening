module.exports= function sortMiddleware(req, res, next){

    res.locals._sort={
        enable: false,
        type: 'default',

    }

    if(req.query.hasOwnProperty('_sort')){
        // res.locals._sort.enable= true
        // res.locals._sort.type= req.query.type
        // res.locals._sort.column= req.query.column

        //c2
        Object.assign(res.locals._sort,{
            enable: true,
            type: req.query.type,
            col: req.query.col,
        })
    }

    next();
}