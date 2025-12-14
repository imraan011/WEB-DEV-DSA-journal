const Render = (props) => {
  const todo = props.todo;
  const settodo = props.settodo;

  const rendertodo = todo.map((e) => {
    return <li key={e.id}>{e.title}</li>;
  });
  return (
    <div>
      <hr />
      <br />
      <br />
      <h1>Pending todo</h1>
      <br />
      <ul style={{ listStyleType: "square" }}>{rendertodo}</ul>
    </div>
  );
};

export default Render;
