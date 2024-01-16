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
      <div>og image here</div>
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