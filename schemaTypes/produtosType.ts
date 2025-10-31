import {defineField, defineType} from 'sanity'

export const produtosType = defineType({
  name: 'Produtos',
  title: 'Produtos',
  type: 'document',
  fields: [
      defineField({
      name: 'id',
      type: 'number',
      
    }),
    defineField({
      name: 'nome',
      type: 'string',
    }),
    defineField({
      name: 'preco',
      type: 'number',
    }),
    defineField({
      name: 'imagem',
      type: 'image',
    }),
        defineField({
      name: 'descricao',
      type: 'string',
    }),
  ],
})