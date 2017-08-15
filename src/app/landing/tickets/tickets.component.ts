import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketsService } from './tickets.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalService } from '../../_shared/components/modal/modal.service';
import { ModalInfoComponent } from '../../_shared/components/modals/modal-info/modal-info.component';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.sass'],
  providers: [TicketsService]
})
export class TicketsComponent implements OnInit {

  public form: FormGroup;
  public tickets: any;
  public loading: boolean;
  public errMessage: string;

  constructor(
    private _fb: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _ticketsService: TicketsService,
    private _modalService: ModalService
  ) { }

  ngOnInit() {
    this._activatedRoute.queryParams.subscribe(params => {
      if (!params.code) { return false; }
      this.loading = true;
      this._ticketsService.get(params.code).subscribe(response => {
        this.loading = false;
        this.tickets = response; });
    });

    this.form = this._fb.group({
      email: ['', [ Validators.required,
        Validators.pattern('^(\\S+)@([a-z0-9-]+)(\\.)([a-z]{2,4})(\\.?)([a-z]{0,4})+$')]
      ]
    });
  }

  public submit(model) {

    this._ticketsService.getLink(model.email).subscribe(res => {
      if (res.success) {
        this._modalService.open({
          component: ModalInfoComponent, context: {
            title: 'Danke!',
            text: 'In few minutes you will receive the email with the link to list of your tickets.'
          }
        });
      } else {
        this.errMessage = 'There are no tickets for this email';
      }
    });
  }

}
