import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-collection-dialog',
  templateUrl: './add-collection-dialog.component.html',
  styleUrls: ['./add-collection-dialog.component.scss']
})
export class AddCollectionDialogComponent implements OnInit {

  issue: any;
  yearIssues: any;
  update: any;

  constructor(private dialogRef: MatDialogRef<AddCollectionDialogComponent>,
              @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    console.log(this.data.yearIssues);
    this.yearIssues = this.data.yearIssues;
    this.issue = this.data.issue ? this.data.issue : {};
    this.update = this.data.update;
    if (!this.issue?.size) this.issue.size = this.data.coin.size;
    if (!this.issue?.weight) this.issue.weight = this.data.coin.weight;
  }

  save() {
    console.log("save");
    this.dialogRef.close(this.issue);
  }

  close() {
    console.log("close");
    this.dialogRef.close(false);
  }
}
