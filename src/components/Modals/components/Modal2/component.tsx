import { useModal } from '../../../../contexts'

export type Modal2Props = {
  age: string
  onClick: () => void
}

export const Modal2 = ({ age, onClick }: Modal2Props) => {
  const { remove } = useModal()

  return (
    <div style={{ backgroundColor: 'blue' }}>
      <h1>{age}</h1>
      <button onClick={onClick}>Alert</button>
      <button onClick={remove}>Close</button>
    </div>
  )
}
