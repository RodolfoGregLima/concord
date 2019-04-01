import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    //res.json({"concord":"melhor que discord"});
    res.sendFile(__dirname + "/index.html");
});

export default router;