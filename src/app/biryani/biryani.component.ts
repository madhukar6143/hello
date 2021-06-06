import { Component, OnInit } from '@angular/core';
import { Data2Service } from '../data2.service';

@Component({
  selector: 'app-biryani',
  templateUrl: './biryani.component.html',
  styleUrls: ['./biryani.component.css']
})
export class BiryaniComponent implements OnInit {

  array:any;
  menu:any;
  constructor(private dsobj:Data2Service) { }

  ngOnInit(): void {
    this.dsobj.getMenuData()
      .subscribe(
         data=>{
        this.array=data;
        this.menu=this.array.mains.biryani;
         },
         err=>{
          console.log("err is ",err)
        }
         )
  }

}
