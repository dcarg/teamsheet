import * as fs from 'node:fs/promises'
import { resolve } from 'node:path'

import { ImageResponse } from 'next/og'
import { notFound } from 'next/navigation'
import type { NextRequest } from 'next/server'

import prisma from '@db/prismaSingleton'

import NonInteractiveBench from '@components/NonInteractiveBench'
import NonInteractiveField from '@components/NonInteractiveField'

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

    const futuraFilePath = resolve('public/fonts/futura-pt.ttf')
    const futuraBoldFilePath = resolve('public/fonts/futura-pt-bold.ttf')
    const futuraFont = fs.readFile(futuraFilePath)
    const futuraBoldFont = fs.readFile(futuraBoldFilePath)
    const futuraFontData = await futuraFont
    const futuraBoldFontData = await futuraBoldFont

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: 'white',
            display: 'flex',
            height: 630,
            width: 1200,
          }}
        >
          <NonInteractiveField players={players} teamSheet={teamSheet} />

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <NonInteractiveBench players={players} teamSheet={teamSheet} />

            <div style={{ margin: 'auto' }}>Created with teamsheet.online</div>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Futura',
            data: futuraFontData,
            style: 'normal',
            weight: 400,
          },
          {
            name: 'Futura Bold',
            data: futuraBoldFontData,
            style: 'normal',
            weight: 700,
          },
        ],
      },
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response('Failed to generate the image', { status: 500 })
  }
}