// import type { NextApiRequest, NextApiResponse } from 'next'
// import { serializeCookie } from '@lib'

// export default function handler(req: NextApiRequest, res: NextApiResponse) {
//   const cookie = serializeCookie('auth', { user: 'Andy' }, { path: '/' })
//   res.status(200)
//     .setHeader('Set-Cookie', cookie)
//     .json({ login: true })
// }
/* eslint-disable import/no-anonymous-default-export */
import { sign } from 'jsonwebtoken'
import { serialize } from 'cookie'

const secret = process.env.SECRET

export default async function (req, res) {
  const { email, password } = req.body

  if (email === 'abc@gmail.com' && password === '1234') {
    const token = sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
        email,
      },
      secret,
    )

    const serialised = serialize('OursiteJWT', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== 'development',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 30,
      path: '/',
    })

    res.setHeader('Set-Cookie', serialised)
    const { cookies } = req
    const jwt = cookies.OursiteJWT
    console.log(jwt)

    res.status(200).json({ message: 'Success!' })
  } else {
    res.status(401).json({ message: 'Invalid credentials!' })
  }
}
