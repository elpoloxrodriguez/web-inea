import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './contents/app/app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './contents/shared/footer/footer.component';
import { CarouselComponent } from './contents/shared/carousel/carousel.component';
import { SideMenuRightComponent } from './contents/shared/side-menu-right/side-menu-right.component';
import { SubMenuBarComponent } from './contents/shared/sub-menu-bar/sub-menu-bar.component';
import { SocialMediaComponent } from './contents/shared/social-media/social-media.component';
import { ChatBotComponent } from './contents/shared/chat-bot/chat-bot.component';
import { PreloaderComponent } from './contents/shared/preloader/preloader.component';
import { BackToTopComponent } from './contents/shared/back-to-top/back-to-top.component';
import { NewsComponent } from './contents/shared/news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { SystemOnlineComponent } from './contents/shared/system-online/system-online.component';
import { RadioComponent } from './contents/shared/radio/radio.component';
import { DetailsComponent } from './contents/shared/news/details/details.component';
import { PrincipalComponent } from './contents/principal/principal.component';
import { ContactComponent } from './contents/contact/contact.component';
import { AboutComponent } from './contents/about/about.component';
import { MeteorologyComponent } from './contents/meteorology/meteorology.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CarouselComponent,
    SideMenuRightComponent,
    SubMenuBarComponent,
    SocialMediaComponent,
    ChatBotComponent,
    PreloaderComponent,
    BackToTopComponent,
    NewsComponent,
    SystemOnlineComponent,
    RadioComponent,
    DetailsComponent,
    PrincipalComponent,
    ContactComponent,
    AboutComponent,
    MeteorologyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
