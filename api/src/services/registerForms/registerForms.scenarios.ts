import type { Prisma, RegisterForm } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RegisterFormCreateArgs>({
  registerForm: {
    one: { data: { name: 'String', email: 'String', message: 'String' } },
    two: { data: { name: 'String', email: 'String', message: 'String' } },
  },
})

export type StandardScenario = ScenarioData<RegisterForm, 'registerForm'>
