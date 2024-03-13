import { useModal } from '../../contexts'

import * as Modals from './components'

export const ModalRoot = () => {
  const { modals } = useModal()

  return modals.map(({ name, id, props }) => {
    const Component = Modals[name]

    //@ts-ignore
    return <Component key={id} {...props} />
  })
}
