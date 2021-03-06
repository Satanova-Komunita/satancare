import * as t from 'io-ts'

export const Member = t.type({
  token: t.string,
  number: t.number
}, 'Member')

export type Member = t.TypeOf<typeof Member>
