import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  username : string = "";
  password : string = "";
  msg : boolean = false;
  msgText : string = "";

  verify(){
    if(this.username.length < 5 || this.password.length < 5){
      this.msg = true;
      this.msgText = "Insufficient length"
      this.closer()
      return;
    }
    console.log(this.username,this.password,this.msg)

  }

  viewer(){
    let icon = document.getElementById("icon") as HTMLInputElement;
    let element = document.getElementById("pw") as HTMLInputElement;
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

  closer(){
    setTimeout(()=>{
      this.msg = false;
      this.msgText = "";
    },1000)
  }


}
