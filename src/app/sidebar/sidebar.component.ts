import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);
  navLinks: any[] =[];
  constructor() { }

  ngOnInit(): void {
    this.navLinks = [
      {
        label: "Dashboard",
        link: `/dashboard`,
        index: 0,
        isDisabled: false,
        isActive: true,
        icon:'bi-bar-chart-line-fill'
      },
      {
        label: "To do",
        link: `/todo`,
        index: 1,
        isDisabled: false,
        isActive: true,
        icon:'bi-tools'
      },
      {
        label: "Calendar",
        link: `/calendar`,
        index: 2,
        isDisabled: false,
        isActive: true,
        icon:'bi-calendar-week-fill'
      },
      {
        label: "My profile",
        link: `/myprofile`,
        index: 3,
        isDisabled: false,
        isActive: true,
        icon:'bi-person-bounding-box'
      },
      {
        label: "Setting",
        link: `/setting`,
        index: 4,
        isDisabled: false,
        isActive: true,
        icon:'bi-wrench-adjustable'
      },
    ]
  }

}
