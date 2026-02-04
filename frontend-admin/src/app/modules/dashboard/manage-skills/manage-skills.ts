import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminSkillService, Skill } from '../../../services/admin-skill.service';

@Component({
  selector: 'app-manage-skills',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './manage-skills.html',
  styleUrls: ['./manage-skills.css']
})
export class ManageSkillsComponent implements OnInit {
  skills: Skill[] = [];

  newSkill: Skill = {
    name: '',
    proficiency: 0,
    category: ''
  };

  constructor(private skillService: AdminSkillService) {}

  ngOnInit() {
    this.loadSkills();
  }

  loadSkills() {
    this.skillService.getAll().subscribe(data => {
      this.skills = data;
    });
  }

  addSkill() {
    this.skillService.create(this.newSkill).subscribe(() => {
      this.newSkill = { name: '', proficiency: 0, category: '' };
      this.loadSkills();
    });
  }

  deleteSkill(id: number) {
    this.skillService.delete(id).subscribe(() => {
      this.loadSkills();
    });
  }
}
