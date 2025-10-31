import {defineField, defineType} from 'sanity'

export const promocaoType = defineType({
  name: 'Promoção',
  title: 'Promoção',
  type: 'document',
  fields: [

     defineField({
      name: 'id',
      type: 'number',
      
    }),
    defineField({
      name: 'imagem',
      type: 'image',
    }),

  ],
})