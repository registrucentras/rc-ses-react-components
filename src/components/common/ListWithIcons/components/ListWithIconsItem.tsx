const ListWithIconsItem = ({ children }: { children: React.ReactNode }) => {
  return (
    <li
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 0',
      }}
    >
      {children}
    </li>
  )
}

export default ListWithIconsItem
