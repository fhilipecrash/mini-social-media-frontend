import { Link, Outlet } from 'react-router-dom'

export function Dashboard() {
  document.title = 'Dashboard'

  return (
    <div className="h-screen">
      <nav className="bg-slate-800 h-14">
        <Link to="profile" className="text-blue-600 hover:underline">
          Profile
        </Link>
        <Link to="settings" className="text-blue-600 hover:underline">
          Settings
        </Link>
      </nav>
      <div className="flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  )
}
