import PropTypes from 'prop-types'

function AppLayout({ children }) {
  return (
    <>
      <main>{children}</main>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </>
  )
}

AppLayout.propTypes = {
  children: PropTypes.string.isRequired,
}

export default AppLayout
