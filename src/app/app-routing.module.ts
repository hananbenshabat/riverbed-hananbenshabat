import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { RoutePath } from './enums/route-path.enum';

const routerOptions: ExtraOptions = {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled'
};

const routes: Routes = [
    {
        path: RoutePath.Books,
        component: BooksComponent
    },
    { path: '**', pathMatch: 'full', redirectTo: '/' + RoutePath.Books }
];

@NgModule({ imports: [RouterModule.forRoot(routes, routerOptions)], exports: [RouterModule] })
export class AppRoutingModule {}
