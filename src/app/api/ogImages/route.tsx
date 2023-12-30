import { ImageResponse } from 'next/og'
import { notFound } from 'next/navigation'
import type { NextRequest } from 'next/server'

import prisma from '@db/prismaSingleton'

import NonInteractiveField from '@components/NonInteractiveField'

// Why did we construct new HTML instead of re-using the existing Field and Bench?
// 1. this is server side, we cannot use client-site-only APIs like useContext here
// 2. we do not need any interactivity here
// 3. the components cannot be async (therefore no data fetching) or you get Error: failed to pipe response

// Had to remove edge runtime because Prisma would not run on edge, problem?
// Need edge runtime for the field fetch to work
// export const runtime = 'edge'

export const GET = async (request: NextRequest) => {
  try {
    const teamSheetId = request.nextUrl.searchParams.get('teamSheetId')

    const teamSheet = teamSheetId
      ? await prisma.teamSheet.findUnique({
        where: {
          shareId: teamSheetId,
        },
      })
      : null

    if (!teamSheet) return notFound()

    const { teamId } = teamSheet

    const players = await prisma.player.findMany({
      where: {
        teamMembers: {
          some: {
            teamId,
          },
        },
      },
    })

    return new ImageResponse(
      (
        <div style={{
          display: 'flex',
          height: 630,
          width: 1200,
        }}>
          <div style={{ display: 'flex' }}>
            <NonInteractiveField players={players} teamSheet={teamSheet} />
          </div>

          Bench
        </div>
      ),
      {
        width: 1200,
        height: 630,
      },
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response('Failed to generate the image', { status: 500 })
  }
}