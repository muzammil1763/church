import Link from 'next/link'
import { prisma } from '@/lib/prisma'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Plus, Edit } from 'lucide-react'
import DeleteButton from '@/components/admin/DeleteButton'

export default async function ResourcesPage() {
  const resources = await prisma.resource.findMany({
    orderBy: { createdAt: 'desc' },
  })

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Resources</h1>
          <p className="text-gray-600 mt-1">Manage resource sharing</p>
        </div>
        <Link href="/admin/resources/new">
          <Button className="bg-gold hover:bg-gold-light text-navy-dark">
            <Plus className="h-4 w-4 mr-2" />
            Add Resource
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources.map((resource) => (
          <Card key={resource.id}>
            <CardContent className="p-6">
              <div className="space-y-3">
                <div>
                  <h3 className="font-bold text-lg">{resource.title}</h3>
                  <p className="text-sm text-gray-600">{resource.provider}</p>
                  <div className="flex gap-2 mt-2">
                    <span className="inline-block px-2 py-1 text-xs rounded-full bg-purple-100 text-purple-700">
                      {resource.category}
                    </span>
                    <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                      {resource.availability}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 pt-3 border-t">
                  <Link href={`/admin/resources/${resource.id}`} className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                  </Link>
                  <DeleteButton 
                    id={resource.id} 
                    name={resource.title} 
                    endpoint="resources"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {resources.length === 0 && (
        <Card>
          <CardContent className="p-12 text-center">
            <p className="text-gray-500">No resources yet. Add your first resource to get started.</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
