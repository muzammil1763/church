import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const crisisNeed = await prisma.crisisNeed.findUnique({
      where: { id: params.id },
    })

    if (!crisisNeed) {
      return NextResponse.json({ error: 'Crisis need not found' }, { status: 404 })
    }

    return NextResponse.json(crisisNeed)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch crisis need' }, { status: 500 })
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    
    const crisisNeed = await prisma.crisisNeed.update({
      where: { id: params.id },
      data: {
        ...body,
        needBy: body.needBy ? new Date(body.needBy) : null,
      },
    })

    return NextResponse.json(crisisNeed)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update crisis need' }, { status: 500 })
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    await prisma.crisisNeed.delete({
      where: { id: params.id },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete crisis need' }, { status: 500 })
  }
}
