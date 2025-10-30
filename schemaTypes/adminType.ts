import {defineField, defineType} from 'sanity'

export const adminType = defineType({
  name: 'administradores',
  title: 'Administrador',
  type: 'document',
  fields: [
    defineField({
      name: 'usuario',
      type: 'string',
    }),
    defineField({
      name: 'senha',
      type: 'string',
    }),
    defineField({
      name: 'imagem',
      type: 'image',
    }),
  ],
})