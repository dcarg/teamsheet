import { ImageResponse } from 'next/og'
import { notFound } from 'next/navigation'
import type { NextRequest } from 'next/server'

import prisma from '@db/prismaSingleton'

import NonInteractiveBench from '@components/NonInteractiveBench'
import NonInteractiveField from '@components/NonInteractiveField'

// Had to remove edge runtime because Prisma would not run on edge, problem?
// Need edge runtime for the field fetch to work
// If this does not work in Prod, can we create a show route for the teamsheet and fetch it here?
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
      include: {
        playerPositions: {
          include: {
            position: true,
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
          <NonInteractiveField players={players} teamSheet={teamSheet} />

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <NonInteractiveBench players={players} teamSheet={teamSheet} />

            <div style={{ margin: 'auto' }}>Created with Teamsheet</div>
          </div>
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