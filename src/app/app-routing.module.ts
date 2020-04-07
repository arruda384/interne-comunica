import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'comunicado',
    loadChildren: () => import('./comunicado/comunicado.module').then( m => m.ComunicadoPageModule)
  },
  {
    path: 'detalhe-comunicado',
    loadChildren: () => import('./detalhe-comunicado/detalhe-comunicado.module').then( m => m.DetalheComunicadoPageModule)
  },
  {
    path: 'detalhe-video',
    loadChildren: () => import('./detalhe-video/detalhe-video.module').then( m => m.DetalheVideoPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'virus',
    loadChildren: () => import('./virus/virus.module').then( m => m.VirusPageModule)
  },
  {
    path: 'detalhe-virus',
    loadChildren: () => import('./detalhe-virus/detalhe-virus.module').then( m => m.DetalheVirusPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
