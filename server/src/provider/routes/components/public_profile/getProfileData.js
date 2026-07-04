import express from "express";
import { getProviderProfileById } from "../../../controllers/components/public_profile/getProfileData.js";

import { verifyToken } from '../../../../middleware/auth.js'

const router = express.Router();

router.get("/:providerId", verifyToken, getProviderProfileById);

export default router;