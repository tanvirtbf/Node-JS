import { Router } from "express";
import { getShortenerPage, postURLShortener, redirectToShortLink } from "../controller/postshortener.controller.js";

const router = Router();

router.post('/', postURLShortener);
router.get("/", getShortenerPage);
router.get("/:shortCode", redirectToShortLink);

export const shortenerRoutes = router;
