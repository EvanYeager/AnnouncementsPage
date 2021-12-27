import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AnnouncementComponent } from './announcement/announcement.component';
import { HttpRequestService } from './Services/http-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private http: HttpClient) {
    
  }

  public getAnnouncements() : AnnouncementComponent[]
  {
    let requestService = new HttpRequestService(this.http);
    return requestService.getAnnouncements();
  }

  ngOnInit() {
    
  }
}
