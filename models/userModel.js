const mongoose = require('mongoose');

// user data model
// Define the user schema
const userSchemaRules = new mongoose.Schema({
  id: String,
  name: String,
  designation: String,
  photo: String,
  about: {
    introduction: String,
    aboutMe: String,
    whatSetsMeApart: {
      expertise: String,
      passion: String,
      creativity: String,
      collaboration: String,
      results: String
    },
    whyChooseMe: String
  },
  skills: {
    programmingLanguages: [String],
    webDevelopment: [String],
    databaseManagement: [String],
    versionControl: [String],
    ide: [String],
    apiFrameworksLibraries: [String],
    ticketingOtherTools: [String],
    os: [String]
  },
  softSkills: {
    criticalThinking: String,
    goodCommunication: String,
    leadership: String,
    adaptability: String
  },
  profiles: {
    LinkedIn: String,
    HackerRank: String,
    LeetCode: String,
    GitHub: String
  },
  projects: {
    type: Map,
    of: String
  }
});
//schema -> structure and validation
const userSchema = new mongoose.Schema(userSchemaRules);

// Create a model from the schema
const UserModel = mongoose.model('MyDetails', userSchema);

module.exports = UserModel;
