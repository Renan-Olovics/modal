import { useModal } from '../../../../contexts'

export type Modal1Props = {
  name: string
  onClick: () => void
}

export const Modal1 = ({ name, onClick }: Modal1Props) => {
  const { remove } = useModal()

  return (
    <div style={{ backgroundColor: 'red' }}>
      <h1>{name}</h1>
      <button onClick={onClick}>Alert</button>
      <button onClick={remove}>Close</button>
    </div>
  )
}
