import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    //res.json({"concord":"melhor que discord"});
    res.sendFile('C:/Users/Vinicius/Desktop/concord/src/index.html');
});

export default router;