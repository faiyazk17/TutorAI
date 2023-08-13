const Member = require('../model/members');
// const data = {};
// data.members = require('../model/members.json');

const getAllMembers = async (req, res) => {
    const members = await Member.find();
    if (!members) return res.status(204).json({ 'message': 'No member found.' });
    res.json(members);
}

const createNewMember = async (req, res) => {

    if (!req?.body?.email || !req?.body?.password) {
        return res.status(400).json({ 'message': 'First and last names are required' });
    }

    try {
        const result = await Member.create({
            email: req.body.email,
            password: req.body.password
        });

        res.status(201).json(result);

    } catch (err) {
        console.error(err);
    }
}

const updateMember = async (req, res) => {

    if (!req?.body?.id) {
        return res.status(400).json({ 'message': 'ID parameter is required.' });
    }

    const member = await Member.findOne({ _id: req.body.id }).exec();
    if (!member) {
        return res.status(204).json({ "message": `No member matches ID ${req.body.id}.` });
    }
    if (req.body?.firstname) member.firstname = req.body.firstname;
    if (req.body?.lastname) member.lastname = req.body.lastname;
    const result = await member.save();
    res.json(result);
}

const deleteMember = async (req, res) => {

    if (!req?.body?.id) return res.status(400).json({ 'message': 'member ID required.' });

    const member = await Member.findOne({ _id: req.body.id }).exec();
    if (!member) {
        return res.status(204).json({ "message": `No member matches ID ${req.body.id}.` });
    }
    const result = await member.deleteOne();

    res.json(result);
}

const getMember = async (req, res) => {

    if (!req?.params?.id) return res.status(400).json({ 'message': 'member ID required.' });

    const member = await Member.findOne({ _id: req.params.id }).exec();
    if (!member) {
        return res.status(204).json({ "message": `No member matches ID ${req.params.id}.` });
    }
    res.json(member);
}

module.exports = {
    getAllMembers,
    createNewMember,
    updateMember,
    deleteMember,
    getMember
}