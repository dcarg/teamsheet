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
            height: 750,
            width: 1000,
          }}
        >
          <NonInteractiveField players={players} teamSheet={teamSheet} />

          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <NonInteractiveBench players={players} teamSheet={teamSheet} />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '32px' }}>
              <div style={{ display: 'flex', flexDirection: 'column'}}>
                <div style={{ margin: 'auto', marginBottom: '8px' }}>Created with</div>
                <div style={{ fontFamily: 'Futura Bold', fontWeight: 'bold', margin: 'auto' }}>teamsheet.online</div>
              </div>

                <img
                  src={`${process.env.NEXT_PUBLIC_VERCEL_URL}/ts_logo_black.svg`}
                  alt="TeamSheet Logo"
                  height={30}
                  width={30}
                  style={{
                    marginLeft: '32px'
                  }}
                />
            </div>
          </div>
        </div>
      ),
      {
        width: 1000,
        height: 750,
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