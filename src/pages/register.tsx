import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import headerlogo from './images/book-my-time-logo.svg'
import bodyimg from './images/book-my-time-img.svg'
import virtuoslogo from './images/virtuos-virtuez-logo.svg'

const Register: React.FC = () => {
  const [email, setEmail] = useState<unknown>('')
  const [fullname, setFullname] = useState<string>('')

  const [password, setPassword] = useState<unknown>('')
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log(email, fullname, password)
  }
  return (
    <div className="main-form">
      <div className="header-form">
        <Image src={headerlogo} alt="bookmytime-logo" />
      </div>

      <div className="body-form">
        <div className="byt-img">
          <Image src={bodyimg} alt="bookmytime-img" />
        </div>

        <div className="container-form">
          <div>
            <h2>Register </h2>
          </div>
          <div className="form1">
            <form className="form">
              <div className="text-field">
                <Form.Control
                  style={{ width: '250px' }}
                  type="text"
                  id="outlined-basic"
                  placeholder="Enter your Fullname"
                  variant="outlined"
                  onChange={(e) => setFullname(e.target.value)}
                  value={fullname}
                  required
                />
              </div>
              <div className="text-field">
                <Form.Control
                  style={{ width: '250px' }}
                  type="email"
                  id="outlined-basic"
                  placeholder="Enter your Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  variant="outlined"
                  required
                />
              </div>

              <div className="text-field">
                <Form.Control
                  style={{ width: '250px' }}
                  type="password"
                  id="outlined-basic"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  placeholder="Enter your Password"
                  variant="outlined"
                  required
                />
              </div>

              <Button
                style={{ borderRadius: '50px', backgroundColor: '#00a2fe' }}
                variant="primary"
                onClick={handleSubmit}
              >
                Register
              </Button>
            </form>
            <div>
              <Link
                style={{ textDecoration: 'none', color: '#00a2fe' }}
                href="/login"
              >
                Have an account? Log In.
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="v-logo">
          <Image src={virtuoslogo} alt="Virtuos-Logo" />
        </div>
        <div className="copy">
          © Virtuos Digital Ltd. Virtuez Assimilations. All rights reserved.
        </div>
      </div>
    </div>
  )
}

export default Register
