import { Routes, Route } from 'react-router-dom'
import { ProfilePage } from './Pages/ProfilePage'

export function Router() {
  return (
    <Routes>
      <Route >
      <Route path="/" element={<ProfilePage />} />
      </Route>
    </Routes>
  )
}
