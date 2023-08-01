import { Router } from "express";
import {dashboard} from '../controllers/GetController'

const routes = Router();

routes.get('/', dashboard)

export default routes