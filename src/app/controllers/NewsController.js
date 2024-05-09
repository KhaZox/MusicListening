

class NewsController {
    index(req, res,next) {
        res.send('new'); 
    }
}

module.exports = new NewsController();
