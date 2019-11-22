(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{C2cN:function(l,n,u){"use strict";u.r(n);var r=u("8Y7J"),o=u("s7LF");class t{constructor(l,n,u){this.fb=l,this.router=n,this.authService=u,this.formErrors={email:"",password:""},this.validationMessages={email:{required:"Please enter your email",email:"please enter your vaild email"},password:{required:"please enter your password",minlength:"password should be six chars long"}}}ngOnInit(){this.buildForm()}buildForm(){this.loginForm=this.fb.group({email:["",[o.o.required,o.o.email]],password:["",[o.o.required,o.o.minLength(6)]]}),this.loginForm.valueChanges.subscribe(l=>this.onValueChanged(l)),this.onValueChanged()}onValueChanged(l){if(this.serverError="",!this.loginForm)return;const n=this.loginForm;for(const u in this.formErrors)if(Object.prototype.hasOwnProperty.call(this.formErrors,u)){this.formErrors[u]="";const l=n.get(u);if(l&&l.dirty&&!l.valid){const n=this.validationMessages[u];for(const r in l.errors)Object.prototype.hasOwnProperty.call(l.errors,r)&&(this.formErrors[u]+=n[r]+" ")}}}onSubmit(){this.serverError="",this.authService.login(this.loginForm.value).then(l=>{this.router.navigateByUrl("task")}).catch(l=>{this.serverError=l.error?l.error.message:"Server error - failed to log in"})}}class e{}var i=u("pMnS"),s=u("SVse"),a=u("iInd"),b=u("IYfF"),c=r.ob({encapsulation:0,styles:[[".login-component[_ngcontent-%COMP%]   .ng-valid.required[_ngcontent-%COMP%], .login-component[_ngcontent-%COMP%]   .ng-valid[required][_ngcontent-%COMP%]{border-left:5px solid #42a948}.login-component[_ngcontent-%COMP%]   .ng-invalid[_ngcontent-%COMP%]:not(form){border-left:5px solid #a94442}.login-component[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]{width:50%;margin:30px auto;box-shadow:1px 1px 1px 1px #ccc;padding:20px}.login-component[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-top:0}.login-component[_ngcontent-%COMP%]   .login-form[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]{float:right}"]],data:{}});function g(l){return r.Ib(0,[(l()(),r.qb(0,0,null,null,1,"div",[["class","server-error"]],null,null,null,null,null)),(l()(),r.Gb(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.component.formErrors.email)}))}function d(l){return r.Ib(0,[(l()(),r.qb(0,0,null,null,1,"div",[["class","server-error"]],null,null,null,null,null)),(l()(),r.Gb(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.component.formErrors.password)}))}function p(l){return r.Ib(0,[(l()(),r.qb(0,0,null,null,1,"div",[["class","server-error"]],null,null,null,null,null)),(l()(),r.Gb(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.component.serverError)}))}function m(l){return r.Ib(0,[(l()(),r.qb(0,0,null,null,44,"div",[["class","login-component"]],null,null,null,null,null)),(l()(),r.qb(1,0,null,null,43,"div",[["class","container"]],null,null,null,null,null)),(l()(),r.qb(2,0,null,null,42,"div",[["class","row justify-content-start login-form"]],null,null,null,null,null)),(l()(),r.qb(3,0,null,null,1,"h1",[["class","text-center title"]],null,null,null,null,null)),(l()(),r.Gb(-1,null,["Login"])),(l()(),r.qb(5,0,null,null,34,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var o=!0,t=l.component;return"submit"===n&&(o=!1!==r.Ab(l,7).onSubmit(u)&&o),"reset"===n&&(o=!1!==r.Ab(l,7).onReset()&&o),"ngSubmit"===n&&(o=!1!==t.onSubmit()&&o),o}),null,null)),r.pb(6,16384,null,0,o.s,[],null,null),r.pb(7,540672,null,0,o.f,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),r.Eb(2048,null,o.b,null,[o.f]),r.pb(9,16384,null,0,o.l,[[4,o.b]],null,null),(l()(),r.qb(10,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),r.qb(11,0,null,null,1,"label",[["for","email"]],null,null,null,null,null)),(l()(),r.Gb(-1,null,["Email"])),(l()(),r.qb(13,0,null,null,7,"input",[["class","form-control"],["formControlName","email"],["id","name"],["name","email"],["required",""],["type","text"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0;return"input"===n&&(o=!1!==r.Ab(l,14)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==r.Ab(l,14).onTouched()&&o),"compositionstart"===n&&(o=!1!==r.Ab(l,14)._compositionStart()&&o),"compositionend"===n&&(o=!1!==r.Ab(l,14)._compositionEnd(u.target.value)&&o),o}),null,null)),r.pb(14,16384,null,0,o.c,[r.C,r.k,[2,o.a]],null,null),r.pb(15,16384,null,0,o.n,[],{required:[0,"required"]},null),r.Eb(1024,null,o.h,(function(l){return[l]}),[o.n]),r.Eb(1024,null,o.i,(function(l){return[l]}),[o.c]),r.pb(18,671744,null,0,o.e,[[3,o.b],[6,o.h],[8,null],[6,o.i],[2,o.r]],{name:[0,"name"]},null),r.Eb(2048,null,o.j,null,[o.e]),r.pb(20,16384,null,0,o.k,[[4,o.j]],null,null),(l()(),r.fb(16777216,null,null,1,null,g)),r.pb(22,16384,null,0,s.i,[r.N,r.K],{ngIf:[0,"ngIf"]},null),(l()(),r.qb(23,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),r.qb(24,0,null,null,1,"label",[["for","password"]],null,null,null,null,null)),(l()(),r.Gb(-1,null,["Password"])),(l()(),r.qb(26,0,null,null,7,"input",[["class","form-control"],["formControlName","password"],["name","password"],["required",""],["type","password"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0;return"input"===n&&(o=!1!==r.Ab(l,27)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==r.Ab(l,27).onTouched()&&o),"compositionstart"===n&&(o=!1!==r.Ab(l,27)._compositionStart()&&o),"compositionend"===n&&(o=!1!==r.Ab(l,27)._compositionEnd(u.target.value)&&o),o}),null,null)),r.pb(27,16384,null,0,o.c,[r.C,r.k,[2,o.a]],null,null),r.pb(28,16384,null,0,o.n,[],{required:[0,"required"]},null),r.Eb(1024,null,o.h,(function(l){return[l]}),[o.n]),r.Eb(1024,null,o.i,(function(l){return[l]}),[o.c]),r.pb(31,671744,null,0,o.e,[[3,o.b],[6,o.h],[8,null],[6,o.i],[2,o.r]],{name:[0,"name"]},null),r.Eb(2048,null,o.j,null,[o.e]),r.pb(33,16384,null,0,o.k,[[4,o.j]],null,null),(l()(),r.fb(16777216,null,null,1,null,d)),r.pb(35,16384,null,0,s.i,[r.N,r.K],{ngIf:[0,"ngIf"]},null),(l()(),r.fb(16777216,null,null,1,null,p)),r.pb(37,16384,null,0,s.i,[r.N,r.K],{ngIf:[0,"ngIf"]},null),(l()(),r.qb(38,0,null,null,1,"button",[["class","btn btn-primary"],["type","submit"]],[[8,"disabled",0]],null,null,null,null)),(l()(),r.Gb(-1,null,["Submit"])),(l()(),r.qb(40,0,null,null,4,"div",[],null,null,null,null,null)),(l()(),r.qb(41,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==r.Ab(l,42).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&o),o}),null,null)),r.pb(42,671744,null,0,a.l,[a.k,a.a,s.g],{routerLink:[0,"routerLink"]},null),r.Bb(43,1),(l()(),r.Gb(-1,null,["don't have an account?"]))],(function(l,n){var u=n.component;l(n,7,0,u.loginForm),l(n,15,0,""),l(n,18,0,"email"),l(n,22,0,u.formErrors.email),l(n,28,0,""),l(n,31,0,"password"),l(n,35,0,u.formErrors.password),l(n,37,0,u.serverError);var r=l(n,43,0,"/register");l(n,42,0,r)}),(function(l,n){var u=n.component;l(n,5,0,r.Ab(n,9).ngClassUntouched,r.Ab(n,9).ngClassTouched,r.Ab(n,9).ngClassPristine,r.Ab(n,9).ngClassDirty,r.Ab(n,9).ngClassValid,r.Ab(n,9).ngClassInvalid,r.Ab(n,9).ngClassPending),l(n,13,0,r.Ab(n,15).required?"":null,r.Ab(n,20).ngClassUntouched,r.Ab(n,20).ngClassTouched,r.Ab(n,20).ngClassPristine,r.Ab(n,20).ngClassDirty,r.Ab(n,20).ngClassValid,r.Ab(n,20).ngClassInvalid,r.Ab(n,20).ngClassPending),l(n,26,0,r.Ab(n,28).required?"":null,r.Ab(n,33).ngClassUntouched,r.Ab(n,33).ngClassTouched,r.Ab(n,33).ngClassPristine,r.Ab(n,33).ngClassDirty,r.Ab(n,33).ngClassValid,r.Ab(n,33).ngClassInvalid,r.Ab(n,33).ngClassPending),l(n,38,0,u.loginForm.invalid),l(n,41,0,r.Ab(n,42).target,r.Ab(n,42).href)}))}function f(l){return r.Ib(0,[(l()(),r.qb(0,0,null,null,1,"app-login",[],null,null,null,m,c)),r.pb(1,114688,null,0,t,[o.d,a.k,b.a],null,null)],(function(l,n){l(n,1,0)}),null)}var h=r.mb("app-login",t,f,{},{},[]);u.d(n,"LoginModuleNgFactory",(function(){return v}));var v=r.nb(e,[],(function(l){return r.yb([r.zb(512,r.j,r.Y,[[8,[i.a,h]],[3,r.j],r.w]),r.zb(4608,s.k,s.j,[r.t,[2,s.s]]),r.zb(4608,o.d,o.d,[]),r.zb(4608,o.q,o.q,[]),r.zb(1073742336,s.b,s.b,[]),r.zb(1073742336,o.p,o.p,[]),r.zb(1073742336,o.m,o.m,[]),r.zb(1073742336,o.g,o.g,[]),r.zb(1073742336,a.m,a.m,[[2,a.r],[2,a.k]]),r.zb(1073742336,e,e,[]),r.zb(1024,a.i,(function(){return[[{path:"",component:t}]]}),[])])}))}}]);