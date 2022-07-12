import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then( m => m.MainPageModule)
  },
  {
    path: 'monthly-view',
    loadChildren: () => import('./monthly-view/monthly-view.module').then( m => m.MonthlyViewPageModule)
  },
  {
    path: 'alerts-list',
    loadChildren: () => import('./alerts-list/alerts-list.module').then( m => m.AlertsListPageModule)
  },
  {
    path: 'find',
    loadChildren: () => import('./find/find.module').then( m => m.FindPageModule)
  },
  {
    path: 'add-new-task',
    loadChildren: () => import('./add-new-task/add-new-task.module').then( m => m.AddNewTaskPageModule)
  },
  {
    path: 'add-friends-to-task',
    loadChildren: () => import('./add-friends-to-task/add-friends-to-task.module').then( m => m.AddFriendsToTaskPageModule)
  },
  {
    path: 'view-task',
    loadChildren: () => import('./view-task/view-task.module').then( m => m.ViewTaskPageModule)
  },
  {
    path: 'task-list',
    loadChildren: () => import('./task-list/task-list.module').then( m => m.TaskListPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
