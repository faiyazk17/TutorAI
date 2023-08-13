const express = require('express');
const router = express.Router();
const membersController = require('../../controllers/membersController');


router.route('/')
    .get(membersController.getAllMembers)
    .post(membersController.createNewMember)
    .put(membersController.updateMember)
    .delete(membersController.deleteMember);

router.route('/:id')
    .get(membersController.getMember)
    

module.exports = router;