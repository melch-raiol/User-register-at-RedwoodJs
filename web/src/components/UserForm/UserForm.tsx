import {
  FieldError,
  Form,
  Submit,
  TextField,
  TextAreaField,
  SubmitHandler,
} from '@redwoodjs/forms'

interface FormValues {
  name: string
  email: string
  message: string
}

const UserForm = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data)
    clear(data)
  }

  const clear = (data) => {
    console.log(data)
  }

  return (
    <Form className="user-form display-center" onSubmit={onSubmit}>
      <div className="div-form display-center">
        <div className="div-input">
          <label htmlFor="name" className="label-form">
            Name
          </label>
          <TextField
            className="input-form"
            name="name"
            validation={{ required: true }}
          />
          <FieldError name="name" />
        </div>

        <div className="div-input">
          <label htmlFor="email" className="label-form">
            Email
          </label>
          <TextField
            className="input-form"
            name="email"
            validation={{ required: true }}
          />
          <FieldError name="email" />
        </div>

        <div className="div-input div-text-area">
          <label htmlFor="message" className="label-form">
            Mensagem
          </label>
          <TextAreaField
            className="input-form text-area"
            name="message"
            validation={{ required: true }}
          />
          <FieldError name="message" />
        </div>

        <div className="div-input display-center">
          <Submit className="btn-save input-form">
            <p>Save</p>
          </Submit>
        </div>
      </div>
    </Form>
  )
}

export default UserForm
