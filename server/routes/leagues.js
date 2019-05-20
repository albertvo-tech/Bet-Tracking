let express = require('express'),
    router = express.Router(),
    util = require('../utilities/util'),
    leaguesService = require('../services/leagues');

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

// /**API to get the article by id... */
router.get('/get-article-by-id', (req, res) => {
    articleService.getArticleById(req.query, (data) => {
        res.send(data);
    });
});

module.exports = router;