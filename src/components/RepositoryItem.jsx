function RepositoryItem(props){
  return (
    <li>
      <strong>{props.repository?.name ?? 'Default'}</strong>
      <p>{props.repository?.details}</p>
      <a href={props.repository?.link}>Acessar repositório</a>
    </li>
  );
}

export default RepositoryItem;