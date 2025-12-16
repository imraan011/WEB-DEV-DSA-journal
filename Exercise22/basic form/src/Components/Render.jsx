const Render = (props) => {
  const todo = props.todo;
  const settodo = props.settodo;

  const deletehandler = (id) => {
    const filtertodos = todo.filter((todo) => todo.id != id);
    settodo(filtertodos);
  };

  const rendertodo = todo.map((e) => {
    return (
      <li key={e.id}>
        {e.title} |{" "}
        <span style={{ cursor: "pointer" }} onClick={() => deletehandler(e.id)}>
          Delete
        </span>
      </li>
    );
  });

  return (
    <div>
      <hr />
      <br />
      <h1>Pending todo</h1>
      <br />
      <ul style={{ listStyleType: "square" }}>{rendertodo}</ul>
    </div>
  );
};

export default Render;
