import { Injectable } from '@angular/core';
import {MenuModels} from '../../models/menu.models';

@Injectable({
  providedIn: 'root'
})
export class Menu2Service {

  constructor() { }

  menu : MenuModels[] = [
    {
      id: 11,
      image:"https://texaschickenvn.com/vnt_upload/product/07_2023/Combo_Gion_Tan_D.png",
      name:"Combo Giòn Tan 4",
      price: 95000,
      oldPrice: 114000,
      bio:"-01 Cơm gà sốt chua ngọt" +
        "/n01 Chai Coca Cola"
    },

    {
      id: 12,
      image:"https://texaschickenvn.com/vnt_upload/product/07_2023/Combo_Vui_Ve_A.png",
      name:"Combo VUI VẺ 1",
      price: 159000,
      oldPrice: 179000,
      bio:"-01 Cơm gà sốt chua ngọt" +
        "/n01 Chai Coca Cola"
    },
    {
      id: 13,
      image:"https://texaschickenvn.com/vnt_upload/product/07_2023/Combo_Vui_Ve_B.png",
      name:"Combo VUI VẺ 2",
      price: 159000,
      oldPrice: 194000,
      bio:"-01 Cơm gà sốt chua ngọt" +
        "/n01 Chai Coca Cola"
    },
    {
      id: 14,
      image:"https://texaschickenvn.com/vnt_upload/product/07_2023/Combo_Vui_Ve_C.png",
      name:"Combo VUI VẺ 3",
      price: 189000,
      oldPrice: 218000,
      bio:"-01 Cơm gà sốt chua ngọt" +
        "/n01 Chai Coca Cola"
    },

    {
      id: 15,
      image:"https://texaschickenvn.com/vnt_upload/product/07_2023/Combo_A_1.png",
      name:"Combo Nhóm 1",
      price: 279000,
      oldPrice: 351000,
      bio:"-01 Cơm gà sốt chua ngọt" +
        "/n01 Chai Coca Cola"
    },
    {
      id: 16,
      image:"https://texaschickenvn.com/vnt_upload/product/07_2023/Combo_Vui_Ve_D.png",
      name:"Combo VUI VẺ 4",
      price: 199000,
      oldPrice: 247000,
      bio:"-01 Cơm gà sốt chua ngọt" +
        "/n01 Chai Coca Cola"
    },
    {
      id: 17,
      image:"https://texaschickenvn.com/vnt_upload/product/07_2023/Combo_B_1.png",
      name:"Combo Nhóm 2",
      price: 389000,
      oldPrice: 504000,
      bio:"-01 Cơm gà sốt chua ngọt" +
        "/n01 Chai Coca Cola"
    },
    {
      id: 18,
      image:"https://texaschickenvn.com/vnt_upload/product/07_2023/Combo_C.png",
      name:"Combo Nhóm 3",
      price: 499000,
      oldPrice: 608000,
      bio:"-01 Cơm gà sốt chua ngọt" +
        "/n01 Chai Coca Cola"
    },
    {
      id: 19,
      image:"https://texaschickenvn.com/vnt_upload/product/07_2023/Combo_Tiet_Kiem_A.png",
      name:"Combo Tiết Kiệm 1",
      price: 65000,
      oldPrice: 84000,
      bio:"-01 Cơm gà sốt chua ngọt" +
        "/n01 Chai Coca Cola"
    },
    {
      id: 20,
      image:"https://texaschickenvn.com/vnt_upload/product/07_2023/Combo_Tiet_Kiem_B.png",
      name:"Combo Tiết Kiệm 2",
      price: 65000,
      oldPrice: 94000,
      bio:"-01 Cơm gà sốt chua ngọt" +
        "/n01 Chai Coca Cola"
    },
    {
      id: 21,
      image:"https://texaschickenvn.com/vnt_upload/product/07_2023/Combo_Tiet_Kiem_C.png",
      name:"Combo Tiết Kiệm 3",
      price: 65000,
      oldPrice: 94000,
      bio:"-01 Cơm gà sốt chua ngọt" +
        "/n01 Chai Coca Cola"
    },
    {
      id: 22,
      image:"https://texaschickenvn.com/vnt_upload/product/07_2023/Combo_Tiet_Kiem_D.png",
      name:"Combo Tiết Kiệm 4",
      price: 65000,
      oldPrice: 94000,
      bio:"-01 Cơm gà sốt chua ngọt" +
        "/n01 Chai Coca Cola"
    },
  ];

  get menuList(){
    return this.menu;
  }
}


