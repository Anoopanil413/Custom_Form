const Form = require('../Models/FormSchema')
const Submission = require('../Models/FormSubmission')
const validateSubmission = require('../helpers/validateForm')

  exports.createForm = async (req, res) => {
    const form = new Form(req.body);
    await form.save();
    return res.status(200).json(form);

  }
  

  exports.getAllForms = async(req, res) => {
    console.log("hhhhhhhhhhhhh")
   let formData =await Form.find({});
    return res.status(200).json(formData);

  }

  exports.getFormById = (req, res) => {
    Form.findById(req.params.id, (err, form) => {
      if (err) return res.status(500).send(err);
      return res.status(200).send(form);
    });
  }


  exports.submitForm = (req,res)=>{
    try {
        Form.findById(req.params.id, async(err, form) => {
            if (err) return res.status(500).send(err);
            
                const submission = req.body;
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
    
      })
        
    } catch (error) {

        console.log(error)
        
    }

  
}
  
