import { Link, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import {
  FieldError,
  Form,
  FormError,
  Label,
  TextField,
  Submit,
  useForm,
} from '@redwoodjs/forms'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm({ mode: 'onBlur' })
  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your submission!')
      formMethods.reset()
    },
  })
  const onSubmit = (data) => {
    console.dir(data)
    create({ variables: { input: data } })
  }
  return (
    <>
      <MetaTags title="Contact" description="Contact page" />
      <Toaster toastOptions={{ duration: 10000 }} />

      <h1>ContactPage</h1>
      <Form onSubmit={onSubmit} error={error} formMethods={formMethods}>
        <FormError error={error} wrapperClassName="form-error" />
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
            // pattern: {
            //   value: /^[^@]+@[^.]+\..+$/,
            //   message: 'Please enter a valid email address',
            // },
          }}
          errorClassName="error"
        />
        <FieldError name="email" className="error" />
        <Label htmlFor="message" errorClassName="error">
          Message
        </Label>
        <TextField
          name="message"
          validation={{
            required: true,
          }}
          errorClassName="error"
        />
        <FieldError name="message" className="error" />
        <Submit disabled={loading}>Save</Submit>
      </Form>
    </>
  )
}

export default ContactPage
