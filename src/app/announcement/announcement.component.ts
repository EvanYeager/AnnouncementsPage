import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent {
  @Input()
  title: string = '';
  id: number = 0;
  @Input()
  text: string = '';

  constructor() { }

}
