import { ImageResponse } from 'next/og'

export const runtime = 'edge'

const futuraFont = fetch(new URL('public/fonts/futura-pt.ttf', import.meta.url)).then(
  res => res.arrayBuffer(),
)

const futuraBoldFont = fetch(new URL('public/fonts/futura-pt-bold.ttf', import.meta.url)).then(
  res => res.arrayBuffer(),
)

export const GET = async () => {
  const futuraFontData = await futuraFont
  const futuraBoldFontData = await futuraBoldFont

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: 'center',
          background: 'radial-gradient(circle, rgba(38,38,43,1) 0%, rgba(40,40,46,1) 80%, rgba(14,116,144,1) 100%)',
          display: 'flex',
          flexDirection: 'column',
          height: 630,
          justifyContent: 'center',
          width: 1200,
        }}
      >
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              color: 'white',
              fontFamily: 'Futura Bold',
              fontSize: 48,
              fontWeight: 'bold',
            }}
          >
            teamsheet.online
          </div>

          <img
            src={`${process.env.NEXT_PUBLIC_VERCEL_URL}/ts_logo_white.svg`}
            alt="TeamSheet Logo"
            height={50}
            width={50}
            style={{ marginLeft: '32px' }}
          />
        </div>

        <div
          style={{
            color: 'white',
            fontFamily: 'Futura Bold',
            fontSize: 48,
            fontWeight: 'bold',
            marginTop: 40,
          }}
        >
          Who would you pick?
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
}