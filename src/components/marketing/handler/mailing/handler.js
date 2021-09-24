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
      <footer>NoiLoan Camera Store</footer>
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
      <footer>NoiLoan Camera Store</footer>
      `
    }
  )
}

const dispatchedOrder = (name, email) => {
  return (
    {
      to: `${email}`, // Change to your recipient
      from: 'contact@diegonaranjo.co', // Change to your verified sender
      subject: `Hola ${name}, tu pedido ha sido despachado`,
      text: 'and easy to do anywhere, even with Node.js',
      html: `
      <h2><strong>${name}</strong> en un máximo de 3 días hábiles recibirás tu pedido</h2>
      <hr>
      <h3>Resumen del pedido</h3>
      <p>
        <ul>
          <li>Producto 1</>
          <li>Producto 2</>
        </ul>
      </p>
      <footer>NoiLoan Camera Store</footer>
      `
    }
  )
}

const deliveredOrder = (name, email) => {
  return (
    {
      to: `${email}`, // Change to your recipient
      from: 'contact@diegonaranjo.co', // Change to your verified sender
      subject: `Hola ${name}, tu pedido ha sido entregado`,
      text: 'and easy to do anywhere, even with Node.js',
      html: `
      <h2><strong>${name}</strong> tu pedido ya está en tus manos</h2>
      <hr>
      <h3>Resumen del pedido</h3>
      <p>
        <ul>
          <li>Producto 1</>
          <li>Producto 2</>
        </ul>
      </p>
      <p>Recuerda dirigirte a tu historial y evaluar tus productos</p>
      <footer>NoiLoan Camera Store</footer>
      `
    }
  )
}

const canceledOrder = (name, email) => {
  return (
    {
      to: `${email}`, // Change to your recipient
      from: 'contact@diegonaranjo.co', // Change to your verified sender
      subject: `Hola ${name}, tu pedido ha sido cancelado`,
      text: 'and easy to do anywhere, even with Node.js',
      html: `
      <h2><strong>${name}</strong> lamentablemente tenemos que cancelar tu pedido.</h2>
      <hr>
      <h3>Resumen del pedido</h3>
      <p>
        <ul>
          <li>Producto 1</>
          <li>Producto 2</>
        </ul>
      </p>
      <p>Nuestro equipo de soporte se comunicara contigo para coordinar la devolución del dinero</p>
      <footer>NoiLoan Camera Store</footer>
      `
    }
  )
}

module.exports = {
  createAccount,
  confirmCart,
  dispatchedOrder,
  deliveredOrder,
  canceledOrder
}
