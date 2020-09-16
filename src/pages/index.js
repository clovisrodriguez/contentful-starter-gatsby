import React from 'react'
import Logo from '../images/white_logo.png'

export default function Home() {
  return (
    <div className="root">
      <head>
        <title>Enciso Montero</title>
      </head>
      <div>
        <img src={Logo} />
        <h3>Muy pronto, Nuestro negocio es crecer tu negocio</h3>
        <p>
          para más información escribe a{' '}
          <a href="mailto: contacto@encisomontero.com">
            contacto@encisomontero.com
          </a>
        </p>
      </div>
    </div>
  )
}
