import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-build-pc',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './build-pc.component.html',
  styleUrl: './build-pc.component.css'
})
export class BuildPCComponent {
  constructor(private authService:AuthService,private route:Router){}
  buildPCSummry = [
    {
      icon: 'https://voltedpc.in/storage/category/5/W726ChmKIdOXyQjmRslRd0Y2R3RhaJzClWYlgLhR.png',
      name: ' Processor',
      processor: 'Intel i5 12400F (6C/12T @4.40GHz)',
      more: '2more',
      arrowIcon: '>'
    },
    {
      icon: 'https://voltedpc.in/storage/category/8/UYCc1NFY0JgVBmFSPAhArpMBVwAh9Lht3pzwoD3r.png',
      name: '  Graphics Card',
      processor: 'Intel i5 12400F (6C/12T @4.40GHz)',
      more: '2more',
      arrowIcon: '>'
    },
    {
      icon: 'https://voltedpc.in/storage/category/5/W726ChmKIdOXyQjmRslRd0Y2R3RhaJzClWYlgLhR.png',
      name: ' Processor',
      processor: 'GeForce RTX 3060 Advance Model 12GB GDDR6',
      more: '2more',
      arrowIcon: '>'
    },
    {
      icon: 'https://voltedpc.in/storage/category/12/pR9i8ZAj9AAI7HUcZjn0t11VcZQfZJKgfm5yiXY2.png',
      name: '  Cabinet',
      processor: 'Galax Revolution 01 ARGB (Black)',
      more: '2more',
      arrowIcon: '>'
    },
    {
      icon: 'https://voltedpc.in/storage/category/6/3a7fncczHC2vwKbvcZr2ViduNZ3q49FpE1uXB6Gl.png',
      name: '   Motherboard',
      processor: 'MSI B760M Bomber WiFi D5',
      more: '2more',
      arrowIcon: '>'
    },
    {
      icon: 'https://voltedpc.in/storage/category/7/nZ9EiyvX2I6mV1NhiEAU6JsxKVDBpWvo7dZI1XbO.png',
      name: '  RAM',
      processor: '16GB 5200MHz DDR5 Kingston Fury Beast',
      more: '2more',
      arrowIcon: '>'
    },
    {
      icon: 'https://voltedpc.in/storage/category/9/J7Xyz4l93avndka09lw7P0ErJmbhxDA9SGUrs3bd.png',
      name: '   CPU Cooler',
      processor: 'Volted Ice VM600 Air Cooler',
      more: '2more',
      arrowIcon: '>'
    },
    {
      icon: 'https://voltedpc.in/storage/category/10/WZOEOQQQWUyVMTbMK6x9HwUKkufOzLTrTRu7wvm2.png',
      name: '   Primary Storage',
      processor: '500GB M.2 NVMe Kingston NV2 Gen4 SSD',
      more: '2more',
      arrowIcon: '>'
    },
    {
      icon: 'https://voltedpc.in/storage/category/11/dHp5CU1oqkFgxa8IgwwXvqgBwWhOAWqFgDL8jzIO.png',
      name: '   Secondary Storage',
      processor: 'None',
      more: '2more',
      arrowIcon: '>'
    },
    {
      icon: 'https://voltedpc.in/storage/category/6/3a7fncczHC2vwKbvcZr2ViduNZ3q49FpE1uXB6Gl.png',
      name: '   Motherboard',
      processor: 'MSI B760M Bomber WiFi D5',
      more: '2more',
      arrowIcon: '>'
    },
    {
      icon: 'https://voltedpc.in/storage/category/7/nZ9EiyvX2I6mV1NhiEAU6JsxKVDBpWvo7dZI1XbO.png',
      name: '  RAM',
      processor: '16GB 5200MHz DDR5 Kingston Fury Beast',
      more: '2more',
      arrowIcon: '>'
    },
    {
      icon: 'https://voltedpc.in/storage/category/9/J7Xyz4l93avndka09lw7P0ErJmbhxDA9SGUrs3bd.png',
      name: '   CPU Cooler',
      processor: 'Volted Ice VM600 Air Cooler',
      more: '2more',
      arrowIcon: '>'
    },
  ]
  addOnProduct=[
    {icon:'>', name:'Mouse'},
    {icon:'>', name:'Keyboard'},
    {icon:'>', name:'Headphone'},
    {icon:'>', name:'Mousepad'},
    {icon:'>', name:'Custom Sleeved Cables'},
    {icon:'>', name:'Addition Fans'},
    {icon:'>', name:'Custome GPU'},
    {icon:'>', name:'Monitor'},
    {icon:'>', name:'UPS'},
    {icon:'>', name:'Chairs'},
  ]
  services=[
    {
      icon:'i',
      warrenty:'Alpha Premium 1 Year On-site Nationwide Warranty',
      icon2:'ℹ',
      prize: '₹1/-'
    },
    {
      icon:'i',
      warrenty:'Alpha Premium 2 Year On-site Nationwide Warranty',
      icon2:'ℹ',
      prize: '₹3,500/--'
    },
    {
      icon:'i',
      warrenty:'Alpha Premium 3 Year On-site Nationwide Warranty',
      icon2:'ℹ',
      prize: '₹7,500/-'
    }
  ]
  component = true;
  addOn= false;
  service= false;
  handleClick(e:any){
    console.log(":::: e",e)
    if(e == 'component'){
      this.component = true;
      this.addOn= false;
      this.service= false;
    }else if(e == 'addOn'){
      this.component = false;
      this.addOn= true;
      this.service= false;
    }else if(e == 'service'){
      this.component = false;
      this.addOn= false;
      this.service= true;
    }
  }
  Checkout(){
    console.log(":: checkout");
    const val = [{imageUrl:'../../assets/done-2.jpeg',prize: '81,477',tax:'(Inclusive of all taxes)',content:'Lieutenant ( Ryzen 5 5600X + RX 6600 XT )'}]
    this.authService.updateCard(val)
    this.authService.setProduct([{imageUrl:'../../assets/done-2.jpeg',prize: '81,477',tax:'(Inclusive of all taxes)',content:'Lieutenant ( Ryzen 5 5600X + RX 6600 XT )'}])
  }
  goBack(){
    this.route.navigate(['/home'])
  }
}
