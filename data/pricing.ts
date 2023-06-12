import { IFeature } from "@/interfaces/IFeature"

export const products = [
  {
    name: 'Free',
    description: 'No credit card required. Forever free.',
    price: '$0',
    features: {
      // Features,
      Cupcakes: '10',
      Marshmallow: true,
      Biscuit: false,
      Brownie: false,
      // Analytics,
      Lollipop: 'Strawberry',
      Muffin: true,
      Pudding: false,
      Cookie: false,
      // Support
      Chocolate: true,
      Marzipan: false,
      Gingerbread: false,
    },
  },
  {
    name: 'Pro',
    isPopular: true,
    description: 'For small teams or side projects.',
    price: '$29',
    features: {
      // Features,
      Cupcakes: '20',
      Marshmallow: true,
      Biscuit: false,
      Brownie: false,
      // Analytics,
      Lollipop: 'Cherry',
      Muffin: true,
      Pudding: true,
      Cookie: false,
      // Support
      Chocolate: true,
      Marzipan: true,
      Gingerbread: false,
    },
  },
  {
    name: 'Ultimate',
    description: 'Enterprise-grade features and support.',
    price: '$499',
    features: {
      // Features,
      Cupcakes: 'Unlimited',
      Marshmallow: true,
      Biscuit: true,
      Brownie: true,
      // Analytics,
      Lollipop: 'Apple',
      Muffin: true,
      Pudding: true,
      Cookie: true,
      // Support
      Chocolate: true,
      Marzipan: true,
      Gingerbread: true,
    },
  },
]

export const features: IFeature[] = [
  {
    category: 'Features',
    items: [
      { name: 'Marshmallow' },
      {
        name: 'Cupcakes',
        tooltip: 'Tiramisu caramels topping donut oat cake chocolate bar cookie jujubes.',
      },
      {
        name: 'Biscuit',
        tooltip: 'Tiramisu caramels topping donut oat cake chocolate bar cookie jujubes.',
      },
      { name: 'Brownie' },
    ],
  },
  {
    category: 'Analytics',
    items: [
      { name: 'Lollipop' },
      {
        name: 'Muffin',
        tooltip: 'Tiramisu caramels topping donut oat cake chocolate bar cookie jujubes.',
      },
      { name: 'Pudding' },
      { name: 'Cookie' },
    ],
  },
  {
    category: 'Support',
    items: [
      { name: 'Chocolate' },
      { name: 'Marzipan' },
      {
        name: 'Gingerbread',
        tooltip: 'Tiramisu caramels topping donut oat cake chocolate bar cookie jujubes.',
      },
      { name: 'Brownie' },
    ],
  },
]

export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never

export type Product = ElementType<typeof products>
