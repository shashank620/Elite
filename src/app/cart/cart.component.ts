import { Component, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  isUserLogin: boolean = false
  serviceAuth: any;
  constructor(private service:AuthService,private route:Router){}
  ngOnInit(){
    this.isUserLogin=this.service.getValues();
    // this.service.updateNavbar$.subscribe((update:any) => {
      console.log(":::: update",this.isUserLogin)
    //   this.isUserLogin = update;

    // });

  }
  goBack(){
    this.route.navigate(['home'])
  }
  cards = [
    {
      imageUrl: 'assets/OFFICE_ HOME_SERIES.jpeg',
      content: 'Leutanant (Ryzen 5 5600X + RX 6600 XT',
      starting:'Starting at',
      prize:'83,051,00/-',
      key: 'Key Highlights:',
      list: ['AMD Ryzen 5 5600X (6C/12T @4.6GHz)', 'AMD Radeon RX 6600XT Advance', 'Galax Revolution 05 (White)'
        , 'Gigabyte B550M DS3H AC', '16GB 3200MHz DDR4 XPG D30...', 'Volted Ice VM600 Air Cooler', '1TB M.2 NVMe Kingston NV2 Gen4 SSD',
        'None', 'Antec CSK 550 550W 80+ Bronze', 'Windows 10 Pro OEM'
      ],
      view: 'Add to Cart',
    },
    {
      imageUrl: 'assets/PROVIDE_WORDCLASS_PCS.jpeg',
      content: 'Lieutenant (i5 12400F + RTX 3060)',
      starting:'Starting at',
      prize:'₹84,251.00/-',
      key: 'Key Highlights:',
      list: ['Intel i5 12400F (6C/12T @4.40GHz)', 'GeForce RTX 3060 Base Model 12GB...', 'Galax Revolution 05 (White)',
        'MSI B760M Bomber WiFi D5', '16GB 5200MHz DDR5 Kingston Fury...', 'Volted Ice VM600 Air Cooler', '1TB M.2 NVMe Kingston NV2 Gen4 SSD', 'None', 'Antec CSK 550 550W 80+ Bronze', 'Windows 10 Pro OEM'
      ],
      view: 'Add to Cart',


    },
    {
      imageUrl: 'assets/OFFICE_ HOME_SERIES.jpeg',
      content: 'Captain ( i5 13400F + RTX 4060Ti )',
      key: 'Key Highlights:',
      starting:'Starting at',
      prize:'105,286.00/-',

      list: ['Intel i5 13400F (10C/16T @4.60GHz)',
        'GeForce RTX 4060Ti Base Model 8GB.',
        'Antec AX61 Elite ARGB',
        'MSI B760M Bomber WiFi D5',
        '16GB 5200MHz DDR5 Kingston Fury..',
        'Volted Ice VM600 Air Cooler',
        '1TB M.2 NVMe Kingston NV2 Gen4 SSD',
        'None',
        'Antec CSK 650 650W 80+ Bronze',
        'Windows 10 Pro OEM'],
        view: 'Add to Cart',



    },
    {
      imageUrl: 'assets/OFFICE_ HOME_SERIES.jpeg',
      content: 'Captain ( Ryzen 5 7600 + RTX 4060Ti )',
      key: 'Key Highlights:',
      starting:'Starting at',
      prize:'115,167.00/-',
      list: ['AMD Ryzen 5 7600 (6C/12T @5.1GHz)',
        'GeForce RTX 4060Ti Base Model 8GB..',
        'Antec AX61 Elite ARGB',
        'MSI PRO B650M A WiFi',
        '16GB 5200MHz DDR5 Kingston Fury..',
        'Volted Ice VM600 Air Cooler',
        '1TB M.2 NVMe Kingston NV2 Gen4 SSD',
        'None',
        'Antec CSK 650 650W 80+ Bronze',
        'Windows 10 Pro OEM'],
        view: 'Add to Cart',



    },
    {
      imageUrl: 'assets/PROVIDE_WORDCLASS_PCS.jpeg',
      content: 'Brigadier ( i7 13700F + RTX 4070Ti )',
      key: 'Key Highlights:',
      starting:'Starting at',
      prize:'195,711.00/-',
      list: ['Intel i7 13700F (16C/24T @5.20GHz)',
        'GeForce RTX 4070Ti Model..',
        'Cooler Master TD500 Mesh ARGB',
        'Asus TUF Gaming B760M Plus WiFi D5',
        '32GB 5200MHz DDR5 Kingston Fury..',
        'Volted HydroFrost VM360 ARGB AIO',
        '1TB M.2 NVMe XPG S70 Blade Gen4 SSD',
        'None',
        'Corsair RM750e 750W 80+ Gold',
        'Windows 10 Pro OEM'],
        view: 'Add to Cart',



    },
    {
      imageUrl: 'assets/OFFICE_ HOME_SERIES.jpeg',
      content: 'Brigadier ( Ryzen 7 7700X + RTX 4070Ti )',
      key: 'Key Highlights:',
      starting:'Starting at',
      prize:'195,823.00/-',
      list: ['AMD Ryzen 7 7700X (8C/16T @5.4GHz)',
        'GeForce RTX 4070Ti Advance Model 12GB..',
        'Cooler Master TD500 Mesh V2 ARGB',
        'Asus TUF Gaming B650M Plus WiFi',
        '32GB 5200MHz DDR5 Kingston Fury..',
        'Volted HydroFrost VM360 ARGB AIO',
        '1TB M.2 NVMe XPG S70 Blade Gen4 SSD',
        'None',
        'Corsair RM750e 750W 80+ Gold',
        'Windows 10 Pro OEM'],
        view: 'Add to Cart',



    },
    {
      imageUrl: 'assets/GAMING_SERIES.jpeg',
      content: 'Marshal ( i9 13900K + RTX 4090 )',
      key: 'Key Highlights:',
      starting:'Starting at',
      prize:'₹403,995.00/-',
      list: ['Intel   i7 13700F (16C/24T @5.20GHz)',
        'GeForce RTX 4070Ti Advance Model 12GB',
        'Cooler Master TD500 Mesh V2 ARGB',
        'Asus TUF Gaming B760M Plus WiFi D5',
        '32GB 5200MHz DDR5 Kingston Fury..',
        'Volted HydroFrost VM360 ARGB AIO',
        '1TB M.2 NVMe XPG S70 Blade Gen4 SSD',
        'None',
        'Corsair RM750e 750W 80+ Gold',
        'Windows 10 Pro OEM']
      ,
      view: 'Add to Cart',
}
];
 arr:any=[];

addToCart(cart:any){
  if(this.isUserLogin){
    this.arr.push(cart)
    console.log(":: acrt",this.arr);
    this.service.updateCard(this.arr)
    this.service.setProduct(this.arr)
  }else{
    this.route.navigate(['/signIn'])
  }

}
}
