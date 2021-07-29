import Joi from 'joi'
const phoneExp = /^[789]\d{9}$/
const formValidation = (data) => {
  const formSchema = Joi.object({
    email: Joi.string().label('Email').required().email({
      tlds: false,
    }),
    number: Joi.string()
      .min(10)
      .label('Mobile Number')
      .required()
      .pattern(phoneExp),
  }).required()

  return formSchema.validate(data)
}

export { formValidation }
