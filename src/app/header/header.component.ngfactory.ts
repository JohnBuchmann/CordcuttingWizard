/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as i0 from './header.component.css.shim.ngstyle';
import * as i1 from '@angular/core';
import * as i2 from '@angular/router';
import * as i3 from '@angular/common';
import * as i4 from './header.component';
import * as i5 from '../services/auth.service';
const styles_HeaderComponent:any[] = [i0.styles];
export const RenderType_HeaderComponent:i1.RendererType2 = i1.ɵcrt({encapsulation:0,
    styles:styles_HeaderComponent,data:{}});
function View_HeaderComponent_1(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),3,'a',[['class',
      'nav-link']],[[1,'target',0],[8,'href',4]],[[(null as any),'click']],(_v,en,
      $event) => {
    var ad:boolean = true;
    if (('click' === en)) {
      const pd_0:any = ((<any>i1.ɵnov(_v,1).onClick($event.button,$event.ctrlKey,$event.metaKey,
          $event.shiftKey)) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),i1.ɵdid(671744,(null as any),0,i2.RouterLinkWithHref,
      [i2.Router,i2.ActivatedRoute,i3.LocationStrategy],{routerLink:[0,'routerLink']},
      (null as any)),i1.ɵpad(1),(_l()(),i1.ɵted((null as any),['Manage Channels']))],
      (_ck,_v) => {
        const currVal_2:any = _ck(_v,2,0,'/manager');
        _ck(_v,1,0,currVal_2);
      },(_ck,_v) => {
        const currVal_0:any = i1.ɵnov(_v,1).target;
        const currVal_1:any = i1.ɵnov(_v,1).href;
        _ck(_v,0,0,currVal_0,currVal_1);
      });
}
function View_HeaderComponent_2(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),3,'a',[['class',
      'nav-link']],[[1,'target',0],[8,'href',4]],[[(null as any),'click']],(_v,en,
      $event) => {
    var ad:boolean = true;
    if (('click' === en)) {
      const pd_0:any = ((<any>i1.ɵnov(_v,1).onClick($event.button,$event.ctrlKey,$event.metaKey,
          $event.shiftKey)) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),i1.ɵdid(671744,(null as any),0,i2.RouterLinkWithHref,
      [i2.Router,i2.ActivatedRoute,i3.LocationStrategy],{routerLink:[0,'routerLink']},
      (null as any)),i1.ɵpad(1),(_l()(),i1.ɵted((null as any),['Login']))],(_ck,_v) => {
    const currVal_2:any = _ck(_v,2,0,'/login');
    _ck(_v,1,0,currVal_2);
  },(_ck,_v) => {
    const currVal_0:any = i1.ɵnov(_v,1).target;
    const currVal_1:any = i1.ɵnov(_v,1).href;
    _ck(_v,0,0,currVal_0,currVal_1);
  });
}
function View_HeaderComponent_3(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'a',[['class',
      'nav-link']],(null as any),[[(null as any),'click']],(_v,en,$event) => {
    var ad:boolean = true;
    var _co:any = _v.component;
    if (('click' === en)) {
      const pd_0:any = ((<any>_co.logOut()) !== false);
      ad = (pd_0 && ad);
    }
    return ad;
  },(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['Logout']))],(null as any),
      (null as any));
}
export function View_HeaderComponent_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),42,'nav',[['class',
      'navbar navbar-toggleable-xl']],(null as any),(null as any),(null as any),(null as any),
      (null as any))),(_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),i1.ɵeld(0,
      (null as any),(null as any),39,'div',[['class','container']],(null as any),(null as any),
      (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n        '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),3,'button',[['aria-controls','navbarText'],
          ['aria-expanded','false'],['aria-label','Toggle navigation'],['class','navbar-toggler navbar-toggler-right'],
          ['data-target','#navbarText'],['data-toggle','collapse'],['type','button']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n            '])),(_l()(),i1.ɵeld(0,(null as any),
          (null as any),0,'span',[['class','navbar-toggler-icon']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n          '])),(_l()(),i1.ɵted((null as any),['\n          '])),(_l()(),
          i1.ɵeld(0,(null as any),(null as any),5,'a',[['class','navbar-brand']],[[1,
              'target',0],[8,'href',4]],[[(null as any),'click']],(_v,en,$event) => {
            var ad:boolean = true;
            if (('click' === en)) {
              const pd_0:any = ((<any>i1.ɵnov(_v,10).onClick($event.button,$event.ctrlKey,
                  $event.metaKey,$event.shiftKey)) !== false);
              ad = (pd_0 && ad);
            }
            return ad;
          },(null as any),(null as any))),i1.ɵdid(671744,(null as any),0,i2.RouterLinkWithHref,
          [i2.Router,i2.ActivatedRoute,i3.LocationStrategy],{routerLink:[0,'routerLink']},
          (null as any)),i1.ɵpad(1),(_l()(),i1.ɵted((null as any),['\n              '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),0,'img',[['alt',''],['height',
          '30'],['src','assets/sitelogo.png'],['width','30']],(null as any),(null as any),
          (null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n          '])),(_l()(),i1.ɵted((null as any),['\n          '])),(_l()(),
          i1.ɵeld(0,(null as any),(null as any),24,'div',[['class','collapse navbar-collapse'],
              ['id','navbarText']],(null as any),(null as any),(null as any),(null as any),
              (null as any))),(_l()(),i1.ɵted((null as any),['\n            '])),(_l()(),
          i1.ɵeld(0,(null as any),(null as any),0,'ul',[['class','mr-auto']],(null as any),
              (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n                '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),19,
          'ul',[['class','nav']],(null as any),(null as any),(null as any),(null as any),
          (null as any))),(_l()(),i1.ɵted((null as any),['\n                    '])),
      (_l()(),i1.ɵeld(0,(null as any),(null as any),4,'li',[['class','nav-item']],
          (null as any),(null as any),(null as any),(null as any),(null as any))),
      (_l()(),i1.ɵted((null as any),['\n                      '])),(_l()(),i1.ɵand(16777216,
          (null as any),(null as any),1,(null as any),View_HeaderComponent_1)),i1.ɵdid(16384,
          (null as any),0,i3.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},
          (null as any)),(_l()(),i1.ɵted((null as any),['\n                    '])),
      (_l()(),i1.ɵted((null as any),['\n                    '])),(_l()(),i1.ɵeld(0,
          (null as any),(null as any),4,'li',[['class','nav-item']],(null as any),
          (null as any),(null as any),(null as any),(null as any))),(_l()(),i1.ɵted((null as any),
          ['\n                      '])),(_l()(),i1.ɵand(16777216,(null as any),(null as any),
          1,(null as any),View_HeaderComponent_2)),i1.ɵdid(16384,(null as any),0,i3.NgIf,
          [i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,'ngIf']},(null as any)),(_l()(),
          i1.ɵted((null as any),['\n                    '])),(_l()(),i1.ɵted((null as any),
          ['\n                    '])),(_l()(),i1.ɵeld(0,(null as any),(null as any),
          4,'li',[['class','nav-item']],(null as any),(null as any),(null as any),
          (null as any),(null as any))),(_l()(),i1.ɵted((null as any),['\n                        '])),
      (_l()(),i1.ɵand(16777216,(null as any),(null as any),1,(null as any),View_HeaderComponent_3)),
      i1.ɵdid(16384,(null as any),0,i3.NgIf,[i1.ViewContainerRef,i1.TemplateRef],{ngIf:[0,
          'ngIf']},(null as any)),(_l()(),i1.ɵted((null as any),['\n                      '])),
      (_l()(),i1.ɵted((null as any),['\n                '])),(_l()(),i1.ɵted((null as any),
          ['\n\n          '])),(_l()(),i1.ɵted((null as any),['\n    '])),(_l()(),
          i1.ɵted((null as any),['\n  '])),(_l()(),i1.ɵted((null as any),['\n']))],
      (_ck,_v) => {
        var _co:i4.HeaderComponent = _v.component;
        const currVal_2:any = _ck(_v,11,0,'/');
        _ck(_v,10,0,currVal_2);
        const currVal_3:any = _co.isLoggedIn;
        _ck(_v,25,0,currVal_3);
        const currVal_4:boolean = !_co.isLoggedIn;
        _ck(_v,31,0,currVal_4);
        const currVal_5:any = _co.isLoggedIn;
        _ck(_v,37,0,currVal_5);
      },(_ck,_v) => {
        const currVal_0:any = i1.ɵnov(_v,10).target;
        const currVal_1:any = i1.ɵnov(_v,10).href;
        _ck(_v,9,0,currVal_0,currVal_1);
      });
}
export function View_HeaderComponent_Host_0(_l:any):i1.ɵViewDefinition {
  return i1.ɵvid(0,[(_l()(),i1.ɵeld(0,(null as any),(null as any),1,'app-header',([] as any[]),
      (null as any),(null as any),(null as any),View_HeaderComponent_0,RenderType_HeaderComponent)),
      i1.ɵdid(114688,(null as any),0,i4.HeaderComponent,[i5.AuthService],(null as any),
          (null as any))],(_ck,_v) => {
    _ck(_v,1,0);
  },(null as any));
}
export const HeaderComponentNgFactory:i1.ComponentFactory<i4.HeaderComponent> = i1.ɵccf('app-header',
    i4.HeaderComponent,View_HeaderComponent_Host_0,{},{},([] as any[]));
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovc2l0ZXMvQ2xvdWRUVjMvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi9zaXRlcy9DbG91ZFRWMy9zcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnRzIiwibmc6Ly8vQzovc2l0ZXMvQ2xvdWRUVjMvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5odG1sIiwibmc6Ly8vQzovc2l0ZXMvQ2xvdWRUVjMvc3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC50cy5IZWFkZXJDb21wb25lbnRfSG9zdC5odG1sIl0sInNvdXJjZXNDb250ZW50IjpbIiAiLCI8bmF2IGNsYXNzPVwibmF2YmFyIG5hdmJhci10b2dnbGVhYmxlLXhsXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXIgbmF2YmFyLXRvZ2dsZXItcmlnaHRcIiB0eXBlPVwiYnV0dG9uXCIgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiIGRhdGEtdGFyZ2V0PVwiI25hdmJhclRleHRcIiBhcmlhLWNvbnRyb2xzPVwibmF2YmFyVGV4dFwiIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxhIGNsYXNzPVwibmF2YmFyLWJyYW5kXCIgW3JvdXRlckxpbmtdPVwiWycvJ11cIj5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJhc3NldHMvc2l0ZWxvZ28ucG5nXCIgd2lkdGg9XCIzMFwiIGhlaWdodD1cIjMwXCIgYWx0PVwiXCI+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclRleHRcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cIm1yLWF1dG9cIj48L3VsPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdlwiPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxhICpuZ0lmPVwiaXNMb2dnZWRJblwiIGNsYXNzPVwibmF2LWxpbmtcIiBbcm91dGVyTGlua109XCJbJy9tYW5hZ2VyJ11cIj5NYW5hZ2UgQ2hhbm5lbHM8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGEgKm5nSWY9XCIhaXNMb2dnZWRJblwiIGNsYXNzPVwibmF2LWxpbmtcIiBbcm91dGVyTGlua109XCJbJy9sb2dpbiddXCI+TG9naW48L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSAoY2xpY2spPVwibG9nT3V0KClcIiAqbmdJZj1cImlzTG9nZ2VkSW5cIiBjbGFzcz1cIm5hdi1saW5rXCI+TG9nb3V0PC9hPlxuICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L25hdj5cbiIsIjxhcHAtaGVhZGVyPjwvYXBwLWhlYWRlcj4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7b0JDWXNCO01BQUE7WUFBQTtJQUFBO0lBQUE7TUFBQTtVQUFBO01BQUE7SUFBQTtJQUFBO0VBQUEsdUNBQUE7TUFBQTtNQUFBLHNCQUF1QyxJQUE0Qjs7UUFBNUI7UUFBdkMsV0FBdUMsU0FBdkM7O1FBQUE7UUFBQTtRQUFBLFdBQUEsbUJBQUE7Ozs7b0JBR0E7TUFBQTtZQUFBO0lBQUE7SUFBQTtNQUFBO1VBQUE7TUFBQTtJQUFBO0lBQUE7RUFBQSx1Q0FBQTtNQUFBO01BQUEsc0JBQXdDLElBQTBCO0lBQTFCO0lBQXhDLFdBQXdDLFNBQXhDOztJQUFBO0lBQUE7SUFBQSxXQUFBLG1CQUFBOzs7O29CQUdFO01BQUE7SUFBQTtJQUFBO0lBQUc7TUFBQTtNQUFBO0lBQUE7SUFBSDtFQUFBLGdDQUEwRDs7OztvQkFsQmxGO01BQUE7TUFBQSxnQkFBeUMsMkNBQ3JDO01BQUE7TUFBQSw0Q0FBdUI7TUFDbkI7VUFBQTtVQUFBO1VBQUE7TUFBbU0sbURBQy9MO1VBQUE7VUFBQSw0Q0FBeUM7VUFBQSxtQkFDbEMsaURBQ1Q7aUJBQUE7Y0FBQTtZQUFBO1lBQUE7Y0FBQTtrQkFBQTtjQUFBO1lBQUE7WUFBQTtVQUFBLHVDQUFBO1VBQUE7VUFBQSxzQkFBd0IsSUFBcUI7TUFDekM7VUFBQTtVQUFBLDRDQUE2RDtVQUFBLG1CQUM3RCxpREFDSjtpQkFBQTtjQUFBO2NBQUEsZ0JBQXNELG1EQUNwRDtpQkFBQTtjQUFBLDBEQUF5QjtVQUFBLHlCQUNyQjtVQUFBO1VBQUEsZ0JBQWdCO01BQ1o7VUFBQTtNQUFxQiw2REFDbkI7VUFBQSw0RUFBQTtVQUFBO1VBQUEsZUFBc0Y7TUFDbkYsMkRBQ0w7VUFBQTtVQUFBLDBEQUFxQjtVQUFBLCtCQUNuQjtVQUFBLGdEQUFBO1VBQUEsc0VBQTJFO2lCQUFBLDRDQUN4RTtVQUFBLDZCQUNMO1VBQUE7VUFBQSw4QkFBcUI7TUFDakI7YUFBQTtVQUFBLHdCQUFvRTtNQUNqRSx1REFDTjtVQUFBLHFCQUVMLDJDQUNOO2lCQUFBLDBCQUNGOzs7UUFuQjBCO1FBQXhCLFlBQXdCLFNBQXhCO1FBT2U7UUFBSCxZQUFHLFNBQUg7UUFHRztRQUFILFlBQUcsU0FBSDtRQUd3QjtRQUF0QixZQUFzQixTQUF0Qjs7UUFiZDtRQUFBO1FBQUEsV0FBQSxtQkFBQTs7OztvQkNMVjtNQUFBO2FBQUE7VUFBQTtJQUFBOzs7OyJ9