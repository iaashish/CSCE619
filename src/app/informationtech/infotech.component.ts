/**
 * New typescript file
 */
import {Component, NgModule} from '@angular/core';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';

@Component({
  selector: 'app-infotech',
  templateUrl: 'infotech.component.html',
  styleUrls: ['infotech.component.css']
})

export class InfotechComponent {
  title = 'infoTech';
  logo = './assets/images/ull_logo.png';
  selectedYear: string;
  selectedSemester: string;
  checked: any;
  Years: any = [{name: 'Freshman'},
    {name: 'Sophomore'},
    {name: 'Junior'},
    {name: 'Senior'}];


  Yearrs: any = [{name: 'Freshman', checked: false},
    {name: 'Sophomore', checked: false},
    {name: 'Junior', checked: false},
    {name: 'Senior', checked: false}];

  Semester: any = [{name: 'Semester 1'}, {name: 'Semester 2'}];
  courses: any;
  cmpscourses: any = [];
  infxcourses: any = [];
  otherscourses: any = [];
  downloadJsonHref: any;
  selectedcourses: any;
  selectedcmps: any;
  selectedother: any;
  selectedinfx: any;


  constructor(private sanitizer: DomSanitizer) {
  }

  show: Boolean = false;
  showifsemester1: Boolean = false;

  onModelChange(eventTypeChkBoxObj) {
    // if (eventTypeChkBoxObj.checked) {
    //   if (this.getCheckedCount() === 2) {
    //     const result = confirm('Multiple checkboxes1?');
    //     if (!result) {
    //       eventTypeChkBoxObj.checked = false;
    //     }
    //   }
    // }
  }

  getCheckedValues() {
    this.selectedcourses = this.Yearrs.filter(obj => obj.checked);
    this.selectedcmps = this.cmpscourses.filter(obj => obj.checked);
    this.selectedinfx = this.infxcourses.filter(obj => obj.checked);
    this.selectedother = this.otherscourses.filter(obj => obj.checked);
    this.selectedcourses = this.selectedcourses.concat(this.selectedcmps);
    this.selectedcourses = this.selectedcourses.concat(this.selectedinfx);
    this.selectedcourses = this.selectedcourses.concat(this.selectedother);
    const theJSON = JSON.stringify(this.selectedcourses);
    const blob = new Blob([theJSON], {type: 'text/json'});
    const url = window.URL.createObjectURL(blob);
    const uri: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(url);
    this.downloadJsonHref = uri;
    return this.selectedcourses;
  }

  getCheckedCount() {
    return this.getCheckedValues().length;
  }

  getYear(Years) {
    this.selectedYear = Years;
    if (this.selectedYear === 'Freshman') {
      console.log('hello');
    } else if (this.selectedYear === 'Sophomore') {
      this.courses = ['UNIV 100', 'MATH 109', 'MATH 210', 'EECE 140',
        'ENGL 101', 'MATH 301', 'CMPS 260', 'MATH 270', 'BHSC Elective', 'HIST Elective'];
    } else if (this.selectedYear === 'Junior') {
      this.courses = ['UNIV 100', 'MATH 109', 'MATH 310', 'EECE 140',
        'ENGL 101', 'MATH 301', 'CMPS 260', 'MATH 270', 'BHSC Elective', 'HIST Elective'];
    } else if (this.selectedYear === 'Senior') {
      this.courses = ['UNIV 100', 'MATH 109', 'MATH 410', 'EECE 140',
        'ENGL 101', 'MATH 301', 'CMPS 260', 'MATH 270', 'BHSC Elective', 'HIST Elective'];
    }
  }

  getSemester(Semester) {
    this.selectedSemester = Semester;
  }

  showCourses() {
    if (this.selectedSemester === 'Semester 1' && this.selectedYear === 'Freshman') {
      this.checked = true;
      this.show = false;
      this.showifsemester1 = true;
      this.courses = ['UNIV 100', 'MATH 109', 'EECE 140',
        'ENGL 101', 'ENGL 102', 'MATH 301', 'CMPS 260', 'MATH 270', 'BHSC Elective', 'HIST Elective'];
    } else if (this.selectedSemester === 'Semester 2' && this.selectedYear === 'Freshman') {
      this.show = true;
      this.checked = false;
      this.showifsemester1 = false;



      // var theJSON = JSON.stringify(this.Years);
      // var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(theJSON));
      // this.downloadJsonHref = uri;
      this.cmpscourses = [{name: 'CMPS 150', checked: false},
        {name: 'CMPS 260', checked: false}, {name: 'CMPS 261', checked: false}, {name: 'CMPS 310', checked: false},
        {name: 'CMPS 340', checked: false}, {name: 'CMPS 341', checked: false}, {name: 'CMPS 351', checked: false},
        {name: 'CMPS 353', checked: false}, {name: 'CMPS 360', checked: false}, {name: 'CMPS 359', checked: false},
        {name: 'CMPS 430', checked: false}, {name: 'CMPS 450', checked: false}, {name: 'CMPS 453', checked: false},
        {name: 'CMPS 455', checked: false}, {name: 'CMPS 460', checked: false}, {name: 'CMPS 452', checked: false},
        {name: 'CMPS 499', checked: false}];
      this.infxcourses = [{name: 'INFX 240', checked: false},
        {name: 'INFX 320', checked: false},
        {name: 'INFX 450', checked: false},
        {name: 'INFX 451', checked: false}];
      this.otherscourses = [{name: 'MATH 270', checked: false},
        {name: 'MATH 301', checked: false}, {name: 'MATH 362', checked: false}, {name: 'MATH 109', checked: false},
        {name: 'MATH 110', checked: false}, {name: 'STAT 325', checked: false}, {name: 'STAT 427', checked: false},
        {name: 'STAT 454', checked: false}, {name: 'ACCT 201', checked: false}, {name: 'ACCT 202', checked: false},
        {name: 'MGMT 350', checked: false}, {name: 'MGMT 390', checked: false}, {name: 'BIOL 110', checked: false},
        {name: 'BIOL 121', checked: false}, {name: 'ENGL 101', checked: false}, {name: 'ENGL 102', checked: false},
        {name: 'ENGL 365', checked: false}, {name: 'EECE 140', checked: false}, {name: 'BHSC ELECTIVE', checked: false},
        {name: 'HIST ELECTIVE', checked: false}, {name: 'UNIV 100', checked: false}];
    }

  }
}
