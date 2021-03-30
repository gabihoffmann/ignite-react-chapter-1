import RepositoryItem from "./RepositoryItem";

const repository = {
  name: 'Unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
}

function RepositoryList(){
  return(
    <section className="repository-list">
      <h1>Lista de repositórios</h1>
      <RepositoryItem repository={repository}/>
      <RepositoryItem />
      <RepositoryItem />
    </section>
  )
}
export default RepositoryList;