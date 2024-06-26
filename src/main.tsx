import ReactDOM from 'react-dom/client'
import { RecoilRoot } from "recoil"
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RecoilRoot>
    <App/>
  </RecoilRoot>,
)
