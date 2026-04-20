const ListWithIcons = ({
  items,
}: {
  items: { icon: React.ReactNode; text: string }[]
}) => {
  return (
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {items.map((item, index) => (
        <ListWithIconsItem key={index}>
          {item.icon}
          {item.text}
        </ListWithIconsItem>
      ))}
    </ul>
  )
}

export default ListWithIcons
