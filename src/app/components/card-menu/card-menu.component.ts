import {Component, Input} from '@angular/core';
import {MenuModels} from '../../models/menu.models';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-card-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './card-menu.component.html',
  styleUrl: './card-menu.component.scss'
})
export class CardMenuComponent {
  // @Input() name!: string;
  // @Input() price!: string;
  // @Input() oldPrice!: string;
  // @Input() image!: string;

  @Input () menu! : MenuModels

}
