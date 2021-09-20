import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  @ViewChild('content') content: any;

  @Input() titre: string = "default";

  open() {
    this.modalService.open(this.content, {ariaLabelledBy: 'modal-basic-title'})
  }
}
