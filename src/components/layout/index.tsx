import { FC } from 'react'

import { Header } from './header'
import { Sidebar } from './sidebar'

export const Layout: FC = ({ children }) => {
  return (
    <div>
      <Header />
      <Sidebar />
      {children}
    </div>
  )
}
