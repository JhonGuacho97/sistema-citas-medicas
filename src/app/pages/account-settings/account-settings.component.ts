import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {
  

  constructor(private settingServices: SettingsService){}

  ngOnInit(): void {
    this.settingServices.checkCurrentTheme();
  }

  changueTheme(theme:string){

    this.settingServices.changueTheme(theme);

  }


}
