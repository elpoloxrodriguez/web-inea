import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './contents/app/app.component';
import { FooterComponent } from './contents/shared/footer/footer.component';
import { CarouselComponent } from './contents/shared/carousel/carousel.component';
import { SideMenuRightComponent } from './contents/shared/side-menu-right/side-menu-right.component';
import { SubMenuBarComponent } from './contents/shared/sub-menu-bar/sub-menu-bar.component';
import { SocialMediaComponent } from './contents/shared/social-media/social-media.component';
import { ChatBotComponent } from './contents/shared/chat-bot/chat-bot.component';
import { PreloaderComponent } from './contents/shared/preloader/preloader.component';
import { BackToTopComponent } from './contents/shared/back-to-top/back-to-top.component';
import { NewsComponent } from './contents/shared/news/news.component';

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
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
