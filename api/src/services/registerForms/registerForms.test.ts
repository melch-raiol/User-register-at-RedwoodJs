import type { RegisterForm } from '@prisma/client'

import {
  registerForms,
  registerForm,
  createRegisterForm,
  updateRegisterForm,
  deleteRegisterForm,
} from './registerForms'
import type { StandardScenario } from './registerForms.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('registerForms', () => {
  scenario('returns all registerForms', async (scenario: StandardScenario) => {
    const result = await registerForms()

    expect(result.length).toEqual(Object.keys(scenario.registerForm).length)
  })

  scenario(
    'returns a single registerForm',
    async (scenario: StandardScenario) => {
      const result = await registerForm({ id: scenario.registerForm.one.id })

      expect(result).toEqual(scenario.registerForm.one)
    }
  )

  scenario('creates a registerForm', async () => {
    const result = await createRegisterForm({
      input: { name: 'String', email: 'String', message: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.email).toEqual('String')
    expect(result.message).toEqual('String')
  })

  scenario('updates a registerForm', async (scenario: StandardScenario) => {
    const original = (await registerForm({
      id: scenario.registerForm.one.id,
    })) as RegisterForm
    const result = await updateRegisterForm({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a registerForm', async (scenario: StandardScenario) => {
    const original = (await deleteRegisterForm({
      id: scenario.registerForm.one.id,
    })) as RegisterForm
    const result = await registerForm({ id: original.id })

    expect(result).toEqual(null)
  })
})
