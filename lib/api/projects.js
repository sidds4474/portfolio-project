import axios from 'axios';

class ProjectApi {

  getAll() {
    return axios.get('https://sid-portfolio-api.herokuapp.com/api/v1/projects')
  }


  getById(id) {
    return axios.get(`https://sid-portfolio-api.herokuapp.com/api/v1/projects/${id}`)
  }

  createProject(data) {
    return axios.post("https://sid-portfolio-api.herokuapp.com/api/v1/projects", data);
  }

}

export default ProjectApi;