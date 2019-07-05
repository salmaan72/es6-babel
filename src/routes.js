import express from 'express';
const router = express.Router();

router.route('*').get(function (req, res, next) {
    console.log('Request was made to: ' + req.originalUrl);
    return next();
});


export { router as globalRouter };
