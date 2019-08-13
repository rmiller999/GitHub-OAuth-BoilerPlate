import express from 'express';
const Router = express.Router();
import User from '../models/user';
import axios from 'axios';
import router from './auth';

router.get('/:id/repos', (req, res) => {
  let config = {
    headers: {
      'Authorization': `Bearer ${req.user.accessToken}`,
      'User-Agent': 'Reids GitHub OAuth'
    }
  }
  axios.get(`https://api.github.com/user/repos`, config)
    .then((response) => {
      res.json(response.data);
    }).catch((err) => {
      console.log(err);
    })
});

export default router;