import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MessageService } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './modules/components.module';
import { DirectivesModule } from './modules/directives.module';
import { PipesModule } from './modules/pipes.module';
import { PrimengModule } from './modules/primeng.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, ComponentsModule, DirectivesModule, PipesModule, PrimengModule],
    providers: [MessageService],
    bootstrap: [AppComponent]
})
export class AppModule {}
