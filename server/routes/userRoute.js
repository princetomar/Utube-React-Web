import express from "express";

const router = express.Router();

router.get("/test", userTest);

export default router;
