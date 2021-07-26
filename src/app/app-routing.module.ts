import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ControllersComponent } from './homepage/pages/controllers/controllers.component';
import { EnterpriseComponent } from './homepage/pages/enterprise/enterprise.component';
import { FirstStepsComponent } from './homepage/pages/first-steps/first-steps.component';
import { GuardsComponent } from './homepage/pages/guards/guards.component';
import { IntroductionComponent } from './homepage/pages/introduction/introduction.component';
import { MiddlewaresComponent } from './homepage/pages/middlewares/middlewares.component';
import { SupportComponent } from './homepage/pages/support/support.component';
import { RedirectGuard } from './shared/guards/redirect.guard';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    children: [
      {
        path: '',
        component: IntroductionComponent,
      },
      {
        path: 'first-steps',
        component: FirstStepsComponent,
        data: { title: 'First steps' },
      },
      {
        path: 'controllers',
        component: ControllersComponent,
        data: { title: 'Controllers' },
      },
      {
        path: 'components',
        redirectTo: 'providers',
      },
      {
        path: 'middleware',
        component: MiddlewaresComponent,
        data: { title: 'Middleware' },
      },
      {
        path: 'guards',
        component: GuardsComponent,
        data: { title: 'Guards' },
      },
      {
        path: 'application-context',
        redirectTo: 'standalone-applications',
      },
      {
        path: 'support',
        component: SupportComponent,
        data: { title: 'Support' },
      },
      {
        path: 'consulting',
        component: EnterpriseComponent,
        resolve: {
          url: 'externalUrlRedirectResolver',
        },
        canActivate: [RedirectGuard],
        data: {
          externalUrl: 'https://enterprise.ultimatebackend.dev',
        },
      },
      {
        path: 'enterprise',
        redirectTo: 'consulting',
      },
      {
        path: 'enterprise',
        component: EnterpriseComponent,
        data: { title: 'Official Support' },
      },
      {
        path: 'fundamentals',
        loadChildren: () =>
          import('./homepage/pages/fundamentals/fundamentals.module').then(
            (m) => m.FundamentalsModule,
          ),
      },

      {
        path: 'graphql',
        loadChildren: () =>
          import('./homepage/pages/graphql/graphql.module').then(
            (m) => m.GraphqlModule,
          ),
      },
      {
        path: 'recipes',
        loadChildren: () =>
          import('./homepage/pages/recipes/recipes.module').then(
            (m) => m.RecipesModule,
          ),
      },
      {
        path: 'faq',
        loadChildren: () =>
          import('./homepage/pages/faq/faq.module').then((m) => m.FaqModule),
      },
      {
        path: 'cli',
        loadChildren: () =>
          import('./homepage/pages/cli/cli.module').then((m) => m.CliModule),
      },

    ],
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // enableTracing: !environment.production,
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy'
    }),
  ],
  providers: [RedirectGuard],
  exports: [RouterModule],
})
export class AppRoutingModule { }
