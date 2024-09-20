import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { MenuComponent } from "./menu/menu.component";
import { ChatPageComponent } from "./chat-page/chat-page.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [HeaderComponent, MenuComponent, ChatPageComponent, FooterComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
