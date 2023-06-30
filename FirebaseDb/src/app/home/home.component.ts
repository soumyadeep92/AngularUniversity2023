import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allLessons: Lesson[];
  filtered: Lesson[];
  constructor(private lessonsService: LessonsService) {

  }
  ngOnInit(): void {
    this.lessonsService.findAllLessons().do(console.log).subscribe(lessons => this.allLessons = this.filtered = lessons)
  }
  search(search:String) {
    this.filtered=this.allLessons.filter(lesson=>lesson.description.includes(search));
  }
}
