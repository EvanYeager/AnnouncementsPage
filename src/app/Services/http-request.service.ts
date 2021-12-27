import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AnnouncementComponent } from '../announcement/announcement.component';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private http: HttpClient) { }

  public getAnnouncements() : AnnouncementComponent[]
  {
    let announcements!: AnnouncementComponent[];
    this.http.get<AnnouncementComponent>('localhost:8080/ann').subscribe(ann => announcements.push(ann));
    return announcements;
  }
}
