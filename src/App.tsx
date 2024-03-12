import { useModal } from './contexts'

import { faker } from '@faker-js/faker'

export const App = () => {
  const m = useModal()

  const createModal1 = () => {
    m.open({
      name: 'Modal1',
      id: faker.string.uuid(),
      props: { name: faker.person.fullName(), onClick: () => window.alert('Alert modal1') },
    })
  }

  const createModal2 = () => {
    m.open({
      name: 'Modal2',
      id: faker.string.uuid(),
      props: { age: faker.person.fullName(), onClick: () => window.alert('Alert modal2') },
    })
  }

  return (
    <div style={{ display: 'flex' }}>
      <button onClick={createModal1}>OpenModal1</button>
      <button onClick={createModal2}>OpenModal2</button>
      <button onClick={m.closeAll}>Close all modals</button>
      <button onClick={m.remove}>Close first modal</button>
      <span>current list of modals: {JSON.stringify(m.modals)}</span>
    </div>
  )
}
