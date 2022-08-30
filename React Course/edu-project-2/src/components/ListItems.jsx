import "../styles/List.css"

const ListItems = (props) => {
  const { users } = props;

  if (!users) return 

  return (
    <div className="items-container">
      {users.map((e) => (
        <div className="list-item" key={e.id}>
          {e.username} {e.age} (years old)
        </div>
      ))}
    </div>
  );
};

export default ListItems;
