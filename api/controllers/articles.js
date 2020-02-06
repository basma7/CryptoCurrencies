module.exports = {

    articles: async (req, res, next) => {
        if(req.query.id!= null ){
            console.log('ArticlesController. articlesByParams() called! '+req.query.id);
        }else{


            console.log('ArticlesController. articlesByParams() called! language ' + req.query.language+
                ' name ' +
                'crypto :'+req.query.nameCrypto
                +' MarcketCrash :'+req.query.increase);
        }
    }
};