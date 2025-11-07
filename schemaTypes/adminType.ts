import { defineField, defineType } from 'sanity'

export const adminType = defineType({
  name: 'administradores',
  title: 'Administrador',
  type: 'document',
  fields: [
    defineField({
      name: 'usuario',
      title: 'Usuário',
      type: 'string',
    }),
    defineField({
      name: 'senha',
      title: 'Senha',
      type: 'string',
    }),
    defineField({
      name: 'imagem',
      title: 'Imagem',
      type: 'image',
    }),

  ],
})
