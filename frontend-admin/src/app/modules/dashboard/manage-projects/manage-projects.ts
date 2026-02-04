import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProjectService, Project } from '../../../services/admin-project.service';

@Component({
  selector: 'app-manage-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './manage-projects.html',
  styleUrls: ['./manage-projects.css']
})
export class ManageProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectService: AdminProjectService) {}

  ngOnInit() {
    this.projectService.getAll().subscribe(data => {
      this.projects = data;
    });
  }

  deleteProject(id: number) {
    this.projectService.delete(id).subscribe(() => {
      this.projects = this.projects.filter(p => p.id !== id);
    });
  }
}
