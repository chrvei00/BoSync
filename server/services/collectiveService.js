const collectiveModel = require("../models/collective");

exports.getAllCollectives = async () => {
  return await collectiveModel.find();
};

exports.createCollective = async (collective) => {
  return await collectiveModel.create(collective);
};
exports.getCollectiveByName = async (name) => {
  return await collectiveModel.findOne({ name: name });
};

exports.getCollectiveById = async (id) => {
  return await collectiveModel.findById(id);
};

exports.updateCollective = async (id, collective) => {
  return await collectiveModel.findByIdAndUpdate(id, collective, { new: true });
};
