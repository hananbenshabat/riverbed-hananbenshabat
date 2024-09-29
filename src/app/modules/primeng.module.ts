import { NgModule, Type } from '@angular/core';
import { MessageService } from 'primeng/api';
import { AutoFocusModule } from 'primeng/autofocus';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { MessageModule } from 'primeng/message';
import { SkeletonModule } from 'primeng/skeleton';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { ToolbarModule } from 'primeng/toolbar';

const modules: (Type<any> | any[])[] = [
    SkeletonModule,
    ToastModule,
    MessageModule,
    ButtonModule,
    ToggleButtonModule,
    ToolbarModule,
    TableModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    AutoFocusModule,
    CardModule
];

@NgModule({ imports: modules, exports: modules, providers: [MessageService] })
export class PrimengModule {}
