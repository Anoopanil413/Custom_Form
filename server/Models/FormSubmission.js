
const mongoose = require('mongoose');
const { Schema } = mongoose;

const SubmissionSchema = new Schema({
    form: { type: Schema.Types.ObjectId, ref: 'Form' },
    answers: [{
      field: { type: Schema.Types.ObjectId, ref: 'Field' },
      value: Schema.Types.Mixed
    }]
  });
  
  const Submission = mongoose.model('Submission', SubmissionSchema);

  module.exports = Submission