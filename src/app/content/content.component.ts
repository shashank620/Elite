import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-content',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  constructor(private route:Router){}
  customerReview = [
    { logo: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1710993571~exp=1710994171~hmac=8047552b8759b3e1f81de96758a6c5b1a253415a68fb1268af9551e60aef462c', fName: 'Debmalya', lName: 'Biswas', city: 'Delhi', discription: 'Finally got my much planned and desired desktop built from Volted PC. It was a very satisfying experience. Naman Gupta personally listened to my requirements, shared his valuable inputs and put in his best efforts to procure the finalised parts amidst the..', src1: '../../assets/9.jpeg', src2: '../../assets/10.jpeg' },
    {
      logo: 'https://img.freepik.com/premium-photo/young-indian-man-showing-showing-thumps-up-white-background_75648-5427.jpg?w=740',
      fName: 'Lisa',
      lName: 'Hughes',
      city: 'Mumbai',
      discription: 'This group is amazing - amazing! My 15 year old son (living in Mumbai) wanted his own gaming desktop built. After many virtual calls/photos and messages it arrived. Uniquely designed as per his design, it was also built within our budget. They are so', src1: '../../assets/7.jpeg', src2: '../../assets/8.jpeg'
    },
    {
      logo: 'https://img.freepik.com/free-photo/successful-businessman_1098-18155.jpg?w=360&t=st=1710993663~exp=1710994263~hmac=93eb054b523d76e3c46a2b34a86d34567d55b89eca59d53bd87fcc2c89281d46',
      fName: 'Sparsh',
      lName: 'Biswas',
      city: 'Delhi',
      discription: "If i could give more than 5 stars i would!! All of their staff is very knowledgeable and friendly. Also their cable management is Top Notch. There isn't any negative thing about their service or anything to left a bad review for. Great Job to the whole team at", src1: '../../assets/5.jpeg', src2: '../../assets/6.jpeg'
    },
  ]
  review = [
    { logo: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=740&t=st=1710993571~exp=1710994171~hmac=8047552b8759b3e1f81de96758a6c5b1a253415a68fb1268af9551e60aef462c', fName: 'Samir', lName: 'Dhaga', city: 'Kerala', discription: "I got my Gaming Rig done via Volted. Excellent consulting, very professional advice and the best was the final outcome. The whole process was super smooth, top class material and craftsmanship. The installation person who came for installation and was", src1: '../../assets/1.jpeg',src2: '../../assets/10.jpeg'  },
    {
      logo: 'https://img.freepik.com/premium-photo/young-indian-man-showing-showing-thumps-up-white-background_75648-5427.jpg?w=740',
      fName: 'Arjun',
      lName: 'Venugopal',
      city: 'Tamil Nadu',
      discription: 'Bought a gaming PC from Volted, have to say i am more than impressed with their knowledge and commitment. Absolutely happy and zero regrets that i chose them to build my rig. Thank you Volted PC..', src1: '../../assets/3.jpeg', src2: '../../assets/4.jpeg'
    },
    {
      logo: 'https://img.freepik.com/free-photo/successful-businessman_1098-18155.jpg?w=360&t=st=1710993663~exp=1710994263~hmac=93eb054b523d76e3c46a2b34a86d34567d55b89eca59d53bd87fcc2c89281d46',
      fName: 'Rishabh',
      lName: 'Maan',
      city: 'Haryana',
      discription: "If you want Top Quality products backed by someone who knows his stuff, come at Volted PC. They has one of the biggest range of all PC related items you may need. If you want a premium product backed by expertise in this field, choose Volted and you..", src1: '../../assets/1.jpeg', src2: '../../assets/2.jpeg'
    }
  ]

  handleClick(){
    this.route.navigate(['./gaming'])
  }
  handleBuild(){
    this.route.navigate(['./build_pc'])
  }
}
