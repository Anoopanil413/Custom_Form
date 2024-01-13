const Form = require('../Models/FormSchema')
const Submission = require('../Models/FormSubmission')
const validateSubmission = require('../helpers/validateForm')

  exports.createForm = async (req, res) => {
    console.log("helooooo",req.body)
    const form = new Form(req.body);
    await form.save();
    return res.status(200).json(form);

  }
  

  exports.getAllForms = async(req, res) => {
    console.log("hhhhhhhhhhhhh")
   let formData =await Form.find({});
    return res.status(200).json(formData);

  }

  exports.getFormById = async(req, res) => {

    const form = await Form.findById(req.params.id);
    return res.status(200).send(form);

  }


  exports.submitForm = async(req,res)=>{
    try {
      const submission = req.body;
      const form = await Form.findById(req.params.id)
      const errors = validateSubmission(form, submission);
      if (errors.length > 0) return res.status(400).send({ errors });


      const submissionData = {
        form: form._id,
        answers: form.fields.map(field => ({
          field: field._id,
          value: req.body[field.name]
        }))
      };
    const Datasubmission = new Submission(submissionData);

    await Datasubmission.save()
    return res.status(200).json(submission);

        
    } catch (error) {

        console.log(error)
        
    }

  
}
  
