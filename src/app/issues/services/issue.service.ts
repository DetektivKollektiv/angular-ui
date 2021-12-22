import { Injectable } from '@angular/core';
import { API } from 'aws-amplify';
import { from, Observable } from 'rxjs';
import { Issue } from '../model/issue';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
  private apiName = 'issue_service';
  private issueUrl = '/issues';

  public submitIssue(issue: Issue): Observable<Issue> {
    return from(API.post(this.apiName, this.issueUrl, { body: issue, response: true }).catch());
  }
}
