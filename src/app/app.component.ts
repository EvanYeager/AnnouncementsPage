import { Component, OnInit } from '@angular/core';
import { AnnouncementComponent } from './announcement/announcement.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AnnouncementsPage';

  announcements: AnnouncementComponent[] = [
    new AnnouncementComponent('title', 'text'),
    new AnnouncementComponent('Another title', 'more text'),
    new AnnouncementComponent('Why hello there', 'this is yet more text woohoo')
  ];

  ngOnInit() {
    // this.announcements.forEach(ann => render)
    this.announcements[0].title
  }
}
