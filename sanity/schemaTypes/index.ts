import { type SchemaTypeDefinition } from 'sanity'
import { categoryTypes } from './categoryTypes'
import { addressType } from './addressType'
import { authorTypes } from './authorTypes'
import { blogCategoryType } from './blogCategoryTypes'
import { blogContentTypes } from './blogContentTypes'
import { blogType } from './blogTypes'
import { brandType } from './brandTypes'
import { orderType } from './orderTypes'
import { productType } from './productTypes'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryTypes,addressType, authorTypes, blogCategoryType, blogContentTypes, blogType, brandType, orderType, productType ],
}
