const Read = (props) => {
  const user = props.user;
  const setuser = props.setuser;
  console.log(props);
  const renderuser = user.map((user, idx) => {
    return <li key={idx}>{user.name}</li>;
  });
  return (
    <div>
      <h1>User name </h1>
      <ol>{renderuser}</ol>
    </div>
  );
};

export default Read;
