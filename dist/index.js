"use strict";var c=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(u){throw r=0,u}}};var f=c(function(K,x){"use strict";var d=require("@stdlib/ndarray-base-assert-is-row-major"),E=require("@stdlib/blas-ext-base-sfill").ndarray,b=require("@stdlib/blas-base-scopy").ndarray;function V(a,r,u,o,v,e,s,q){var t,m,i,n,l;if(a<=0)return v;if(t=o,i=q,d([e,s]))for(n=0;n<a;n++){for(m=o,l=0;l<a;l++)v[i]=r[t],v[i+s]=r[m],m+=u,i+=e;t+=u}else{for(n=0;n<a;n++)E(a,r[t],v,e,i),t+=u,i+=a*e;for(i=q+s,n=0;n<a;n++)b(a,r,u,o,v,e,i),i+=a*e}return v}x.exports=V});var j=c(function(P,h){"use strict";var M=require("@stdlib/blas-base-assert-is-layout"),_=require("@stdlib/ndarray-base-assert-is-column-major-string"),C=require("@stdlib/strided-base-stride2offset"),F=require("@stdlib/math-base-special-fast-max"),g=require("@stdlib/string-format"),T=f();function k(a,r,u,o,v,e){var s,q;if(!M(a))throw new TypeError(g("invalid argument. First argument must be a valid order. Value: `%s`.",a));if(_(a)){if(e<F(1,r*r))throw new RangeError(g("invalid argument. Sixth argument must be greater than or equal to max(1,%d). Value: `%d`.",r*r,e));s=1,q=e}else{if(e<2)throw new RangeError(g("invalid argument. Sixth argument must be greater than or equal to max(1,%d). Value: `%d`.",2,e));s=e,q=1}return T(r,u,o,C(r,o),v,s,q,0)}h.exports=k});var S=c(function(Q,w){"use strict";var z=require("@stdlib/utils-define-nonenumerable-read-only-property"),p=j(),A=f();z(p,"ndarray",A);w.exports=p});var B=require("path").join,G=require("@stdlib/utils-try-require"),H=require("@stdlib/assert-is-error"),I=S(),y,R=G(B(__dirname,"./native.js"));H(R)?y=I:y=R;module.exports=y;
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
