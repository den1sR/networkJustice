import { Component, OnInit } from '@angular/core';
import { Nodes } from '../nodes';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-network-metrices',
  templateUrl: './network-metrices.component.html',
  styleUrls: ['./network-metrices.component.css']
})
export class NetworkMetricesComponent implements OnInit {



  jsStr: any;
  lenNodes: any;
  jsSt: [] = [];
  edgesObj: [] = [];
  nodesNum: string;
  blya: any;
  strArr: any;
  bom: any;
fwl:any;

  constructor(private _route: ActivatedRoute,private location: Location) { }

  ngOnInit(): void {

    this.jsStr = history.state;
    this.blya = this.jsStr.data.Edges.filter(element => element.Source === "100094");
this.fwl = this.jsStr.data.Edges.filter(element => element.Source === element.Target);
    this.lenNodes = JSON.parse(JSON.stringify(this.jsStr.data.Nodes));
    this.edgesObj = JSON.parse(JSON.stringify(this.jsStr.data));
    this.nodesNum = this.lenNodes.length;
    console.log(this.edgesObj);
    this.strArr = JSON.stringify(this.jsStr.data.Edges);

    // console.log(this.jsStr.data.Nodes.length);
    console.log("this is obt: " + this.blya);
    console.log(this.lenNodes);
  }
  back(): void {
    this.location.back()
  }
}
