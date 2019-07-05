import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: ` <div>
                <p>Starshot Exam 2019</p>
              </div>`,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
