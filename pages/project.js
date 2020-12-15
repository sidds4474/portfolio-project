import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage';
import axios from 'axios';

function Project({project}){
  return (
    <BaseLayout>
      <BasePage>
        <h1>Project page</h1>
        <h1>{project.title}</h1>
        <p>BODY: {project.body}</p>
        <p>ID: {project.id}</p>
      </BasePage>
    </BaseLayout>
  )
}

Project.getInitialProps = async function({query}){
  let post = {};
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
    post = res.data;
  } catch(e) {
    console.error(e);
  }

  return { project: post };
}

export default Project;