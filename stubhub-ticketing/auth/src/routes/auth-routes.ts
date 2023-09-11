// https://zenn.dev/himorishige/articles/5084aab24c9f35
import express from 'express';
import { getParticularUser, singUpUser } from '../controllers/auth-controller';

const router = express.Router();


// SignUpUser

router.route('/api/users/signup').post(singUpUser)

// GET Particular user
router.route('/api/users/currentuser').get(getParticularUser)


export default router;


