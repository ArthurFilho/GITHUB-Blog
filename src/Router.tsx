import { Routes, Route } from 'react-router-dom'
import { IssuesPage } from './Pages/IssuesPage'
import { ProfilePage } from './Pages/ProfilePage'

export function Router() {
  return (
    <Routes>
      <Route >
      <Route path="/" element={<ProfilePage />} />
      <Route path="/issuespage" element={<IssuesPage />} />
      </Route>
    </Routes>
  )
}
