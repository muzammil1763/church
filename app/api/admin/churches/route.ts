import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const churches = await prisma.church.findMany({
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(churches)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch churches' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    
    const church = await prisma.church.create({
      data: {
        ...body,
        slug: body.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      },
    })

    return NextResponse.json(church)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create church' }, { status: 500 })
  }
}
