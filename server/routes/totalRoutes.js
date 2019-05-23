let express = require('express'),
    router = express.Router(),
    util = require('../utilities/util'),
    leaguesService = require('../services/leagues');
    sportsService = require('../services/sports');

/**Api to create article */
router.post('/create-article', (req, res) => {
    articleService.createArticle(req.body, (data) => {
        res.send(data);
    });
});

// /**Api to update article */
router.put('/update-article', (req, res) => {
    articleService.updateArticle(req.body, (data) => {
        res.send(data);
    });
});

// /**Api to delete the article */
router.delete('/delete-article', (req, res) => {
    articleService.deleteArticle(req.query, (data) => {
        res.send(data);
    });
});

/**Api to get the list of leagues */
router.get('/get-leagues', (req, res) => {
    leaguesService.getLeagues(req.query, (data) => {
        res.send(data);
    });
});

/**Api to get the list of leagues by sport*/
router.get('/get-leagues-by-sport', (req, res) => {
    leaguesService.getLeaguesBySport(req.body, (data) => {
        res.send(data);
    });
});

/**Api to get the list of sports */
router.get('/get-sports', (req, res) => {
    sportsService.getSports(req.query, (data) => {
        res.send(data);
    });
});

/**Api to get the list of leagues by sport*/
router.get('/get-sports-by-id', (req, res) => {
    sportsService.getSportsById(req.body, (data) => {
        res.send(data);
    });
});


module.exports = router;