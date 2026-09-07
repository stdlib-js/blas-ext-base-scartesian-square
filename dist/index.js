"use strict";var c=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(v){throw r=0,v}}};var f=c(function(K,x){"use strict";var R=require("@stdlib/ndarray-base-assert-is-row-major"),E=require("@stdlib/blas-ext-base-sfill").ndarray,b=require("@stdlib/blas-base-scopy").ndarray;function V(a,r,v,q,s,e,o,t){var i,l,n,u,m;if(a<=0)return s;if(i=q,n=t,R([e,o]))for(u=0;u<a;u++){for(l=q,m=0;m<a;m++)s[n]=r[i],s[n+o]=r[l],l+=v,n+=e;i+=v}else{for(u=0;u<a;u++)E(a,r[i],s,e,n),i+=v,n+=a*e;for(n=t+o,u=0;u<a;u++)b(a,r,v,q,s,e,n),n+=a*e}return s}x.exports=V});var j=c(function(P,h){"use strict";var M=require("@stdlib/blas-base-layout-resolve-str"),_=require("@stdlib/ndarray-base-assert-is-column-major-string"),C=require("@stdlib/strided-base-stride2offset"),F=require("@stdlib/math-base-special-fast-max"),g=require("@stdlib/string-format"),T=f();function k(a,r,v,q,s,e){var o,t,i;if(i=M(a),i===null)throw new TypeError(g("invalid argument. First argument must be a valid order. Value: `%s`.",a));if(_(i)){if(e<F(1,r*r))throw new RangeError(g("invalid argument. Sixth argument must be greater than or equal to max(1,%d). Value: `%d`.",r*r,e));o=1,t=e}else{if(e<2)throw new RangeError(g("invalid argument. Sixth argument must be greater than or equal to max(1,%d). Value: `%d`.",2,e));o=e,t=1}return T(r,v,q,C(r,q),s,o,t,0)}h.exports=k});var S=c(function(Q,w){"use strict";var z=require("@stdlib/utils-define-nonenumerable-read-only-property"),p=j(),A=f();z(p,"ndarray",A);w.exports=p});var B=require("path").join,G=require("@stdlib/utils-try-require"),H=require("@stdlib/assert-is-error"),I=S(),y,d=G(B(__dirname,"./native.js"));H(d)?y=I:y=d;module.exports=y;
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
