import React from 'react'

export function DemoComponent () {
  const ref = React.useRef()

  React.useEffect(() => {
    // empty
  }, [ref.current])

  React.useEffect(() => {
    // empty
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current])
  return (
    <div>Hello Lint Errors</div>
  )
}
