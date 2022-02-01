import { Router } from "express";
import {
  getRecords,
  addRecord,
  showFour,
  controlNewRecord,
} from "../controllers/records.controller.js";

const router = new Router();

router.route("/records").get(getRecords).post(controlNewRecord,addRecord);

router.route("/records/top4").get(showFour);

export default router;
