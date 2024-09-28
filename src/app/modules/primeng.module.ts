import { NgModule, Type } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ListboxModule } from 'primeng/listbox';
import { SkeletonModule } from 'primeng/skeleton';
import { ToastModule } from 'primeng/toast';

const modules: (Type<any> | any[])[] = [SkeletonModule, ToastModule, ListboxModule];

@NgModule({ imports: modules, exports: modules, providers: [MessageService] })
export class PrimengModule {}
