import {defineField, defineType} from 'sanity'

export const clienteType = defineType({
  name: 'Clientes',
  title: 'Clientes',
  type: 'document',
  fields: [
    defineField({
      name: 'nome',
      type: 'string',
    }),
    defineField({
      name: 'CPF',
      type: 'number',
    }),
  ],
})