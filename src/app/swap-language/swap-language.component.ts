import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-swap-language',
  templateUrl: './swap-language.component.html',
  styleUrls: ['./swap-language.component.sass']
})
export class SwapLanguageComponent implements OnInit {

  constructor(
    public translate: TranslateService
  ) { }

  ngOnInit() {
  }

}
