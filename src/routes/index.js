import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.json({"concord":"melhor que discord"});
});

export default router;