import { Component, OnInit, NgModule } from '@angular/core';

import { StudentService } from './student.services';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})                   

export class AppComponent implements OnInit  {
  title= 'sai-pipe';
  students:any []=[];
  filteredStudents:any[]=[]

  total:number=600;
  _filtertext:string=''
  totalStudents=new Promise((resolve,reject)=>{
    setTimeout(()=>{
     resolve(this.filteredStudents.length)
    },2000)
  })


  get filtertext(){
    return this._filtertext

  }

  set filtertext(value:string){
    this._filtertext=value
    this.filteredStudents=this.filterstudentBygender(value)
  }  


  ngOnInit(){
    this.students=[ {name: 'Mark Vought', course: 'MBA', marks: 520, DOB: new Date('11-12-1997'), gender: 'Male'},
  {name: 'Steve Smith', course: 'BTECH', marks: 420, DOB: new Date('10-06-1998'), gender: 'Male'},
  {name: 'Mark Vought', course: 'MBA', marks: 520, DOB: new Date('11-12-1997'), gender: 'Male'},
  {name: 'Steve Smith', course: 'BTECH', marks: 420, DOB: new Date('10-06-1998'), gender: 'Male'},
  {name: 'Merry Jane', course: 'MBA', marks: 540, DOB: new Date('09-22-1996'), gender: 'Female'},
  {name: 'John Doe', course: 'BTECH', marks: 380, DOB: new Date('06-12-1995'), gender: 'Male'},
  {name: 'Sarah Smith', course: 'M.SC', marks: 430, DOB: new Date('12-21-1999'), gender: 'Female'},
  {name: 'Jonas Weber', course: 'M.SC', marks: 320, DOB: new Date('06-18-1997'), gender: 'Male'}];
  
   this.filteredStudents=this.students
  }
 
 
  
  adddummy(){
  // let datacopy=Object.assign([],this.students)
  //   datacopy.push({name: 'Weber', course: 'M.S', marks: 350, DOB: new Date('06-18-1997'), gender: 'Male'})
  //   this.students=datacopy
  this.students.push({name: 'Weber', course: 'M.S', marks: 350, DOB: new Date('06-18-1997'), gender: 'Male'})
  this.filteredStudents=this.filterstudentBygender(this._filtertext)
  }

  changegender(){
    // let datacopy=Object.assign(<any>[],this.students)
    // datacopy[0]['gender']="Female"
    // this.students=datacopy
    this.students[0].gender="Female"
    this.filteredStudents=this.filterstudentBygender(this._filtertext)
  }

  filterstudentBygender(filterterm:string){
    if (this.students.length===0 || this.filtertext===""){
      return this.students
     }else{
      const users=[]
      for  (const user of this.students){
        if (user ['gender']===filterterm){
  
          users.push(user)
  
        }
  
      }
      return users
     }

  }


  trandate:Date=new Date('06-18-1997')
  saiobj1={
    name: "John",
    age: 30,
    hobbies: ["reading", "running", "swimming"],
    address: {
      street: "123 Main St",
      city: "Anytown",
      state: "CA"
    }
  }
   
}
