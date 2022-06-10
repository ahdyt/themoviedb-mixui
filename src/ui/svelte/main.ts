import App from './App.svelte'

export default function startApp() {
  const _ = new App({
    target: document.getElementById('root') ?? document.body
  })
}
