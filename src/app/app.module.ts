import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
// import { NgForm } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ServiceComponent } from './service/service.component';
import { RegisterComponent } from './register/register.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { DevComponent } from './dev/dev.component';
import { TestingComponent } from './testing/testing.component';
import { DeploymentComponent } from './deployment/deployment.component';
import { FormsModule } from '@angular/forms';
import { LoanComponent } from './loan/loan.component';
import { CarComponent } from './loan/car/car.component';
import { PersonalComponent } from './loan/personal/personal.component';
import { GoldComponent } from './loan/gold/gold.component';
import { DirectivesdemoComponent } from './directivesdemo/directivesdemo.component';
// import { S1Component } from './s1/s1.component';
// import { S2Component } from './s2/s2.component';
import { A1Component } from './a1/a1.component';
import { A2Component } from './a2/a2.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { SqrPipe } from './sqr.pipe';
import { CubPipe } from './cub.pipe';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { TDFormComponent } from './tdform/tdform.component';
import { RDFormComponent } from './rdform/rdform.component';
import { MsgComponent } from './msg/msg.component';
import { Msg2Component } from './msg2/msg2.component';
import { BulbconceptComponent } from './bulbconcept/bulbconcept.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    GalleryComponent,
    ServiceComponent,
    RegisterComponent,
    ErrorpageComponent,
    DevComponent,
    TestingComponent,
    DeploymentComponent,
    LoanComponent,
    CarComponent,
    PersonalComponent,
    GoldComponent,
    DirectivesdemoComponent,
    // S1Component,
    // S2Component,
    A1Component,
    A2Component,
    PipedemoComponent,
    SqrPipe,
    CubPipe,
    LifecyclehooksComponent,
    TDFormComponent,
    RDFormComponent,
    MsgComponent,
    Msg2Component,
    BulbconceptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    // NgForm
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
