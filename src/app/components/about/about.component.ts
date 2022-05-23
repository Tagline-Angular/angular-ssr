import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    // if (typeof window !== 'undefined') {
    //   localStorage.setItem("about", "aboutPage");
    //   console.log('teststtst', 'teststtst')
    //   localStorage.getItem("contect");
    // }
    this.titleService.setTitle("About Page");
    this.metaService.updateTag({
      property: "og:title",
      content: "About Page.",
    });
    this.metaService.updateTag({
      property: "og:description",
      content: "This is about page.",
    });
    this.metaService.updateTag({
      property: "og:image",
      content: "https://media.istockphoto.com/photos/about-us-word-on-a-red-wooden-block-picture-id1283119095?b=1&k=20&m=1283119095&s=170667a&w=0&h=n4qJJJJX45J557wORBTcLBT7KleWOeUIuig-OaCVOck=",
    });
  }

}
