import {Component, ViewEncapsulation} from 'angular2/core';
import {
  RouteConfig,
  ROUTER_DIRECTIVES
} from 'angular2/router';

import {HomeCmp} from '../../home/components/home';
import {AboutCmp} from '../../about/components/about';
import {NameList} from '../../shared/services/name_list';
import {D3Dash} from '../../dashboard/components-d3/d3dash';
import {HgDash} from '../../dashboard/components-highcharts/hgdash';

@Component({
  selector: 'app',
  viewProviders: [NameList],
  templateUrl: './app/components/app.html',
  styleUrls: ['./app/components/app.css'],
  encapsulation: ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  { path: '/', component: HomeCmp, as: 'Home' },
  { path: '/about', component: AboutCmp, as: 'About' },
  { path: '/d3dash', component: D3Dash, as: 'D3Dash' },
  { path: '/hgdash', component: HgDash, as: 'HgDash'}
])
export class AppCmp {}
