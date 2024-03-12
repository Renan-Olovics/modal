import { Modal1Props } from '../components/Modals/components/Modal1/component'
import { Modal2Props } from '../components/Modals/components/Modal2/component'

type Modal1 = {
  name: 'Modal1'
  id: string
  props: Modal1Props
}

type Modal2 = {
  name: 'Modal2'
  id: string
  props: Modal2Props
}

export type Modals = Modal1 | Modal2
