const createAccount = (name, email) => {
  return (
    {
      to: `${email}`, // Change to your recipient
      from: 'contact@diegonaranjo.co', // Change to your verified sender
      subject: `Hola ${name}, has creado una cuenta en NoiLoan`,
      text: 'and easy to do anywhere, even with Node.js',
      html: `
      <h2><strong>${name}</strong> nos encantan que confíes en nosotros para tus compras</h2>
      <hr>
      <h3>Algunas de las cosas geniales que encontrarás NoiLoan</h3>
      <p>
        <ul>
          <li>Cámaras</>
          <li>Luces</>
          <li>Accesorios</>
        </ul>
      </p>
      `
    }
  )
}

const confirmCart = (name, email) => {
  return (
    {
      to: `${email}`, // Change to your recipient
      from: 'contact@diegonaranjo.co', // Change to your verified sender
      subject: `Hola ${name}, tu pedido se ha generado`,
      text: 'and easy to do anywhere, even with Node.js',
      html: `
      <h2><strong>${name}</strong> gracias por comprar en NoiLoan, pronto enviaremos tu pedido</h2>
      <hr>
      <h3>Resumen del pedido</h3>
      <p>
        <ul>
          <li>Producto 1</>
          <li>Producto 2</>
        </ul>
      </p>
      `
    }
  )
}

module.exports = {
  createAccount,
  confirmCart
}
