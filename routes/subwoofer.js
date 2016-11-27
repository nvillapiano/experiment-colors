var Express = require('express');

var router = Express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    res.render('pages/subwoofer', {
        title: 'Subwoofer',
        // htmlClass: 'table-of-contents-background',
        bodyClass: 'subwoofer fade',
        pageJs: 'subwoofer',
        // sections: [
        //     [
        //         {
        //             label: 'Styleguide',
        //             url: 'styleguide',
        //         },
        //     ],
        // ],
    });
});

module.exports = router;
