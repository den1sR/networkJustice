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
  objEdgesArr: any;
  strArr: any;
  bom: any;
  fwl: any;

  constructor(private _route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {

    this.jsStr = history.state;
    this.objEdgesArr = this.jsStr.data.Edges.filter(element => element.Source === "100094");
    this.fwl = this.jsStr.data.Edges.filter(element => element.Source === element.Target);
    this.lenNodes = JSON.parse(JSON.stringify(this.jsStr.data.Nodes));
    this.edgesObj = JSON.parse(JSON.stringify(this.jsStr.data));
    this.nodesNum = this.lenNodes.length;
    this.strArr = JSON.stringify(this.jsStr.data.Edges);
  }
  back(): void {
    this.location.back()
  }
}
