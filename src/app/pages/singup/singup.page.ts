import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { AutheticationService } from 'src/app/Services/authetication.service';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
})
export class SingupPage implements OnInit {
  public alertButtons = ['OK'];

  regForm: FormGroup;

  constructor(public formBuilder:FormBuilder, public loadinCtrl: LoadingController, public authService:AutheticationService,public router: Router) { }

  ngOnInit() {
    this.regForm = this.formBuilder.group({
      fullname : ['',[Validators.required]],
      email:['', [
        Validators.required,
        Validators.email,
        Validators.pattern("[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"),
      ]],
      password:['',[
      Validators.required,
      
      Validators.pattern(".{8,}")
      ]]
    })
  }

  get errorControl(){
    return this.regForm?.controls;

  }

  async signUp(){
    const loading = await this.loadinCtrl.create();
    await loading.present();
    if(this.regForm?.valid){
      const user = await this.authService.registerUser(this.regForm.value.email,this.regForm.value.password).catch((error)=>{

    
        console.log(error);
        loading.dismiss()
      })
      if(user){
        loading.dismiss()
        this.router.navigate(['/login'])
      }else{
        console.log('Datos incorrectos')
      }

    }
  }
  

}