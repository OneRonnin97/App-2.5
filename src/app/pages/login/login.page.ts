import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AutheticationService } from 'src/app/Services/authetication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  
  constructor(private router: Router, public formBuilder:FormBuilder, public loadinCtrl: LoadingController, public authService:AutheticationService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
    
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
    return this.loginForm?.controls;

  }

  async login(){
    const loading = await this.loadinCtrl.create();
    await loading.present();
    if(this.loginForm?.valid){
      const user = await this.authService.loginUser(this.loginForm.value.email,this.loginForm.value.password).catch((error)=>{

      
        console.log(error);
        loading.dismiss()
      });
      
      if(user){
        loading.dismiss()
        this.router.navigate(["/home"])
        
      }else{
        console.log('Datos incorrectos')
      }

    }
  }
  

}
