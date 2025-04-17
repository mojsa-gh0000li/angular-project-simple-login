import { appRoutes } from './app/app.routes';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/pages/login/login.component';
import { RegisterComponent } from './app/pages/register/register.component';
import { PostsComponent } from './app/pages/posts/posts.component';
import { HeaderComponent } from './app/components/header/header.component';
import { DashboardComponent } from './app/pages/dashboard/dashboard.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(appRoutes, withComponentInputBinding()),
    provideHttpClient(),
    provideAnimations(),
    { provide: FormsModule, useValue: FormsModule }
  ]
}).catch(err => console.error(err));