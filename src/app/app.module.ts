import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { importProvidersFrom, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { errorInterceptor } from './interceptors/error.interceptor';
import { ComponentsModule } from './modules/components.module';
import { DirectivesModule } from './modules/directives.module';
import { PipesModule } from './modules/pipes.module';
import { PrimengModule } from './modules/primeng.module';
import { ServicesModule } from './modules/services.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        ComponentsModule,
        DirectivesModule,
        PipesModule,
        PrimengModule,
        ServicesModule
    ],
    providers: [
        MessageService,
        importProvidersFrom([BrowserAnimationsModule]),
        provideHttpClient(withInterceptors([errorInterceptor]))
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
