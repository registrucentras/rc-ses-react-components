import React from 'react'

const OuterElementContext = React.createContext({})

const OuterElementType = React.forwardRef<HTMLDivElement>((props, ref) => {
  const outerProps = React.useContext(OuterElementContext)

  return <div ref={ref} {...props} {...outerProps} />
})

export { OuterElementContext }

export default OuterElementType
