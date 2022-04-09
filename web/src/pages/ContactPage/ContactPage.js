import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { FieldError, Form, Label, TextField, Submit } from '@redwoodjs/forms'

const ContactPage = () => {
  const onSubmit = (data) => {
    console.log(data)
  }
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      <h1>ContactPage</h1>
      <Form onSubmit={onSubmit} config={{ mode: 'onBlur' }}>
        <Label htmlFor="name" errorClassName="error">
          Name
        </Label>
        <TextField
          name="name"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="name" className="error" />
        <Label htmlFor="Email" errorClassName="error">
          Email
        </Label>
        <TextField
          name="email"
          validation={{
            required: true,
            pattern: {
              value: /^[^@]+@[^.]+\..+$/,
              message: 'Please enter a valid email address',
            },
          }}
          errorClassName="error"
        />
        <FieldError name="email" className="error" />
        <Label htmlFor="message" errorClassName="error">
          Message
        </Label>
        <TextField
          name="messege"
          validation={{
            required: true,
          }}
          errorClassName="error"
        />
        <FieldError name="messege" className="error" />
        <Submit>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
