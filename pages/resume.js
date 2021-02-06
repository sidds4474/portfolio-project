import BaseLayout from '../components/layouts/baseLayout';
import BasePage from '../components/BasePage';

function Resume(){
  return (
    <BaseLayout>
      <BasePage>
        <h1>Resume Page</h1>
      </BasePage>
    </BaseLayout>
  )
}

export default Resume;


//// "start": "cross-env NODE_ENV=production node server.js",