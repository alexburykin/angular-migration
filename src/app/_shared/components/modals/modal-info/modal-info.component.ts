import { Component, OnInit } from '@angular/core';
import { ModalService } from '../../modal/modal.service';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.sass']
})
export class ModalInfoComponent implements OnInit {

  title: string;
  text: string;

  constructor(
    private _modalService: ModalService
  ) { }

  ngOnInit() {
  }

  public close() {
    this._modalService.close();
  }

}
