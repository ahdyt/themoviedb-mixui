import { render, grabId } from 'shtjs'
import App from './App'

export default function startApp() {
  const container = grabId('root')
  render(App)(container)
}
