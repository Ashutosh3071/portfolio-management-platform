import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-projects.html',
  styleUrls: ['./manage-projects.css']
})
export class ManageProjectsComponent {
  projects = [
    { title: 'Portfolio App', client: 'Self' },
    { title: 'E-commerce Platform', client: 'Client A' }
  ];
}
