import type { Meta, StoryObj } from '@storybook/react'

import UserRegisterLayout from './UserRegisterLayout'

const meta: Meta<typeof UserRegisterLayout> = {
  component: UserRegisterLayout,
}

export default meta

type Story = StoryObj<typeof UserRegisterLayout>

export const Primary: Story = {}
