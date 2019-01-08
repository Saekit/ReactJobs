Job-Search

You're all graduated from Flatiron School and it is time to find a job.

the database of current jobs on your list is in a json-server under http://localhost:3000/jobs. To start, do the following commands

TO INSTALL SERVER: npm install -g json-server
TO START SERVER: json-server --watch db.json

TO START REACT APP: npm start


Deliverables:

1. Render the list of jobs in to the job list. Each job should show a logo, company name, job type and current status.
2. On each job, you should be able to click on the "see more" button that will show everything in the job details component.
3. The job details component should again show the logo, company name, job type and status.
4. When clicking on the "edit button" in the job details section, it should send the job to the edit form.
5. Users should be able to change everything about the job and when the "change button" is clicked, it should persist into the database and rerender the edited job.
