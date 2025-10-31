import {defineField, defineType} from 'sanity'

export const promocaoType = defineType({
  name: 'Promocao',
  title: 'Promocao',
  type: 'document',
  fields: [

     defineField({
      name: 'nome',
      type: 'number',
      
    }),
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