import { Component } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
})
export class CoursesComponent {
    testHeaders = [
        {title:'Course Name', key:'courseName'},
        {title: 'Description', key:'description'},
        {title:'Edit', key: this.edit, icon:'fa-pencil', color: '#8e8e1e'},
        {title:'Delete', key: ()=>{}, icon:'fa-minus-circle', color: '#7A1501'}
    ];

    testData = [
        {courseName: 'Websites for Beginners', description: 'Websites for beginners. (Part I of II). Build websites in HTML5, CSS3. Learn industry tools, page construction, industry specific terminology. No coding experience needed.'},
        {courseName: 'Mobile Friendly Websites', description: 'Building on Websites for Beginners. (Part II of II) Build responsive websites. Learn responsive web concepts, CSS frameworks, advanced layout techniques with Flexbox and introduction to Photoshop.'},
        {courseName: 'JavaScript for Beginners', description: 'Javascript for beginners. (Part I of III). Learn how to think like a programmer. Build interactive webpages in Javascript. Must have experience in HTML/CSS and responsive design prior to taking this course.'},
    ];

    edit(item:Object) {
        console.log(item);
    }
}