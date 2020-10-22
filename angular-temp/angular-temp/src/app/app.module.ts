import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GroupComponentComponent } from './GroupComponent/GroupComponent.component';
import { MainComponentComponent } from './mainComponent/mainComponent.component';
import { SubOrdinatesComponentComponent } from './SubOrdinatesComponent/SubOrdinatesComponent.component';
import { DynamicFieldDirective } from 'src/dynamicDirective.directive';
import { HeaderComponentComponent } from './headerComponent/headerComponent.component';
import { DefinitionComponent } from './definition/definition.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent,

    GroupComponentComponent,

    MainComponentComponent,
    SubOrdinatesComponentComponent,

    DynamicFieldDirective,

    HeaderComponentComponent,

    DefinitionComponent
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    GroupComponentComponent,
    MainComponentComponent,
    SubOrdinatesComponentComponent,
    HeaderComponentComponent
  ],

  providers: [


  ]
})
export class AppModule { }
