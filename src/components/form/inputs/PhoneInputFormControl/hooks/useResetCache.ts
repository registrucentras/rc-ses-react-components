import React from 'react'

function useResetCache(data: unknown) {
  const ref = React.useRef(null)

  React.useEffect(() => {
    void data
  }, [data])

  return ref
}

export default useResetCache
