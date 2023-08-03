import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent {
  @Input()
  title!: string;

  @Input()
  // margin? = '1rem 0 1rem 0.2rem';
  margin?: string;

  @Input()
  // fontSize? = '1.7rem';
  fontSize?: string;

  @Input()
  classProps?: string;
}
