import { Component, OnInit, ViewChild } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { FileUploadModule, FileUpload } from 'primeng/fileupload/fileupload';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Nodes } from '../nodes';
import * as XLSX from 'xlsx';
import { Table } from 'primeng/table';


type AOA = any[][];
@Component({
  selector: 'app-justice-network',
  templateUrl: './justice-network.component.html',
  styleUrls: ['./justice-network.component.css']
})
export class JusticeNetworkComponent implements OnInit {

  nodes: Nodes[];
  data: AOA = [[1, 2], [3, 4]];
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  uploadedFiles: any[] = [];
  sortOrder: number;
  jsStr: any;
  activityValues: number[] = [0, 100];
  // loading: boolean = true;
  sortField: string;
  @ViewChild('dt') table: Table;


  constructor(private _router: Router) { }


  willDownload = false;
  loadTb: boolean = false;
  ngOnInit(): void {
  }

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }


    // this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
  onFileChange(ev) {
    let workBook;
    let jsonData;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      const dataString = JSON.stringify(jsonData);
      // this.loading = false;
      this.getCount(dataString);
      // document.getElementById('output')!.innerHTML = dataString;//.slice(0, 300).concat("...");
      // this.setDownload(dataString);
    }
    reader.readAsBinaryString(file);
  }

  clear(table: Table) {
    table.clear();
  }

  getCount(jsonStr: string) {
    // document.getElementById('output')!.innerHTML = jsonStr;
    this.jsStr = JSON.parse(jsonStr);
    let docJsonNodes = JSON.stringify(this.jsStr.Nodes);
    this.nodes = this.jsStr.Nodes;
    this.loadTb = true;
  }

  calcNetMent() {
    this._router.navigate(['/networkMetrice'], {state: {data: this.jsStr}});

    // const url = this._router.serializeUrl(
    //   this._router.createUrlTree(['/networkMetrice'],{state: {data: this.jsStr}})
    // );

    // window.open(url);
  }

}
