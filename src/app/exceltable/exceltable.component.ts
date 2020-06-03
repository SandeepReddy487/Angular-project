import { Component, OnInit, ElementRef } from '@angular/core';
import * as XLSX from 'xlsx';  
import * as fileSaver from 'file-saver';  
import { read } from 'xlsx';

type NewType = ElementRef;

@Component({
  selector: 'app-exceltable',
  templateUrl: './exceltable.component.html',
  styleUrls: ['./exceltable.component.css']
})
export class ExceltableComponent  {
  b:boolean=false;
arrayBuffer:any;
data:any;
file:File;
incomingfile(event) 
  {
  this.file= event.target.files[0]; 
  }
 submit() {
      let fileReader = new FileReader();
        fileReader.onload = (e) => {
            this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(this.arrayBuffer);
            var arr = new Array();
            for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = read(bstr, {type:"binary"});
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            const newLocal = this.newMethod(worksheet);

        }
        fileReader.readAsArrayBuffer(this.file);
        this.b=true;
}


  private newMethod(worksheet: XLSX.WorkSheet) {
    return this.data = XLSX.utils.sheet_to_json(worksheet, { raw: true });
  }
}
