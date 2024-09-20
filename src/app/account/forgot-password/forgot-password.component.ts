import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {

  email : string = "";
  password1 : string = "";
  password2 : string = "";

  msg : boolean = false;
  msgText : string = "";

  verify(){
    if(this.email.length < 5 || this.password1.length < 5){
      this.msg = true;
      this.msgText = "Insufficient length"
      this.closer()
      return;
    }
    else if(this.password1 === this.password2){
      this.msg = true;
      this.msgText = "password mismatched"
      this.closer()
      return;
    }
    console.log(this.email,this.password1,this.msg)

  }

  viewer(n : number){
    if(n == 1){
      let icon = document.getElementById("icon1") as HTMLInputElement;
      let element = document.getElementById("pw1") as HTMLInputElement;
      console.log(element['type'])
      if(element['type'] == "password"){
        element['type'] = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      }
      else{
        element['type'] = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
      }
    }
    else if(n == 2){
      let icon = document.getElementById("icon2") as HTMLInputElement;
      let element = document.getElementById("pw2") as HTMLInputElement;
      console.log(element['type'])
      if(element['type'] == "password"){
        element['type'] = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
      }
      else{
        element['type'] = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
      }
    }
  }

  closer(){
    setTimeout(()=>{
      this.msg = false;
      this.msgText = "";
    },1000)
  }

}
