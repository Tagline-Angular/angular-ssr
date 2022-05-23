import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contect',
  templateUrl: './contect.component.html',
  styleUrls: ['./contect.component.scss']
})
export class ContectComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }

  ngOnInit(): void {
    this.titleService.setTitle("Contect Page");
    this.metaService.updateTag({
      property: "og:title",
      content: "Contect Page.",
    });
    // if (typeof window !== 'undefined') {
    //   localStorage.setItem("contect", "contectpage");
    // }
    this.metaService.updateTag({
      property: "og:description",
      content: "This is contect page.",
    });
    this.metaService.updateTag({
      property: "og:image",
      content: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCk9MTsj5pE-i-GeCcNBfs-ae6xP4-xkyidA&usqp=CAU",
    });
  }

}
