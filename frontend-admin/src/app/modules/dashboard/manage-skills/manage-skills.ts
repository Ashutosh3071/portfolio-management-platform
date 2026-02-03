import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-manage-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-skills.html',
  styleUrls: ['./manage-skills.css']
})
export class ManageSkillsComponent {
  skills = [
    { name: 'Java', level: 90 },
    { name: 'Spring Boot', level: 85 },
    { name: 'React', level: 80 }
  ];
}
