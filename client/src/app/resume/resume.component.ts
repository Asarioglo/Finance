import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  public SpokenLanguages:Array<any> = [
    {language: "Russian", proficiency: "Native"},
    {language: "English", proficiency: "Full Professional"},
    {language: "Turkish", proficiency: "Professional"},
    {language: "Romanian", proficiency: "Limited Working"},
    {language: "French", proficiency: "Elementary"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
