import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { retry } from 'rxjs';
@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {
  person: any;
  fetching: boolean = false;
  status='No Data';
  ngOnInit() {
  }
  constructor(private http: HttpClient) {
  }
  fetchDetails() {
    this.fetching = true
    this.status='Data Fetched'
    this.http.get('http://localhost:3000/posts').pipe(
      retry(2)
    ).subscribe(res => {
      console.log(res);
      this.person = res
    })
  }
}
