import type { Drink } from '@/types'

export const drinks: Drink[] = [
  {
    id: '1',
    name: 'Margarita',
    category: 'Cóctel',
    alcoholic: true,
    glass: 'Copa de Margarita',
    instructions:
      'Escarcha el borde de la copa con sal. Agita todos los ingredientes con hielo, cuela en la copa preparada y sirve.',
    image:
      'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
    ingredients: [
      { name: 'Tequila', measure: '35ml' },
      { name: 'Triple Sec', measure: '15ml' },
      { name: 'Jugo de limón', measure: '15ml' },
      { name: 'Sal', measure: '1 pizca' }
    ]
  },
  {
    id: '2',
    name: 'Mojito',
    category: 'Cóctel',
    alcoholic: true,
    glass: 'Highball',
    instructions:
      'Machaca suavemente las hojas de menta con el azúcar y el jugo de lima en un vaso alto. Añade unos cubitos de hielo, el ron y completa con agua con gas. Decora con hojas de menta y una rodaja de lima.',
    image:
      'https://www.thecocktaildb.com/images/media/drink/metwgh1606770327.jpg',
    ingredients: [
      { name: 'Ron blanco', measure: '45ml' },
      { name: 'Jugo de lima', measure: '20ml' },
      { name: 'Azúcar', measure: '2 cucharaditas' },
      { name: 'Hojas de menta', measure: '6' },
      { name: 'Agua con gas', measure: 'Al gusto' }
    ]
  },
  {
    id: '3',
    name: 'Piña Colada',
    category: 'Cóctel',
    alcoholic: true,
    glass: 'Hurricane',
    instructions:
      'Mezcla todos los ingredientes en una licuadora con hielo hasta obtener una consistencia suave. Sirve en un vaso y decora con una rodaja de piña y una cereza.',
    image:
      'https://www.thecocktaildb.com/images/media/drink/cpf4j51504371346.jpg',
    ingredients: [
      { name: 'Ron blanco', measure: '50ml' },
      { name: 'Crema de coco', measure: '30ml' },
      { name: 'Jugo de piña', measure: '50ml' },
      { name: 'Hielo', measure: '1 taza' }
    ]
  },
  {
    id: '4',
    name: 'Daiquiri de Fresa',
    category: 'Cóctel',
    alcoholic: true,
    glass: 'Copa de Cóctel',
    instructions:
      'Combina todos los ingredientes en una licuadora con hielo. Licúa hasta obtener una mezcla suave. Sirve en una copa de cóctel.',
    image:
      'https://www.thecocktaildb.com/images/media/drink/deu59m1504736135.jpg',
    ingredients: [
      { name: 'Ron blanco', measure: '45ml' },
      { name: 'Fresas', measure: '6 unidades' },
      { name: 'Jugo de limón', measure: '15ml' },
      { name: 'Azúcar', measure: '1 cucharada' },
      { name: 'Hielo', measure: '1 taza' }
    ]
  },
  {
    id: '5',
    name: 'Limonada de Coco',
    category: 'Bebida sin alcohol',
    alcoholic: false,
    glass: 'Highball',
    instructions:
      'Mezcla el jugo de limón con el azúcar hasta disolver. Añade la leche de coco y mezcla bien. Sirve con hielo y decora con una rodaja de limón.',
    image:
      'https://www.thecocktaildb.com/images/media/drink/5ka4cz1621690382.jpg',
    ingredients: [
      { name: 'Jugo de limón', measure: '60ml' },
      { name: 'Leche de coco', measure: '120ml' },
      { name: 'Azúcar', measure: '2 cucharadas' },
      { name: 'Hielo', measure: 'Al gusto' }
    ]
  },
  {
    id: '6',
    name: 'Smoothie Tropical',
    category: 'Bebida sin alcohol',
    alcoholic: false,
    glass: 'Vaso alto',
    instructions:
      'Coloca todas las frutas en una licuadora con el yogur y la miel. Licúa hasta obtener una mezcla suave. Sirve inmediatamente.',
    image:
      'https://www.thecocktaildb.com/images/media/drink/vqquu41504367496.jpg',
    ingredients: [
      { name: 'Mango', measure: '1/2 unidad' },
      { name: 'Piña', measure: '1 taza' },
      { name: 'Plátano', measure: '1 unidad' },
      { name: 'Yogur natural', measure: '1/2 taza' },
      { name: 'Miel', measure: '1 cucharada' }
    ]
  },
  {
    id: '7',
    name: 'Negroni',
    category: 'Cóctel',
    alcoholic: true,
    glass: 'Old Fashioned',
    instructions:
      'Mezcla todos los ingredientes directamente en un vaso con hielo. Decora con una rodaja de naranja.',
    image:
      'https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg',
    ingredients: [
      { name: 'Gin', measure: '30ml' },
      { name: 'Campari', measure: '30ml' },
      { name: 'Vermut rojo', measure: '30ml' }
    ]
  },
  {
    id: '8',
    name: 'Agua de Jamaica',
    category: 'Bebida sin alcohol',
    alcoholic: false,
    glass: 'Vaso alto',
    instructions:
      'Hierve las flores de jamaica en agua durante 10 minutos. Cuela y añade azúcar al gusto. Deja enfriar y sirve con hielo.',
    image:
      'https://www.thecocktaildb.com/images/media/drink/xqutpr1461867477.jpg',
    ingredients: [
      { name: 'Flores de jamaica', measure: '1 taza' },
      { name: 'Agua', measure: '2 litros' },
      { name: 'Azúcar', measure: 'Al gusto' },
      { name: 'Hielo', measure: 'Al gusto' }
    ]
  }
]

export const favoriteDrinks: Drink[] = [drinks[0], drinks[2], drinks[5]]
