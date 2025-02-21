import { Component } from '@angular/core';
import {CardMenuComponent} from '../../components/card-menu/card-menu.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {HeaderComponent} from '../../components/header/header.component';
import {MatIcon} from '@angular/material/icon';
import {MenuModels} from '../../models/menu.models';
import {MenuService} from '../../services/menu/menu.service';
import {RouterLink} from '@angular/router';
import {Menu2Service} from '../../services/menu2/menu-2.service';

@Component({
  selector: 'app-menu-page2',
  standalone: true,
  imports: [CardMenuComponent, FooterComponent, HeaderComponent, MatIcon, RouterLink],
  templateUrl: './menu-page2.component.html',
  styleUrl: './menu-page2.component.scss'
})
export class MenuPage2Component {
  // menu : MenuModels[] = [
  //   {
  //     id: 0,
  //     image:"https://texaschickenvn.com/vnt_upload/product/09_2024/Com_ga_sot_chua_ngot1.jpg",
  //     name:"Cơm Gà Sốt Chua Ngọt",
  //     price: 65000,
  //     oldPrice: 71000,
  //   },
  //
  //   {
  //     id: 1,
  //     image:"https://texaschickenvn.com/vnt_upload/product/09_2024/Com_ga_sot_teriyaki1.jpg",
  //     name:"Combo Cơm Gà Sốt Teriyaki",
  //     price: 65000,
  //     oldPrice: 71000,
  //   },
  //   {
  //     id: 2,
  //     image:"https://texaschickenvn.com/vnt_upload/product/09_2024/My_y_ga_co_xuong.jpg",
  //     name:"Combo Mỳ Ý Gà Không Xương",
  //     price: 71000,
  //     oldPrice: 75000,
  //   },
  //   {
  //     id: 3,
  //     image:"https://texaschickenvn.com/vnt_upload/product/09_2024/My_y_ga_co_xuong.jpg",
  //     name:"Combo Mỳ Ý Gà Có Xương",
  //     price: 89000,
  //     oldPrice: 95000,
  //   },
  //
  //   {
  //     id: 4,
  //     image:"https://texaschickenvn.com/vnt_upload/product/07_2023/Combo_A_Ga_sot_bo_toi__thao_moc.png",
  //     name:"Combo A - Gà Sốt Bơ Tỏi & Thảo Mộc",
  //     price: 119000,
  //     oldPrice: 155000,
  //   },
  //   {
  //     id: 5,
  //     image:"https://texaschickenvn.com/vnt_upload/product/07_2023/Combo_B_Ga_sot_bo_toi__thao_moc.png",
  //     name:"Combo B - Gà Sốt Bơ Tỏi & Thảo Mộc",
  //     price: 199000,
  //     oldPrice: 257000,
  //   },
  //   {
  //     id: 6,
  //     image:"https://texaschickenvn.com/vnt_upload/product/07_2023/1_Mieng_Ga_Sot_Bo_Toi_Va_Thao_Moc___Copy.jpg",
  //     name:"1 miếng Gà Sốt Bơ Tỏi & Thảo Mộc",
  //     price: 49000,
  //     oldPrice: 0,
  //   },
  //   {
  //     id: 7,
  //     image:"https://texaschickenvn.com/vnt_upload/product/07_2023/4_Mieng_Ga_sot_bo_toi__thao_moc.jpg",
  //     name:"4 miếng Gà Sốt Bơ Tỏi & Thảo Mộc",
  //     price: 179000,
  //     oldPrice: 196000,
  //   },
  //   {
  //     id: 8,
  //     image:"https://texaschickenvn.com/vnt_upload/product/07_2023/7_Mieng_Ga_sot_bo_toi__thao_moc.jpg",
  //     name:"7 miếng Gà Sốt Bơ Tỏi & Thảo Mộc",
  //     price: 299000,
  //     oldPrice: 343000,
  //   },
  //   {
  //     id: 9,
  //     image:"https://texaschickenvn.com/vnt_upload/product/07_2023/Combo_Gion_Tan_A.png",
  //     name:"Combo Giòn Tan 1",
  //     price: 95000,
  //     oldPrice: 104000,
  //   },
  //   {
  //     id: 0,
  //     image:"https://texaschickenvn.com/vnt_upload/product/07_2023/Combo_Gion_Tan_B.png",
  //     name:"Combo Giòn Tan 2",
  //     price: 95000,
  //     oldPrice: 105000,
  //   },
  //   {
  //     id: 10,
  //     image:"https://texaschickenvn.com/vnt_upload/product/07_2023/Combo_Gion_Tan_C.png",
  //     name:"Combo Giòn Tan 3",
  //     price: 95000,
  //     oldPrice: 105000,
  //   },
  // ];

  menu!: MenuModels[];

  constructor(private menu2Service: Menu2Service) {
    console.log(this.menu2Service.menu);
  }

  ngOnInit(): void {
    this.menu = this.menu2Service.menu;

  }
}

