import ListItem from "./ListItem";

export default function List({ items }) {
  const listItems = items.map((item) => {
    return <ListItem text={item.text} id={item.id} />;
  });
  return <ul>{listItems}</ul>;
}
