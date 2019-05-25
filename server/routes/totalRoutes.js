let express = require('express'),
    router = express.Router(),
    util = require('../utilities/util'),
    leaguesService = require('../services/leagues');
    sportsService = require('../services/sports');
    soccerService = require('../services/soccer');
    basketballService = require('../services/basketball');
    tenisService = require('../services/tenis');
    teamsService = require('../services/teams');

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

/**Api to get the odds soccer 1*/
router.get('/get-soccer-odd1', (req, res) => {
    soccerService.getOddSoccer1(req.body, (data) => {
        res.send(data);
    });
});

/**Api to get the odds soccer 2*/
router.get('/get-soccer-odd2', (req, res) => {
    soccerService.getOddSoccer2(req.body, (data) => {
        res.send(data);
    });
});

/**Api to get the odds soccer x*/
router.get('/get-soccer-oddx', (req, res) => {
    soccerService.getOddSoccerX(req.body, (data) => {
        res.send(data);
    });
});

/**Api to get the max odds soccer 1*/
router.get('/get-max-soccer-odd1', (req, res) => {
    soccerService.getOddSoccerMax(req.body, (data) => {
        res.send(data);
    });
});

/**Api to get the min odds soccer 1*/
router.get('/get-min-soccer-odd1', (req, res) => {
    soccerService.getOddSoccerMin(req.body, (data) => {
        res.send(data);
    });
});

/**Api to get the MaxBet odds soccer 1*/
router.get('/get-maxbet-soccer-odd1', (req, res) => {
    soccerService.getOddSoccerMaxBet(req.body, (data) => {
        res.send(data);
    });
});

/**Api to get the average odds soccer 1*/
router.get('/get-average-soccer-odd1', (req, res) => {
    soccerService.getOddSoccerAverage(req.body, (data) => {
        res.send(data);
    });
});

/**Api to get the odds basketball VAL*/
router.get('/get-basketball-odd', (req, res) => {
    basketballService.getOddBasketballVal(req.body, (data) => {
        res.send(data);
    });
});

/**Api to get the max odds basketball VAL*/
router.get('/get-max-basketball-odd', (req, res) => {
    basketballService.getOddBasketballMax(req.body, (data) => {
        res.send(data);
    });
});

/**Api to get the min odds basketball VAL*/
router.get('/get-min-basketball-odd', (req, res) => {
    basketballService.getOddBasketballMin(req.body, (data) => {
        res.send(data);
    });
});

/**Api to get the MaxBet odds basketball VAL*/
router.get('/get-maxbet-basketball-odd', (req, res) => {
    basketballService.getOddBasketballMaxBet(req.body, (data) => {
        res.send(data);
    });
});

/**Api to get the average odds basketball VAL*/
router.get('/get-average-basketball-odd', (req, res) => {
    basketballService.getOddBasketballAverage(req.body, (data) => {
        res.send(data);
    });
});

/**Api to get the odds tenis T1*/
router.get('/get-tenis-odd1', (req, res) => {
    tenisService.getOddTenisT1(req.body, (data) => {
        res.send(data);
    });
});

/**Api to get the odds tenis T2*/
router.get('/get-tenis-odd2', (req, res) => {
    tenisService.getOddTenisT2(req.body, (data) => {
        res.send(data);
    });
});

/**Api to get the max odds tenis T1*/
router.get('/get-max-tenis-odd1', (req, res) => {
    tenisService.getOddTenisMax(req.body, (data) => {
        res.send(data);
    });
});

/**Api to get the min odds tenis T1*/
router.get('/get-min-tenis-odd1', (req, res) => {
    tenisService.getOddTenisMin(req.body, (data) => {
        res.send(data);
    });
});

/**Api to get the MaxBet odds tenis T1*/
router.get('/get-maxbet-tenis-odd1', (req, res) => {
    tenisService.getOddTenisMaxBet(req.body, (data) => {
        res.send(data);
    });
});

/**Api to get the average odds tenis T1*/
router.get('/get-average-tenis-odd1', (req, res) => {
    tenisService.getOddTenisAverage(req.body, (data) => {
        res.send(data);
    });
});

/**Api to get the local teams*/
router.get('/get-local-teams', (req, res) => {
    teamsService.getTeamsLocal(req.body, (data) => {
        res.send(data);
    });
});

/**Api to get the away teams*/
router.get('/get-away-teams', (req, res) => {
    teamsService.getAwayLocal(req.body, (data) => {
        res.send(data);
    });
});

/**Api to get the nolose teams*/
router.get('/get-nolose-teams', (req, res) => {
    teamsService.getTeamsNOLOSE(req.body, (data) => {
        res.send(data);
    });
});


module.exports = router;