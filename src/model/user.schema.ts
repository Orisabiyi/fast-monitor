export const userSchema = {
  body: {
    type: 'object',
    required: ['email', 'fullName', 'password'],
    properties: {
      email: { type: 'string' },
      fullName: { type: 'string' },
      password: { type: 'string' }
    }
  }
}