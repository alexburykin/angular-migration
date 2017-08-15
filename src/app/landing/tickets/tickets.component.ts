import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketsService } from './tickets.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.sass'],
  providers: [TicketsService]
})
export class TicketsComponent implements OnInit {

  public formModel: FormGroup;
  public tickets: any;
  public loading: boolean;

  constructor(
    private _fb: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _ticketsService: TicketsService
  ) { }

  ngOnInit() {
    this._activatedRoute.queryParams.subscribe(params => {
      if (!params.code) { return false; }
      this.loading = true;
      this._ticketsService.get(params.code).subscribe(response => {
        this.loading = false;
        this.tickets = response; });
    });

    this.formModel = this._fb.group({
      email: ['', [Validators.required]]
    });
  }

  public submit(model) {
    console.log(model);
  }



}
