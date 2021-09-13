import { Component, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  @Input()
  title: string = 'title';
  @Input()
  text: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem id nihil sed assumenda accusantium nulla libero similique quis, est aliquid dolores dignissimos! Ullam dolorem qui recusandae, aspernatur odit architecto fuga.';

  constructor(title: String, text: String) { }

  ngOnInit(): void {
  }

}
