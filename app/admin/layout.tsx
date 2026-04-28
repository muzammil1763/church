import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import AdminSidebar from '@/components/admin/AdminSidebar'
import AdminHeader from '@/components/admin/AdminHeader'

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions)

  // If not authenticated, show children without layout (for login page)
  if (!session) {
    return <>{children}</>
  }

  // If authenticated, show full admin layout
  return (
    <div className="min-h-screen bg-gray-50">
      <AdminHeader session={session} />
      <div className="flex min-h-[calc(100vh-57px)]">
        <AdminSidebar />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
