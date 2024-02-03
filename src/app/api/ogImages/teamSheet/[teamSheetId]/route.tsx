import * as fs from 'node:fs/promises'
import { resolve } from 'node:path'

import { ImageResponse } from 'next/og'
import { notFound } from 'next/navigation'
import type { NextRequest } from 'next/server'

import prisma from '@db/prismaSingleton'

import NonInteractiveBench from '@components/NonInteractiveBench'
import NonInteractiveField from '@components/NonInteractiveField'

type RequestParams = {
  params: { teamSheetId: string }
}

export const GET = async (request: NextRequest, requestParams: RequestParams) => {
  try {
    const { 
      params: { teamSheetId },
    } = requestParams

    const teamSheet = teamSheetId
      ? await prisma.teamSheet.findUnique({
        where: {
          shareId: teamSheetId,
        },
      })
      : null

    if (!teamSheet) return notFound()

    const { teamId, title } = teamSheet

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
          <NonInteractiveField teamSheet={teamSheet} />

          <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '32px' }}>
            {title && (
              <div
                style={{
                  fontFamily: 'Futura Bold',
                  fontWeight: 'bold',
                  fontSize: '24px',
                  lineHeight: 1.2,
                  margin: 'auto',
                  maxHeight: '60px',
                  maxWidth: '390px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                {title}
              </div>
            )}

            <NonInteractiveBench teamSheet={teamSheet} />

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '16px' }}>
              <div style={{ display: 'flex', flexDirection: 'column'}}>
                <div style={{ margin: 'auto', marginBottom: '8px' }}>Created with</div>
                <div style={{ fontFamily: 'Futura Bold', fontWeight: 'bold', margin: 'auto' }}>teamsheet.online</div>
              </div>

              <img
                src={`${process.env.NEXT_PUBLIC_VERCEL_URL}/ts_logo_black.svg`}
                alt="TeamSheet Logo"
                height={30}
                width={30}
                style={{ marginLeft: '32px' }}
              />
            </div>
          </div>
        </div>
      ),
      {
        height: 630,
        width: 1200,
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