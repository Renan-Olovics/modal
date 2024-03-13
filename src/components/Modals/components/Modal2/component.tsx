import { useModal } from '../../../../contexts'

export type Modal2Props = {
  age: number
  onClick: () => void
}

export const Modal2 = ({ age, onClick }: Modal2Props) => {
  const { remove } = useModal()

  return (
    <div>
      <h1>{age}</h1>
      <button onClick={onClick}>Alert</button>
      <button onClick={remove}>Close</button>
    </div>
  )
}
