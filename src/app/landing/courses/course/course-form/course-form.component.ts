import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../auth/auth-service';
import { FormBuilder, Validators } from '@angular/forms';
import { SharedService } from '../../../../_shared/services/shared.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.sass']
})
export class CourseFormComponent implements OnInit {

  public user: any;
  public form: any;
  public countries: any;

  constructor(
    private _fb: FormBuilder,
    private _authService: AuthService,
    private _sharedService: SharedService
  ) { }

  ngOnInit() {
    this.user = this._authService.getUser();
    this._sharedService.getCountries().subscribe(res => this.countries = res.countries);

    this.form = this._fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern('^(\\S+)@([a-z0-9-]+)(\\.)([a-z]{2,4})(\\.?)([a-z]{0,4})+$')]
      ],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^\\S*$')]],
      first_name: ['', [Validators.required, Validators.minLength(2)]],
      last_name: ['', [Validators.required, Validators.minLength(2)]],
      country: ['', [Validators.required]],
      city: ['', [Validators.required]],
      address: ['', [Validators.required]],
      is_company: ['0'],
      company: ['', [Validators.required]],
      tax_id: ['', [Validators.required]],
      zip_code: ['', [Validators.required]],
    });

    this.form.valueChanges.subscribe(data => console.log('Form changes', data));
  }

  public submit(model: RegModel) {
    if (this.form.valid) {
      console.log(model);
    } else {
      Object.keys(this.form.controls).forEach(field => { // {1}
        const control = this.form.get(field);            // {2}
        control.markAsTouched({ onlySelf: true });       // {3}
      });
    }
  }

}


interface RegModel {
  username: string;
  email: string;
  password: string;
  password2: string;
  first_name?: string;
  last_name?: string;
  country?: string;
  company?: string;
  is_company?: string;
  tax_id?: string;
  zip_code?: string;
  address?: string;
  city?: string;
}
