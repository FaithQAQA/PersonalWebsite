import { Component} from '@angular/core';
import { projects } from '../data/projects';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  projectsToShow: any[] = [];
  selectedLanguage: string = 'all';

  constructor() {
    this.projectsToShow = projects;
  }

  filterProjects() {
    console.log('Selected Language:', this.selectedLanguage);
    
    if (this.selectedLanguage === 'all') {
      // Show all projects
      this.projectsToShow = projects;
    } else {
      this.projectsToShow = projects.filter(project => project.language === this.selectedLanguage);
    }
    
    console.log('Filtered Projects:', this.projectsToShow);
  }}
  