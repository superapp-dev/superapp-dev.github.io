import { BsStars } from 'react-icons/bs'
import { FaPaintBrush } from 'react-icons/fa'
import { IoRocketSharp } from 'react-icons/io5'

export const features = [
  {
    name: '210+ Components',
    description:
      'Chakra UI Pro has 210+ components with source code to help you develop your project faster.',
    icon: BsStars,
  },
  {
    name: 'Production Ready',
    description:
      'Effortlessly create your next production-ready experience with Chakra UI Pro components.',
    icon: IoRocketSharp,
  },
  {
    name: 'Themeable',
    description:
      "Your style. Your blue. Customize the components as you need them. It's that simple.",
    icon: FaPaintBrush,
  },
]

export const product = {
  name: 'Pro Bundle',
  price: '299',
  description: 'Everything in one bundle',
  features: [
    '210+ Components',
    'Unlimited projects',
    'Lifetime access',
    'Customer support',
    'Free updates',
    'Community access',
  ],
}

export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never

export type Feature = ElementType<typeof features>