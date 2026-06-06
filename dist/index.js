"use strict";var c=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var f=c(function(K,x){"use strict";var d=require("@stdlib/ndarray-base-assert-is-row-major"),E=require("@stdlib/blas-ext-base-sfill").ndarray,b=require("@stdlib/blas-base-scopy").ndarray;function V(a,r,s,o,u,e,v,q){var t,m,i,n,l;if(a<=0)return u;if(t=o,i=q,d([e,v]))for(n=0;n<a;n++){for(m=o,l=0;l<a;l++)u[i]=r[t],u[i+v]=r[m],m+=s,i+=e;t+=s}else{for(n=0;n<a;n++)E(a,r[t],u,e,i),t+=s,i+=a*e;for(i=q+v,n=0;n<a;n++)b(a,r,s,o,u,e,i),i+=a*e}return u}x.exports=V});var j=c(function(P,h){"use strict";var M=require("@stdlib/blas-base-assert-is-layout"),_=require("@stdlib/ndarray-base-assert-is-column-major-string"),C=require("@stdlib/strided-base-stride2offset"),F=require("@stdlib/math-base-special-fast-max"),g=require("@stdlib/string-format"),T=f();function k(a,r,s,o,u,e){var v,q;if(!M(a))throw new TypeError(g("invalid argument. First argument must be a valid order. Value: `%s`.",a));if(_(a)){if(e<F(1,r*r))throw new RangeError(g("invalid argument. Sixth argument must be greater than or equal to max(1,%d). Value: `%d`.",r*r,e));v=1,q=e}else{if(e<2)throw new RangeError(g("invalid argument. Sixth argument must be greater than or equal to max(1,%d). Value: `%d`.",2,e));v=e,q=1}return T(r,s,o,C(r,o),u,v,q,0)}h.exports=k});var S=c(function(Q,w){"use strict";var z=require("@stdlib/utils-define-nonenumerable-read-only-property"),p=j(),A=f();z(p,"ndarray",A);w.exports=p});var B=require("path").join,G=require("@stdlib/utils-try-require"),H=require("@stdlib/assert-is-error"),I=S(),y,R=G(B(__dirname,"./native.js"));H(R)?y=I:y=R;module.exports=y;
/**
* @license Apache-2.0
*
* Copyright (c) 2026 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
