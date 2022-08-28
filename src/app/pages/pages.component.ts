import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';
declare function customFuctionInit():any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {




  constructor(private settingServices: SettingsService) { }

  ngOnInit(): void {
    customFuctionInit();
  }

} 