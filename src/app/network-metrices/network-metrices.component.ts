import { Component, OnInit } from '@angular/core';
import { Nodes } from '../nodes';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-network-metrices',
  templateUrl: './network-metrices.component.html',
  styleUrls: ['./network-metrices.component.css']
})
export class NetworkMetricesComponent implements OnInit {



  jsStr:any;





  constructor( private _route: ActivatedRoute) { }

  ngOnInit(): void {

    this._route.params.subscribe(params => {
      this.jsStr = params['userId'];
      // this.unitId = params['unitId'];
    })
    console.log(this.jsStr)



  }

}
