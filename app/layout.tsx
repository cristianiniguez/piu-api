import { FC, PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import Providers from './providers'

export const metadata: Metadata = {
  title: 'PIU API (Randomizer)',
  description: 'Pump It Up API and Randomizer'
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body>
      <Providers>{children}</Providers>
    </body>
  </html>
)

export default RootLayout
