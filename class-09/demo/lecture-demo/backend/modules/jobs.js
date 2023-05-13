'use strict'

const axios = require('axios');

function getJobs(request, response, next) {
  const url = `https://boards-api.greenhouse.io/v1/boards/vaulttec/jobs?content=true`;
  axios.get(url)
    .then(res => res.data.jobs.map(job => new Job(job)))
    .then(formattedData => response.status(200).send(formattedData))
    .catch(err => next(err))
}

class Job {
    constructor(obj) {
      this.name = obj.title;
      this.description = obj.content;
      this.departments = this.getNames(obj.departments);
      this.offices = this.getNames(obj.offices);
      this.location = obj.location.name;
      this.url = obj.absolute_url;
    }
    getNames = (departments) => departments.map(department => department.name);
}

module.exports = getJobs;