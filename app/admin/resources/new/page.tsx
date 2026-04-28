import ResourceForm from '@/components/admin/ResourceForm'

export default function NewResourcePage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Add New Resource</h1>
        <p className="text-gray-600 mt-1">Create a new resource</p>
      </div>
      <ResourceForm />
    </div>
  )
}
