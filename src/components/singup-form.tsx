import { useForm } from '@tanstack/react-form'
import { Navigate, redirect } from '@tanstack/react-router'
import { toast } from 'sonner'
import * as z from 'zod'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { InputGroup } from '@/components/ui/input-group'
import { authClient } from '@/lib/auth-client'

const formSchema = z.object({
  name: z
    .string()
    .min(3, 'Bug title must be at least 5 characters.')
    .max(32, 'Bug title must be at most 32 characters.'),
  email: z.email(),
  password: z.string().min(8, 'Doit comporter au moins 8 caractères.'),
})

export function SingupForm() {
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async (data) => {
      const { email, name, password } = data.value
     await authClient.signUp.email({
        name,
        email,
        password,
      }, {
      onSuccess: async (resp) => {
        console.log('User signed up successfully:', resp);
        await Navigate({to:'/tranokala'})
      },
      onError: (ctx) => {
        alert(ctx.error.message);
      }
    })
    },
  })

  return (
    <Card className="w-full sm:max-w-md">
      <CardHeader>
        <CardTitle>Créer votre compte</CardTitle>
        <CardDescription>
          Entrer votre information pour votre compte.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form
          id="bug-report-form"
          onSubmit={(e) => {
            e.preventDefault()
            form.handleSubmit()
          }}
        >
          <FieldGroup>
            <form.Field
              name="name"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>nom</FieldLabel>
                    <Input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                      placeholder="Entrer votre nom"
                      autoComplete="off"
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
            <form.Field
              name="email"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>email</FieldLabel>
                    <InputGroup>
                      <Input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="moi.exemple@gmai.com"
                        aria-invalid={isInvalid}
                      />
                    </InputGroup>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
            <form.Field
              name="password"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid
                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>mot de passe</FieldLabel>
                    <InputGroup>
                      <Input
                        id={field.name}
                        name={field.name}
                        type="password"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        placeholder="mot de passe"
                        aria-invalid={isInvalid}
                      />
                    </InputGroup>
                    <FieldDescription>
                      Doit comporter au moins 8 caractères.
                    </FieldDescription>
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                )
              }}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <FieldDescription>
            Vous-avez déjas une compte?
            <a href=""></a>
                    </FieldDescription>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type="submit" form="bug-report-form">
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
