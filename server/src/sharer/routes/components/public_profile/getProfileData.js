import express from "express";
import { getSharerProfileById } from "../../../controllers/components/public_profile/getProfileData.js";

import { verifyToken } from '../../../../middleware/auth.js'

const router = express.Router();

router.get("/:sharerId", verifyToken, getSharerProfileById);

export default router;