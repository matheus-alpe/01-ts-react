import React, { PropsWithChildren } from 'react'
import { IUser } from '../interfaces'

interface Props {
  user: IUser
}

const ItemUser: React.FC<PropsWithChildren<Props>> = ({ user, children }) => (
  <li>
    <details>
      <summary>{user.name}</summary>

      <sub>
        <span>Contato: </span>

        <a href={`mailto:${user.email}`}>{user.email}</a>
        <p>{children}</p>
      </sub>
    </details>
  </li>
)

export default ItemUser
