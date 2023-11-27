import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-reclamos',
  templateUrl: './reclamos.page.html',
  styleUrls: ['./reclamos.page.scss'],
})
export class ReclamosPage implements OnInit {
  public alertButtons = ['OK'];
  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }



  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_goparking', 'template_tse4202', e.target as HTMLFormElement, 'H5CUrYZ2rfllSb1Eu')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
}





