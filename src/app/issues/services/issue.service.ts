import { Injectable } from '@angular/core';
import { API } from 'aws-amplify';
import { Issue } from '../model/issue';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  issueUrl = '/issues';

  constructor() { }

  public submitIssue(issue: Issue): Promise<Issue> {
    return API.post('issue_service', this.issueUrl, { body: issue, response: true })
      .then((response: Issue) => response)
      .catch();
  }
}
