import GeneralButton from './GeneralButton'

export const generated = () => {
  return <GeneralButton />
}

export default {
  title: 'Components/GeneralButton',
  component: GeneralButton,
}

export const Primary = () => <GeneralButton>Primary</GeneralButton>
export const Secondary = () => <GeneralButton>Secondary</GeneralButton>
export const Tertiary = () => <GeneralButton>Tertiary</GeneralButton>
