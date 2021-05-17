import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListViewComponent } from './list-view/list-view.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { LoaderService } from './shared/services/loader.service';
import { LoaderInterceptorService } from './shared/interceptors/loader-interceptor.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListViewComponent,
    NotFoundComponent,
    DetailViewComponent,
    SpinnerComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
