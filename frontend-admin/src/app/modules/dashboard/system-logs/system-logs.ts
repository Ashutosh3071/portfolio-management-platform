import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-system-logs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './system-logs.html',
  styleUrls: ['./system-logs.css']
})
export class SystemLogsComponent {
  logs = [
    { time: '10:30', action: 'Admin logged in' },
    { time: '10:35', action: 'Skill updated: Java' },
    { time: '10:40', action: 'Project deleted' }
  ];
}
