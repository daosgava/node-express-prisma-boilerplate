import express from "express";
const router = express.Router();

/* GET home page. */
router.get("/", (req, res) => {
	res.send("Node Express Prisma Boilerplate ಠωಠ");
});

export default router;
