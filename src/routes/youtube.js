const express = require('express');
const router = express.Router();
const youtubeController= require('../app/controllers/YoutubeController')

router.get('/:id/edit',youtubeController.edit);
router.put('/:id', youtubeController.update);
router.patch('/:id/restore', youtubeController.restore);
router.delete('/:id', youtubeController.delete);
router.delete('/:id/force', youtubeController.forcedelete);
router.post('/handle-form-actions', youtubeController.handleFormActions);
router.get('/create',youtubeController.create);
router.post('/store',youtubeController.store);
router.get('/watch/:slug',youtubeController.show);

module.exports = router;
