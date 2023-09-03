import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const registerForms: QueryResolvers['registerForms'] = () => {
  return db.registerForm.findMany()
}

export const registerForm: QueryResolvers['registerForm'] = ({ id }) => {
  return db.registerForm.findUnique({
    where: { id },
  })
}

export const createRegisterForm: MutationResolvers['createRegisterForm'] = ({
  input,
}) => {
  return db.registerForm.create({
    data: input,
  })
}

export const updateRegisterForm: MutationResolvers['updateRegisterForm'] = ({
  id,
  input,
}) => {
  return db.registerForm.update({
    data: input,
    where: { id },
  })
}

export const deleteRegisterForm: MutationResolvers['deleteRegisterForm'] = ({
  id,
}) => {
  return db.registerForm.delete({
    where: { id },
  })
}
