/**
 * New typescript file
 */
import {Component, NgModule} from '@angular/core';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {Observable} from 'rxjs';

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
  analyzecourses: any = [];
  copy: any = [];
  currentcourses: any = [];


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

  // getCheckedCount() {
  //   return this.getCheckedValues().length;
  // }

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
      this.courses = [{name: 'UNIV 100', checked: false}, {name: 'MATH 109', checked: false}, {
        name: 'EECE 140',
        checked: false
      },
        {name: 'ENGL 101', checked: false}, {name: 'ENGL 102', checked: false},
        {name: 'MATH 301', checked: false}, {name: 'MATH 270', checked: false},
        {name: 'BHSC Elective', checked: false}, {name: 'HIST Elective', checked: false}];
      this.cmpscourses = [];
      this.infxcourses = [];
      this.otherscourses = [];
    } else if (this.selectedSemester === 'Semester 2' && this.selectedYear === 'Freshman') {

      this.show = true;
      this.checked = false;
      this.showifsemester1 = false;
      this.courses = [];
      // var theJSON = JSON.stringify(this.Years);
      // var uri = this.sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(theJSON));
      // this.downloadJsonHref = uri;
      this.currentcourses = [{name: 'CMPS 150', checked: false},
        {name: 'CMPS 260', checked: false}, {name: 'CMPS 261', checked: false}, {name: 'CMPS 310', checked: false},
        {name: 'CMPS 340', checked: false}, {name: 'CMPS 341', checked: false}, {name: 'CMPS 351', checked: false},
        {name: 'CMPS 353', checked: false}, {name: 'CMPS 360', checked: false}, {name: 'CMPS 359', checked: false},
        {name: 'CMPS 430', checked: false}, {name: 'CMPS 450', checked: false}, {name: 'CMPS 453', checked: false},
        {name: 'CMPS 455', checked: false}, {name: 'CMPS 460', checked: false}, {name: 'CMPS 452', checked: false},
        {name: 'CMPS 499', checked: false}, {name: 'INFX 240', checked: false},
        {name: 'INFX 320', checked: false},
        {name: 'INFX 450', checked: false},
        {name: 'INFX 451', checked: false}, {name: 'MATH 270', checked: false},
        {name: 'MATH 301', checked: false}, {name: 'MATH 362', checked: false}, {name: 'MATH 109', checked: false},
        {name: 'MATH 110', checked: false}, {name: 'STAT 325', checked: false}, {name: 'STAT 427', checked: false},
        {name: 'STAT 454', checked: false}, {name: 'ACCT 201', checked: false}, {name: 'ACCT 202', checked: false},
        {name: 'MGMT 350', checked: false}, {name: 'MGMT 390', checked: false}, {name: 'BIOL 110', checked: false},
        {name: 'BIOL 121', checked: false}, {name: 'ENGL 101', checked: false}, {name: 'ENGL 102', checked: false},
        {name: 'ENGL 365', checked: false}, {name: 'EECE 140', checked: false}, {name: 'BHSC ELECTIVE', checked: false},
        {name: 'HIST ELECTIVE', checked: false}, {name: 'UNIV 100', checked: false}];
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

  showYourCourses() {
    console.log(this.selectedcourses);
    this.analyzecourses = [];
    this.copy = [];
    if (this.selectedcourses.length > 0) {
      for (const entry of this.selectedcourses) {
        this.copy.push(entry.name);
      }
    }
    if (this.copy.length > 0) {
      if (this.copy.includes('MATH 109')) {

        this.analyzecourses.push({name: 'CMPS 150', checked: false});
      }
      if (this.copy.includes('MATH 109') && this.copy.includes('CMPS 150') && this.copy.includes('MATH 110')) {

        this.analyzecourses.push({name: 'CMPS 260', checked: false});
      }


      if (this.copy.includes('MATH 109') && this.copy.includes('CMPS 150') &&
        this.copy.includes('MATH 110') && this.copy.includes('MATH 260')) {

        this.analyzecourses.push({name: 'CMPS 261 ', checked: false});
        this.analyzecourses.push({name: 'CMPS 310 ', checked: false});
      }

      if (this.copy.includes('MATH 109') && this.copy.includes('CMPS 150') &&
        this.copy.includes('MATH 110') && this.copy.includes('MATH 260') && this.copy.includes('EECE 140'){

        this.analyzecourses.push({name: 'CMPS 351 ', checked: false});
      }

      if (this.copy.includes('EECE 140') && this.copy.includes('CMPS 260')) {

        this.analyzecourses.push({name: 'CMPS 351 ', checked: false});
      }

      if (this.copy.includes('CMPS 270')) {

        this.analyzecourses.push({name: 'CMPS 261 ', checked: false});
        this.analyzecourses.push({name: 'CMPS 341 ', checked: false});
      }


      if (this.copy.includes('MATH 109') && this.copy.includes('CMPS 150') &&
        this.copy.includes('MATH 110') && this.copy.includes('MATH 260') &&
        this.copy.includes('CMPS 261'){

        this.analyzecourses.push({name: 'CMPS 341 ', checked: false});
        this.analyzecourses.push({name: 'CMPS 340 ', checked: false});
      }


      if (this.copy.includes('CMPS 270') && this.copy.includes('CMPS 341')) {

        this.analyzecourses.push({name: 'CMPS 453 ', checked: false});
        this.analyzecourses.push({name: 'CMPS 460 ', checked: false});
        this.analyzecourses.push({name: 'CMPS 450 ', checked: false});
        this.analyzecourses.push({name: 'CMPS 455 ', checked: false});
      }
      if (this.copy.includes('MATH 109') && this.copy.includes('CMPS 150') &&
        this.copy.includes('MATH 110') && this.copy.includes('MATH 260') &&
        this.copy.includes('CMPS 261') && this.copy.includes('CMPS 341')) {

        this.analyzecourses.push({name: 'CMPS 453 ', checked: false});
        this.analyzecourses.push({name: 'CMPS 460 ', checked: false});
      }
      if (this.copy.includes('MATH 109') && this.copy.includes('CMPS 150') &&
        this.copy.includes('MATH 110') && this.copy.includes('MATH 260') &&
        this.copy.includes('CMPS 351')) {

        this.analyzecourses.push({name: 'CMPS 430 ', checked: false});
      }


      if (this.copy.includes('MATH 109') && this.copy.includes('CMPS 150')
        && this.copy.includes('MATH 110') && this.copy.includes('MATH 260') &&
        this.copy.includes('CMPS 261') && this.copy.includes('CMPS 341') &&
        this.copy.includes('CMPS 351')) {

        this.analyzecourses.push({name: 'CMPS 450 ', checked: false});
        this.analyzecourses.push({name: 'CMPS 455   ', checked: false});
      }
    }
  }

  fileChange(event) {
    // let fileList: FileList = event.target.files;
    // if (fileList.length > 0) {
    //   let file: File = fileList[0];
    //   let formData: FormData = new FormData();
    //   formData.append('uploadFile', file, file.name);
    //   let headers = new Headers();
    //   /** No need to include Content-Type in Angular 4 */
    //   headers.append('Content-Type', 'multipart/form-data');
    //   headers.append('Accept', 'application/json');
    //   let options = new RequestOptions({headers: headers});
    //   this.http.post('${this.apiEndPoint}', formData, options)
    //     .map(res => res.json())
    //     .catch(error => Observable.throw(error))
    //     .subscribe(
    //       data => console.log('success'),
    //       error => console.log(error)
    //     )
    // }


    let input = event.target;
    for (let index = 0; index < input.files.length; index++) {
      let reader = new FileReader();
      reader.onload = () => {
        // this 'text' is the content of the file
        let text = reader.result;
        this.cmpscourses = [];
        this.currentcourses = JSON.parse(text);
        this.cmpscourses.push(JSON.parse(text));
      }
      reader.readAsText(input.files[index]);
    }
  }
}
