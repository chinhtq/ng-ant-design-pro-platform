import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamplesRoutingModule } from './examples-routing.module';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ListSearchComponent } from './list/list-search/list-search.component';
import { BasicListComponent } from './list/basic-list/basic-list.component';
import { ChartPipeComponent } from './chart/chart-pipe/chart-pipe.component';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    ExamplesRoutingModule
  ],
  declarations: [ListSearchComponent, BasicListComponent, ChartPipeComponent]
})
export class ExamplesModule { }