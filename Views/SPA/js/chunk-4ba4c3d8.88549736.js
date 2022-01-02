(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ba4c3d8"],{"0829":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Ru})),n.d(e,"b",(function(){return kc})),n.d(e,"c",(function(){return pc})),n.d(e,"d",(function(){return rc})),n.d(e,"e",(function(){return cu})),n.d(e,"f",(function(){return Cc})),n.d(e,"g",(function(){return T})),n.d(e,"h",(function(){return xc})),n.d(e,"i",(function(){return uu})),n.d(e,"j",(function(){return hu})),n.d(e,"k",(function(){return V})),n.d(e,"l",(function(){return Mu})),n.d(e,"m",(function(){return Ga})),n.d(e,"n",(function(){return at})),n.d(e,"o",(function(){return H})),n.d(e,"p",(function(){return Xa})),n.d(e,"q",(function(){return b})),n.d(e,"r",(function(){return Q})),n.d(e,"s",(function(){return g})),n.d(e,"t",(function(){return Wa})),n.d(e,"u",(function(){return Wu})),n.d(e,"v",(function(){return ih})),n.d(e,"w",(function(){return rh})),n.d(e,"x",(function(){return Ic})),n.d(e,"y",(function(){return oc})),n.d(e,"z",(function(){return ac})),n.d(e,"A",(function(){return nc})),n.d(e,"B",(function(){return Hu})),n.d(e,"C",(function(){return eh})),n.d(e,"D",(function(){return _c})),n.d(e,"E",(function(){return cc})),n.d(e,"F",(function(){return wc})),n.d(e,"G",(function(){return vc})),n.d(e,"H",(function(){return Tc})),n.d(e,"I",(function(){return Cu})),n.d(e,"J",(function(){return Du})),n.d(e,"K",(function(){return gc})),n.d(e,"L",(function(){return Ju})),n.d(e,"M",(function(){return ju})),n.d(e,"N",(function(){return Uu})),n.d(e,"O",(function(){return qu})),n.d(e,"P",(function(){return Bu})),n.d(e,"Q",(function(){return Ku})),n.d(e,"R",(function(){return $u})),n.d(e,"S",(function(){return sh})),n.d(e,"T",(function(){return Iu})),n.d(e,"U",(function(){return Eu})),n.d(e,"V",(function(){return Sc})),n.d(e,"W",(function(){return Ac})),n.d(e,"X",(function(){return Qu})),n.d(e,"Y",(function(){return Yu})),n.d(e,"Z",(function(){return vu})),n.d(e,"ab",(function(){return mu})),n.d(e,"bb",(function(){return hc})),n.d(e,"cb",(function(){return uc})),n.d(e,"db",(function(){return th})),n.d(e,"eb",(function(){return nh})),n.d(e,"fb",(function(){return Gu})),n.d(e,"gb",(function(){return f})),n.d(e,"hb",(function(){return du})),n.d(e,"ib",(function(){return Su})),n.d(e,"jb",(function(){return _u})),n.d(e,"kb",(function(){return zu})),n.d(e,"lb",(function(){return Ec})),n.d(e,"mb",(function(){return yu}));var r=n("589b"),i=n("22e5"),s=n("e691"),o=n("1fd5"),a=n("8f6b");const c="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}u.UNAUTHENTICATED=new u(null),u.GOOGLE_CREDENTIALS=new u("google-credentials-uid"),u.FIRST_PARTY=new u("first-party-uid"),u.MOCK_USER=new u("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let h="9.6.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l=new s["b"]("@firebase/firestore");function d(){return l.logLevel}function f(t){l.setLogLevel(t)}function p(t,...e){if(l.logLevel<=s["a"].DEBUG){const n=e.map(y);l.debug(`Firestore (${h}): ${t}`,...n)}}function m(t,...e){if(l.logLevel<=s["a"].ERROR){const n=e.map(y);l.error(`Firestore (${h}): ${t}`,...n)}}function g(t,...e){if(l.logLevel<=s["a"].WARN){const n=e.map(y);l.warn(`Firestore (${h}): ${t}`,...n)}}function y(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(t="Unexpected state"){const e=`FIRESTORE (${h}) INTERNAL ASSERTION FAILED: `+t;throw m(e),new Error(e)}function v(t,e){t||w()}function b(t,e){t||w()}function I(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class T extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+t)}}class A{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(u.UNAUTHENTICATED))}shutdown(){}}class D{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class C{constructor(t){this.t=t,this.currentUser=u.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new _;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _,t.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _)}},0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(v("string"==typeof e.accessToken),new S(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return v(null===t||"string"==typeof t),new u(t)}}class k{constructor(t,e,n){this.type="FirstParty",this.user=u.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class N{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new k(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(u.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class x{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class O{constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null}start(t,e){this.o=n=>{t.enqueueRetryable(()=>(t=>(null!=t.error&&p("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: "+t.error.message),e(t.token)))(n))};const n=t=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit(t=>n(t)),setTimeout(()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?n(t):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(t=>t?(v("string"==typeof t.token),new x(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class R{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.p(t),this.T=t=>e.writeSequenceNumber(t))}p(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.T&&this.T(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */R.I=-1;class P{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=L(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function M(t,e){return t<e?-1:t>e?1:0}function F(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}function j(t){return t+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new T(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new T(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return V.fromMillis(Date.now())}static fromDate(t){return V.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new V(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?M(this.nanoseconds,t.nanoseconds):M(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t){this.timestamp=t}static fromTimestamp(t){return new U(t)}static min(){return new U(new V(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function B(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function K(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t,e,n){void 0===e?e=0:e>t.length&&w(),void 0===n?n=t.length-e:n>t.length-e&&w(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===$.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof $?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class G extends ${construct(t,e,n){return new G(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new G(e)}static emptyPath(){return new G([])}}const z=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class H extends ${construct(t,e,n){return new H(t,e,n)}static isValidIdentifier(t){return z.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),H.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new H(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new T(E.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new T(E.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new T(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new T(E.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new H(e)}static emptyPath(){return new H([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(t){this.fields=t,t.sort(H.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return F(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new Y(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Y(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return M(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Y.EMPTY_BYTE_STRING=new Y("");const J=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function X(t){if(v(!!t),"string"==typeof t){let e=0;const n=J.exec(t);if(v(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Z(t.seconds),nanos:Z(t.nanos)}}function Z(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function tt(t){return"string"==typeof t?Y.fromBase64String(t):Y.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function nt(t){const e=t.mapValue.fields.__previous_value__;return et(e)?nt(e):e}function rt(t){const e=X(t.mapValue.fields.__local_write_time__.timestampValue);return new V(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function it(t){return null==t}function st(t){return 0===t&&1/t==-1/0}function ot(t){return"number"==typeof t&&Number.isInteger(t)&&!st(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(t){this.path=t}static fromPath(t){return new at(G.fromString(t))}static fromName(t){return new at(G.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===G.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return G.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new at(new G(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?et(t)?4:10:w()}function ut(t,e){const n=ct(t);if(n!==ct(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return rt(t).isEqual(rt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=X(t.timestampValue),r=X(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return tt(t.bytesValue).isEqual(tt(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return Z(t.geoPointValue.latitude)===Z(e.geoPointValue.latitude)&&Z(t.geoPointValue.longitude)===Z(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return Z(t.integerValue)===Z(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=Z(t.doubleValue),r=Z(e.doubleValue);return n===r?st(n)===st(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return F(t.arrayValue.values||[],e.arrayValue.values||[],ut);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(q(n)!==q(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!ut(n[i],r[i])))return!1;return!0}(t,e);default:return w()}}function ht(t,e){return void 0!==(t.values||[]).find(t=>ut(t,e))}function lt(t,e){const n=ct(t),r=ct(e);if(n!==r)return M(n,r);switch(n){case 0:return 0;case 1:return M(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=Z(t.integerValue||t.doubleValue),r=Z(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return dt(t.timestampValue,e.timestampValue);case 4:return dt(rt(t),rt(e));case 5:return M(t.stringValue,e.stringValue);case 6:return function(t,e){const n=tt(t),r=tt(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let i=0;i<n.length&&i<r.length;i++){const t=M(n[i],r[i]);if(0!==t)return t}return M(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=M(Z(t.latitude),Z(e.latitude));return 0!==n?n:M(Z(t.longitude),Z(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const t=lt(n[i],r[i]);if(t)return t}return M(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const t=M(r[o],s[o]);if(0!==t)return t;const e=lt(n[r[o]],i[s[o]]);if(0!==e)return e}return M(r.length,s.length)}(t.mapValue,e.mapValue);default:throw w()}}function dt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return M(t,e);const n=X(t),r=X(e),i=M(n.seconds,r.seconds);return 0!==i?i:M(n.nanos,r.nanos)}function ft(t){return pt(t)}function pt(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=X(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?tt(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,at.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=pt(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${pt(t.fields[i])}`;return n+"}"}(t.mapValue):w();var e,n}function mt(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function gt(t){return!!t&&"integerValue"in t}function yt(t){return!!t&&"arrayValue"in t}function wt(t){return!!t&&"nullValue"in t}function vt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function bt(t){return!!t&&"mapValue"in t}function It(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return B(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=It(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=It(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(t){this.value=t}static empty(){return new Et({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!bt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=It(e)}setAll(t){let e=H.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=It(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());bt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ut(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];bt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){B(e,(e,n)=>t[e]=n);for(const r of n)delete t[r]}clone(){return new Et(It(this.value))}}function Tt(t){const e=[];return B(t.fields,(t,n)=>{const r=new H([t]);if(bt(n)){const t=Tt(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new W(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class _t{constructor(t,e,n,r,i){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(t){return new _t(t,0,U.min(),Et.empty(),0)}static newFoundDocument(t,e,n){return new _t(t,1,e,n,0)}static newNoDocument(t,e){return new _t(t,2,e,Et.empty(),0)}static newUnknownDocument(t,e){return new _t(t,3,e,Et.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof _t&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new _t(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.R=null}}function At(t,e=null,n=[],r=[],i=null,s=null,o=null){return new St(t,e,n,r,i,s,o)}function Dt(t){const e=I(t);if(null===e.R){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>Ot(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),it(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Bt(e.startAt)),e.endAt&&(t+="|ub:",t+=Bt(e.endAt)),e.R=t}return e.R}function Ct(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${ft(e.value)}`;var e}).join(", ")}]`),it(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Bt(t.startAt)),t.endAt&&(e+=", endAt: "+Bt(t.endAt)),`Target(${e})`}function kt(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!$t(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!ut(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!zt(t.startAt,e.startAt)&&zt(t.endAt,e.endAt)}function Nt(t){return at.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class xt extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.P(t,e,n):new Rt(t,e,n):"array-contains"===e?new Ft(t,n):"in"===e?new jt(t,n):"not-in"===e?new Vt(t,n):"array-contains-any"===e?new Ut(t,n):new xt(t,e,n)}static P(t,e,n){return"in"===e?new Lt(t,n):new Pt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.v(lt(e,this.value)):null!==e&&ct(this.value)===ct(e)&&this.v(lt(e,this.value))}v(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return w()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function Ot(t){return t.field.canonicalString()+t.op.toString()+ft(t.value)}class Rt extends xt{constructor(t,e,n){super(t,e,n),this.key=at.fromName(n.referenceValue)}matches(t){const e=at.comparator(t.key,this.key);return this.v(e)}}class Lt extends xt{constructor(t,e){super(t,"in",e),this.keys=Mt("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Pt extends xt{constructor(t,e){super(t,"not-in",e),this.keys=Mt("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Mt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>at.fromName(t.referenceValue))}class Ft extends xt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return yt(e)&&ht(e.arrayValue,this.value)}}class jt extends xt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&ht(this.value.arrayValue,e)}}class Vt extends xt{constructor(t,e){super(t,"not-in",e)}matches(t){if(ht(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!ht(this.value.arrayValue,e)}}class Ut extends xt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!yt(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>ht(this.value.arrayValue,t))}}class qt{constructor(t,e){this.position=t,this.before=e}}function Bt(t){return`${t.before?"b":"a"}:${t.position.map(t=>ft(t)).join(",")}`}class Kt{constructor(t,e="asc"){this.field=t,this.dir=e}}function $t(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Gt(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?at.comparator(at.fromName(o.referenceValue),n.key):lt(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function zt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ut(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function Wt(t,e,n,r,i,s,o,a){return new Ht(t,e,n,r,i,s,o,a)}function Qt(t){return new Ht(t)}function Yt(t){return!it(t.limit)&&"F"===t.limitType}function Jt(t){return!it(t.limit)&&"L"===t.limitType}function Xt(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Zt(t){for(const e of t.filters)if(e.V())return e.field;return null}function te(t){return null!==t.collectionGroup}function ee(t){const e=I(t);if(null===e.S){e.S=[];const t=Zt(e),n=Xt(e);if(null!==t&&null===n)t.isKeyField()||e.S.push(new Kt(t)),e.S.push(new Kt(H.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.S.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new Kt(H.keyField(),t))}}}return e.S}function ne(t){const e=I(t);if(!e.D)if("F"===e.limitType)e.D=At(e.path,e.collectionGroup,ee(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of ee(e)){const e="desc"===i.dir?"asc":"desc";t.push(new Kt(i.field,e))}const n=e.endAt?new qt(e.endAt.position,!e.endAt.before):null,r=e.startAt?new qt(e.startAt.position,!e.startAt.before):null;e.D=At(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.D}function re(t,e,n){return new Ht(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function ie(t,e){return kt(ne(t),ne(e))&&t.limitType===e.limitType}function se(t){return`${Dt(ne(t))}|lt:${t.limitType}`}function oe(t){return`Query(target=${Ct(ne(t))}; limitType=${t.limitType})`}function ae(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):at.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!Gt(t.startAt,ee(t),e))&&(!t.endAt||!Gt(t.endAt,ee(t),e))}(t,e)}function ce(t){return(e,n)=>{let r=!1;for(const i of ee(t)){const t=ue(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function ue(t,e,n){const r=t.field.isKeyField()?at.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?lt(r,i):w()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return w()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:st(e)?"-0":e}}function le(t){return{integerValue:""+t}}function de(t,e){return ot(e)?le(e):he(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fe{constructor(){this._=void 0}}function pe(t,e,n){return t instanceof ye?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof we?ve(t,e):t instanceof be?Ie(t,e):function(t,e){const n=ge(t,e),r=Te(n)+Te(t.N);return gt(n)&&gt(t.N)?le(r):he(t.k,r)}(t,e)}function me(t,e,n){return t instanceof we?ve(t,e):t instanceof be?Ie(t,e):n}function ge(t,e){return t instanceof Ee?gt(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class ye extends fe{}class we extends fe{constructor(t){super(),this.elements=t}}function ve(t,e){const n=_e(e);for(const r of t.elements)n.some(t=>ut(t,r))||n.push(r);return{arrayValue:{values:n}}}class be extends fe{constructor(t){super(),this.elements=t}}function Ie(t,e){let n=_e(e);for(const r of t.elements)n=n.filter(t=>!ut(t,r));return{arrayValue:{values:n}}}class Ee extends fe{constructor(t,e){super(),this.k=t,this.N=e}}function Te(t){return Z(t.integerValue||t.doubleValue)}function _e(t){return yt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(t,e){this.field=t,this.transform=e}}function Ae(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof we&&e instanceof we||t instanceof be&&e instanceof be?F(t.elements,e.elements,ut):t instanceof Ee&&e instanceof Ee?ut(t.N,e.N):t instanceof ye&&e instanceof ye}(t.transform,e.transform)}class De{constructor(t,e){this.version=t,this.transformResults=e}}class Ce{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Ce}static exists(t){return new Ce(void 0,t)}static updateTime(t){return new Ce(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function ke(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Ne{}function xe(t,e,n){t instanceof Me?function(t,e,n){const r=t.value.clone(),i=Ve(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Fe?function(t,e,n){if(!ke(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Ve(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(je(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function Oe(t,e,n){t instanceof Me?function(t,e,n){if(!ke(t.precondition,e))return;const r=t.value.clone(),i=Ue(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(Pe(e),r).setHasLocalMutations()}(t,e,n):t instanceof Fe?function(t,e,n){if(!ke(t.precondition,e))return;const r=Ue(t.fieldTransforms,n,e),i=e.data;i.setAll(je(t)),i.setAll(r),e.convertToFoundDocument(Pe(e),i).setHasLocalMutations()}(t,e,n):function(t,e){ke(t.precondition,e)&&e.convertToNoDocument(U.min())}(t,e)}function Re(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=ge(r.transform,t||null);null!=i&&(null==n&&(n=Et.empty()),n.set(r.field,i))}return n||null}function Le(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&F(t,e,(t,e)=>Ae(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function Pe(t){return t.isFoundDocument()?t.version:U.min()}class Me extends Ne{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Fe extends Ne{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function je(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ve(t,e,n){const r=new Map;v(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,me(o,a,n[i]))}return r}function Ue(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,pe(t,s,e))}return r}class qe extends Ne{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Be extends Ne{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var $e,Ge;function ze(t){switch(t){default:return w();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function He(t){if(void 0===t)return m("GRPC error has no .code"),E.UNKNOWN;switch(t){case $e.OK:return E.OK;case $e.CANCELLED:return E.CANCELLED;case $e.UNKNOWN:return E.UNKNOWN;case $e.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case $e.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case $e.INTERNAL:return E.INTERNAL;case $e.UNAVAILABLE:return E.UNAVAILABLE;case $e.UNAUTHENTICATED:return E.UNAUTHENTICATED;case $e.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case $e.NOT_FOUND:return E.NOT_FOUND;case $e.ALREADY_EXISTS:return E.ALREADY_EXISTS;case $e.PERMISSION_DENIED:return E.PERMISSION_DENIED;case $e.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case $e.ABORTED:return E.ABORTED;case $e.OUT_OF_RANGE:return E.OUT_OF_RANGE;case $e.UNIMPLEMENTED:return E.UNIMPLEMENTED;case $e.DATA_LOSS:return E.DATA_LOSS;default:return w()}}(Ge=$e||($e={}))[Ge.OK=0]="OK",Ge[Ge.CANCELLED=1]="CANCELLED",Ge[Ge.UNKNOWN=2]="UNKNOWN",Ge[Ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ge[Ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ge[Ge.NOT_FOUND=5]="NOT_FOUND",Ge[Ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ge[Ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ge[Ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ge[Ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ge[Ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ge[Ge.ABORTED=10]="ABORTED",Ge[Ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ge[Ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ge[Ge.INTERNAL=13]="INTERNAL",Ge[Ge.UNAVAILABLE=14]="UNAVAILABLE",Ge[Ge.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class We{constructor(t,e){this.comparator=t,this.root=e||Ye.EMPTY}insert(t,e){return new We(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Ye.BLACK,null,null))}remove(t){return new We(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ye.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Qe(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Qe(this.root,t,this.comparator,!1)}getReverseIterator(){return new Qe(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Qe(this.root,t,this.comparator,!0)}}class Qe{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ye{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:Ye.RED,this.left=null!=r?r:Ye.EMPTY,this.right=null!=i?i:Ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new Ye(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ye.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return Ye.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw w();if(this.right.isRed())throw w();const t=this.left.check();if(t!==this.right.check())throw w();return t+(this.isRed()?0:1)}}Ye.EMPTY=null,Ye.RED=!0,Ye.BLACK=!1,Ye.EMPTY=new class{constructor(){this.size=0}get key(){throw w()}get value(){throw w()}get color(){throw w()}get left(){throw w()}get right(){throw w()}copy(t,e,n,r,i){return this}insert(t,e,n){return new Ye(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je{constructor(t){this.comparator=t,this.data=new We(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Xe(this.data.getIterator())}getIteratorFrom(t){return new Xe(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Je))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Je(this.comparator);return e.data=t,e}}class Xe{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze=new We(at.comparator);function tn(){return Ze}const en=new We(at.comparator);function nn(){return en}const rn=new We(at.comparator);function sn(){return rn}const on=new Je(at.comparator);function an(...t){let e=on;for(const n of t)e=e.add(n);return e}const cn=new Je(M);function un(){return cn}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hn{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,ln.createSynthesizedTargetChangeForCurrentChange(t,e)),new hn(U.min(),n,un(),tn(),an())}}class ln{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new ln(Y.EMPTY_BYTE_STRING,e,an(),an(),an())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(t,e,n,r){this.$=t,this.removedTargetIds=e,this.key=n,this.F=r}}class fn{constructor(t,e){this.targetId=t,this.O=e}}class pn{constructor(t,e,n=Y.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class mn{constructor(){this.M=0,this.L=wn(),this.B=Y.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.M}get j(){return this.q}W(t){t.approximateByteSize()>0&&(this.q=!0,this.B=t)}G(){let t=an(),e=an(),n=an();return this.L.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:w()}}),new ln(this.B,this.U,t,e,n)}H(){this.q=!1,this.L=wn()}J(t,e){this.q=!0,this.L=this.L.insert(t,e)}Y(t){this.q=!0,this.L=this.L.remove(t)}X(){this.M+=1}Z(){this.M-=1}tt(){this.q=!0,this.U=!0}}class gn{constructor(t){this.et=t,this.nt=new Map,this.st=tn(),this.it=yn(),this.rt=new Je(M)}ot(t){for(const e of t.$)t.F&&t.F.isFoundDocument()?this.at(e,t.F):this.ct(e,t.key,t.F);for(const e of t.removedTargetIds)this.ct(e,t.key,t.F)}ut(t){this.forEachTarget(t,e=>{const n=this.ht(e);switch(t.state){case 0:this.lt(e)&&n.W(t.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(t.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(e);break;case 3:this.lt(e)&&(n.tt(),n.W(t.resumeToken));break;case 4:this.lt(e)&&(this.ft(e),n.W(t.resumeToken));break;default:w()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.nt.forEach((t,n)=>{this.lt(n)&&e(n)})}dt(t){const e=t.targetId,n=t.O.count,r=this.wt(e);if(r){const t=r.target;if(Nt(t))if(0===n){const n=new at(t.path);this.ct(e,n,_t.newNoDocument(n,U.min()))}else v(1===n);else this._t(e)!==n&&(this.ft(e),this.rt=this.rt.add(e))}}gt(t){const e=new Map;this.nt.forEach((n,r)=>{const i=this.wt(r);if(i){if(n.current&&Nt(i.target)){const e=new at(i.target.path);null!==this.st.get(e)||this.yt(r,e)||this.ct(r,e,_t.newNoDocument(e,t))}n.j&&(e.set(r,n.G()),n.H())}});let n=an();this.it.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.wt(t);return!e||2===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))});const r=new hn(t,e,this.rt,this.st,n);return this.st=tn(),this.it=yn(),this.rt=new Je(M),r}at(t,e){if(!this.lt(t))return;const n=this.yt(t,e.key)?2:0;this.ht(t).J(e.key,n),this.st=this.st.insert(e.key,e),this.it=this.it.insert(e.key,this.Tt(e.key).add(t))}ct(t,e,n){if(!this.lt(t))return;const r=this.ht(t);this.yt(t,e)?r.J(e,1):r.Y(e),this.it=this.it.insert(e,this.Tt(e).delete(t)),n&&(this.st=this.st.insert(e,n))}removeTarget(t){this.nt.delete(t)}_t(t){const e=this.ht(t).G();return this.et.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}X(t){this.ht(t).X()}ht(t){let e=this.nt.get(t);return e||(e=new mn,this.nt.set(t,e)),e}Tt(t){let e=this.it.get(t);return e||(e=new Je(M),this.it=this.it.insert(t,e)),e}lt(t){const e=null!==this.wt(t);return e||p("WatchChangeAggregator","Detected inactive target",t),e}wt(t){const e=this.nt.get(t);return e&&e.K?null:this.et.Et(t)}ft(t){this.nt.set(t,new mn),this.et.getRemoteKeysForTarget(t).forEach(e=>{this.ct(t,e,null)})}yt(t,e){return this.et.getRemoteKeysForTarget(t).has(e)}}function yn(){return new We(at.comparator)}function wn(){return new We(at.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"};return t})(),bn=(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return t})();class In{constructor(t,e){this.databaseId=t,this.C=e}}function En(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Tn(t,e){return t.C?e.toBase64():e.toUint8Array()}function _n(t,e){return En(t,e.toTimestamp())}function Sn(t){return v(!!t),U.fromTimestamp(function(t){const e=X(t);return new V(e.seconds,e.nanos)}(t))}function An(t,e){return function(t){return new G(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function Dn(t){const e=G.fromString(t);return v(er(e)),e}function Cn(t,e){return An(t.databaseId,e.path)}function kn(t,e){const n=Dn(e);if(n.get(1)!==t.databaseId.projectId)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new T(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new at(Rn(n))}function Nn(t,e){return An(t.databaseId,e)}function xn(t){const e=Dn(t);return 4===e.length?G.emptyPath():Rn(e)}function On(t){return new G(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Rn(t){return v(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function Ln(t,e,n){return{name:Cn(t,e),fields:n.value.mapValue.fields}}function Pn(t,e,n){const r=kn(t,e.name),i=Sn(e.updateTime),s=new Et({mapValue:{fields:e.fields}}),o=_t.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function Mn(t,e){return"found"in e?function(t,e){v(!!e.found),e.found.name,e.found.updateTime;const n=kn(t,e.found.name),r=Sn(e.found.updateTime),i=new Et({mapValue:{fields:e.found.fields}});return _t.newFoundDocument(n,r,i)}(t,e):"missing"in e?function(t,e){v(!!e.missing),v(!!e.readTime);const n=kn(t,e.missing),r=Sn(e.readTime);return _t.newNoDocument(n,r)}(t,e):w()}function Fn(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:w()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.C?(v(void 0===e||"string"==typeof e),Y.fromBase64String(e||"")):(v(void 0===e||e instanceof Uint8Array),Y.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?E.UNKNOWN:He(t.code);return new T(e,t.message||"")}(o);n=new pn(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=kn(t,r.document.name),s=Sn(r.document.updateTime),o=new Et({mapValue:{fields:r.document.fields}}),a=_t.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new dn(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=kn(t,r.document),s=r.readTime?Sn(r.readTime):U.min(),o=_t.newNoDocument(i,s),a=r.removedTargetIds||[];n=new dn([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=kn(t,r.document),s=r.removedTargetIds||[];n=new dn([],s,i,null)}else{if(!("filter"in e))return w();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new Ke(r),s=t.targetId;n=new fn(s,i)}}return n}function jn(t,e){let n;if(e instanceof Me)n={update:Ln(t,e.key,e.value)};else if(e instanceof qe)n={delete:Cn(t,e.key)};else if(e instanceof Fe)n={update:Ln(t,e.key,e.data),updateMask:tr(e.fieldMask)};else{if(!(e instanceof Be))return w();n={verify:Cn(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof ye)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof we)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof be)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ee)return{fieldPath:e.field.canonicalString(),increment:n.N};throw w()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:_n(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:w()}(t,e.precondition)),n}function Vn(t,e){const n=e.currentDocument?function(t){return void 0!==t.updateTime?Ce.updateTime(Sn(t.updateTime)):void 0!==t.exists?Ce.exists(t.exists):Ce.none()}(e.currentDocument):Ce.none(),r=e.updateTransforms?e.updateTransforms.map(e=>function(t,e){let n=null;if("setToServerValue"in e)v("REQUEST_TIME"===e.setToServerValue),n=new ye;else if("appendMissingElements"in e){const t=e.appendMissingElements.values||[];n=new we(t)}else if("removeAllFromArray"in e){const t=e.removeAllFromArray.values||[];n=new be(t)}else"increment"in e?n=new Ee(t,e.increment):w();const r=H.fromServerFormat(e.fieldPath);return new Se(r,n)}(t,e)):[];if(e.update){e.update.name;const i=kn(t,e.update.name),s=new Et({mapValue:{fields:e.update.fields}});if(e.updateMask){const t=function(t){const e=t.fieldPaths||[];return new W(e.map(t=>H.fromServerFormat(t)))}(e.updateMask);return new Fe(i,s,t,n,r)}return new Me(i,s,n,r)}if(e.delete){const r=kn(t,e.delete);return new qe(r,n)}if(e.verify){const r=kn(t,e.verify);return new Be(r,n)}return w()}function Un(t,e){return t&&t.length>0?(v(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?Sn(t.updateTime):Sn(e);return n.isEqual(U.min())&&(n=Sn(e)),new De(n,t.transformResults||[])}(t,e))):[]}function qn(t,e){return{documents:[Nn(t,e.path)]}}function Bn(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Nn(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Nn(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(vt(t.value))return{unaryFilter:{field:Yn(t.field),op:"IS_NAN"}};if(wt(t.value))return{unaryFilter:{field:Yn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(vt(t.value))return{unaryFilter:{field:Yn(t.field),op:"IS_NOT_NAN"}};if(wt(t.value))return{unaryFilter:{field:Yn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yn(t.field),op:Qn(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:Yn(t.field),direction:Wn(t.dir)}}(t))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.C||it(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=zn(e.startAt)),e.endAt&&(n.structuredQuery.endAt=zn(e.endAt)),n}function Kn(t){let e=xn(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){v(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=Gn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new Kt(Jn(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,it(e)?null:e}(n.limit));let c=null;n.startAt&&(c=Hn(n.startAt));let u=null;return n.endAt&&(u=Hn(n.endAt)),Wt(e,i,o,s,a,"F",c,u)}function $n(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return w()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}function Gn(t){return t?void 0!==t.unaryFilter?[Zn(t)]:void 0!==t.fieldFilter?[Xn(t)]:void 0!==t.compositeFilter?t.compositeFilter.filters.map(t=>Gn(t)).reduce((t,e)=>t.concat(e)):w():[]}function zn(t){return{before:t.before,values:t.position}}function Hn(t){const e=!!t.before,n=t.values||[];return new qt(n,e)}function Wn(t){return vn[t]}function Qn(t){return bn[t]}function Yn(t){return{fieldPath:t.canonicalString()}}function Jn(t){return H.fromServerFormat(t.fieldPath)}function Xn(t){return xt.create(Jn(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return w()}}(t.fieldFilter.op),t.fieldFilter.value)}function Zn(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Jn(t.unaryFilter.field);return xt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Jn(t.unaryFilter.field);return xt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Jn(t.unaryFilter.field);return xt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Jn(t.unaryFilter.field);return xt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return w()}}function tr(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function er(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ir(e)),e=rr(t.get(n),e);return ir(e)}function rr(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const e=t.charAt(i);switch(e){case"\0":n+="";break;case"":n+="";break;default:n+=e}}return n}function ir(t){return t+""}function sr(t){const e=t.length;if(v(e>=2),2===e)return v(""===t.charAt(0)&&""===t.charAt(1)),G.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const e=t.indexOf("",s);switch((e<0||e>n)&&w(),t.charAt(e+1)){case"":const n=t.substring(s,e);let o;0===i.length?o=n:(i+=n,o=i,i=""),r.push(o);break;case"":i+=t.substring(s,e),i+="\0";break;case"":i+=t.substring(s,e+1);break;default:w()}s=e+2}return new G(r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(t,e){this.seconds=t,this.nanoseconds=e}}class ar{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}ar.store="owner",ar.key="owner";class cr{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}cr.store="mutationQueues",cr.keyPath="userId";class ur{constructor(t,e,n,r,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}ur.store="mutations",ur.keyPath="batchId",ur.userMutationsIndex="userMutationsIndex",ur.userMutationsKeyPath=["userId","batchId"];class hr{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,nr(e)]}static key(t,e,n){return[t,nr(e),n]}}hr.store="documentMutations",hr.PLACEHOLDER=new hr;class lr{constructor(t,e){this.path=t,this.readTime=e}}class dr{constructor(t,e){this.path=t,this.version=e}}class fr{constructor(t,e,n,r,i,s){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=s}}fr.store="remoteDocuments",fr.readTimeIndex="readTimeIndex",fr.readTimeIndexPath="readTime",fr.collectionReadTimeIndex="collectionReadTimeIndex",fr.collectionReadTimeIndexPath=["parentPath","readTime"];class pr{constructor(t){this.byteSize=t}}pr.store="remoteDocumentGlobal",pr.key="remoteDocumentGlobalKey";class mr{constructor(t,e,n,r,i,s,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=s,this.query=o}}mr.store="targets",mr.keyPath="targetId",mr.queryTargetsIndexName="queryTargetsIndex",mr.queryTargetsKeyPath=["canonicalId","targetId"];class gr{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}gr.store="targetDocuments",gr.keyPath=["targetId","path"],gr.documentTargetsIndex="documentTargetsIndex",gr.documentTargetsKeyPath=["path","targetId"];class yr{constructor(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}yr.key="targetGlobalKey",yr.store="targetGlobal";class wr{constructor(t,e){this.collectionId=t,this.parent=e}}wr.store="collectionParents",wr.keyPath=["collectionId","parent"];class vr{constructor(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}}vr.store="clientMetadata",vr.keyPath="clientId";class br{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}br.store="bundles",br.keyPath="bundleId";class Ir{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}Ir.store="namedQueries",Ir.keyPath="name";const Er=[cr.store,ur.store,hr.store,fr.store,mr.store,ar.store,yr.store,gr.store,vr.store,pr.store,wr.store,br.store,Ir.store],Tr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _r{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&w(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Sr((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof Sr?e:Sr.resolve(e)}catch(t){return Sr.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):Sr.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):Sr.reject(e)}static resolve(t){return new Sr((e,n)=>{e(t)})}static reject(t){return new Sr((e,n)=>{n(t)})}static waitFor(t){return new Sr((e,n)=>{let r=0,i=0,s=!1;t.forEach(t=>{++r,t.next(()=>{++i,s&&i===r&&e()},t=>n(t))}),s=!0,i===r&&e()})}static or(t){let e=Sr.resolve(!1);for(const n of t)e=e.next(t=>t?Sr.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t,e){this.action=t,this.transaction=e,this.aborted=!1,this.It=new _,this.transaction.oncomplete=()=>{this.It.resolve()},this.transaction.onabort=()=>{e.error?this.It.reject(new kr(t,e.error)):this.It.resolve()},this.transaction.onerror=e=>{const n=Lr(e.target.error);this.It.reject(new kr(t,n))}}static open(t,e,n,r){try{return new Ar(e,t.transaction(r,n))}catch(t){throw new kr(e,t)}}get At(){return this.It.promise}abort(t){t&&this.It.reject(t),this.aborted||(p("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(t){const e=this.transaction.objectStore(t);return new xr(e)}}class Dr{constructor(t,e,n){this.name=t,this.version=e,this.Rt=n,12.2===Dr.Pt(Object(o["j"])())&&m("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(t){return p("SimpleDb","Removing database:",t),Or(window.indexedDB.deleteDatabase(t)).toPromise()}static bt(){if(!Object(o["o"])())return!1;if(Dr.vt())return!0;const t=Object(o["j"])(),e=Dr.Pt(t),n=0<e&&e<10,r=Dr.Vt(t),i=0<r&&r<4.5;return!(t.indexOf("MSIE ")>0||t.indexOf("Trident/")>0||t.indexOf("Edge/")>0||n||i)}static vt(){var e;return"undefined"!=typeof t&&"YES"===(null===(e=Object({NODE_ENV:"production",BASE_URL:"/"}))||void 0===e?void 0:e.St)}static Dt(t,e){return t.store(e)}static Pt(t){const e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static Vt(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async Ct(t){return this.db||(p("SimpleDb","Opening database:",this.name),this.db=await new Promise((e,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=t=>{const n=t.target.result;e(n)},r.onblocked=()=>{n(new kr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=e=>{const r=e.target.error;"VersionError"===r.name?n(new T(E.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new T(E.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new kr(t,r))},r.onupgradeneeded=t=>{p("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',t.oldVersion);const e=t.target.result;this.Rt.Nt(e,r.transaction,t.oldVersion,this.version).next(()=>{p("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.kt&&(this.db.onversionchange=t=>this.kt(t)),this.db}xt(t){this.kt=t,this.db&&(this.db.onversionchange=e=>t(e))}async runTransaction(t,e,n,r){const i="readonly"===e;let s=0;for(;;){++s;try{this.db=await this.Ct(t);const e=Ar.open(this.db,t,i?"readonly":"readwrite",n),s=r(e).catch(t=>(e.abort(t),Sr.reject(t))).toPromise();return s.catch(()=>{}),await e.At,s}catch(t){const e="FirebaseError"!==t.name&&s<3;if(p("SimpleDb","Transaction failed with error:",t.message,"Retrying:",e),this.close(),!e)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Cr{constructor(t){this.$t=t,this.Ft=!1,this.Ot=null}get isDone(){return this.Ft}get Mt(){return this.Ot}set cursor(t){this.$t=t}done(){this.Ft=!0}Lt(t){this.Ot=t}delete(){return Or(this.$t.delete())}}class kr extends T{constructor(t,e){super(E.UNAVAILABLE,`IndexedDB transaction '${t}' failed: ${e}`),this.name="IndexedDbTransactionError"}}function Nr(t){return"IndexedDbTransactionError"===t.name}class xr{constructor(t){this.store=t}put(t,e){let n;return void 0!==e?(p("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(p("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Or(n)}add(t){return p("SimpleDb","ADD",this.store.name,t,t),Or(this.store.add(t))}get(t){return Or(this.store.get(t)).next(e=>(void 0===e&&(e=null),p("SimpleDb","GET",this.store.name,t,e),e))}delete(t){return p("SimpleDb","DELETE",this.store.name,t),Or(this.store.delete(t))}count(){return p("SimpleDb","COUNT",this.store.name),Or(this.store.count())}Bt(t,e){const n=this.cursor(this.options(t,e)),r=[];return this.Ut(n,(t,e)=>{r.push(e)}).next(()=>r)}qt(t,e){p("SimpleDb","DELETE ALL",this.store.name);const n=this.options(t,e);n.Kt=!1;const r=this.cursor(n);return this.Ut(r,(t,e,n)=>n.delete())}jt(t,e){let n;e?n=t:(n={},e=t);const r=this.cursor(n);return this.Ut(r,e)}Qt(t){const e=this.cursor({});return new Sr((n,r)=>{e.onerror=t=>{const e=Lr(t.target.error);r(e)},e.onsuccess=e=>{const r=e.target.result;r?t(r.primaryKey,r.value).next(t=>{t?r.continue():n()}):n()}})}Ut(t,e){const n=[];return new Sr((r,i)=>{t.onerror=t=>{i(t.target.error)},t.onsuccess=t=>{const i=t.target.result;if(!i)return void r();const s=new Cr(i),o=e(i.primaryKey,i.value,s);if(o instanceof Sr){const t=o.catch(t=>(s.done(),Sr.reject(t)));n.push(t)}s.isDone?r():null===s.Mt?i.continue():i.continue(s.Mt)}}).next(()=>Sr.waitFor(n))}options(t,e){let n;return void 0!==t&&("string"==typeof t?n=t:e=t),{index:n,range:e}}cursor(t){let e="next";if(t.reverse&&(e="prev"),t.index){const n=this.store.index(t.index);return t.Kt?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)}}function Or(t){return new Sr((e,n)=>{t.onsuccess=t=>{const n=t.target.result;e(n)},t.onerror=t=>{const e=Lr(t.target.error);n(e)}})}let Rr=!1;function Lr(t){const e=Dr.Pt(Object(o["j"])());if(e>=12.2&&e<13){const e="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(e)>=0){const t=new T("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${e}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Rr||(Rr=!0,setTimeout(()=>{throw t},0)),t}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr extends _r{constructor(t,e){super(),this.Wt=t,this.currentSequenceNumber=e}}function Mr(t,e){const n=I(t);return Dr.Dt(n.Wt,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let r=0;r<this.mutations.length;r++){const e=this.mutations[r];e.key.isEqual(t.key)&&xe(e,t,n[r])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&Oe(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&Oe(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(U.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),an())}isEqual(t){return this.batchId===t.batchId&&F(this.mutations,t.mutations,(t,e)=>Le(t,e))&&F(this.baseMutations,t.baseMutations,(t,e)=>Le(t,e))}}class jr{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){v(t.mutations.length===n.length);let r=sn();const i=t.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new jr(t,e,n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(t,e,n,r,i=U.min(),s=U.min(),o=Y.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new Vr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new Vr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur{constructor(t){this.Gt=t}}function qr(t,e){if(e.document)return Pn(t.Gt,e.document,!!e.hasCommittedMutations);if(e.noDocument){const t=at.fromSegments(e.noDocument.path),n=zr(e.noDocument.readTime),r=_t.newNoDocument(t,n);return e.hasCommittedMutations?r.setHasCommittedMutations():r}if(e.unknownDocument){const t=at.fromSegments(e.unknownDocument.path),n=zr(e.unknownDocument.version);return _t.newUnknownDocument(t,n)}return w()}function Br(t,e,n){const r=Kr(n),i=e.key.path.popLast().toArray();if(e.isFoundDocument()){const n=function(t,e){return{name:Cn(t,e.key),fields:e.data.value.mapValue.fields,updateTime:En(t,e.version.toTimestamp())}}(t.Gt,e),s=e.hasCommittedMutations;return new fr(null,null,n,s,r,i)}if(e.isNoDocument()){const t=e.key.path.toArray(),n=Gr(e.version),s=e.hasCommittedMutations;return new fr(null,new lr(t,n),null,s,r,i)}if(e.isUnknownDocument()){const t=e.key.path.toArray(),n=Gr(e.version);return new fr(new dr(t,n),null,null,!0,r,i)}return w()}function Kr(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function $r(t){const e=new V(t[0],t[1]);return U.fromTimestamp(e)}function Gr(t){const e=t.toTimestamp();return new or(e.seconds,e.nanoseconds)}function zr(t){const e=new V(t.seconds,t.nanoseconds);return U.fromTimestamp(e)}function Hr(t,e){const n=(e.baseMutations||[]).map(e=>Vn(t.Gt,e));for(let s=0;s<e.mutations.length-1;++s){const t=e.mutations[s];if(s+1<e.mutations.length&&void 0!==e.mutations[s+1].transform){const n=e.mutations[s+1];t.updateTransforms=n.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(e=>Vn(t.Gt,e)),i=V.fromMillis(e.localWriteTimeMs);return new Fr(e.batchId,i,n,r)}function Wr(t){const e=zr(t.readTime),n=void 0!==t.lastLimboFreeSnapshotVersion?zr(t.lastLimboFreeSnapshotVersion):U.min();let r;var i;return void 0!==t.query.documents?(v(1===(i=t.query).documents.length),r=ne(Qt(xn(i.documents[0])))):r=function(t){return ne(Kn(t))}(t.query),new Vr(r,t.targetId,0,t.lastListenSequenceNumber,e,n,Y.fromBase64String(t.resumeToken))}function Qr(t,e){const n=Gr(e.snapshotVersion),r=Gr(e.lastLimboFreeSnapshotVersion);let i;i=Nt(e.target)?qn(t.Gt,e.target):Bn(t.Gt,e.target);const s=e.resumeToken.toBase64();return new mr(e.targetId,Dt(e.target),n,s,e.sequenceNumber,r,i)}function Yr(t){const e=Kn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?re(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{getBundleMetadata(t,e){return Xr(t).get(e).next(t=>{if(t)return{id:(e=t).bundleId,createTime:zr(e.createTime),version:e.version};var e})}saveBundleMetadata(t,e){return Xr(t).put({bundleId:(n=e).id,createTime:Gr(Sn(n.createTime)),version:n.version});var n}getNamedQuery(t,e){return Zr(t).get(e).next(t=>{if(t)return{name:(e=t).name,query:Yr(e.bundledQuery),readTime:zr(e.readTime)};var e})}saveNamedQuery(t,e){return Zr(t).put(function(t){return{name:t.name,readTime:Gr(Sn(t.readTime)),bundledQuery:t.bundledQuery}}(e))}}function Xr(t){return Mr(t,br.store)}function Zr(t){return Mr(t,Ir.store)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.zt=new ei}addToCollectionParentIndex(t,e){return this.zt.add(e),Sr.resolve()}getCollectionParents(t,e){return Sr.resolve(this.zt.getEntries(e))}}class ei{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Je(G.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Je(G.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.Ht=new ei}addToCollectionParentIndex(t,e){if(!this.Ht.has(e)){const n=e.lastSegment(),r=e.popLast();t.addOnCommittedListener(()=>{this.Ht.add(e)});const i={collectionId:n,parent:nr(r)};return ri(t).put(i)}return Sr.resolve()}getCollectionParents(t,e){const n=[],r=IDBKeyRange.bound([e,""],[j(e),""],!1,!0);return ri(t).Bt(r).next(t=>{for(const r of t){if(r.collectionId!==e)break;n.push(sr(r.parent))}return n})}}function ri(t){return Mr(t,wr.store)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class si{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new si(t,si.DEFAULT_COLLECTION_PERCENTILE,si.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t,e,n){const r=t.store(ur.store),i=t.store(hr.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=r.jt({range:o},(t,e,n)=>(a++,n.delete()));s.push(c.next(()=>{v(1===a)}));const u=[];for(const h of n.mutations){const t=hr.key(e,h.key.path,n.batchId);s.push(i.delete(t)),u.push(h.key)}return Sr.waitFor(s).next(()=>u)}function ai(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw w();e=t.noDocument}return JSON.stringify(e).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */si.DEFAULT_COLLECTION_PERCENTILE=10,si.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,si.DEFAULT=new si(41943040,si.DEFAULT_COLLECTION_PERCENTILE,si.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),si.DISABLED=new si(-1,0,0);class ci{constructor(t,e,n,r){this.userId=t,this.k=e,this.Jt=n,this.referenceDelegate=r,this.Yt={}}static Xt(t,e,n,r){v(""!==t.uid);const i=t.isAuthenticated()?t.uid:"";return new ci(i,e,n,r)}checkEmpty(t){let e=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return hi(t).jt({index:ur.userMutationsIndex,range:n},(t,n,r)=>{e=!1,r.done()}).next(()=>e)}addMutationBatch(t,e,n,r){const i=li(t),s=hi(t);return s.add({}).next(o=>{v("number"==typeof o);const a=new Fr(o,e,n,r),c=function(t,e,n){const r=n.baseMutations.map(e=>jn(t.Gt,e)),i=n.mutations.map(e=>jn(t.Gt,e));return new ur(e,n.batchId,n.localWriteTime.toMillis(),r,i)}(this.k,this.userId,a),u=[];let h=new Je((t,e)=>M(t.canonicalString(),e.canonicalString()));for(const t of r){const e=hr.key(this.userId,t.key.path,o);h=h.add(t.key.path.popLast()),u.push(s.put(c)),u.push(i.put(e,hr.PLACEHOLDER))}return h.forEach(e=>{u.push(this.Jt.addToCollectionParentIndex(t,e))}),t.addOnCommittedListener(()=>{this.Yt[o]=a.keys()}),Sr.waitFor(u).next(()=>a)})}lookupMutationBatch(t,e){return hi(t).get(e).next(t=>t?(v(t.userId===this.userId),Hr(this.k,t)):null)}Zt(t,e){return this.Yt[e]?Sr.resolve(this.Yt[e]):this.lookupMutationBatch(t,e).next(t=>{if(t){const n=t.keys();return this.Yt[e]=n,n}return null})}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=IDBKeyRange.lowerBound([this.userId,n]);let i=null;return hi(t).jt({index:ur.userMutationsIndex,range:r},(t,e,r)=>{e.userId===this.userId&&(v(e.batchId>=n),i=Hr(this.k,e)),r.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(t){const e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return hi(t).jt({index:ur.userMutationsIndex,range:e,reverse:!0},(t,e,r)=>{n=e.batchId,r.done()}).next(()=>n)}getAllMutationBatches(t){const e=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return hi(t).Bt(ur.userMutationsIndex,e).next(t=>t.map(t=>Hr(this.k,t)))}getAllMutationBatchesAffectingDocumentKey(t,e){const n=hr.prefixForPath(this.userId,e.path),r=IDBKeyRange.lowerBound(n),i=[];return li(t).jt({range:r},(n,r,s)=>{const[o,a,c]=n,u=sr(a);if(o===this.userId&&e.path.isEqual(u))return hi(t).get(c).next(t=>{if(!t)throw w();v(t.userId===this.userId),i.push(Hr(this.k,t))});s.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Je(M);const r=[];return e.forEach(e=>{const i=hr.prefixForPath(this.userId,e.path),s=IDBKeyRange.lowerBound(i),o=li(t).jt({range:s},(t,r,i)=>{const[s,o,a]=t,c=sr(o);s===this.userId&&e.path.isEqual(c)?n=n.add(a):i.done()});r.push(o)}),Sr.waitFor(r).next(()=>this.te(t,n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1,i=hr.prefixForPath(this.userId,n),s=IDBKeyRange.lowerBound(i);let o=new Je(M);return li(t).jt({range:s},(t,e,i)=>{const[s,a,c]=t,u=sr(a);s===this.userId&&n.isPrefixOf(u)?u.length===r&&(o=o.add(c)):i.done()}).next(()=>this.te(t,o))}te(t,e){const n=[],r=[];return e.forEach(e=>{r.push(hi(t).get(e).next(t=>{if(null===t)throw w();v(t.userId===this.userId),n.push(Hr(this.k,t))}))}),Sr.waitFor(r).next(()=>n)}removeMutationBatch(t,e){return oi(t.Wt,this.userId,e).next(n=>(t.addOnCommittedListener(()=>{this.ee(e.batchId)}),Sr.forEach(n,e=>this.referenceDelegate.markPotentiallyOrphaned(t,e))))}ee(t){delete this.Yt[t]}performConsistencyCheck(t){return this.checkEmpty(t).next(e=>{if(!e)return Sr.resolve();const n=IDBKeyRange.lowerBound(hr.prefixForUser(this.userId)),r=[];return li(t).jt({range:n},(t,e,n)=>{if(t[0]===this.userId){const e=sr(t[1]);r.push(e)}else n.done()}).next(()=>{v(0===r.length)})})}containsKey(t,e){return ui(t,this.userId,e)}ne(t){return di(t).get(this.userId).next(t=>t||new cr(this.userId,-1,""))}}function ui(t,e,n){const r=hr.prefixForPath(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return li(t).jt({range:s,Kt:!0},(t,n,r)=>{const[s,a,c]=t;s===e&&a===i&&(o=!0),r.done()}).next(()=>o)}function hi(t){return Mr(t,ur.store)}function li(t){return Mr(t,hr.store)}function di(t){return Mr(t,cr.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(t){this.se=t}next(){return this.se+=2,this.se}static ie(){return new fi(0)}static re(){return new fi(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{constructor(t,e){this.referenceDelegate=t,this.k=e}allocateTargetId(t){return this.oe(t).next(e=>{const n=new fi(e.highestTargetId);return e.highestTargetId=n.next(),this.ae(t,e).next(()=>e.highestTargetId)})}getLastRemoteSnapshotVersion(t){return this.oe(t).next(t=>U.fromTimestamp(new V(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(t){return this.oe(t).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(t,e,n){return this.oe(t).next(r=>(r.highestListenSequenceNumber=e,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),e>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=e),this.ae(t,r)))}addTargetData(t,e){return this.ce(t,e).next(()=>this.oe(t).next(n=>(n.targetCount+=1,this.ue(e,n),this.ae(t,n))))}updateTargetData(t,e){return this.ce(t,e)}removeTargetData(t,e){return this.removeMatchingKeysForTargetId(t,e.targetId).next(()=>mi(t).delete(e.targetId)).next(()=>this.oe(t)).next(e=>(v(e.targetCount>0),e.targetCount-=1,this.ae(t,e)))}removeTargets(t,e,n){let r=0;const i=[];return mi(t).jt((s,o)=>{const a=Wr(o);a.sequenceNumber<=e&&null===n.get(a.targetId)&&(r++,i.push(this.removeTargetData(t,a)))}).next(()=>Sr.waitFor(i)).next(()=>r)}forEachTarget(t,e){return mi(t).jt((t,n)=>{const r=Wr(n);e(r)})}oe(t){return gi(t).get(yr.key).next(t=>(v(null!==t),t))}ae(t,e){return gi(t).put(yr.key,e)}ce(t,e){return mi(t).put(Qr(this.k,e))}ue(t,e){let n=!1;return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n}getTargetCount(t){return this.oe(t).next(t=>t.targetCount)}getTargetData(t,e){const n=Dt(e),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let i=null;return mi(t).jt({range:r,index:mr.queryTargetsIndexName},(t,n,r)=>{const s=Wr(n);kt(e,s.target)&&(i=s,r.done())}).next(()=>i)}addMatchingKeys(t,e,n){const r=[],i=yi(t);return e.forEach(e=>{const s=nr(e.path);r.push(i.put(new gr(n,s))),r.push(this.referenceDelegate.addReference(t,n,e))}),Sr.waitFor(r)}removeMatchingKeys(t,e,n){const r=yi(t);return Sr.forEach(e,e=>{const i=nr(e.path);return Sr.waitFor([r.delete([n,i]),this.referenceDelegate.removeReference(t,n,e)])})}removeMatchingKeysForTargetId(t,e){const n=yi(t),r=IDBKeyRange.bound([e],[e+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(t,e){const n=IDBKeyRange.bound([e],[e+1],!1,!0),r=yi(t);let i=an();return r.jt({range:n,Kt:!0},(t,e,n)=>{const r=sr(t[1]),s=new at(r);i=i.add(s)}).next(()=>i)}containsKey(t,e){const n=nr(e.path),r=IDBKeyRange.bound([n],[j(n)],!1,!0);let i=0;return yi(t).jt({index:gr.documentTargetsIndex,Kt:!0,range:r},([t,e],n,r)=>{0!==t&&(i++,r.done())}).next(()=>i>0)}Et(t,e){return mi(t).get(e).next(t=>t?Wr(t):null)}}function mi(t){return Mr(t,mr.store)}function gi(t){return Mr(t,yr.store)}function yi(t){return Mr(t,gr.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wi(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==Tr)throw t;p("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vi([t,e],[n,r]){const i=M(t,n);return 0===i?M(e,r):i}class bi{constructor(t){this.he=t,this.buffer=new Je(vi),this.le=0}fe(){return++this.le}de(t){const e=[t,this.fe()];if(this.buffer.size<this.he)this.buffer=this.buffer.add(e);else{const t=this.buffer.last();vi(e,t)<0&&(this.buffer=this.buffer.delete(t).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Ii{constructor(t,e){this.garbageCollector=t,this.asyncQueue=e,this.we=!1,this._e=null}start(t){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.me(t)}stop(){this._e&&(this._e.cancel(),this._e=null)}get started(){return null!==this._e}me(t){const e=this.we?3e5:6e4;p("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this._e=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this._e=null,this.we=!0;try{await t.collectGarbage(this.garbageCollector)}catch(t){Nr(t)?p("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await wi(t)}await this.me(t)})}}class Ei{constructor(t,e){this.ge=t,this.params=e}calculateTargetCount(t,e){return this.ge.ye(t).next(t=>Math.floor(e/100*t))}nthSequenceNumber(t,e){if(0===e)return Sr.resolve(R.I);const n=new bi(e);return this.ge.forEachTarget(t,t=>n.de(t.sequenceNumber)).next(()=>this.ge.pe(t,t=>n.de(t))).next(()=>n.maxValue)}removeTargets(t,e,n){return this.ge.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.ge.removeOrphanedDocuments(t,e)}collect(t,e){return-1===this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector","Garbage collection skipped; disabled"),Sr.resolve(ii)):this.getCacheSize(t).next(n=>n<this.params.cacheSizeCollectionThreshold?(p("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ii):this.Te(t,e))}getCacheSize(t){return this.ge.getCacheSize(t)}Te(t,e){let n,r,i,o,a,c,u;const h=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next(e=>(e>this.params.maximumSequenceNumbersToCollect?(p("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${e}`),r=this.params.maximumSequenceNumbersToCollect):r=e,o=Date.now(),this.nthSequenceNumber(t,r))).next(r=>(n=r,a=Date.now(),this.removeTargets(t,n,e))).next(e=>(i=e,c=Date.now(),this.removeOrphanedDocuments(t,n))).next(t=>(u=Date.now(),d()<=s["a"].DEBUG&&p("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-h}ms\n\tDetermined least recently used ${r} in `+(a-o)+"ms\n"+`\tRemoved ${i} targets in `+(c-a)+"ms\n"+`\tRemoved ${t} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-h}ms`),Sr.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:t})))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(t,e){this.db=t,this.garbageCollector=function(t,e){return new Ei(t,e)}(this,e)}ye(t){const e=this.Ee(t);return this.db.getTargetCache().getTargetCount(t).next(t=>e.next(e=>t+e))}Ee(t){let e=0;return this.pe(t,t=>{e++}).next(()=>e)}forEachTarget(t,e){return this.db.getTargetCache().forEachTarget(t,e)}pe(t,e){return this.Ie(t,(t,n)=>e(n))}addReference(t,e,n){return _i(t,n)}removeReference(t,e,n){return _i(t,n)}removeTargets(t,e,n){return this.db.getTargetCache().removeTargets(t,e,n)}markPotentiallyOrphaned(t,e){return _i(t,e)}Ae(t,e){return function(t,e){let n=!1;return di(t).Qt(r=>ui(t,r,e).next(t=>(t&&(n=!0),Sr.resolve(!t)))).next(()=>n)}(t,e)}removeOrphanedDocuments(t,e){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Ie(t,(s,o)=>{if(o<=e){const e=this.Ae(t,s).next(e=>{if(!e)return i++,n.getEntry(t,s).next(()=>(n.removeEntry(s),yi(t).delete([0,nr(s.path)])))});r.push(e)}}).next(()=>Sr.waitFor(r)).next(()=>n.apply(t)).next(()=>i)}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(t,n)}updateLimboDocument(t,e){return _i(t,e)}Ie(t,e){const n=yi(t);let r,i=R.I;return n.jt({index:gr.documentTargetsIndex},([t,n],{path:s,sequenceNumber:o})=>{0===t?(i!==R.I&&e(new at(sr(r)),i),i=o,r=s):i=R.I}).next(()=>{i!==R.I&&e(new at(sr(r)),i)})}getCacheSize(t){return this.db.getRemoteDocumentCache().getSize(t)}}function _i(t,e){return yi(t).put(function(t,e){return new gr(0,nr(t.path),e)}(e,t.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,t))return i}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){B(this.inner,(e,n)=>{for(const[r,i]of n)t(r,i)})}isEmpty(){return K(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.changes=new Si(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:U.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:_t.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Sr.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(t,e){this.k=t,this.Jt=e}addEntry(t,e,n){return Ni(t).put(xi(e),n)}removeEntry(t,e){const n=Ni(t),r=xi(e);return n.delete(r)}updateMetadata(t,e){return this.getMetadata(t).next(n=>(n.byteSize+=e,this.Re(t,n)))}getEntry(t,e){return Ni(t).get(xi(e)).next(t=>this.Pe(e,t))}be(t,e){return Ni(t).get(xi(e)).next(t=>({document:this.Pe(e,t),size:ai(t)}))}getEntries(t,e){let n=tn();return this.ve(t,e,(t,e)=>{const r=this.Pe(t,e);n=n.insert(t,r)}).next(()=>n)}Ve(t,e){let n=tn(),r=new We(at.comparator);return this.ve(t,e,(t,e)=>{const i=this.Pe(t,e);n=n.insert(t,i),r=r.insert(t,ai(e))}).next(()=>({documents:n,Se:r}))}ve(t,e,n){if(e.isEmpty())return Sr.resolve();const r=IDBKeyRange.bound(e.first().path.toArray(),e.last().path.toArray()),i=e.getIterator();let s=i.getNext();return Ni(t).jt({range:r},(t,e,r)=>{const o=at.fromSegments(t);for(;s&&at.comparator(s,o)<0;)n(s,null),s=i.getNext();s&&s.isEqual(o)&&(n(s,e),s=i.hasNext()?i.getNext():null),s?r.Lt(s.path.toArray()):r.done()}).next(()=>{for(;s;)n(s,null),s=i.hasNext()?i.getNext():null})}getDocumentsMatchingQuery(t,e,n){let r=tn();const i=e.path.length+1,s={};if(n.isEqual(U.min())){const t=e.path.toArray();s.range=IDBKeyRange.lowerBound(t)}else{const t=e.path.toArray(),r=Kr(n);s.range=IDBKeyRange.lowerBound([t,r],!0),s.index=fr.collectionReadTimeIndex}return Ni(t).jt(s,(t,n,s)=>{if(t.length!==i)return;const o=qr(this.k,n);e.path.isPrefixOf(o.key.path)?ae(e,o)&&(r=r.insert(o.key,o)):s.done()}).next(()=>r)}newChangeBuffer(t){return new Ci(this,!!t&&t.trackRemovals)}getSize(t){return this.getMetadata(t).next(t=>t.byteSize)}getMetadata(t){return ki(t).get(pr.key).next(t=>(v(!!t),t))}Re(t,e){return ki(t).put(pr.key,e)}Pe(t,e){if(e){const t=qr(this.k,e);if(!t.isNoDocument()||!t.version.isEqual(U.min()))return t}return _t.newInvalidDocument(t)}}class Ci extends Ai{constructor(t,e){super(),this.De=t,this.trackRemovals=e,this.Ce=new Si(t=>t.toString(),(t,e)=>t.isEqual(e))}applyChanges(t){const e=[];let n=0,r=new Je((t,e)=>M(t.canonicalString(),e.canonicalString()));return this.changes.forEach((i,s)=>{const o=this.Ce.get(i);if(s.document.isValidDocument()){const a=Br(this.De.k,s.document,this.getReadTime(i));r=r.add(i.path.popLast());const c=ai(a);n+=c-o,e.push(this.De.addEntry(t,i,a))}else if(n-=o,this.trackRemovals){const n=Br(this.De.k,_t.newNoDocument(i,U.min()),this.getReadTime(i));e.push(this.De.addEntry(t,i,n))}else e.push(this.De.removeEntry(t,i))}),r.forEach(n=>{e.push(this.De.Jt.addToCollectionParentIndex(t,n))}),e.push(this.De.updateMetadata(t,n)),Sr.waitFor(e)}getFromCache(t,e){return this.De.be(t,e).next(t=>(this.Ce.set(e,t.size),t.document))}getAllFromCache(t,e){return this.De.Ve(t,e).next(({documents:t,Se:e})=>(e.forEach((t,e)=>{this.Ce.set(t,e)}),t))}}function ki(t){return Mr(t,pr.store)}function Ni(t){return Mr(t,fr.store)}function xi(t){return t.path.toArray()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(t){this.k=t}Nt(t,e,n,r){v(n<r&&n>=0&&r<=11);const i=new Ar("createOrUpgrade",e);n<1&&r>=1&&(function(t){t.createObjectStore(ar.store)}(t),function(t){t.createObjectStore(cr.store,{keyPath:cr.keyPath}),t.createObjectStore(ur.store,{keyPath:ur.keyPath,autoIncrement:!0}).createIndex(ur.userMutationsIndex,ur.userMutationsKeyPath,{unique:!0}),t.createObjectStore(hr.store)}(t),Ri(t),function(t){t.createObjectStore(fr.store)}(t));let s=Sr.resolve();return n<3&&r>=3&&(0!==n&&(function(t){t.deleteObjectStore(gr.store),t.deleteObjectStore(mr.store),t.deleteObjectStore(yr.store)}(t),Ri(t)),s=s.next(()=>function(t){const e=t.store(yr.store),n=new yr(0,0,U.min().toTimestamp(),0);return e.put(yr.key,n)}(i))),n<4&&r>=4&&(0!==n&&(s=s.next(()=>function(t,e){return e.store(ur.store).Bt().next(n=>{t.deleteObjectStore(ur.store),t.createObjectStore(ur.store,{keyPath:ur.keyPath,autoIncrement:!0}).createIndex(ur.userMutationsIndex,ur.userMutationsKeyPath,{unique:!0});const r=e.store(ur.store),i=n.map(t=>r.put(t));return Sr.waitFor(i)})}(t,i))),s=s.next(()=>{!function(t){t.createObjectStore(vr.store,{keyPath:vr.keyPath})}(t)})),n<5&&r>=5&&(s=s.next(()=>this.Ne(i))),n<6&&r>=6&&(s=s.next(()=>(function(t){t.createObjectStore(pr.store)}(t),this.ke(i)))),n<7&&r>=7&&(s=s.next(()=>this.xe(i))),n<8&&r>=8&&(s=s.next(()=>this.$e(t,i))),n<9&&r>=9&&(s=s.next(()=>{!function(t){t.objectStoreNames.contains("remoteDocumentChanges")&&t.deleteObjectStore("remoteDocumentChanges")}(t),function(t){const e=t.objectStore(fr.store);e.createIndex(fr.readTimeIndex,fr.readTimeIndexPath,{unique:!1}),e.createIndex(fr.collectionReadTimeIndex,fr.collectionReadTimeIndexPath,{unique:!1})}(e)})),n<10&&r>=10&&(s=s.next(()=>this.Fe(i))),n<11&&r>=11&&(s=s.next(()=>{!function(t){t.createObjectStore(br.store,{keyPath:br.keyPath})}(t),function(t){t.createObjectStore(Ir.store,{keyPath:Ir.keyPath})}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)})),s}ke(t){let e=0;return t.store(fr.store).jt((t,n)=>{e+=ai(n)}).next(()=>{const n=new pr(e);return t.store(pr.store).put(pr.key,n)})}Ne(t){const e=t.store(cr.store),n=t.store(ur.store);return e.Bt().next(e=>Sr.forEach(e,e=>{const r=IDBKeyRange.bound([e.userId,-1],[e.userId,e.lastAcknowledgedBatchId]);return n.Bt(ur.userMutationsIndex,r).next(n=>Sr.forEach(n,n=>{v(n.userId===e.userId);const r=Hr(this.k,n);return oi(t,e.userId,r).next(()=>{})}))}))}xe(t){const e=t.store(gr.store),n=t.store(fr.store);return t.store(yr.store).get(yr.key).next(t=>{const r=[];return n.jt((n,i)=>{const s=new G(n),o=function(t){return[0,nr(t)]}(s);r.push(e.get(o).next(n=>n?Sr.resolve():(n=>e.put(new gr(0,nr(n),t.highestListenSequenceNumber)))(s)))}).next(()=>Sr.waitFor(r))})}$e(t,e){t.createObjectStore(wr.store,{keyPath:wr.keyPath});const n=e.store(wr.store),r=new ei,i=t=>{if(r.add(t)){const e=t.lastSegment(),r=t.popLast();return n.put({collectionId:e,parent:nr(r)})}};return e.store(fr.store).jt({Kt:!0},(t,e)=>{const n=new G(t);return i(n.popLast())}).next(()=>e.store(hr.store).jt({Kt:!0},([t,e,n],r)=>{const s=sr(e);return i(s.popLast())}))}Fe(t){const e=t.store(mr.store);return e.jt((t,n)=>{const r=Wr(n),i=Qr(this.k,r);return e.put(i)})}}function Ri(t){t.createObjectStore(gr.store,{keyPath:gr.keyPath}).createIndex(gr.documentTargetsIndex,gr.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(mr.store,{keyPath:mr.keyPath}).createIndex(mr.queryTargetsIndexName,mr.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(yr.store)}const Li="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Pi{constructor(t,e,n,r,i,s,o,a,c,u){if(this.allowTabSynchronization=t,this.persistenceKey=e,this.clientId=n,this.Oe=i,this.window=s,this.document=o,this.Me=c,this.Le=u,this.Be=null,this.Ue=!1,this.isPrimary=!1,this.networkEnabled=!0,this.qe=null,this.inForeground=!1,this.Ke=null,this.je=null,this.Qe=Number.NEGATIVE_INFINITY,this.We=t=>Promise.resolve(),!Pi.bt())throw new T(E.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Ti(this,r),this.Ge=e+"main",this.k=new Ur(a),this.ze=new Dr(this.Ge,11,new Oi(this.k)),this.He=new pi(this.referenceDelegate,this.k),this.Jt=new ni,this.Je=function(t,e){return new Di(t,e)}(this.k,this.Jt),this.Ye=new Jr,this.window&&this.window.localStorage?this.Xe=this.window.localStorage:(this.Xe=null,!1===u&&m("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ze().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new T(E.FAILED_PRECONDITION,Li);return this.tn(),this.en(),this.nn(),this.runTransaction("getHighestListenSequenceNumber","readonly",t=>this.He.getHighestSequenceNumber(t))}).then(t=>{this.Be=new R(t,this.Me)}).then(()=>{this.Ue=!0}).catch(t=>(this.ze&&this.ze.close(),Promise.reject(t)))}sn(t){return this.We=async e=>{if(this.started)return t(e)},t(this.isPrimary)}setDatabaseDeletedListener(t){this.ze.xt(async e=>{null===e.newVersion&&await t()})}setNetworkEnabled(t){this.networkEnabled!==t&&(this.networkEnabled=t,this.Oe.enqueueAndForget(async()=>{this.started&&await this.Ze()}))}Ze(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",t=>Fi(t).put(new vr(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.rn(t).next(t=>{t||(this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.We(!1)))})}).next(()=>this.on(t)).next(e=>this.isPrimary&&!e?this.an(t).next(()=>!1):!!e&&this.cn(t).next(()=>!0))).catch(t=>{if(Nr(t))return p("IndexedDbPersistence","Failed to extend owner lease: ",t),this.isPrimary;if(!this.allowTabSynchronization)throw t;return p("IndexedDbPersistence","Releasing owner lease after error during lease refresh",t),!1}).then(t=>{this.isPrimary!==t&&this.Oe.enqueueRetryable(()=>this.We(t)),this.isPrimary=t})}rn(t){return Mi(t).get(ar.key).next(t=>Sr.resolve(this.un(t)))}hn(t){return Fi(t).delete(this.clientId)}async ln(){if(this.isPrimary&&!this.fn(this.Qe,18e5)){this.Qe=Date.now();const t=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const e=Mr(t,vr.store);return e.Bt().next(t=>{const n=this.dn(t,18e5),r=t.filter(t=>-1===n.indexOf(t));return Sr.forEach(r,t=>e.delete(t.clientId)).next(()=>r)})}).catch(()=>[]);if(this.Xe)for(const e of t)this.Xe.removeItem(this.wn(e.clientId))}}nn(){this.je=this.Oe.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ze().then(()=>this.ln()).then(()=>this.nn()))}un(t){return!!t&&t.ownerId===this.clientId}on(t){return this.Le?Sr.resolve(!0):Mi(t).get(ar.key).next(e=>{if(null!==e&&this.fn(e.leaseTimestampMs,5e3)&&!this._n(e.ownerId)){if(this.un(e)&&this.networkEnabled)return!0;if(!this.un(e)){if(!e.allowTabSynchronization)throw new T(E.FAILED_PRECONDITION,Li);return!1}}return!(!this.networkEnabled||!this.inForeground)||Fi(t).Bt().next(t=>void 0===this.dn(t,5e3).find(t=>{if(this.clientId!==t.clientId){const e=!this.networkEnabled&&t.networkEnabled,n=!this.inForeground&&t.inForeground,r=this.networkEnabled===t.networkEnabled;if(e||n&&r)return!0}return!1}))}).next(t=>(this.isPrimary!==t&&p("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ue=!1,this.mn(),this.je&&(this.je.cancel(),this.je=null),this.gn(),this.yn(),await this.ze.runTransaction("shutdown","readwrite",[ar.store,vr.store],t=>{const e=new Pr(t,R.I);return this.an(e).next(()=>this.hn(e))}),this.ze.close(),this.pn()}dn(t,e){return t.filter(t=>this.fn(t.updateTimeMs,e)&&!this._n(t.clientId))}Tn(){return this.runTransaction("getActiveClients","readonly",t=>Fi(t).Bt().next(t=>this.dn(t,18e5).map(t=>t.clientId)))}get started(){return this.Ue}getMutationQueue(t){return ci.Xt(t,this.k,this.Jt,this.referenceDelegate)}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getIndexManager(){return this.Jt}getBundleCache(){return this.Ye}runTransaction(t,e,n){p("IndexedDbPersistence","Starting transaction:",t);const r="readonly"===e?"readonly":"readwrite";let i;return this.ze.runTransaction(t,r,Er,r=>(i=new Pr(r,this.Be?this.Be.next():R.I),"readwrite-primary"===e?this.rn(i).next(t=>!!t||this.on(i)).next(e=>{if(!e)throw m(`Failed to obtain primary lease for action '${t}'.`),this.isPrimary=!1,this.Oe.enqueueRetryable(()=>this.We(!1)),new T(E.FAILED_PRECONDITION,Tr);return n(i)}).next(t=>this.cn(i).next(()=>t)):this.En(i).next(()=>n(i)))).then(t=>(i.raiseOnCommittedEvent(),t))}En(t){return Mi(t).get(ar.key).next(t=>{if(null!==t&&this.fn(t.leaseTimestampMs,5e3)&&!this._n(t.ownerId)&&!this.un(t)&&!(this.Le||this.allowTabSynchronization&&t.allowTabSynchronization))throw new T(E.FAILED_PRECONDITION,Li)})}cn(t){const e=new ar(this.clientId,this.allowTabSynchronization,Date.now());return Mi(t).put(ar.key,e)}static bt(){return Dr.bt()}an(t){const e=Mi(t);return e.get(ar.key).next(t=>this.un(t)?(p("IndexedDbPersistence","Releasing primary lease."),e.delete(ar.key)):Sr.resolve())}fn(t,e){const n=Date.now();return!(t<n-e)&&(!(t>n)||(m(`Detected an update time that is in the future: ${t} > ${n}`),!1))}tn(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ke=()=>{this.Oe.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.Ze()))},this.document.addEventListener("visibilitychange",this.Ke),this.inForeground="visible"===this.document.visibilityState)}gn(){this.Ke&&(this.document.removeEventListener("visibilitychange",this.Ke),this.Ke=null)}en(){var t;"function"==typeof(null===(t=this.window)||void 0===t?void 0:t.addEventListener)&&(this.qe=()=>{this.mn(),Object(o["r"])()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Oe.enterRestrictedMode(!0),this.Oe.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.qe))}yn(){this.qe&&(this.window.removeEventListener("pagehide",this.qe),this.qe=null)}_n(t){var e;try{const n=null!==(null===(e=this.Xe)||void 0===e?void 0:e.getItem(this.wn(t)));return p("IndexedDbPersistence",`Client '${t}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(t){return m("IndexedDbPersistence","Failed to get zombied client id.",t),!1}}mn(){if(this.Xe)try{this.Xe.setItem(this.wn(this.clientId),String(Date.now()))}catch(t){m("Failed to set zombie client id.",t)}}pn(){if(this.Xe)try{this.Xe.removeItem(this.wn(this.clientId))}catch(t){}}wn(t){return`firestore_zombie_${this.persistenceKey}_${t}`}}function Mi(t){return Mr(t,ar.store)}function Fi(t){return Mr(t,vr.store)}function ji(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Vi{constructor(t,e){this.progress=t,this.In=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(t,e,n){this.Je=t,this.An=e,this.Jt=n}Rn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.Pn(t,e,n))}Pn(t,e,n){return this.Je.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}bn(t,e){t.forEach((t,n)=>{for(const r of e)r.applyToLocalView(n)})}vn(t,e){return this.Je.getEntries(t,e).next(e=>this.Vn(t,e).next(()=>e))}Vn(t,e){return this.An.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.bn(e,t))}getDocumentsMatchingQuery(t,e,n){return function(t){return at.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Sn(t,e.path):te(e)?this.Dn(t,e,n):this.Cn(t,e,n)}Sn(t,e){return this.Rn(t,new at(e)).next(t=>{let e=nn();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Dn(t,e,n){const r=e.collectionGroup;let i=nn();return this.Jt.getCollectionParents(t,r).next(s=>Sr.forEach(s,s=>{const o=function(t,e){return new Ht(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.Cn(t,o,n).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}Cn(t,e,n){let r,i;return this.Je.getDocumentsMatchingQuery(t,e,n).next(n=>(r=n,this.An.getAllMutationBatchesAffectingQuery(t,e))).next(e=>(i=e,this.Nn(t,i,r).next(t=>{r=t;for(const e of i)for(const t of e.mutations){const n=t.key;let i=r.get(n);null==i&&(i=_t.newInvalidDocument(n),r=r.insert(n,i)),Oe(t,i,e.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))).next(()=>(r.forEach((t,n)=>{ae(e,n)||(r=r.remove(t))}),r))}Nn(t,e,n){let r=an();for(const s of e)for(const t of s.mutations)t instanceof Fe&&null===n.get(t.key)&&(r=r.add(t.key));let i=n;return this.Je.getEntries(t,r).next(t=>(t.forEach((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))}),i))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.kn=n,this.xn=r}static $n(t,e){let n=an(),r=an();for(const i of e.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new qi(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{Fn(t){this.On=t}getDocumentsMatchingQuery(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(U.min())?this.Mn(t,e):this.On.vn(t,r).next(i=>{const o=this.Ln(e,i);return(Yt(e)||Jt(e))&&this.Bn(e.limitType,o,r,n)?this.Mn(t,e):(d()<=s["a"].DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),oe(e)),this.On.getDocumentsMatchingQuery(t,e,n).next(t=>(o.forEach(e=>{t=t.insert(e.key,e)}),t)))})}Ln(t,e){let n=new Je(ce(t));return e.forEach((e,r)=>{ae(t,r)&&(n=n.add(r))}),n}Bn(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mn(t,e){return d()<=s["a"].DEBUG&&p("QueryEngine","Using full collection scan to execute query:",oe(e)),this.On.getDocumentsMatchingQuery(t,e,U.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(t,e,n,r){this.persistence=t,this.Un=e,this.k=r,this.qn=new We(M),this.Kn=new Si(t=>Dt(t),kt),this.jn=U.min(),this.An=t.getMutationQueue(n),this.Qn=t.getRemoteDocumentCache(),this.He=t.getTargetCache(),this.Wn=new Ui(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=t.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.qn))}}function $i(t,e,n,r){return new Ki(t,e,n,r)}async function Gi(t,e){const n=I(t);let r=n.An,i=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",t=>{let s;return n.An.getAllMutationBatches(t).next(o=>(s=o,r=n.persistence.getMutationQueue(e),i=new Ui(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t))).next(e=>{const n=[],r=[];let o=an();for(const t of s){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.vn(t,o).next(t=>({Gn:t,removedBatchIds:n,addedBatchIds:r}))})});return n.An=r,n.Wn=i,n.Un.Fn(n.Wn),s}function zi(t,e){const n=I(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),i=n.Qn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=Sr.resolve();return s.forEach(t=>{o=o.next(()=>r.getEntry(e,t)).next(e=>{const s=n.docVersions.get(t);v(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&r.addEntry(e,n.commitVersion))})}),o.next(()=>t.An.removeMutationBatch(e,i))}(n,t,e,i).next(()=>i.apply(t)).next(()=>n.An.performConsistencyCheck(t)).next(()=>n.Wn.vn(t,r))})}function Hi(t){const e=I(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.He.getLastRemoteSnapshotVersion(t))}function Wi(t,e){const n=I(t),r=e.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const s=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const o=[];e.targetChanges.forEach((e,s)=>{const a=i.get(s);if(!a)return;o.push(n.He.removeMatchingKeys(t,e.removedDocuments,s).next(()=>n.He.addMatchingKeys(t,e.addedDocuments,s)));const c=e.resumeToken;if(c.approximateByteSize()>0){const u=a.withResumeToken(c,r).withSequenceNumber(t.currentSequenceNumber);i=i.insert(s,u),function(t,e,n){return v(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,u,e)&&o.push(n.He.updateTargetData(t,u))}});let a=tn();if(e.documentUpdates.forEach((r,i)=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push(Qi(t,s,e.documentUpdates,r,void 0).next(t=>{a=t})),!r.isEqual(U.min())){const e=n.He.getLastRemoteSnapshotVersion(t).next(e=>n.He.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return Sr.waitFor(o).next(()=>s.apply(t)).next(()=>n.Wn.Vn(t,a)).next(()=>a)}).then(t=>(n.qn=i,t))}function Qi(t,e,n,r,i){let s=an();return n.forEach(t=>s=s.add(t)),e.getEntries(t,s).next(t=>{let s=tn();return n.forEach((n,o)=>{const a=t.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(U.min())?(e.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),s=s.insert(n,o)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)}),s})}function Yi(t,e){const n=I(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.An.getNextMutationBatchAfterBatchId(t,e)))}function Ji(t,e){const n=I(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.He.getTargetData(t,e).next(i=>i?(r=i,Sr.resolve(r)):n.He.allocateTargetId(t).next(i=>(r=new Vr(e,i,0,t.currentSequenceNumber),n.He.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.qn.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qn=n.qn.insert(t.targetId,t),n.Kn.set(e,t.targetId)),t})}async function Xi(t,e,n){const r=I(t),i=r.qn.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,t=>r.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!Nr(t))throw t;p("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.qn=r.qn.remove(e),r.Kn.delete(i.target)}function Zi(t,e,n){const r=I(t);let i=U.min(),s=an();return r.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const r=I(t),i=r.Kn.get(n);return void 0!==i?Sr.resolve(r.qn.get(i)):r.He.getTargetData(e,n)}(r,t,ne(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(t,e.targetId).next(t=>{s=t})}).next(()=>r.Un.getDocumentsMatchingQuery(t,e,n?i:U.min(),n?s:an())).next(t=>({documents:t,zn:s})))}function ts(t,e){const n=I(t),r=I(n.He),i=n.qn.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",t=>r.Et(t,e).next(t=>t?t.target:null))}function es(t){const e=I(t);return e.persistence.runTransaction("Get new document changes","readonly",t=>function(t,e,n){const r=I(t);let i=tn(),s=Kr(n);const o=Ni(e),a=IDBKeyRange.lowerBound(s,!0);return o.jt({index:fr.readTimeIndex,range:a},(t,e)=>{const n=qr(r.k,e);i=i.insert(n.key,n),s=e.readTime}).next(()=>({In:i,readTime:$r(s)}))}(e.Qn,t,e.jn)).then(({In:t,readTime:n})=>(e.jn=n,t))}async function ns(t){const e=I(t);return e.persistence.runTransaction("Synchronize last document change read time","readonly",t=>function(t){const e=Ni(t);let n=U.min();return e.jt({index:fr.readTimeIndex,reverse:!0},(t,e,r)=>{e.readTime&&(n=$r(e.readTime)),r.done()}).next(()=>n)}(t)).then(t=>{e.jn=t})}async function rs(t,e,n,r){const i=I(t);let s=an(),o=tn(),a=sn();for(const h of n){const t=e.Hn(h.metadata.name);h.document&&(s=s.add(t)),o=o.insert(t,e.Jn(h)),a=a.insert(t,e.Yn(h.metadata.readTime))}const c=i.Qn.newChangeBuffer({trackRemovals:!0}),u=await Ji(i,function(t){return ne(Qt(G.fromString("__bundle__/docs/"+t)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",t=>Qi(t,c,o,U.min(),a).next(e=>(c.apply(t),e)).next(e=>i.He.removeMatchingKeysForTargetId(t,u.targetId).next(()=>i.He.addMatchingKeys(t,s,u.targetId)).next(()=>i.Wn.Vn(t,e)).next(()=>e)))}async function is(t,e,n=an()){const r=await Ji(t,ne(Yr(e.bundledQuery))),i=I(t);return i.persistence.runTransaction("Save named query","readwrite",t=>{const s=Sn(e.readTime);if(r.snapshotVersion.compareTo(s)>=0)return i.Ye.saveNamedQuery(t,e);const o=r.withResumeToken(Y.EMPTY_BYTE_STRING,s);return i.qn=i.qn.insert(o.targetId,o),i.He.updateTargetData(t,o).next(()=>i.He.removeMatchingKeysForTargetId(t,r.targetId)).next(()=>i.He.addMatchingKeys(t,n,r.targetId)).next(()=>i.Ye.saveNamedQuery(t,e))})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ss{constructor(t){this.k=t,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(t,e){return Sr.resolve(this.Xn.get(e))}saveBundleMetadata(t,e){var n;return this.Xn.set(e.id,{id:(n=e).id,version:n.version,createTime:Sn(n.createTime)}),Sr.resolve()}getNamedQuery(t,e){return Sr.resolve(this.Zn.get(e))}saveNamedQuery(t,e){return this.Zn.set(e.name,function(t){return{name:t.name,query:Yr(t.bundledQuery),readTime:Sn(t.readTime)}}(e)),Sr.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(){this.ts=new Je(as.es),this.ns=new Je(as.ss)}isEmpty(){return this.ts.isEmpty()}addReference(t,e){const n=new as(t,e);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.os(new as(t,e))}cs(t,e){t.forEach(t=>this.removeReference(t,e))}us(t){const e=new at(new G([])),n=new as(e,t),r=new as(e,t+1),i=[];return this.ns.forEachInRange([n,r],t=>{this.os(t),i.push(t.key)}),i}hs(){this.ts.forEach(t=>this.os(t))}os(t){this.ts=this.ts.delete(t),this.ns=this.ns.delete(t)}ls(t){const e=new at(new G([])),n=new as(e,t),r=new as(e,t+1);let i=an();return this.ns.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new as(t,0),n=this.ts.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class as{constructor(t,e){this.key=t,this.fs=e}static es(t,e){return at.comparator(t.key,e.key)||M(t.fs,e.fs)}static ss(t,e){return M(t.fs,e.fs)||at.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(t,e){this.Jt=t,this.referenceDelegate=e,this.An=[],this.ds=1,this.ws=new Je(as.es)}checkEmpty(t){return Sr.resolve(0===this.An.length)}addMutationBatch(t,e,n,r){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const s=new Fr(i,e,n,r);this.An.push(s);for(const o of r)this.ws=this.ws.add(new as(o.key,i)),this.Jt.addToCollectionParentIndex(t,o.key.path.popLast());return Sr.resolve(s)}lookupMutationBatch(t,e){return Sr.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.gs(n),i=r<0?0:r;return Sr.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return Sr.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(t){return Sr.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new as(e,0),r=new as(e,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([n,r],t=>{const e=this._s(t.fs);i.push(e)}),Sr.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Je(M);return e.forEach(t=>{const e=new as(t,0),r=new as(t,Number.POSITIVE_INFINITY);this.ws.forEachInRange([e,r],t=>{n=n.add(t.fs)})}),Sr.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;at.isDocumentKey(i)||(i=i.child(""));const s=new as(new at(i),0);let o=new Je(M);return this.ws.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.fs)),!0)},s),Sr.resolve(this.ys(o))}ys(t){const e=[];return t.forEach(t=>{const n=this._s(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){v(0===this.ps(e.batchId,"removed")),this.An.shift();let n=this.ws;return Sr.forEach(e.mutations,r=>{const i=new as(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ws=n})}ee(t){}containsKey(t,e){const n=new as(e,0),r=this.ws.firstAfterOrEqual(n);return Sr.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.An.length,Sr.resolve()}ps(t,e){return this.gs(t)}gs(t){return 0===this.An.length?0:t-this.An[0].batchId}_s(t){const e=this.gs(t);return e<0||e>=this.An.length?null:this.An[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(t,e){this.Jt=t,this.Ts=e,this.docs=new We(at.comparator),this.size=0}addEntry(t,e,n){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:o,readTime:n}),this.size+=o-s,this.Jt.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Sr.resolve(n?n.document.clone():_t.newInvalidDocument(e))}getEntries(t,e){let n=tn();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():_t.newInvalidDocument(t))}),Sr.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=tn();const i=new at(e.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||ae(e,i)&&(r=r.insert(i.key,i.clone()))}return Sr.resolve(r)}Es(t,e){return Sr.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new hs(this)}getSize(t){return Sr.resolve(this.size)}}class hs extends Ai{constructor(t){super(),this.De=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.document.isValidDocument()?e.push(this.De.addEntry(t,r.document,this.getReadTime(n))):this.De.removeEntry(n)}),Sr.waitFor(e)}getFromCache(t,e){return this.De.getEntry(t,e)}getAllFromCache(t,e){return this.De.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(t){this.persistence=t,this.Is=new Si(t=>Dt(t),kt),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.As=0,this.Rs=new os,this.targetCount=0,this.Ps=fi.ie()}forEachTarget(t,e){return this.Is.forEach((t,n)=>e(n)),Sr.resolve()}getLastRemoteSnapshotVersion(t){return Sr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Sr.resolve(this.As)}allocateTargetId(t){return this.highestTargetId=this.Ps.next(),Sr.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.As&&(this.As=e),Sr.resolve()}ce(t){this.Is.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Ps=new fi(e),this.highestTargetId=e),t.sequenceNumber>this.As&&(this.As=t.sequenceNumber)}addTargetData(t,e){return this.ce(e),this.targetCount+=1,Sr.resolve()}updateTargetData(t,e){return this.ce(e),Sr.resolve()}removeTargetData(t,e){return this.Is.delete(e.target),this.Rs.us(e.targetId),this.targetCount-=1,Sr.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Is.forEach((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Is.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),Sr.waitFor(i).next(()=>r)}getTargetCount(t){return Sr.resolve(this.targetCount)}getTargetData(t,e){const n=this.Is.get(e)||null;return Sr.resolve(n)}addMatchingKeys(t,e,n){return this.Rs.rs(e,n),Sr.resolve()}removeMatchingKeys(t,e,n){this.Rs.cs(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),Sr.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.Rs.us(e),Sr.resolve()}getMatchingKeysForTargetId(t,e){const n=this.Rs.ls(e);return Sr.resolve(n)}containsKey(t,e){return Sr.resolve(this.Rs.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(t,e){this.bs={},this.Be=new R(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=t(this),this.He=new ls(this),this.Jt=new ti,this.Je=function(t,e){return new us(t,e)}(this.Jt,t=>this.referenceDelegate.vs(t)),this.k=new Ur(e),this.Ye=new ss(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new cs(this.Jt,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(t,e,n){p("MemoryPersistence","Starting transaction:",t);const r=new fs(this.Be.next());return this.referenceDelegate.Vs(),n(r).next(t=>this.referenceDelegate.Ss(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ds(t,e){return Sr.or(Object.values(this.bs).map(n=>()=>n.containsKey(t,e)))}}class fs extends _r{constructor(t){super(),this.currentSequenceNumber=t}}class ps{constructor(t){this.persistence=t,this.Cs=new os,this.Ns=null}static ks(t){return new ps(t)}get xs(){if(this.Ns)return this.Ns;throw w()}addReference(t,e,n){return this.Cs.addReference(n,e),this.xs.delete(n.toString()),Sr.resolve()}removeReference(t,e,n){return this.Cs.removeReference(n,e),this.xs.add(n.toString()),Sr.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),Sr.resolve()}removeTarget(t,e){this.Cs.us(e.targetId).forEach(t=>this.xs.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.xs.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}Vs(){this.Ns=new Set}Ss(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Sr.forEach(this.xs,n=>{const r=at.fromPath(n);return this.$s(t,r).next(t=>{t||e.removeEntry(r)})}).next(()=>(this.Ns=null,e.apply(t)))}updateLimboDocument(t,e){return this.$s(t,e).next(t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())})}vs(t){return 0}$s(t,e){return Sr.or([()=>Sr.resolve(this.Cs.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ds(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(t,e){return`firestore_clients_${t}_${e}`}function gs(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+="_"+e.uid),r}function ys(t,e){return`firestore_targets_${t}_${e}`}class ws{constructor(t,e,n,r){this.user=t,this.batchId=e,this.state=n,this.error=r}static Fs(t,e,n){const r=JSON.parse(n);let i,s="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return s&&r.error&&(s="string"==typeof r.error.message&&"string"==typeof r.error.code,s&&(i=new T(r.error.code,r.error.message))),s?new ws(t,e,r.state,i):(m("SharedClientState",`Failed to parse mutation state for ID '${e}': ${n}`),null)}Os(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class vs{constructor(t,e,n){this.targetId=t,this.state=e,this.error=n}static Fs(t,e){const n=JSON.parse(e);let r,i="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return i&&n.error&&(i="string"==typeof n.error.message&&"string"==typeof n.error.code,i&&(r=new T(n.error.code,n.error.message))),i?new vs(t,n.state,r):(m("SharedClientState",`Failed to parse target state for ID '${t}': ${e}`),null)}Os(){const t={state:this.state,updateTimeMs:Date.now()};return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)}}class bs{constructor(t,e){this.clientId=t,this.activeTargetIds=e}static Fs(t,e){const n=JSON.parse(e);let r="object"==typeof n&&n.activeTargetIds instanceof Array,i=un();for(let s=0;r&&s<n.activeTargetIds.length;++s)r=ot(n.activeTargetIds[s]),i=i.add(n.activeTargetIds[s]);return r?new bs(t,i):(m("SharedClientState",`Failed to parse client data for instance '${t}': ${e}`),null)}}class Is{constructor(t,e){this.clientId=t,this.onlineState=e}static Fs(t){const e=JSON.parse(t);return"object"==typeof e&&-1!==["Unknown","Online","Offline"].indexOf(e.onlineState)&&"string"==typeof e.clientId?new Is(e.clientId,e.onlineState):(m("SharedClientState","Failed to parse online state: "+t),null)}}class Es{constructor(){this.activeTargetIds=un()}Ms(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ls(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ts{constructor(t,e,n,r,i){this.window=t,this.Oe=e,this.persistenceKey=n,this.Bs=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Us=this.qs.bind(this),this.Ks=new We(M),this.started=!1,this.js=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.Qs=ms(this.persistenceKey,this.Bs),this.Ws=function(t){return"firestore_sequence_number_"+t}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.Ks=this.Ks.insert(this.Bs,new Es),this.Gs=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.zs=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.Hs=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.Js=function(t){return"firestore_online_state_"+t}(this.persistenceKey),this.Ys=function(t){return"firestore_bundle_loaded_"+t}(this.persistenceKey),this.window.addEventListener("storage",this.Us)}static bt(t){return!(!t||!t.localStorage)}async start(){const t=await this.syncEngine.Tn();for(const n of t){if(n===this.Bs)continue;const t=this.getItem(ms(this.persistenceKey,n));if(t){const e=bs.Fs(n,t);e&&(this.Ks=this.Ks.insert(e.clientId,e))}}this.Xs();const e=this.storage.getItem(this.Js);if(e){const t=this.Zs(e);t&&this.ti(t)}for(const n of this.js)this.qs(n);this.js=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(t){this.setItem(this.Ws,JSON.stringify(t))}getAllActiveQueryTargets(){return this.ei(this.Ks)}isActiveQueryTarget(t){let e=!1;return this.Ks.forEach((n,r)=>{r.activeTargetIds.has(t)&&(e=!0)}),e}addPendingMutation(t){this.ni(t,"pending")}updateMutationState(t,e,n){this.ni(t,e,n),this.si(t)}addLocalQueryTarget(t){let e="not-current";if(this.isActiveQueryTarget(t)){const n=this.storage.getItem(ys(this.persistenceKey,t));if(n){const r=vs.Fs(t,n);r&&(e=r.state)}}return this.ii.Ms(t),this.Xs(),e}removeLocalQueryTarget(t){this.ii.Ls(t),this.Xs()}isLocalQueryTarget(t){return this.ii.activeTargetIds.has(t)}clearQueryState(t){this.removeItem(ys(this.persistenceKey,t))}updateQueryState(t,e,n){this.ri(t,e,n)}handleUserChange(t,e,n){e.forEach(t=>{this.si(t)}),this.currentUser=t,n.forEach(t=>{this.addPendingMutation(t)})}setOnlineState(t){this.oi(t)}notifyBundleLoaded(){this.ai()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Us),this.removeItem(this.Qs),this.started=!1)}getItem(t){const e=this.storage.getItem(t);return p("SharedClientState","READ",t,e),e}setItem(t,e){p("SharedClientState","SET",t,e),this.storage.setItem(t,e)}removeItem(t){p("SharedClientState","REMOVE",t),this.storage.removeItem(t)}qs(t){const e=t;if(e.storageArea===this.storage){if(p("SharedClientState","EVENT",e.key,e.newValue),e.key===this.Qs)return void m("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Oe.enqueueRetryable(async()=>{if(this.started){if(null!==e.key)if(this.Gs.test(e.key)){if(null==e.newValue){const t=this.ci(e.key);return this.ui(t,null)}{const t=this.hi(e.key,e.newValue);if(t)return this.ui(t.clientId,t)}}else if(this.zs.test(e.key)){if(null!==e.newValue){const t=this.li(e.key,e.newValue);if(t)return this.fi(t)}}else if(this.Hs.test(e.key)){if(null!==e.newValue){const t=this.di(e.key,e.newValue);if(t)return this.wi(t)}}else if(e.key===this.Js){if(null!==e.newValue){const t=this.Zs(e.newValue);if(t)return this.ti(t)}}else if(e.key===this.Ws){const t=function(t){let e=R.I;if(null!=t)try{const n=JSON.parse(t);v("number"==typeof n),e=n}catch(t){m("SharedClientState","Failed to read sequence number from WebStorage",t)}return e}(e.newValue);t!==R.I&&this.sequenceNumberHandler(t)}else if(e.key===this.Ys)return this.syncEngine._i()}else this.js.push(e)})}}get ii(){return this.Ks.get(this.Bs)}Xs(){this.setItem(this.Qs,this.ii.Os())}ni(t,e,n){const r=new ws(this.currentUser,t,e,n),i=gs(this.persistenceKey,this.currentUser,t);this.setItem(i,r.Os())}si(t){const e=gs(this.persistenceKey,this.currentUser,t);this.removeItem(e)}oi(t){const e={clientId:this.Bs,onlineState:t};this.storage.setItem(this.Js,JSON.stringify(e))}ri(t,e,n){const r=ys(this.persistenceKey,t),i=new vs(t,e,n);this.setItem(r,i.Os())}ai(){this.setItem(this.Ys,"value-not-used")}ci(t){const e=this.Gs.exec(t);return e?e[1]:null}hi(t,e){const n=this.ci(t);return bs.Fs(n,e)}li(t,e){const n=this.zs.exec(t),r=Number(n[1]),i=void 0!==n[2]?n[2]:null;return ws.Fs(new u(i),r,e)}di(t,e){const n=this.Hs.exec(t),r=Number(n[1]);return vs.Fs(r,e)}Zs(t){return Is.Fs(t)}async fi(t){if(t.user.uid===this.currentUser.uid)return this.syncEngine.mi(t.batchId,t.state,t.error);p("SharedClientState","Ignoring mutation for non-active user "+t.user.uid)}wi(t){return this.syncEngine.gi(t.targetId,t.state,t.error)}ui(t,e){const n=e?this.Ks.insert(t,e):this.Ks.remove(t),r=this.ei(this.Ks),i=this.ei(n),s=[],o=[];return i.forEach(t=>{r.has(t)||s.push(t)}),r.forEach(t=>{i.has(t)||o.push(t)}),this.syncEngine.yi(s,o).then(()=>{this.Ks=n})}ti(t){this.Ks.get(t.clientId)&&this.onlineStateHandler(t.onlineState)}ei(t){let e=un();return t.forEach((t,n)=>{e=e.unionWith(n.activeTargetIds)}),e}}class _s{constructor(){this.pi=new Es,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.pi.Ms(t),this.Ti[t]||"not-current"}updateQueryState(t,e,n){this.Ti[t]=e}removeLocalQueryTarget(t){this.pi.Ls(t)}isLocalQueryTarget(t){return this.pi.activeTargetIds.has(t)}clearQueryState(t){delete this.Ti[t]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(t){return this.pi.activeTargetIds.has(t)}start(){return this.pi=new Es,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{Ei(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Pi(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(t){this.Vi=t.Vi,this.Si=t.Si}Di(t){this.Ci=t}Ni(t){this.ki=t}onMessage(t){this.xi=t}close(){this.Si()}send(t){this.Vi(t)}$i(){this.Ci()}Fi(t){this.ki(t)}Oi(t){this.xi(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Mi=e+"://"+t.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(t,e,n,r,i){const s=this.Ui(t,e);p("RestConnection","Sending: ",s,n);const o={};return this.qi(o,r,i),this.Ki(t,s,o,n).then(t=>(p("RestConnection","Received: ",t),t),e=>{throw g("RestConnection",t+" failed with error: ",e,"url: ",s,"request:",n),e})}ji(t,e,n,r,i){return this.Bi(t,e,n,r,i)}qi(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+h,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach((e,n)=>t[n]=e),n&&n.headers.forEach((e,n)=>t[n]=e)}Ui(t,e){const n=Ds[t];return`${this.Mi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}Ki(t,e,n,r){return new Promise((i,s)=>{const o=new a["g"];o.listenOnce(a["c"].COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a["a"].NO_ERROR:const e=o.getResponseJson();p("Connection","XHR received:",JSON.stringify(e)),i(e);break;case a["a"].TIMEOUT:p("Connection",'RPC "'+t+'" timed out'),s(new T(E.DEADLINE_EXCEEDED,"Request time out"));break;case a["a"].HTTP_ERROR:const n=o.getStatus();if(p("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(e)>=0?e:E.UNKNOWN}(t.status);s(new T(e,t.message))}else s(new T(E.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new T(E.UNAVAILABLE,"Connection failed."));break;default:w()}}finally{p("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);o.send(e,"POST",c,n,15)})}Qi(t,e,n){const r=[this.Mi,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=Object(a["h"])(),s=Object(a["i"])(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new a["d"]({})),this.qi(c.initMessageHeaders,e,n),Object(o["p"])()||Object(o["q"])()||Object(o["m"])()||Object(o["n"])()||Object(o["s"])()||Object(o["l"])()||(c.httpHeadersOverwriteParam="$httpHeaders");const u=r.join("");p("Connection","Creating WebChannel: "+u,c);const h=i.createWebChannel(u,c);let l=!1,d=!1;const f=new Cs({Vi:t=>{d?p("Connection","Not sending because WebChannel is closed:",t):(l||(p("Connection","Opening WebChannel transport."),h.open(),l=!0),p("Connection","WebChannel sending:",t),h.send(t))},Si:()=>h.close()}),m=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return m(h,a["f"].EventType.OPEN,()=>{d||p("Connection","WebChannel transport opened.")}),m(h,a["f"].EventType.CLOSE,()=>{d||(d=!0,p("Connection","WebChannel transport closed"),f.Fi())}),m(h,a["f"].EventType.ERROR,t=>{d||(d=!0,g("Connection","WebChannel transport errored:",t),f.Fi(new T(E.UNAVAILABLE,"The operation could not be completed")))}),m(h,a["f"].EventType.MESSAGE,t=>{var e;if(!d){const n=t.data[0];v(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){p("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=$e[t];if(void 0!==e)return He(e)}(t),n=i.message;void 0===e&&(e=E.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),d=!0,f.Fi(new T(e,n)),h.close()}else p("Connection","WebChannel received:",n),f.Oi(n)}}),m(s,a["b"].STAT_EVENT,t=>{t.stat===a["e"].PROXY?p("Connection","Detected buffering proxy"):t.stat===a["e"].NOPROXY&&p("Connection","Detected no buffering proxy")}),setTimeout(()=>{f.$i()},0),f}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(){return"undefined"!=typeof window?window:null}function xs(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Os(t){return new In(t,!0)}class Rs{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Oe=t,this.timerId=e,this.Wi=n,this.Gi=r,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(t){this.cancel();const e=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),r=Math.max(0,e-n);r>0&&p("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Hi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Yi=Date.now(),t())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(t,e,n,r,i,s,o,a){this.Oe=t,this.nr=n,this.sr=r,this.ir=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new Rs(t,e)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.ar&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(t){this.yr(),this.stream.send(t)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(t,e){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==t?this.ur.reset():e&&e.code===E.RESOURCE_EXHAUSTED?(m(e.toString()),m("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):e&&e.code===E.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ni(e)}Tr(){}auth(){this.state=1;const t=this.Er(this.rr),e=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([t,n])=>{this.rr===e&&this.Ir(t,n)},e=>{t(()=>{const t=new T(E.UNKNOWN,"Fetching auth token failed: "+e.message);return this.Ar(t)})})}Ir(t,e){const n=this.Er(this.rr);this.stream=this.Rr(t,e),this.stream.Di(()=>{n(()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(t=>{n(()=>this.Ar(t))}),this.stream.onMessage(t=>{n(()=>this.onMessage(t))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(t){return p("PersistentStream","close with error: "+t),this.stream=null,this.close(4,t)}Er(t){return e=>{this.Oe.enqueueAndForget(()=>this.rr===t?e():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Ps extends Ls{constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.k=i}Rr(t,e){return this.ir.Qi("Listen",t,e)}onMessage(t){this.ur.reset();const e=Fn(this.k,t),n=function(t){if(!("targetChange"in t))return U.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?U.min():e.readTime?Sn(e.readTime):U.min()}(t);return this.listener.Pr(e,n)}br(t){const e={};e.database=On(this.k),e.addTarget=function(t,e){let n;const r=e.target;return n=Nt(r)?{documents:qn(t,r)}:{query:Bn(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Tn(t,e.resumeToken):e.snapshotVersion.compareTo(U.min())>0&&(n.readTime=En(t,e.snapshotVersion.toTimestamp())),n}(this.k,t);const n=$n(this.k,t);n&&(e.labels=n),this.gr(e)}vr(t){const e={};e.database=On(this.k),e.removeTarget=t,this.gr(e)}}class Ms extends Ls{constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.k=i,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(t,e){return this.ir.Qi("Write",t,e)}onMessage(t){if(v(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Vr){this.ur.reset();const e=Un(t.writeResults,t.commitTime),n=Sn(t.commitTime);return this.listener.Cr(n,e)}return v(!t.writeResults||0===t.writeResults.length),this.Vr=!0,this.listener.Nr()}kr(){const t={};t.database=On(this.k),this.gr(t)}Dr(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>jn(this.k,t))};this.gr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs extends class{}{constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.ir=n,this.k=r,this.$r=!1}Fr(){if(this.$r)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(t,e,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.ir.Bi(t,e,n,r,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new T(E.UNKNOWN,t.toString())})}ji(t,e,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.ir.ji(t,e,n,r,i)).catch(t=>{throw"FirebaseError"===t.name?(t.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new T(E.UNKNOWN,t.toString())})}terminate(){this.$r=!0}}class js{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){0===this.Or&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(t){"Online"===this.state?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr("Connection failed 1 times. Most recent error: "+t.toString()),this.Ur("Offline")))}set(t){this.jr(),this.Or=0,"Online"===t&&(this.Lr=!1),this.Ur(t)}Ur(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}qr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(m(e),this.Lr=!1):p("OnlineStateTracker",e)}jr(){null!==this.Mr&&(this.Mr.cancel(),this.Mr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei(t=>{n.enqueueAndForget(async()=>{Ws(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=I(t);e.Gr.add(4),await qs(e),e.Jr.set("Unknown"),e.Gr.delete(4),await Us(e)}(this))})}),this.Jr=new js(n,r)}}async function Us(t){if(Ws(t))for(const e of t.zr)await e(!0)}async function qs(t){for(const e of t.zr)await e(!1)}function Bs(t,e){const n=I(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),Hs(n)?zs(n):lo(n).lr()&&$s(n,e))}function Ks(t,e){const n=I(t),r=lo(n);n.Wr.delete(e),r.lr()&&Gs(n,e),0===n.Wr.size&&(r.lr()?r._r():Ws(n)&&n.Jr.set("Unknown"))}function $s(t,e){t.Yr.X(e.targetId),lo(t).br(e)}function Gs(t,e){t.Yr.X(e),lo(t).vr(e)}function zs(t){t.Yr=new gn({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),lo(t).start(),t.Jr.Br()}function Hs(t){return Ws(t)&&!lo(t).hr()&&t.Wr.size>0}function Ws(t){return 0===I(t).Gr.size}function Qs(t){t.Yr=void 0}async function Ys(t){t.Wr.forEach((e,n)=>{$s(t,e)})}async function Js(t,e){Qs(t),Hs(t)?(t.Jr.Kr(e),zs(t)):t.Jr.set("Unknown")}async function Xs(t,e,n){if(t.Jr.set("Online"),e instanceof pn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.Wr.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.Wr.delete(r),t.Yr.removeTarget(r))}(t,e)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await Zs(t,n)}else if(e instanceof dn?t.Yr.ot(e):e instanceof fn?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(U.min()))try{const e=await Hi(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Yr.gt(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.Wr.get(r);i&&t.Wr.set(r,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.Wr.get(e);if(!n)return;t.Wr.set(e,n.withResumeToken(Y.EMPTY_BYTE_STRING,n.snapshotVersion)),Gs(t,e);const r=new Vr(n.target,e,1,n.sequenceNumber);$s(t,r)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){p("RemoteStore","Failed to raise snapshot:",e),await Zs(t,e)}}async function Zs(t,e,n){if(!Nr(e))throw e;t.Gr.add(1),await qs(t),t.Jr.set("Offline"),n||(n=()=>Hi(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await Us(t)})}function to(t,e){return e().catch(n=>Zs(t,n,e))}async function eo(t){const e=I(t),n=fo(e);let r=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;no(e);)try{const t=await Yi(e.localStore,r);if(null===t){0===e.Qr.length&&n._r();break}r=t.batchId,ro(e,t)}catch(t){await Zs(e,t)}io(e)&&so(e)}function no(t){return Ws(t)&&t.Qr.length<10}function ro(t,e){t.Qr.push(e);const n=fo(t);n.lr()&&n.Sr&&n.Dr(e.mutations)}function io(t){return Ws(t)&&!fo(t).hr()&&t.Qr.length>0}function so(t){fo(t).start()}async function oo(t){fo(t).kr()}async function ao(t){const e=fo(t);for(const n of t.Qr)e.Dr(n.mutations)}async function co(t,e,n){const r=t.Qr.shift(),i=jr.from(r,e,n);await to(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await eo(t)}async function uo(t,e){e&&fo(t).Sr&&await async function(t,e){if(n=e.code,ze(n)&&n!==E.ABORTED){const n=t.Qr.shift();fo(t).wr(),await to(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await eo(t)}var n}(t,e),io(t)&&so(t)}async function ho(t,e){const n=I(t);e?(n.Gr.delete(2),await Us(n)):e||(n.Gr.add(2),await qs(n),n.Jr.set("Unknown"))}function lo(t){return t.Xr||(t.Xr=function(t,e,n){const r=I(t);return r.Fr(),new Ps(e,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Di:Ys.bind(null,t),Ni:Js.bind(null,t),Pr:Xs.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),Hs(t)?zs(t):t.Jr.set("Unknown")):(await t.Xr.stop(),Qs(t))})),t.Xr}function fo(t){return t.Zr||(t.Zr=function(t,e,n){const r=I(t);return r.Fr(),new Ms(e,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)}(t.datastore,t.asyncQueue,{Di:oo.bind(null,t),Ni:uo.bind(null,t),Nr:ao.bind(null,t),Cr:co.bind(null,t)}),t.zr.push(async e=>{e?(t.Zr.wr(),await eo(t)):(await t.Zr.stop(),t.Qr.length>0&&(p("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))})),t.Zr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class po{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new _,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new po(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new T(E.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mo(t,e){if(m("AsyncQueue",`${e}: ${t}`),Nr(t))return new T(E.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(t){this.comparator=t?(e,n)=>t(e,n)||at.comparator(e.key,n.key):(t,e)=>at.comparator(t.key,e.key),this.keyedMap=nn(),this.sortedSet=new We(this.comparator)}static emptySet(t){return new go(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof go))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new go;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this.eo=new We(at.comparator)}track(t){const e=t.doc.key,n=this.eo.get(e);n?0!==t.type&&3===n.type?this.eo=this.eo.insert(e,t):3===t.type&&1!==n.type?this.eo=this.eo.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.eo=this.eo.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.eo=this.eo.remove(e):1===t.type&&2===n.type?this.eo=this.eo.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.eo=this.eo.insert(e,{type:2,doc:t.doc}):w():this.eo=this.eo.insert(e,t)}no(){const t=[];return this.eo.inorderTraversal((e,n)=>{t.push(n)}),t}}class wo{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach(t=>{i.push({type:0,doc:t})}),new wo(t,e,go.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&ie(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vo{constructor(){this.so=void 0,this.listeners=[]}}class bo{constructor(){this.queries=new Si(t=>se(t),ie),this.onlineState="Unknown",this.io=new Set}}async function Io(t,e){const n=I(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new vo),i)try{s.so=await n.onListen(r)}catch(t){const n=mo(t,`Initialization of query '${oe(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.ro(n.onlineState),s.so&&e.oo(s.so)&&So(n)}async function Eo(t,e){const n=I(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function To(t,e){const n=I(t);let r=!1;for(const i of e){const t=i.query,e=n.queries.get(t);if(e){for(const t of e.listeners)t.oo(i)&&(r=!0);e.so=i}}r&&So(n)}function _o(t,e,n){const r=I(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function So(t){t.io.forEach(t=>{t.next()})}class Ao{constructor(t,e,n){this.query=t,this.ao=e,this.co=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new wo(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.co?this.ho(t)&&(this.ao.next(t),e=!0):this.lo(t,this.onlineState)&&(this.fo(t),e=!0),this.uo=t,e}onError(t){this.ao.error(t)}ro(t){this.onlineState=t;let e=!1;return this.uo&&!this.co&&this.lo(this.uo,t)&&(this.fo(this.uo),e=!0),e}lo(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return(!this.options.wo||!n)&&(!t.docs.isEmpty()||"Offline"===e)}ho(t){if(t.docChanges.length>0)return!0;const e=this.uo&&this.uo.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}fo(t){t=wo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.co=!0,this.ao.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(t,e){this.payload=t,this.byteLength=e}_o(){return"metadata"in this.payload}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(t){this.k=t}Hn(t){return kn(this.k,t)}Jn(t){return t.metadata.exists?Pn(this.k,t.document,!1):_t.newNoDocument(this.Hn(t.metadata.name),this.Yn(t.metadata.readTime))}Yn(t){return Sn(t)}}class ko{constructor(t,e,n){this.mo=t,this.localStore=e,this.k=n,this.queries=[],this.documents=[],this.progress=No(t)}yo(t){this.progress.bytesLoaded+=t.byteLength;let e=this.progress.documentsLoaded;return t.payload.namedQuery?this.queries.push(t.payload.namedQuery):t.payload.documentMetadata?(this.documents.push({metadata:t.payload.documentMetadata}),t.payload.documentMetadata.exists||++e):t.payload.document&&(this.documents[this.documents.length-1].document=t.payload.document,++e),e!==this.progress.documentsLoaded?(this.progress.documentsLoaded=e,Object.assign({},this.progress)):null}po(t){const e=new Map,n=new Co(this.k);for(const r of t)if(r.metadata.queries){const t=n.Hn(r.metadata.name);for(const n of r.metadata.queries){const r=(e.get(n)||an()).add(t);e.set(n,r)}}return e}async complete(){const t=await rs(this.localStore,new Co(this.k),this.documents,this.mo.id),e=this.po(this.documents);for(const n of this.queries)await is(this.localStore,n,e.get(n.name));return this.progress.taskState="Success",new Vi(Object.assign({},this.progress),t)}}function No(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xo{constructor(t){this.key=t}}class Oo{constructor(t){this.key=t}}class Ro{constructor(t,e){this.query=t,this.To=e,this.Eo=null,this.current=!1,this.Io=an(),this.mutatedKeys=an(),this.Ao=ce(t),this.Ro=new go(this.Ao)}get Po(){return this.To}bo(t,e){const n=e?e.vo:new yo,r=e?e.Ro:this.Ro;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=Yt(this.query)&&r.size===this.query.limit?r.last():null,c=Jt(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),h=ae(this.query,e)?e:null,l=!!u&&this.mutatedKeys.has(u.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;u&&h?u.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.Vo(u,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Ao(h,a)>0||c&&this.Ao(h,c)<0)&&(o=!0)):!u&&h?(n.track({type:0,doc:h}),f=!0):u&&!h&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(h?(s=s.add(h),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))}),Yt(this.query)||Jt(this.query))for(;s.size>this.query.limit;){const t=Yt(this.query)?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Ro:s,vo:n,Bn:o,mutatedKeys:i}}Vo(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Ro;this.Ro=t.Ro,this.mutatedKeys=t.mutatedKeys;const i=t.vo.no();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return w()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.Ao(t.doc,e.doc)),this.So(n);const s=e?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==i.length||a?{snapshot:new wo(this.query,t.Ro,r,i,t.mutatedKeys,0===o,a,!1),Co:s}:{Co:s}}ro(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new yo,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(t){return!this.To.has(t)&&!!this.Ro.has(t)&&!this.Ro.get(t).hasLocalMutations}So(t){t&&(t.addedDocuments.forEach(t=>this.To=this.To.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this.To=this.To.delete(t)),this.current=t.current)}Do(){if(!this.current)return[];const t=this.Io;this.Io=an(),this.Ro.forEach(t=>{this.No(t.key)&&(this.Io=this.Io.add(t.key))});const e=[];return t.forEach(t=>{this.Io.has(t)||e.push(new Oo(t))}),this.Io.forEach(n=>{t.has(n)||e.push(new xo(n))}),e}ko(t){this.To=t.zn,this.Io=an();const e=this.bo(t.documents);return this.applyChanges(e,!0)}xo(){return wo.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class Lo{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Po{constructor(t){this.key=t,this.$o=!1}}class Mo{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Fo={},this.Oo=new Si(t=>se(t),ie),this.Mo=new Map,this.Lo=new Set,this.Bo=new We(at.comparator),this.Uo=new Map,this.qo=new os,this.Ko={},this.jo=new Map,this.Qo=fi.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function Fo(t,e){const n=da(t);let r,i;const s=n.Oo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const t=await Ji(n.localStore,ne(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await jo(n,e,r,"current"===s),n.isPrimaryClient&&Bs(n.remoteStore,t)}return i}async function jo(t,e,n,r){t.Go=(e,n,r)=>async function(t,e,n,r){let i=e.view.bo(n);i.Bn&&(i=await Zi(t.localStore,e.query,!1).then(({documents:t})=>e.view.bo(t,i)));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return Jo(t,e.targetId,o.Co),o.snapshot}(t,e,n,r);const i=await Zi(t.localStore,e,!0),s=new Ro(e,i.zn),o=s.bo(i.documents),a=ln.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);Jo(t,n,c.Co);const u=new Lo(e,n,s);return t.Oo.set(e,u),t.Mo.has(n)?t.Mo.get(n).push(e):t.Mo.set(n,[e]),c.snapshot}async function Vo(t,e){const n=I(t),r=n.Oo.get(e),i=n.Mo.get(r.targetId);if(i.length>1)return n.Mo.set(r.targetId,i.filter(t=>!ie(t,e))),void n.Oo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Xi(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Ks(n.remoteStore,r.targetId),Qo(n,r.targetId)}).catch(wi)):(Qo(n,r.targetId),await Xi(n.localStore,r.targetId,!0))}async function Uo(t,e,n){const r=fa(t);try{const t=await function(t,e){const n=I(t),r=V.now(),i=e.reduce((t,e)=>t.add(e.key),an());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>n.Wn.vn(t,i).next(i=>{s=i;const o=[];for(const t of e){const e=Re(t,s.get(t.key));null!=e&&o.push(new Fe(t.key,e,Tt(e.value.mapValue),Ce.exists(!0)))}return n.An.addMutationBatch(t,r,o,e)})).then(t=>(t.applyToLocalDocumentSet(s),{batchId:t.batchId,changes:s}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Ko[t.currentUser.toKey()];r||(r=new We(M)),r=r.insert(e,n),t.Ko[t.currentUser.toKey()]=r}(r,t.batchId,n),await ta(r,t.changes),await eo(r.remoteStore)}catch(t){const e=mo(t,"Failed to persist write");n.reject(e)}}async function qo(t,e){const n=I(t);try{const t=await Wi(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.Uo.get(e);r&&(v(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.$o=!0:t.modifiedDocuments.size>0?v(r.$o):t.removedDocuments.size>0&&(v(r.$o),r.$o=!1))}),await ta(n,t,e)}catch(t){await wi(t)}}function Bo(t,e,n){const r=I(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.Oo.forEach((n,r)=>{const i=r.view.ro(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=I(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const i of n.listeners)i.ro(e)&&(r=!0)}),r&&So(n)}(r.eventManager,e),t.length&&r.Fo.Pr(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Ko(t,e,n){const r=I(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Uo.get(e),s=i&&i.key;if(s){let t=new We(at.comparator);t=t.insert(s,_t.newNoDocument(s,U.min()));const n=an().add(s),i=new hn(U.min(),new Map,new Je(M),t,n);await qo(r,i),r.Bo=r.Bo.remove(s),r.Uo.delete(e),Zo(r)}else await Xi(r.localStore,e,!1).then(()=>Qo(r,e,n)).catch(wi)}async function $o(t,e){const n=I(t),r=e.batch.batchId;try{const t=await zi(n.localStore,e);Wo(n,r,null),Ho(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ta(n,t)}catch(t){await wi(t)}}async function Go(t,e,n){const r=I(t);try{const t=await function(t,e){const n=I(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.An.lookupMutationBatch(t,e).next(e=>(v(null!==e),r=e.keys(),n.An.removeMutationBatch(t,e))).next(()=>n.An.performConsistencyCheck(t)).next(()=>n.Wn.vn(t,r))})}(r.localStore,e);Wo(r,e,n),Ho(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ta(r,t)}catch(n){await wi(n)}}async function zo(t,e){const n=I(t);Ws(n.remoteStore)||p("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const t=await function(t){const e=I(t);return e.persistence.runTransaction("Get highest unacknowledged batch id","readonly",t=>e.An.getHighestUnacknowledgedBatchId(t))}(n.localStore);if(-1===t)return void e.resolve();const r=n.jo.get(t)||[];r.push(e),n.jo.set(t,r)}catch(t){const n=mo(t,"Initialization of waitForPendingWrites() operation failed");e.reject(n)}}function Ho(t,e){(t.jo.get(e)||[]).forEach(t=>{t.resolve()}),t.jo.delete(e)}function Wo(t,e,n){const r=I(t);let i=r.Ko[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Ko[r.currentUser.toKey()]=i}}function Qo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Mo.get(e))t.Oo.delete(r),n&&t.Fo.zo(r,n);t.Mo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(e=>{t.qo.containsKey(e)||Yo(t,e)})}function Yo(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);null!==n&&(Ks(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),Zo(t))}function Jo(t,e,n){for(const r of n)r instanceof xo?(t.qo.addReference(r.key,e),Xo(t,r)):r instanceof Oo?(p("SyncEngine","Document no longer in limbo: "+r.key),t.qo.removeReference(r.key,e),t.qo.containsKey(r.key)||Yo(t,r.key)):w()}function Xo(t,e){const n=e.key,r=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(r)||(p("SyncEngine","New document in limbo: "+n),t.Lo.add(r),Zo(t))}function Zo(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new at(G.fromString(e)),r=t.Qo.next();t.Uo.set(r,new Po(n)),t.Bo=t.Bo.insert(n,r),Bs(t.remoteStore,new Vr(ne(Qt(n.path)),r,2,R.I))}}async function ta(t,e,n){const r=I(t),i=[],s=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach((t,a)=>{o.push(r.Go(a,e,n).then(t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=qi.$n(a.targetId,t);s.push(e)}}))}),await Promise.all(o),r.Fo.Pr(i),await async function(t,e){const n=I(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>Sr.forEach(e,e=>Sr.forEach(e.kn,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>Sr.forEach(e.xn,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!Nr(t))throw t;p("LocalStore","Failed to update sequence numbers: "+t)}for(const r of e){const t=r.targetId;if(!r.fromCache){const e=n.qn.get(t),r=e.snapshotVersion,i=e.withLastLimboFreeSnapshotVersion(r);n.qn=n.qn.insert(t,i)}}}(r.localStore,s))}async function ea(t,e){const n=I(t);if(!n.currentUser.isEqual(e)){p("SyncEngine","User change. New user:",e.toKey());const t=await Gi(n.localStore,e);n.currentUser=e,function(t,e){t.jo.forEach(t=>{t.forEach(t=>{t.reject(new T(E.CANCELLED,e))})}),t.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await ta(n,t.Gn)}}function na(t,e){const n=I(t),r=n.Uo.get(e);if(r&&r.$o)return an().add(r.key);{let t=an();const r=n.Mo.get(e);if(!r)return t;for(const e of r){const r=n.Oo.get(e);t=t.unionWith(r.view.Po)}return t}}async function ra(t,e){const n=I(t),r=await Zi(n.localStore,e.query,!0),i=e.view.ko(r);return n.isPrimaryClient&&Jo(n,e.targetId,i.Co),i}async function ia(t){const e=I(t);return es(e.localStore).then(t=>ta(e,t))}async function sa(t,e,n,r){const i=I(t),s=await function(t,e){const n=I(t),r=I(n.An);return n.persistence.runTransaction("Lookup mutation documents","readonly",t=>r.Zt(t,e).next(e=>e?n.Wn.vn(t,e):Sr.resolve(null)))}(i.localStore,e);null!==s?("pending"===n?await eo(i.remoteStore):"acknowledged"===n||"rejected"===n?(Wo(i,e,r||null),Ho(i,e),function(t,e){I(I(t).An).ee(e)}(i.localStore,e)):w(),await ta(i,s)):p("SyncEngine","Cannot apply mutation batch with id: "+e)}async function oa(t,e){const n=I(t);if(da(n),fa(n),!0===e&&!0!==n.Wo){const t=n.sharedClientState.getAllActiveQueryTargets(),e=await aa(n,t.toArray());n.Wo=!0,await ho(n.remoteStore,!0);for(const r of e)Bs(n.remoteStore,r)}else if(!1===e&&!1!==n.Wo){const t=[];let e=Promise.resolve();n.Mo.forEach((r,i)=>{n.sharedClientState.isLocalQueryTarget(i)?t.push(i):e=e.then(()=>(Qo(n,i),Xi(n.localStore,i,!0))),Ks(n.remoteStore,i)}),await e,await aa(n,t),function(t){const e=I(t);e.Uo.forEach((t,n)=>{Ks(e.remoteStore,n)}),e.qo.hs(),e.Uo=new Map,e.Bo=new We(at.comparator)}(n),n.Wo=!1,await ho(n.remoteStore,!1)}}async function aa(t,e,n){const r=I(t),i=[],s=[];for(const o of e){let t;const e=r.Mo.get(o);if(e&&0!==e.length){t=await Ji(r.localStore,ne(e[0]));for(const t of e){const e=r.Oo.get(t),n=await ra(r,e);n.snapshot&&s.push(n.snapshot)}}else{const e=await ts(r.localStore,o);t=await Ji(r.localStore,e),await jo(r,ca(e),o,!1)}i.push(t)}return r.Fo.Pr(s),i}function ca(t){return Wt(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function ua(t){const e=I(t);return I(I(e.localStore).persistence).Tn()}async function ha(t,e,n,r){const i=I(t);if(i.Wo)p("SyncEngine","Ignoring unexpected query state notification.");else if(i.Mo.has(e))switch(n){case"current":case"not-current":{const t=await es(i.localStore),r=hn.createSynthesizedRemoteEventForCurrentChange(e,"current"===n);await ta(i,t,r);break}case"rejected":await Xi(i.localStore,e,!0),Qo(i,e,r);break;default:w()}}async function la(t,e,n){const r=da(t);if(r.Wo){for(const t of e){if(r.Mo.has(t)){p("SyncEngine","Adding an already active target "+t);continue}const e=await ts(r.localStore,t),n=await Ji(r.localStore,e);await jo(r,ca(e),n.targetId,!1),Bs(r.remoteStore,n)}for(const t of n)r.Mo.has(t)&&await Xi(r.localStore,t,!1).then(()=>{Ks(r.remoteStore,t),Qo(r,t)}).catch(wi)}}function da(t){const e=I(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=qo.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=na.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Ko.bind(null,e),e.Fo.Pr=To.bind(null,e.eventManager),e.Fo.zo=_o.bind(null,e.eventManager),e}function fa(t){const e=I(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=$o.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Go.bind(null,e),e}function pa(t,e,n){const r=I(t);(async function(t,e,n){try{const r=await e.getMetadata();if(await function(t,e){const n=I(t),r=Sn(e.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",t=>n.Ye.getBundleMetadata(t,e.id)).then(t=>!!t&&t.createTime.compareTo(r)>=0)}(t.localStore,r))return await e.close(),void n._completeWith(function(t){return{taskState:"Success",documentsLoaded:t.totalDocuments,bytesLoaded:t.totalBytes,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}(r));n._updateProgress(No(r));const i=new ko(r,t.localStore,e.k);let s=await e.Ho();for(;s;){const t=await i.yo(s);t&&n._updateProgress(t),s=await e.Ho()}const o=await i.complete();await ta(t,o.In,void 0),await function(t,e){const n=I(t);return n.persistence.runTransaction("Save bundle","readwrite",t=>n.Ye.saveBundleMetadata(t,e))}(t.localStore,r),n._completeWith(o.progress)}catch(t){g("SyncEngine","Loading bundle failed with "+t),n._failWith(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(r,e,n).then(()=>{r.sharedClientState.notifyBundleLoaded()})}class ma{constructor(){this.synchronizeTabs=!1}async initialize(t){this.k=Os(t.databaseInfo.databaseId),this.sharedClientState=this.Jo(t),this.persistence=this.Yo(t),await this.persistence.start(),this.gcScheduler=this.Xo(t),this.localStore=this.Zo(t)}Xo(t){return null}Zo(t){return $i(this.persistence,new Bi,t.initialUser,this.k)}Yo(t){return new ds(ps.ks,this.k)}Jo(t){return new _s}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ga extends ma{constructor(t,e,n){super(),this.ta=t,this.cacheSizeBytes=e,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(t){await super.initialize(t),await ns(this.localStore),await this.ta.initialize(this,t),await fa(this.ta.syncEngine),await eo(this.ta.remoteStore),await this.persistence.sn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Zo(t){return $i(this.persistence,new Bi,t.initialUser,this.k)}Xo(t){const e=this.persistence.referenceDelegate.garbageCollector;return new Ii(e,t.asyncQueue)}Yo(t){const e=ji(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?si.withCacheSize(this.cacheSizeBytes):si.DEFAULT;return new Pi(this.synchronizeTabs,e,t.clientId,n,t.asyncQueue,Ns(),xs(),this.k,this.sharedClientState,!!this.forceOwnership)}Jo(t){return new _s}}class ya extends ga{constructor(t,e){super(t,e,!1),this.ta=t,this.cacheSizeBytes=e,this.synchronizeTabs=!0}async initialize(t){await super.initialize(t);const e=this.ta.syncEngine;this.sharedClientState instanceof Ts&&(this.sharedClientState.syncEngine={mi:sa.bind(null,e),gi:ha.bind(null,e),yi:la.bind(null,e),Tn:ua.bind(null,e),_i:ia.bind(null,e)},await this.sharedClientState.start()),await this.persistence.sn(async t=>{await oa(this.ta.syncEngine,t),this.gcScheduler&&(t&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):t||this.gcScheduler.stop())})}Jo(t){const e=Ns();if(!Ts.bt(e))throw new T(E.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=ji(t.databaseInfo.databaseId,t.databaseInfo.persistenceKey);return new Ts(e,t.asyncQueue,n,t.clientId,t.initialUser)}}class wa{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Bo(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=ea.bind(null,this.syncEngine),await ho(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new bo}createDatastore(t){const e=Os(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new ks(r));var r;return function(t,e,n,r){return new Fs(t,e,n,r)}(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>Bo(this.syncEngine,t,0),s=As.bt()?new As:new Ss,new Vs(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Mo(t,e,n,r,i,s);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=I(t);p("RemoteStore","RemoteStore shutting down."),e.Gr.add(5),await qs(e),e.Hr.shutdown(),e.Jr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.ea(this.observer.next,t)}error(t){this.observer.error?this.ea(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}na(){this.muted=!0}ea(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(t,e){this.sa=t,this.k=e,this.metadata=new _,this.buffer=new Uint8Array,this.ia=new TextDecoder("utf-8"),this.ra().then(t=>{t&&t._o()?this.metadata.resolve(t.payload.metadata):this.metadata.reject(new Error("The first element of the bundle is not a metadata, it is\n             "+JSON.stringify(null==t?void 0:t.payload)))},t=>this.metadata.reject(t))}close(){return this.sa.cancel()}async getMetadata(){return this.metadata.promise}async Ho(){return await this.getMetadata(),this.ra()}async ra(){const t=await this.oa();if(null===t)return null;const e=this.ia.decode(t),n=Number(e);isNaN(n)&&this.aa(`length string (${e}) is not valid number`);const r=await this.ca(n);return new Do(JSON.parse(r),t.length+n)}ua(){return this.buffer.findIndex(t=>t==="{".charCodeAt(0))}async oa(){for(;this.ua()<0;)if(await this.ha())break;if(0===this.buffer.length)return null;const t=this.ua();t<0&&this.aa("Reached the end of bundle when a length string is expected.");const e=this.buffer.slice(0,t);return this.buffer=this.buffer.slice(t),e}async ca(t){for(;this.buffer.length<t;)await this.ha()&&this.aa("Reached the end of bundle when more is expected.");const e=this.ia.decode(this.buffer.slice(0,t));return this.buffer=this.buffer.slice(t),e}aa(t){throw this.sa.cancel(),new Error("Invalid bundle format: "+t)}async ha(){const t=await this.sa.read();if(!t.done){const e=new Uint8Array(this.buffer.length+t.value.length);e.set(this.buffer),e.set(t.value,this.buffer.length),this.buffer=e}return t.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new T(E.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(t,e){const n=I(t),r=On(n.k)+"/documents",i={documents:e.map(t=>Cn(n.k,t))},s=await n.ji("BatchGetDocuments",r,i),o=new Map;s.forEach(t=>{const e=Mn(n.k,t);o.set(e.key.toString(),e)});const a=[];return e.forEach(t=>{const e=o.get(t.toString());v(!!e),a.push(e)}),a}(this.datastore,t);return e.forEach(t=>this.recordVersion(t)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(t){this.lastWriteError=t}this.writtenDocs.add(t.toString())}delete(t){this.write(new qe(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((t,e)=>{const n=at.fromPath(e);this.mutations.push(new Be(n,this.precondition(n)))}),await async function(t,e){const n=I(t),r=On(n.k)+"/documents",i={writes:e.map(t=>jn(n.k,t))};await n.Bi("Commit",r,i)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw w();e=U.min()}const n=this.readVersions.get(t.key.toString());if(n){if(!e.isEqual(n))throw new T(E.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?Ce.updateTime(e):Ce.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(U.min()))throw new T(E.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Ce.updateTime(e)}return Ce.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(t,e,n,r){this.asyncQueue=t,this.datastore=e,this.updateFunction=n,this.deferred=r,this.la=5,this.ur=new Rs(this.asyncQueue,"transaction_retry")}run(){this.la-=1,this.fa()}fa(){this.ur.Zi(async()=>{const t=new Ea(this.datastore),e=this.da(t);e&&e.then(e=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(e)}).catch(t=>{this.wa(t)}))}).catch(t=>{this.wa(t)})})}da(t){try{const e=this.updateFunction(t);return!it(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}wa(t){this.la>0&&this._a(t)?(this.la-=1,this.asyncQueue.enqueueAndForget(()=>(this.fa(),Promise.resolve()))):this.deferred.reject(t)}_a(t){if("FirebaseError"===t.name){const e=t.code;return"aborted"===e||"failed-precondition"===e||!ze(e)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=u.UNAUTHENTICATED,this.clientId=P.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async t=>{p("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t}),this.appCheckCredentials.start(n,()=>Promise.resolve())}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new T(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new _;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=mo(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function Sa(t,e){t.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await Gi(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function Aa(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Da(t);p("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>async function(t,e){const n=I(t);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const r=Ws(n);n.Gr.add(3),await qs(n),r&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Gr.delete(3),await Us(n)}(e.remoteStore,t)),t.onlineComponents=e}async function Da(t){return t.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await Sa(t,new ma)),t.offlineComponents}async function Ca(t){return t.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await Aa(t,new wa)),t.onlineComponents}function ka(t){return Da(t).then(t=>t.persistence)}function Na(t){return Da(t).then(t=>t.localStore)}function xa(t){return Ca(t).then(t=>t.remoteStore)}function Oa(t){return Ca(t).then(t=>t.syncEngine)}async function Ra(t){const e=await Ca(t),n=e.eventManager;return n.onListen=Fo.bind(null,e.syncEngine),n.onUnlisten=Vo.bind(null,e.syncEngine),n}function La(t){return t.asyncQueue.enqueue(async()=>{const e=await ka(t),n=await xa(t);return e.setNetworkEnabled(!0),function(t){const e=I(t);return e.Gr.delete(0),Us(e)}(n)})}function Pa(t){return t.asyncQueue.enqueue(async()=>{const e=await ka(t),n=await xa(t);return e.setNetworkEnabled(!1),async function(t){const e=I(t);e.Gr.add(0),await qs(e),e.Jr.set("Offline")}(n)})}function Ma(t,e){const n=new _;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e,n){try{const r=await function(t,e){const n=I(t);return n.persistence.runTransaction("read document","readonly",t=>n.Wn.Rn(t,e))}(t,e);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new T(E.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(t){const r=mo(t,`Failed to get document '${e} from cache`);n.reject(r)}}(await Na(t),e,n)),n.promise}function Fa(t,e,n={}){const r=new _;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const s=new ba({next:s=>{e.enqueueAndForget(()=>Eo(t,o));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new T(E.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new T(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:t=>i.reject(t)}),o=new Ao(Qt(n.path),s,{includeMetadataChanges:!0,wo:!0});return Io(t,o)}(await Ra(t),t.asyncQueue,e,n,r)),r.promise}function ja(t,e){const n=new _;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e,n){try{const r=await Zi(t,e,!0),i=new Ro(e,r.zn),s=i.bo(r.documents),o=i.applyChanges(s,!1);n.resolve(o.snapshot)}catch(t){const r=mo(t,`Failed to execute query '${e} against cache`);n.reject(r)}}(await Na(t),e,n)),n.promise}function Va(t,e,n={}){const r=new _;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const s=new ba({next:n=>{e.enqueueAndForget(()=>Eo(t,o)),n.fromCache&&"server"===r.source?i.reject(new T(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:t=>i.reject(t)}),o=new Ao(n,s,{includeMetadataChanges:!0,wo:!0});return Io(t,o)}(await Ra(t),t.asyncQueue,e,n,r)),r.promise}function Ua(t,e){const n=new ba(e);return t.asyncQueue.enqueueAndForget(async()=>function(t,e){I(t).io.add(e),e.next()}(await Ra(t),n)),()=>{n.na(),t.asyncQueue.enqueueAndForget(async()=>function(t,e){I(t).io.delete(e)}(await Ra(t),n))}}function qa(t,e){const n=new _;return t.asyncQueue.enqueueAndForget(async()=>{const r=await function(t){return Ca(t).then(t=>t.datastore)}(t);new Ta(t.asyncQueue,r,e,n).run()}),n.promise}function Ba(t,e,n,r){const i=function(t,e){let n;return n="string"==typeof t?(new TextEncoder).encode(t):t,function(t,e){return new Ia(t,e)}(function(t,e){if(t instanceof Uint8Array)return va(t,e);if(t instanceof ArrayBuffer)return va(new Uint8Array(t),e);if(t instanceof ReadableStream)return t.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,Os(e));t.asyncQueue.enqueueAndForget(async()=>{pa(await Oa(t),i,r)})}function Ka(t,e){return t.asyncQueue.enqueue(async()=>function(t,e){const n=I(t);return n.persistence.runTransaction("Get named query","readonly",t=>n.Ye.getNamedQuery(t,e))}(await Na(t),e))}class $a{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ga{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof Ga&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(t,e,n){if(!n)throw new T(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Wa(t,e,n,r){if(!0===e&&!0===r)throw new T(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Qa(t){if(!at.isDocumentKey(t))throw new T(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ya(t){if(at.isDocumentKey(t))throw new T(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ja(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":w()}function Xa(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new T(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ja(t);throw new T(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function Za(t,e){if(e<=0)throw new T(E.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new T(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new T(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,Wa("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new tc({}),this._settingsFrozen=!1,t instanceof Ga?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new T(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ga(t.options.projectId)}(t))}get app(){if(!this._app)throw new T(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new tc(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new A;switch(t.type){case"gapi":const e=t.client;return v(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new N(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new T(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=za.get(t);e&&(p("ComponentProvider","Removing Datastore"),za.delete(t),e.terminate())}(this),Promise.resolve()}}function nc(t,e,n,r={}){var i;const s=(t=Xa(t,ec))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==e&&g("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=u.MOCK_USER;else{e=Object(o["e"])(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new T(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new u(s)}t._authCredentials=new D(new S(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rc{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new sc(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new rc(this.firestore,t,this._key)}}class ic{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new ic(this.firestore,t,this._query)}}class sc extends ic{constructor(t,e,n){super(t,e,Qt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new rc(this.firestore,null,new at(t))}withConverter(t){return new sc(this.firestore,t,this._path)}}function oc(t,e,...n){if(t=Object(o["i"])(t),Ha("collection","path",e),t instanceof ec){const r=G.fromString(e,...n);return Ya(r),new sc(t,null,r)}{if(!(t instanceof rc||t instanceof sc))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(G.fromString(e,...n));return Ya(r),new sc(t.firestore,null,r)}}function ac(t,e){if(t=Xa(t,ec),Ha("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new T(E.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new ic(t,null,function(t){return new Ht(G.emptyPath(),t)}(e))}function cc(t,e,...n){if(t=Object(o["i"])(t),1===arguments.length&&(e=P.A()),Ha("doc","path",e),t instanceof ec){const r=G.fromString(e,...n);return Qa(r),new rc(t,null,new at(r))}{if(!(t instanceof rc||t instanceof sc))throw new T(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(G.fromString(e,...n));return Qa(r),new rc(t.firestore,t instanceof sc?t.converter:null,new at(r))}}function uc(t,e){return t=Object(o["i"])(t),e=Object(o["i"])(e),(t instanceof rc||t instanceof sc)&&(e instanceof rc||e instanceof sc)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function hc(t,e){return t=Object(o["i"])(t),e=Object(o["i"])(e),t instanceof ic&&e instanceof ic&&t.firestore===e.firestore&&ie(t._query,e._query)&&t.converter===e.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class lc{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new Rs(this,"async_queue_retry"),this.Ra=()=>{const t=xs();t&&p("AsyncQueue","Visibility state changed to "+t.visibilityState),this.ur.er()};const t=xs();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pa(),this.ba(t)}enterRestrictedMode(t){if(!this.ya){this.ya=!0,this.Ia=t||!1;const e=xs();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ra)}}enqueue(t){if(this.Pa(),this.ya)return new Promise(()=>{});const e=new _;return this.ba(()=>this.ya&&this.Ia?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.ga.push(t),this.va()))}async va(){if(0!==this.ga.length){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(t){if(!Nr(t))throw t;p("AsyncQueue","Operation failed with retryable error: "+t)}this.ga.length>0&&this.ur.Zi(()=>this.va())}}ba(t){const e=this.ma.then(()=>(this.Ea=!0,t().catch(t=>{this.Ta=t,this.Ea=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw m("INTERNAL UNHANDLED ERROR: ",e),t}).then(t=>(this.Ea=!1,t))));return this.ma=e,e}enqueueAfterDelay(t,e,n){this.Pa(),this.Aa.indexOf(t)>-1&&(e=0);const r=po.createAndSchedule(this,t,e,n,t=>this.Va(t));return this.pa.push(r),r}Pa(){this.Ta&&w()}verifyOperationInProgress(){}async Sa(){let t;do{t=this.ma,await t}while(t!==this.ma)}Da(t){for(const e of this.pa)if(e.timerId===t)return!0;return!1}Ca(t){return this.Sa().then(()=>{this.pa.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this.pa)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.Sa()})}Na(t){this.Aa.push(t)}Va(t){const e=this.pa.indexOf(t);this.pa.splice(e,1)}}function dc(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"==typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t,["next","error","complete"])}class fc{constructor(){this._progressObserver={},this._taskCompletionResolver=new _,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(t,e,n){this._progressObserver={next:t,error:e,complete:n}}catch(t){return this._taskCompletionResolver.promise.catch(t)}then(t,e){return this._taskCompletionResolver.promise.then(t,e)}_completeWith(t){this._updateProgress(t),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(t)}_failWith(t){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(t),this._taskCompletionResolver.reject(t)}_updateProgress(t){this._lastProgress=t,this._progressObserver.next&&this._progressObserver.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=-1;class mc extends ec{constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new lc,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||yc(this),this._firestoreClient.terminate()}}function gc(t){return t._firestoreClient||yc(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function yc(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new $a(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new _a(t._authCredentials,t._appCheckCredentials,t._queue,r)}function wc(t,e){Dc(t=Xa(t,mc));const n=gc(t),r=t._freezeSettings(),i=new wa;return bc(n,i,new ga(i,r.cacheSizeBytes,null==e?void 0:e.forceOwnership))}function vc(t){Dc(t=Xa(t,mc));const e=gc(t),n=t._freezeSettings(),r=new wa;return bc(e,r,new ya(r,n.cacheSizeBytes))}function bc(t,e,n){const r=new _;return t.asyncQueue.enqueue(async()=>{try{await Sa(t,n),await Aa(t,e),r.resolve()}catch(t){if(!function(t){return"FirebaseError"===t.name?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||(22===t.code||20===t.code||11===t.code)}(t))throw t;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+t),r.reject(t)}}).then(()=>r.promise)}function Ic(t){if(t._initialized&&!t._terminated)throw new T(E.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new _;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!Dr.bt())return Promise.resolve();const e=t+"main";await Dr.delete(e)}(ji(t._databaseId,t._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function Ec(t){return function(t){const e=new _;return t.asyncQueue.enqueueAndForget(async()=>zo(await Oa(t),e)),e.promise}(gc(t=Xa(t,mc)))}function Tc(t){return La(gc(t=Xa(t,mc)))}function _c(t){return Pa(gc(t=Xa(t,mc)))}function Sc(t,e){const n=gc(t=Xa(t,mc)),r=new fc;return Ba(n,t._databaseId,e,r),r}function Ac(t,e){return Ka(gc(t=Xa(t,mc)),e).then(e=>e?new ic(t,null,e.query):null)}function Dc(t){if(t._initialized||t._terminated)throw new T(E.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new T(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new H(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kc{constructor(t){this._byteString=t}static fromBase64String(t){try{return new kc(Y.fromBase64String(t))}catch(t){throw new T(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new kc(Y.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nc{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new T(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new T(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return M(this._lat,t._lat)||M(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oc=/^__.*__$/;class Rc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return null!==this.fieldMask?new Fe(t,this.data,this.fieldMask,e,this.fieldTransforms):new Me(t,this.data,e,this.fieldTransforms)}}class Lc{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new Fe(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function Pc(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw w()}}class Mc{constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.k=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ka(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(t){return new Mc(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.$a({path:n,Oa:!1});return r.Ma(t),r}La(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.$a({path:n,Oa:!1});return r.ka(),r}Ba(t){return this.$a({path:void 0,Oa:!0})}Ua(t){return nu(t,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(t){return void 0!==this.fieldMask.find(e=>t.isPrefixOf(e))||void 0!==this.fieldTransforms.find(e=>t.isPrefixOf(e.field))}ka(){if(this.path)for(let t=0;t<this.path.length;t++)this.Ma(this.path.get(t))}Ma(t){if(0===t.length)throw this.Ua("Document fields must not be empty");if(Pc(this.xa)&&Oc.test(t))throw this.Ua('Document fields cannot begin and end with "__"')}}class Fc{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.k=n||Os(t)}ja(t,e,n,r=!1){return new Mc({xa:t,methodName:e,Ka:n,path:H.emptyPath(),Oa:!1,qa:r},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function jc(t){const e=t._freezeSettings(),n=Os(t._databaseId);return new Fc(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Vc(t,e,n,r,i,s={}){const o=t.ja(s.merge||s.mergeFields?2:0,e,n,i);Xc("Data must be an object, but it was:",o,r);const a=Yc(r,o);let c,u;if(s.merge)c=new W(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=Zc(e,r,n);if(!o.contains(i))throw new T(E.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);ru(t,i)||t.push(i)}c=new W(t),u=o.fieldTransforms.filter(t=>c.covers(t.field))}else c=null,u=o.fieldTransforms;return new Rc(new Et(a),c,u)}class Uc extends Nc{_toFieldTransform(t){if(2!==t.xa)throw 1===t.xa?t.Ua(this._methodName+"() can only appear at the top level of your update data"):t.Ua(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Uc}}function qc(t,e,n){return new Mc({xa:3,Ka:e.settings.Ka,methodName:t._methodName,Oa:n},e.databaseId,e.k,e.ignoreUndefinedProperties)}class Bc extends Nc{_toFieldTransform(t){return new Se(t.path,new ye)}isEqual(t){return t instanceof Bc}}class Kc extends Nc{constructor(t,e){super(t),this.Qa=e}_toFieldTransform(t){const e=qc(this,t,!0),n=this.Qa.map(t=>Qc(t,e)),r=new we(n);return new Se(t.path,r)}isEqual(t){return this===t}}class $c extends Nc{constructor(t,e){super(t),this.Qa=e}_toFieldTransform(t){const e=qc(this,t,!0),n=this.Qa.map(t=>Qc(t,e)),r=new be(n);return new Se(t.path,r)}isEqual(t){return this===t}}class Gc extends Nc{constructor(t,e){super(t),this.Wa=e}_toFieldTransform(t){const e=new Ee(t.k,de(t.k,this.Wa));return new Se(t.path,e)}isEqual(t){return this===t}}function zc(t,e,n,r){const i=t.ja(1,e,n);Xc("Data must be an object, but it was:",i,r);const s=[],a=Et.empty();B(r,(t,r)=>{const c=eu(e,t,n);r=Object(o["i"])(r);const u=i.La(c);if(r instanceof Uc)s.push(c);else{const t=Qc(r,u);null!=t&&(s.push(c),a.set(c,t))}});const c=new W(s);return new Lc(a,c,i.fieldTransforms)}function Hc(t,e,n,r,i,s){const a=t.ja(1,e,n),c=[Zc(e,r,n)],u=[i];if(s.length%2!=0)throw new T(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let o=0;o<s.length;o+=2)c.push(Zc(e,s[o])),u.push(s[o+1]);const h=[],l=Et.empty();for(let f=c.length-1;f>=0;--f)if(!ru(h,c[f])){const t=c[f];let e=u[f];e=Object(o["i"])(e);const n=a.La(t);if(e instanceof Uc)h.push(t);else{const r=Qc(e,n);null!=r&&(h.push(t),l.set(t,r))}}const d=new W(h);return new Lc(l,d,a.fieldTransforms)}function Wc(t,e,n,r=!1){return Qc(n,t.ja(r?4:3,e))}function Qc(t,e){if(Jc(t=Object(o["i"])(t)))return Xc("Unsupported field value:",e,t),Yc(t,e);if(t instanceof Nc)return function(t,e){if(!Pc(e.xa))throw e.Ua(t._methodName+"() can only be used with update() and set()");if(!e.path)throw e.Ua(t._methodName+"() is not currently supported inside arrays");const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Oa&&4!==e.xa)throw e.Ua("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Qc(i,e.Ba(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=Object(o["i"])(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return de(e.k,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=V.fromDate(t);return{timestampValue:En(e.k,n)}}if(t instanceof V){const n=new V(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:En(e.k,n)}}if(t instanceof xc)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof kc)return{bytesValue:Tn(e.k,t._byteString)};if(t instanceof rc){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.Ua(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:An(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.Ua("Unsupported field value: "+Ja(t))}(t,e)}function Yc(t,e){const n={};return K(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):B(t,(t,r)=>{const i=Qc(r,e.Fa(t));null!=i&&(n[t]=i)}),{mapValue:{fields:n}}}function Jc(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof V||t instanceof xc||t instanceof kc||t instanceof rc||t instanceof Nc)}function Xc(t,e,n){if(!Jc(n)||!function(t){return"object"==typeof t&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}(n)){const r=Ja(n);throw"an object"===r?e.Ua(t+" a custom object"):e.Ua(t+" "+r)}}function Zc(t,e,n){if((e=Object(o["i"])(e))instanceof Cc)return e._internalPath;if("string"==typeof e)return eu(t,e);throw nu("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}const tu=new RegExp("[~\\*/\\[\\]]");function eu(t,e,n){if(e.search(tu)>=0)throw nu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Cc(...e.split("."))._internalPath}catch(r){throw nu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=" in field "+r),o&&(c+=" in document "+i),c+=")"),new T(E.INVALID_ARGUMENT,a+t+c)}function ru(t,e){return t.some(t=>t.isEqual(e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new rc(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new su(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(ou("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class su extends iu{data(){return super.data()}}function ou(t,e){return"string"==typeof e?eu(t,e):e instanceof Cc?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class cu extends iu{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new uu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(ou("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class uu extends cu{data(t={}){return super.data(t)}}class hu{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new au(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new uu(this._firestore,this._userDataWriter,n.key,n,new au(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new T(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new uu(t._firestore,t._userDataWriter,n.doc.key,n.doc,new au(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new uu(t._firestore,t._userDataWriter,e.doc.key,e.doc,new au(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:lu(e.type),doc:r,oldIndex:i,newIndex:s}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function lu(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return w()}}function du(t,e){return t instanceof cu&&e instanceof cu?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(null===t._document?null===e._document:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof hu&&e instanceof hu&&t._firestore===e._firestore&&hc(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(t){if(Jt(t)&&0===t.explicitOrderBy.length)throw new T(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pu{}function mu(t,...e){for(const n of e)t=n._apply(t);return t}class gu extends pu{constructor(t,e,n){super(),this.Ga=t,this.za=e,this.Ha=n,this.type="where"}_apply(t){const e=jc(t.firestore),n=function(t,e,n,r,i,s,o){let a;if(i.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new T(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on FieldPath.documentId().`);if("in"===s||"not-in"===s){xu(o,s);const e=[];for(const n of o)e.push(Nu(r,t,n));a={arrayValue:{values:e}}}else a=Nu(r,t,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||xu(o,s),a=Wc(n,e,o,"in"===s||"not-in"===s);const c=xt.create(i,s,a);return function(t,e){if(e.V()){const n=Zt(t);if(null!==n&&!n.isEqual(e.field))throw new T(E.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${e.field.toString()}'`);const r=Xt(t);null!==r&&Ou(t,e.field,r)}const n=function(t,e){for(const n of t.filters)if(e.indexOf(n.op)>=0)return n.op;return null}(t,function(t){switch(t){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(null!==n)throw n===e.op?new T(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new T(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}(t,c),c}(t._query,"where",e,t.firestore._databaseId,this.Ga,this.za,this.Ha);return new ic(t.firestore,t.converter,function(t,e){const n=t.filters.concat([e]);return new Ht(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}(t._query,n))}}function yu(t,e,n){const r=e,i=ou("where",t);return new gu(i,r,n)}class wu extends pu{constructor(t,e){super(),this.Ga=t,this.Ja=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new T(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new T(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new Kt(e,n);return function(t,e){if(null===Xt(t)){const n=Zt(t);null!==n&&Ou(t,n,e.field)}}(t,r),r}(t._query,this.Ga,this.Ja);return new ic(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new Ht(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function vu(t,e="asc"){const n=e,r=ou("orderBy",t);return new wu(r,n)}class bu extends pu{constructor(t,e,n){super(),this.type=t,this.Ya=e,this.Xa=n}_apply(t){return new ic(t.firestore,t.converter,re(t._query,this.Ya,this.Xa))}}function Iu(t){return Za("limit",t),new bu("limit",t,"F")}function Eu(t){return Za("limitToLast",t),new bu("limitToLast",t,"L")}class Tu extends pu{constructor(t,e,n){super(),this.type=t,this.Za=e,this.tc=n}_apply(t){const e=ku(t,this.type,this.Za,this.tc);return new ic(t.firestore,t.converter,function(t,e){return new Ht(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,e,t.endAt)}(t._query,e))}}function _u(...t){return new Tu("startAt",t,!0)}function Su(...t){return new Tu("startAfter",t,!1)}class Au extends pu{constructor(t,e,n){super(),this.type=t,this.Za=e,this.tc=n}_apply(t){const e=ku(t,this.type,this.Za,this.tc);return new ic(t.firestore,t.converter,function(t,e){return new Ht(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,e)}(t._query,e))}}function Du(...t){return new Au("endBefore",t,!0)}function Cu(...t){return new Au("endAt",t,!1)}function ku(t,e,n,r){if(n[0]=Object(o["i"])(n[0]),n[0]instanceof iu)return function(t,e,n,r,i){if(!r)throw new T(E.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of ee(t))if(o.field.isKeyField())s.push(mt(e,r.key));else{const t=r.data.field(o.field);if(et(t))throw new T(E.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===t){const t=o.field.canonicalString();throw new T(E.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${t}' (used as the orderBy) does not exist.`)}s.push(t)}return new qt(s,i)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=jc(t.firestore);return function(t,e,n,r,i,s){const o=t.explicitOrderBy;if(i.length>o.length)throw new T(E.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<i.length;c++){const s=i[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new T(E.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof s}`);if(!te(t)&&-1!==s.indexOf("/"))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to ${r}() must be a plain document ID, but '${s}' contains a slash.`);const n=t.path.child(G.fromString(s));if(!at.isDocumentKey(n))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const i=new at(n);a.push(mt(e,i))}else{const t=Wc(n,r,s);a.push(t)}}return new qt(a,s)}(t._query,t.firestore._databaseId,i,e,n,r)}}function Nu(t,e,n){if("string"==typeof(n=Object(o["i"])(n))){if(""===n)throw new T(E.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.");if(!te(e)&&-1!==n.indexOf("/"))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(G.fromString(n));if(!at.isDocumentKey(r))throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return mt(t,new at(r))}if(n instanceof rc)return mt(t,n._key);throw new T(E.INVALID_ARGUMENT,`Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ja(n)}.`)}function xu(t,e){if(!Array.isArray(t)||0===t.length)throw new T(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new T(E.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function Ou(t,e,n){if(!n.isEqual(e))throw new T(E.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{convertValue(t,e="none"){switch(ct(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(tt(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw w()}}convertObject(t,e){const n={};return B(t.fields,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new xc(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":const n=nt(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(rt(t));default:return null}}convertTimestamp(t){const e=X(t);return new V(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=G.fromString(t);v(er(n));const r=new Ga(n.get(1),n.get(3)),i=new at(n.popFirst(5));return r.isEqual(e)||m(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lu(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Pu extends Ru{constructor(t){super(),this.firestore=t}convertBytes(t){return new kc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new rc(this.firestore,null,e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=jc(t)}set(t,e,n){this._verifyNotCommitted();const r=Fu(t,this._firestore),i=Lu(r.converter,e,n),s=Vc(this._dataReader,"WriteBatch.set",r._key,i,null!==r.converter,n);return this._mutations.push(s.toMutation(r._key,Ce.none())),this}update(t,e,n,...r){this._verifyNotCommitted();const i=Fu(t,this._firestore);let s;return s="string"==typeof(e=Object(o["i"])(e))||e instanceof Cc?Hc(this._dataReader,"WriteBatch.update",i._key,e,n,r):zc(this._dataReader,"WriteBatch.update",i._key,e),this._mutations.push(s.toMutation(i._key,Ce.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=Fu(t,this._firestore);return this._mutations=this._mutations.concat(new qe(e._key,Ce.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new T(E.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Fu(t,e){if((t=Object(o["i"])(t)).firestore!==e)throw new T(E.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(t){t=Xa(t,rc);const e=Xa(t.firestore,mc);return Fa(gc(e),t._key).then(n=>Xu(e,t,n))}class Vu extends Ru{constructor(t){super(),this.firestore=t}convertBytes(t){return new kc(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new rc(this.firestore,null,e)}}function Uu(t){t=Xa(t,rc);const e=Xa(t.firestore,mc),n=gc(e),r=new Vu(e);return Ma(n,t._key).then(n=>new cu(e,r,t._key,n,new au(null!==n&&n.hasLocalMutations,!0),t.converter))}function qu(t){t=Xa(t,rc);const e=Xa(t.firestore,mc);return Fa(gc(e),t._key,{source:"server"}).then(n=>Xu(e,t,n))}function Bu(t){t=Xa(t,ic);const e=Xa(t.firestore,mc),n=gc(e),r=new Vu(e);return fu(t._query),Va(n,t._query).then(n=>new hu(e,r,t,n))}function Ku(t){t=Xa(t,ic);const e=Xa(t.firestore,mc),n=gc(e),r=new Vu(e);return ja(n,t._query).then(n=>new hu(e,r,t,n))}function $u(t){t=Xa(t,ic);const e=Xa(t.firestore,mc),n=gc(e),r=new Vu(e);return Va(n,t._query,{source:"server"}).then(n=>new hu(e,r,t,n))}function Gu(t,e,n){t=Xa(t,rc);const r=Xa(t.firestore,mc),i=Lu(t.converter,e,n);return Ju(r,[Vc(jc(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,Ce.none())])}function zu(t,e,n,...r){t=Xa(t,rc);const i=Xa(t.firestore,mc),s=jc(i);let a;return a="string"==typeof(e=Object(o["i"])(e))||e instanceof Cc?Hc(s,"updateDoc",t._key,e,n,r):zc(s,"updateDoc",t._key,e),Ju(i,[a.toMutation(t._key,Ce.exists(!0))])}function Hu(t){return Ju(Xa(t.firestore,mc),[new qe(t._key,Ce.none())])}function Wu(t,e){const n=Xa(t.firestore,mc),r=cc(t),i=Lu(t.converter,e);return Ju(n,[Vc(jc(t.firestore),"addDoc",r._key,i,null!==t.converter,{}).toMutation(r._key,Ce.exists(!1))]).then(()=>r)}function Qu(t,...e){var n,r,i;t=Object(o["i"])(t);let s={includeMetadataChanges:!1},a=0;"object"!=typeof e[a]||dc(e[a])||(s=e[a],a++);const c={includeMetadataChanges:s.includeMetadataChanges};if(dc(e[a])){const t=e[a];e[a]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[a+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[a+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let u,h,l;if(t instanceof rc)h=Xa(t.firestore,mc),l=Qt(t._key.path),u={next:n=>{e[a]&&e[a](Xu(h,t,n))},error:e[a+1],complete:e[a+2]};else{const n=Xa(t,ic);h=Xa(n.firestore,mc),l=n._query;const r=new Vu(h);u={next:t=>{e[a]&&e[a](new hu(h,r,n,t))},error:e[a+1],complete:e[a+2]},fu(t._query)}return function(t,e,n,r){const i=new ba(r),s=new Ao(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>Io(await Ra(t),s)),()=>{i.na(),t.asyncQueue.enqueueAndForget(async()=>Eo(await Ra(t),s))}}(gc(h),l,c,u)}function Yu(t,e){return Ua(gc(t=Xa(t,mc)),dc(e)?e:{next:e})}function Ju(t,e){return function(t,e){const n=new _;return t.asyncQueue.enqueueAndForget(async()=>Uo(await Oa(t),e,n)),n.promise}(gc(t),e)}function Xu(t,e,n){const r=n.docs.get(e._key),i=new Vu(t);return new cu(t,i,e._key,r,new au(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu extends class{constructor(t,e){this._firestore=t,this._transaction=e,this._dataReader=jc(t)}get(t){const e=Fu(t,this._firestore),n=new Pu(this._firestore);return this._transaction.lookup([e._key]).then(t=>{if(!t||1!==t.length)return w();const r=t[0];if(r.isFoundDocument())return new iu(this._firestore,n,r.key,r,e.converter);if(r.isNoDocument())return new iu(this._firestore,n,e._key,null,e.converter);throw w()})}set(t,e,n){const r=Fu(t,this._firestore),i=Lu(r.converter,e,n),s=Vc(this._dataReader,"Transaction.set",r._key,i,null!==r.converter,n);return this._transaction.set(r._key,s),this}update(t,e,n,...r){const i=Fu(t,this._firestore);let s;return s="string"==typeof(e=Object(o["i"])(e))||e instanceof Cc?Hc(this._dataReader,"Transaction.update",i._key,e,n,r):zc(this._dataReader,"Transaction.update",i._key,e),this._transaction.update(i._key,s),this}delete(t){const e=Fu(t,this._firestore);return this._transaction.delete(e._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=Fu(t,this._firestore),n=new Vu(this._firestore);return super.get(t).then(t=>new cu(this._firestore,n,e._key,t._document,new au(!1,!1),e.converter))}}function th(t,e){return qa(gc(t=Xa(t,mc)),n=>e(new Zu(t,n)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eh(){return new Uc("deleteField")}function nh(){return new Bc("serverTimestamp")}function rh(...t){return new Kc("arrayUnion",t)}function ih(...t){return new $c("arrayRemove",t)}function sh(t){return new Gc("increment",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){h=t}(r["SDK_VERSION"]),Object(r["_registerComponent"])(new i["a"]("firestore",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=new mc(r,new C(t.getProvider("auth-internal")),new O(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i},"PUBLIC")),Object(r["registerVersion"])(c,"3.4.1",t),Object(r["registerVersion"])(c,"3.4.1","esm2017")}()}).call(this,n("4362"))},"1fd5":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return h})),n.d(e,"b",(function(){return S})),n.d(e,"c",(function(){return _})),n.d(e,"d",(function(){return C})),n.d(e,"e",(function(){return l})),n.d(e,"f",(function(){return x})),n.d(e,"g",(function(){return k})),n.d(e,"h",(function(){return c})),n.d(e,"i",(function(){return P})),n.d(e,"j",(function(){return d})),n.d(e,"k",(function(){return m})),n.d(e,"l",(function(){return g})),n.d(e,"m",(function(){return w})),n.d(e,"n",(function(){return v})),n.d(e,"o",(function(){return E})),n.d(e,"p",(function(){return f})),n.d(e,"q",(function(){return y})),n.d(e,"r",(function(){return I})),n.d(e,"s",(function(){return b}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,u=e>>2,h=(3&e)<<4|o>>4;let l=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(l=64)),r.push(n[u],n[h],n[l],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,o=s?n[t.charAt(i)]:0;++i;const a=i<t.length,c=a?n[t.charAt(i)]:64;++i;const u=i<t.length,h=u?n[t.charAt(i)]:64;if(++i,null==e||null==o||null==c||null==h)throw Error();const l=e<<2|o>>4;if(r.push(l),64!==c){const t=o<<4&240|c>>2;if(r.push(t),64!==h){const t=c<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){const e=r(t);return s.encodeByteArray(e,!0)},a=function(t){return o(t).replace(/\./g,"")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:void 0===t&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)e.hasOwnProperty(n)&&u(n)&&(t[n]=c(t[n],e[n]));return t}function u(t){return"__proto__"!==t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch(()=>{}),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[a(JSON.stringify(n)),a(JSON.stringify(o)),c].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function f(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(d())}function p(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(e){return!1}}function m(){return"object"===typeof self&&self.self===self}function g(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function y(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function w(){return d().indexOf("Electron/")>=0}function v(){const t=d();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function b(){return d().indexOf("MSAppHost/")>=0}function I(){return!p()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function E(){return"object"===typeof indexedDB}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const T="FirebaseError";class _ extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=T,Object.setPrototypeOf(this,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,S.prototype.create)}}class S{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?A(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new _(r,o,n);return a}}function A(t,e){return t.replace(D,(t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`})}const D=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function C(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function k(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(N(n)&&N(s)){if(!k(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function N(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t,e){const n=new O(t,e);return n.subscribe.bind(n)}class O{constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then(()=>{t(this)}).catch(t=>{this.error(t)})}next(t){this.forEachObserver(e=>{e.next(t)})}error(t){this.forEachObserver(e=>{e.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=R(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=L),void 0===r.error&&(r.error=L),void 0===r.complete&&(r.complete=L);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}}),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function R(t,e){if("object"!==typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"===typeof t[n])return!0;return!1}function L(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function P(t){return t&&t._delegate?t._delegate:t}}).call(this,n("c8ba"))},"22e5":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u}));var r=n("1fd5");class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r["a"];if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...t.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},"34e1":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:"mt-2",attrs:{row:"",wrap:""}},[n("v-col",{attrs:{md:"6",sm:"12"}},[n("InvoiceModal")],1),n("v-col",{attrs:{md:"6",sm:"12"}})],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-form",{staticClass:"invoice-content",on:{submit:function(e){return e.preventDefault(),t.submitForm.apply(null,arguments)}}},[n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"10",md:"8",lg:"6"}})],1),n("v-card",[n("v-card-title",{staticClass:"pb-0"},[t._v("Bill From:")]),n("v-card-text",[n("v-text-field",{attrs:{label:"Street Address",required:""},model:{value:t.billerStreetAddress,callback:function(e){t.billerStreetAddress=e},expression:"billerStreetAddress"}}),n("v-row",[n("v-col",{attrs:{md:"4",sm:"4"}},[n("v-text-field",{attrs:{label:"City",rules:t.wordRules,required:""},model:{value:t.billerCity,callback:function(e){t.billerCity=e},expression:"billerCity"}})],1),n("v-col",{attrs:{md:"4",sm:"4"}},[n("v-text-field",{attrs:{label:"Post Code",rules:t.postcodeRules,required:""},model:{value:t.billerZipCode,callback:function(e){t.billerZipCode=e},expression:"billerZipCode"}})],1),n("v-col",{attrs:{md:"4",sm:"4"}},[n("v-text-field",{attrs:{label:"Country",rules:t.wordRules,required:""},model:{value:t.billerCountry,callback:function(e){t.billerCountry=e},expression:"billerCountry"}})],1)],1)],1),n("v-spacer"),n("v-card-title",{staticClass:"pb-0"},[t._v("Bill To:")]),n("v-card-text",[n("v-text-field",{attrs:{label:"Client's Name",required:""},model:{value:t.clientName,callback:function(e){t.clientName=e},expression:"clientName"}}),n("v-text-field",{attrs:{label:"Client's Email",rules:t.emailRules,required:""},model:{value:t.clientEmail,callback:function(e){t.clientEmail=e},expression:"clientEmail"}}),n("v-text-field",{attrs:{label:"Street Address",required:""},model:{value:t.clientStreetAddress,callback:function(e){t.clientStreetAddress=e},expression:"clientStreetAddress"}}),n("v-row",[n("v-col",{attrs:{md:"4",sm:"4"}},[n("v-text-field",{attrs:{label:"City",rules:t.wordRules,required:""},model:{value:t.clientCity,callback:function(e){t.clientCity=e},expression:"clientCity"}})],1),n("v-col",{attrs:{md:"4",sm:"4"}},[n("v-text-field",{attrs:{label:"Post Code",rules:t.postcodeRules,required:""},model:{value:t.clientZipCode,callback:function(e){t.clientZipCode=e},expression:"clientZipCode"}})],1),n("v-col",{attrs:{md:"4",sm:"4"}},[n("v-text-field",{attrs:{label:"Country",rules:t.wordRules,required:""},model:{value:t.clientCountry,callback:function(e){t.clientCountry=e},expression:"clientCountry"}})],1)],1)],1),n("v-card-text",[n("v-row",[n("v-col",{attrs:{md:"5",sm:"6"}},[n("v-text-field",{attrs:{label:"Invoice Date",disabled:""},model:{value:t.invoiceDate,callback:function(e){t.invoiceDate=e},expression:"invoiceDate"}})],1),n("v-col",{attrs:{md:"5","offset-md":"2",sm:"6"}},[n("v-text-field",{attrs:{label:"Payment Date",disabled:""},model:{value:t.paymentDueDate,callback:function(e){t.paymentDueDate=e},expression:"paymentDueDate"}})],1)],1),n("v-select",{attrs:{items:t.listTerms,label:"Payment Terms"},model:{value:t.paymentTerms,callback:function(e){t.paymentTerms=e},expression:"paymentTerms"}}),n("v-text-field",{attrs:{label:"Product's Description"},model:{value:t.productDescription,callback:function(e){t.productDescription=e},expression:"productDescription"}})],1),n("v-card-title",[t._v("Item List")]),n("v-card-text",[n("v-simple-table",{attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",t._l(t.tableHead,(function(e,r){return n("th",{key:r},[t._v(" "+t._s(e.text)+" ")])})),0)]),n("tbody",t._l(t.invoiceItemList,(function(e,r){return n("tr",{key:r},[n("td",[n("v-text-field",{model:{value:e.name,callback:function(n){t.$set(e,"name",n)},expression:"item.name"}})],1),n("td",[n("v-text-field",{attrs:{type:"number"},on:{change:t.updateTotal},model:{value:e.qty,callback:function(n){t.$set(e,"qty",n)},expression:"item.qty"}})],1),n("td",[n("v-text-field",{attrs:{"prepend-icon":"mdi-currency-usd",readonly:""},model:{value:e.price,callback:function(n){t.$set(e,"price",n)},expression:"item.price"}})],1),n("td",[n("v-text-field",{attrs:{value:(e.total=e.qty*e.price).toFixed(2),readonly:""},scopedSlots:t._u([{key:"prepend",fn:function(){return[n("v-icon",[t._v("mdi-currency-usd")])]},proxy:!0},{key:"append-outer",fn:function(){return[n("v-icon",{attrs:{color:"red lighten-2"},on:{click:function(n){return t.deleteInvoiceItem(e.id)}}},[t._v("mdi-delete-outline")])]},proxy:!0}],null,!0)})],1)])})),0)]},proxy:!0}])}),n("div",{staticClass:"py-1 text-center text-uppercase text--secondary text-button",attrs:{id:"addNewItem"},on:{click:t.addNewInvoiceItem}},[n("v-icon",{attrs:{color:"light-blue lighten-3"}},[t._v("mdi-plus")]),t._v(" Add New Item ")],1)],1),n("v-card-actions",{staticClass:"mt-5"},[n("v-btn",{staticClass:"ma-2",attrs:{color:"error",outlined:""},on:{click:t.closeInvoice}},[t._v("Discard")]),n("v-spacer"),n("v-btn",{staticClass:"ma-2",attrs:{outlined:"",color:"grey"},on:{click:t.saveDraft}},[t._v("Save Draft")]),n("v-btn",{staticClass:"ma-2",attrs:{color:"primary",dark:""},on:{click:t.publishInvoice}},[t._v("Create Invoice")])],1)],1)],1)],1)},o=[];n("d3b7");function a(t,e,n,r,i,s,o){try{var a=t[s](o),c=a.value}catch(u){return void n(u)}a.done?e(c):Promise.resolve(c).then(r,i)}function c(t){return function(){var e=this,n=arguments;return new Promise((function(r,i){var s=t.apply(e,n);function o(t){a(s,r,i,o,c,"next",t)}function c(t){a(s,r,i,o,c,"throw",t)}o(void 0)}))}}n("96cf"),n("4de4"),n("159b");var u,h=256,l=[],d=256;while(h--)l[h]=(h+256).toString(16).substring(1);function f(t){var e=0,n=t||11;if(!u||h+n>2*d)for(u="",h=0;e<d;e++)u+=l[256*Math.random()|0];return u.substring(h,h+++n)}n("ac1f"),n("00b4");var p=function(t){return!!t||"This field is required."},m=function(t){return/[^\D]{5}/.test(t)||"It must be a valid numeric."},g=function(t){return/[a-zA-Z\s]{4,}]/.test(t)||"It must be a meaningful word."},y=function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"},w={general_required:p,numeric:m,word:g,email:y},v=n("1fd5"),b=n("22e5"),I=n("589b"),E=n("e691");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class T{constructor(t,e){this._delegate=t,this.firebase=e,Object(I["_addComponent"])(t,new b["a"]("app-compat",()=>this,"PUBLIC")),this.container=t.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this._delegate.automaticDataCollectionEnabled=t}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(t=>{this._delegate.checkDestroyed(),t()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Object(I["deleteApp"])(this._delegate)))}_getService(t,e=I["_DEFAULT_ENTRY_NAME"]){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(t);return r.isInitialized()||"EXPLICIT"!==(null===(n=r.getComponent())||void 0===n?void 0:n.instantiationMode)||r.initialize(),r.getImmediate({identifier:e})}_removeServiceInstance(t,e=I["_DEFAULT_ENTRY_NAME"]){this._delegate.container.getProvider(t).clearInstance(e)}_addComponent(t){Object(I["_addComponent"])(this._delegate,t)}_addOrOverwriteComponent(t){Object(I["_addOrOverwriteComponent"])(this._delegate,t)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},S=new v["b"]("app-compat","Firebase",_);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function A(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:I["registerVersion"],setLogLevel:I["setLogLevel"],onLog:I["onLog"],apps:null,SDK_VERSION:I["SDK_VERSION"],INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:I}};function r(t){delete e[t]}function i(t){if(t=t||I["_DEFAULT_ENTRY_NAME"],!Object(v["d"])(e,t))throw S.create("no-app",{appName:t});return e[t]}function s(r,i={}){const s=I["initializeApp"](r,i);if(Object(v["d"])(e,s.name))return e[s.name];const o=new t(s,n);return e[s.name]=o,o}function o(){return Object.keys(e).map(t=>e[t])}function a(e){const r=e.name,s=r.replace("-compat","");if(I["_registerComponent"](e)&&"PUBLIC"===e.type){const o=(t=i())=>{if("function"!==typeof t[s])throw S.create("invalid-app-argument",{appName:r});return t[s]()};void 0!==e.serviceProps&&Object(v["h"])(o,e.serviceProps),n[s]=o,t.prototype[s]=function(...t){const n=this._getService.bind(this,r);return n.apply(this,e.multipleInstances?t:[])}}return"PUBLIC"===e.type?n[s]:null}function c(t,e){if("serverAuth"===e)return null;const n=e;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:o}),i["App"]=t,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(){const t=A(T);function e(e){Object(v["h"])(t,e)}return t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:D,extendNamespace:e,createSubscribe:v["f"],ErrorFactory:v["b"],deepExtend:v["h"]}),t}const C=D(),k=new E["b"]("@firebase/app-compat"),N="@firebase/app-compat",x="0.1.12";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function O(t){Object(I["registerVersion"])(N,x,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Object(v["k"])()&&void 0!==self.firebase){k.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&k.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const R=C;O();var L="firebase",P="9.6.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
R.registerVersion(L,P,"app-compat");var M=n("0829");const F="@firebase/firestore-compat",j="0.1.10";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(t,e){if(void 0===e)return{merge:!1};if(void 0!==e.mergeFields&&void 0!==e.merge)throw new M["g"]("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(){if("undefined"===typeof Uint8Array)throw new M["g"]("unimplemented","Uint8Arrays are not available in this environment.")}function q(){if(!Object(M["r"])())throw new M["g"]("unimplemented","Blobs are unavailable in Firestore in this environment.")}class B{constructor(t){this._delegate=t}static fromBase64String(t){return q(),new B(M["b"].fromBase64String(t))}static fromUint8Array(t){return U(),new B(M["b"].fromUint8Array(t))}toBase64(){return q(),this._delegate.toBase64()}toUint8Array(){return U(),this._delegate.toUint8Array()}isEqual(t){return this._delegate.isEqual(t._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t){return $(t,["next","error","complete"])}function $(t,e){if("object"!==typeof t||null===t)return!1;const n=t;for(const r of e)if(r in n&&"function"===typeof n[r])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{enableIndexedDbPersistence(t,e){return Object(M["F"])(t._delegate,{forceOwnership:e})}enableMultiTabIndexedDbPersistence(t){return Object(M["G"])(t._delegate)}clearIndexedDbPersistence(t){return Object(M["x"])(t._delegate)}}class z{constructor(t,e,n){this._delegate=e,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},t instanceof M["m"]||(this._appCompat=t)}get _databaseId(){return this._delegate._databaseId}settings(t){const e=this._delegate._getSettings();t.merge||e.host===t.host||Object(M["s"])("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),t.merge&&(t=Object.assign(Object.assign({},e),t),delete t.merge),this._delegate._setSettings(t)}useEmulator(t,e,n={}){Object(M["A"])(this._delegate,t,e,n)}enableNetwork(){return Object(M["H"])(this._delegate)}disableNetwork(){return Object(M["D"])(this._delegate)}enablePersistence(t){let e=!1,n=!1;return t&&(e=!!t.synchronizeTabs,n=!!t.experimentalForceOwningTab,Object(M["t"])("synchronizeTabs",e,"experimentalForceOwningTab",n)),e?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return Object(M["lb"])(this._delegate)}onSnapshotsInSync(t){return Object(M["Y"])(this._delegate,t)}get app(){if(!this._appCompat)throw new M["g"]("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(t){try{return new at(this,Object(M["y"])(this._delegate,t))}catch(e){throw Z(e,"collection()","Firestore.collection()")}}doc(t){try{return new X(this,Object(M["E"])(this._delegate,t))}catch(e){throw Z(e,"doc()","Firestore.doc()")}}collectionGroup(t){try{return new it(this,Object(M["z"])(this._delegate,t))}catch(e){throw Z(e,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(t){return Object(M["db"])(this._delegate,e=>t(new Q(this,e)))}batch(){return Object(M["K"])(this._delegate),new Y(new M["l"](this._delegate,t=>Object(M["L"])(this._delegate,t)))}loadBundle(t){return Object(M["V"])(this._delegate,t)}namedQuery(t){return Object(M["W"])(this._delegate,t).then(t=>t?new it(this,t):null)}}class H extends M["a"]{constructor(t){super(),this.firestore=t}convertBytes(t){return new B(new M["b"](t))}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return X.forKey(e,this.firestore,null)}}function W(t){Object(M["gb"])(t)}class Q{constructor(t,e){this._firestore=t,this._delegate=e,this._userDataWriter=new H(t)}get(t){const e=ct(t);return this._delegate.get(e).then(t=>new nt(this._firestore,new M["e"](this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,e.converter)))}set(t,e,n){const r=ct(t);return n?(V("Transaction.set",n),this._delegate.set(r,e,n)):this._delegate.set(r,e),this}update(t,e,n,...r){const i=ct(t);return 2===arguments.length?this._delegate.update(i,e):this._delegate.update(i,e,n,...r),this}delete(t){const e=ct(t);return this._delegate.delete(e),this}}class Y{constructor(t){this._delegate=t}set(t,e,n){const r=ct(t);return n?(V("WriteBatch.set",n),this._delegate.set(r,e,n)):this._delegate.set(r,e),this}update(t,e,n,...r){const i=ct(t);return 2===arguments.length?this._delegate.update(i,e):this._delegate.update(i,e,n,...r),this}delete(t){const e=ct(t);return this._delegate.delete(e),this}commit(){return this._delegate.commit()}}class J{constructor(t,e,n){this._firestore=t,this._userDataWriter=e,this._delegate=n}fromFirestore(t,e){const n=new M["i"](this._firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,null);return this._delegate.fromFirestore(new rt(this._firestore,n),null!==e&&void 0!==e?e:{})}toFirestore(t,e){return e?this._delegate.toFirestore(t,e):this._delegate.toFirestore(t)}static getInstance(t,e){const n=J.INSTANCES;let r=n.get(t);r||(r=new WeakMap,n.set(t,r));let i=r.get(e);return i||(i=new J(t,new H(t),e),r.set(e,i)),i}}J.INSTANCES=new WeakMap;class X{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new H(t)}static forPath(t,e,n){if(t.length%2!==0)throw new M["g"]("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${t.canonicalString()} has ${t.length}`);return new X(e,new M["d"](e._delegate,n,new M["n"](t)))}static forKey(t,e,n){return new X(e,new M["d"](e._delegate,n,t))}get id(){return this._delegate.id}get parent(){return new at(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(t){try{return new at(this.firestore,Object(M["y"])(this._delegate,t))}catch(e){throw Z(e,"collection()","DocumentReference.collection()")}}isEqual(t){return t=Object(v["i"])(t),t instanceof M["d"]&&Object(M["cb"])(this._delegate,t)}set(t,e){e=V("DocumentReference.set",e);try{return e?Object(M["fb"])(this._delegate,t,e):Object(M["fb"])(this._delegate,t)}catch(n){throw Z(n,"setDoc()","DocumentReference.set()")}}update(t,e,...n){try{return 1===arguments.length?Object(M["kb"])(this._delegate,t):Object(M["kb"])(this._delegate,t,e,...n)}catch(r){throw Z(r,"updateDoc()","DocumentReference.update()")}}delete(){return Object(M["B"])(this._delegate)}onSnapshot(...t){const e=tt(t),n=et(t,t=>new nt(this.firestore,new M["e"](this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter)));return Object(M["X"])(this._delegate,e,n)}get(t){let e;return e="cache"===(null===t||void 0===t?void 0:t.source)?Object(M["N"])(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?Object(M["O"])(this._delegate):Object(M["M"])(this._delegate),e.then(t=>new nt(this.firestore,new M["e"](this.firestore._delegate,this._userDataWriter,t._key,t._document,t.metadata,this._delegate.converter)))}withConverter(t){return new X(this.firestore,t?this._delegate.withConverter(J.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function Z(t,e,n){return t.message=t.message.replace(e,n),t}function tt(t){for(const e of t)if("object"===typeof e&&!K(e))return e;return{}}function et(t,e){var n,r;let i;return i=K(t[0])?t[0]:K(t[1])?t[1]:"function"===typeof t[0]?{next:t[0],error:t[1],complete:t[2]}:{next:t[1],error:t[2],complete:t[3]},{next:t=>{i.next&&i.next(e(t))},error:null===(n=i.error)||void 0===n?void 0:n.bind(i),complete:null===(r=i.complete)||void 0===r?void 0:r.bind(i)}}class nt{constructor(t,e){this._firestore=t,this._delegate=e}get ref(){return new X(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(t){return this._delegate.data(t)}get(t,e){return this._delegate.get(t,e)}isEqual(t){return Object(M["hb"])(this._delegate,t._delegate)}}class rt extends nt{data(t){const e=this._delegate.data(t);return Object(M["q"])(void 0!==e,"Document in a QueryDocumentSnapshot should exist"),e}}class it{constructor(t,e){this.firestore=t,this._delegate=e,this._userDataWriter=new H(t)}where(t,e,n){try{return new it(this.firestore,Object(M["ab"])(this._delegate,Object(M["mb"])(t,e,n)))}catch(r){throw Z(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(t,e){try{return new it(this.firestore,Object(M["ab"])(this._delegate,Object(M["Z"])(t,e)))}catch(n){throw Z(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(t){try{return new it(this.firestore,Object(M["ab"])(this._delegate,Object(M["T"])(t)))}catch(e){throw Z(e,"limit()","Query.limit()")}}limitToLast(t){try{return new it(this.firestore,Object(M["ab"])(this._delegate,Object(M["U"])(t)))}catch(e){throw Z(e,"limitToLast()","Query.limitToLast()")}}startAt(...t){try{return new it(this.firestore,Object(M["ab"])(this._delegate,Object(M["jb"])(...t)))}catch(e){throw Z(e,"startAt()","Query.startAt()")}}startAfter(...t){try{return new it(this.firestore,Object(M["ab"])(this._delegate,Object(M["ib"])(...t)))}catch(e){throw Z(e,"startAfter()","Query.startAfter()")}}endBefore(...t){try{return new it(this.firestore,Object(M["ab"])(this._delegate,Object(M["J"])(...t)))}catch(e){throw Z(e,"endBefore()","Query.endBefore()")}}endAt(...t){try{return new it(this.firestore,Object(M["ab"])(this._delegate,Object(M["I"])(...t)))}catch(e){throw Z(e,"endAt()","Query.endAt()")}}isEqual(t){return Object(M["bb"])(this._delegate,t._delegate)}get(t){let e;return e="cache"===(null===t||void 0===t?void 0:t.source)?Object(M["Q"])(this._delegate):"server"===(null===t||void 0===t?void 0:t.source)?Object(M["R"])(this._delegate):Object(M["P"])(this._delegate),e.then(t=>new ot(this.firestore,new M["j"](this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot)))}onSnapshot(...t){const e=tt(t),n=et(t,t=>new ot(this.firestore,new M["j"](this.firestore._delegate,this._userDataWriter,this._delegate,t._snapshot)));return Object(M["X"])(this._delegate,e,n)}withConverter(t){return new it(this.firestore,t?this._delegate.withConverter(J.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}class st{constructor(t,e){this._firestore=t,this._delegate=e}get type(){return this._delegate.type}get doc(){return new rt(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class ot{constructor(t,e){this._firestore=t,this._delegate=e}get query(){return new it(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(t=>new rt(this._firestore,t))}docChanges(t){return this._delegate.docChanges(t).map(t=>new st(this._firestore,t))}forEach(t,e){this._delegate.forEach(n=>{t.call(e,new rt(this._firestore,n))})}isEqual(t){return Object(M["hb"])(this._delegate,t._delegate)}}class at extends it{constructor(t,e){super(t,e),this.firestore=t,this._delegate=e}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const t=this._delegate.parent;return t?new X(this.firestore,t):null}doc(t){try{return new X(this.firestore,void 0===t?Object(M["E"])(this._delegate):Object(M["E"])(this._delegate,t))}catch(e){throw Z(e,"doc()","CollectionReference.doc()")}}add(t){return Object(M["u"])(this._delegate,t).then(t=>new X(this.firestore,t))}isEqual(t){return Object(M["cb"])(this._delegate,t._delegate)}withConverter(t){return new at(this.firestore,t?this._delegate.withConverter(J.getInstance(this.firestore,t)):this._delegate.withConverter(null))}}function ct(t){return Object(M["p"])(t,M["d"])}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(...t){this._delegate=new M["f"](...t)}static documentId(){return new ut(M["o"].keyField().canonicalString())}isEqual(t){return t=Object(v["i"])(t),t instanceof M["f"]&&this._delegate._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(t){this._delegate=t}static serverTimestamp(){const t=Object(M["eb"])();return t._methodName="FieldValue.serverTimestamp",new ht(t)}static delete(){const t=Object(M["C"])();return t._methodName="FieldValue.delete",new ht(t)}static arrayUnion(...t){const e=Object(M["w"])(...t);return e._methodName="FieldValue.arrayUnion",new ht(e)}static arrayRemove(...t){const e=Object(M["v"])(...t);return e._methodName="FieldValue.arrayRemove",new ht(e)}static increment(t){const e=Object(M["S"])(t);return e._methodName="FieldValue.increment",new ht(e)}isEqual(t){return this._delegate.isEqual(t._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lt={Firestore:z,GeoPoint:M["h"],Timestamp:M["k"],Blob:B,Transaction:Q,WriteBatch:Y,DocumentReference:X,DocumentSnapshot:nt,Query:it,QueryDocumentSnapshot:rt,QuerySnapshot:ot,CollectionReference:at,FieldPath:ut,FieldValue:ht,setLogLevel:W,CACHE_SIZE_UNLIMITED:M["c"]};function dt(t,e){t.INTERNAL.registerComponent(new b["a"]("firestore-compat",t=>{const n=t.getProvider("app-compat").getImmediate(),r=t.getProvider("firestore").getImmediate();return e(n,r)},"PUBLIC").setServiceProps(Object.assign({},lt)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){dt(t,(t,e)=>new z(t,e,new G)),t.registerVersion(F,j)}ft(R);var pt={apiKey:"AIzaSyDBEkl1aJoUygDDx01HGGtPjeC_FgQfdPk",authDomain:"invoice-app-9da01.firebaseapp.com",projectId:"invoice-app-9da01",storageBucket:"invoice-app-9da01.appspot.com",messagingSenderId:"40190152197",appId:"1:40190152197:web:40857fddccdd61ff1d166c"},mt=R.initializeApp(pt),gt=mt.firestore(),yt={name:"invoiceModal",data:function(){return{billerStreetAddress:null,billerCity:null,billerZipCode:null,billerCountry:null,clientName:null,clientEmail:null,clientStreetAddress:null,clientCity:null,clientZipCode:null,clientCountry:null,invoiceDateUnix:null,invoiceDate:null,paymentTerms:null,paymentDueDateUnix:null,paymentDueDate:null,productDescription:null,invoicePending:null,invoiceDraft:null,invoiceItemList:[{name:"abdc",qty:12,price:5.9,total:12}],invoiceTotal:0,dateOptions:{year:"numeric",month:"short",day:"numeric"},listTerms:[{text:"Next 30 days",value:"30"},{text:"Next 45 days",value:"45"},{text:"Next 60 days",value:"60"},{text:"Next 75 days",value:"75"},{text:"Next 90 days",value:"90"}],tableHead:[{text:"Item Name",width:"60%"},{text:"Qty",width:"70px"},{text:"Price",width:"50px"},{text:"Total",width:"20%"}],postcodeRules:[function(t){return w.general_required(t)},function(t){return w.numeric(t)}],wordRules:[function(t){return w.general_required(t)},function(t){return w.word(t)}],emailRules:[function(t){return w.general_required(t)},function(t){return w.email(t)}]}},methods:{deleteInvoiceItem:function(t){this.invoiceItemList=this.invoiceItemList.filter((function(e){return e.id!==t}))},addNewInvoiceItem:function(){this.invoiceItemList.push({id:f(),name:"",qty:0,price:0,total:0})},updateTotal:function(t){this.item.qty=t.target.value,this.item.total=this.item.qty*this.item.price},calculateInvoiceTotal:function(){var t=this;this.invoiceTotal=0,this.invoiceItemList.forEach((function(e){t.invoiceTotal+=e.total}))},closeInvoice:function(){this.$router.push("/invoice")},publishInvoice:function(){this.invoicePending=!0},saveDraft:function(){this.invoiceDraft=!0},uploadInvoice:function(){var t=this;return c(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.invoiceItemList.length<=0)){e.next=3;break}return alert("Please ensure you filled out work items !"),e.abrupt("return");case 3:return t.calculateInvoiceTotal(),n=gt.collection("invoices").doc(),e.next=7,n.set({invoiceId:f(6),billerStreetAddress:t.billerStreetAddress,billerCity:t.billerCity,billerZipCode:t.billerZipCode,billerCountry:t.billerCountry,clientName:t.clientName,clientEmail:t.clientEmail,clientStreetAddress:t.clientStreetAddress,clientCity:t.clientCity,clientZipCode:t.clientZipCode,clientCountry:t.clientCountry,invoiceDateUnix:t.invoiceDateUnix,invoiceDate:t.invoiceDate,paymentTerms:t.paymentTerms,paymentDueDateUnix:t.paymentDueDateUnix,paymentDueDate:t.paymentDueDate,productDescription:t.productDescription,invoiceItemList:t.invoiceItemList,invoiceTotal:t.invoiceTotal,invoicePending:t.invoicePending,invoiceDraft:t.invoiceDraft,invoicePaid:null});case 7:case"end":return e.stop()}}),e)})))()},submitForm:function(){this.uploadInvoice()}},created:function(){this.invoiceDateUnix=Date.now(),this.invoiceDate=new Date(this.invoiceDateUnix).toLocaleDateString("en-us",this.dateOptions)},watch:{paymentTerms:function(){var t=new Date;this.paymentDueDateUnix=t.setDate(t.getDate()+parseInt(this.paymentTerms)),this.paymentDueDate=new Date(this.paymentDueDateUnix).toLocaleDateString("en-us",this.dateOptions)}}},wt=yt,vt=(n("b75b"),n("2877")),bt=n("6544"),It=n.n(bt),Et=n("8336"),Tt=n("b0af"),_t=n("99d9"),St=n("62ad"),At=n("a523"),Dt=n("5530"),Ct=(n("caad"),n("2532"),n("07ac"),n("7db0"),n("58df")),kt=n("7e2b"),Nt=n("3206"),xt=Object(Ct["a"])(kt["a"],Object(Nt["b"])("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(t){var e=this,n=function(t){return t.$watch("hasError",(function(n){e.$set(e.errorBag,t._uid,n)}),{immediate:!0})},r={_uid:t._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=t.$watch("shouldValidate",(function(i){i&&(e.errorBag.hasOwnProperty(t._uid)||(r.valid=n(t)))})):r.valid=n(t),r},validate:function(){return 0===this.inputs.filter((function(t){return!t.validate(!0)})).length},reset:function(){this.inputs.forEach((function(t){return t.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(t){return t.resetValidation()})),this.resetErrorBag()},register:function(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister:function(t){var e=this.inputs.find((function(e){return e._uid===t._uid}));if(e){var n=this.watchers.find((function(t){return t._uid===e._uid}));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((function(t){return t._uid!==e._uid})),this.inputs=this.inputs.filter((function(t){return t._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:Object(Dt["a"])({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}),Ot=n("132d"),Rt=n("0fd9"),Lt=n("b974"),Pt=n("1f4f"),Mt=n("2fa4"),Ft=n("8654"),jt=Object(vt["a"])(wt,s,o,!1,null,null,null),Vt=jt.exports;It()(jt,{VBtn:Et["a"],VCard:Tt["a"],VCardActions:_t["a"],VCardText:_t["c"],VCardTitle:_t["d"],VCol:St["a"],VContainer:At["a"],VForm:xt,VIcon:Ot["a"],VRow:Rt["a"],VSelect:Lt["a"],VSimpleTable:Pt["a"],VSpacer:Mt["a"],VTextField:Ft["a"]});var Ut={components:{InvoiceModal:Vt}},qt=Ut,Bt=n("a722"),Kt=Object(vt["a"])(qt,r,i,!1,null,null,null);e["default"]=Kt.exports;It()(Kt,{VCol:St["a"],VLayout:Bt["a"]})},4362:function(t,e,n){e.nextTick=function(t){var e=Array.prototype.slice.call(arguments);e.shift(),setTimeout((function(){t.apply(null,e)}),0)},e.platform=e.arch=e.execPath=e.title="browser",e.pid=1,e.browser=!0,e.env={},e.argv=[],e.binding=function(t){throw new Error("No such module. (Possibly not yet loaded)")},function(){var t,r="/";e.cwd=function(){return r},e.chdir=function(e){t||(t=n("df7c")),r=t.resolve(e,r)}}(),e.exit=e.kill=e.umask=e.dlopen=e.uptime=e.memoryUsage=e.uvCounters=function(){},e.features={}},"589b":function(t,e,n){"use strict";n.r(e),n.d(e,"SDK_VERSION",(function(){return Q})),n.d(e,"_DEFAULT_ENTRY_NAME",(function(){return M})),n.d(e,"_addComponent",(function(){return U})),n.d(e,"_addOrOverwriteComponent",(function(){return q})),n.d(e,"_apps",(function(){return j})),n.d(e,"_clearComponents",(function(){return G})),n.d(e,"_components",(function(){return V})),n.d(e,"_getProvider",(function(){return K})),n.d(e,"_registerComponent",(function(){return B})),n.d(e,"_removeServiceInstance",(function(){return $})),n.d(e,"deleteApp",(function(){return Z})),n.d(e,"getApp",(function(){return J})),n.d(e,"getApps",(function(){return X})),n.d(e,"initializeApp",(function(){return Y})),n.d(e,"onLog",(function(){return et})),n.d(e,"registerVersion",(function(){return tt})),n.d(e,"setLogLevel",(function(){return nt}));var r=n("22e5"),i=n("e691"),s=n("1fd5");n.d(e,"FirebaseError",(function(){return s["c"]}));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map(t=>{if(a(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}function a(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const c="@firebase/app",u="0.7.11",h=new i["b"]("@firebase/app"),l="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",y="@firebase/auth-compat",w="@firebase/database",v="@firebase/database-compat",b="@firebase/functions",I="@firebase/functions-compat",E="@firebase/installations",T="@firebase/installations-compat",_="@firebase/messaging",S="@firebase/messaging-compat",A="@firebase/performance",D="@firebase/performance-compat",C="@firebase/remote-config",k="@firebase/remote-config-compat",N="@firebase/storage",x="@firebase/storage-compat",O="@firebase/firestore",R="@firebase/firestore-compat",L="firebase",P="9.6.1",M="[DEFAULT]",F={[c]:"fire-core",[l]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[g]:"fire-auth",[y]:"fire-auth-compat",[w]:"fire-rtdb",[v]:"fire-rtdb-compat",[b]:"fire-fn",[I]:"fire-fn-compat",[E]:"fire-iid",[T]:"fire-iid-compat",[_]:"fire-fcm",[S]:"fire-fcm-compat",[A]:"fire-perf",[D]:"fire-perf-compat",[C]:"fire-rc",[k]:"fire-rc-compat",[N]:"fire-gcs",[x]:"fire-gcs-compat",[O]:"fire-fst",[R]:"fire-fst-compat","fire-js":"fire-js",[L]:"fire-js-all"},j=new Map,V=new Map;function U(t,e){try{t.container.addComponent(e)}catch(n){h.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function q(t,e){t.container.addOrOverwriteComponent(e)}function B(t){const e=t.name;if(V.has(e))return h.debug(`There were multiple attempts to register component ${e}.`),!1;V.set(e,t);for(const n of j.values())U(n,t);return!0}function K(t,e){return t.container.getProvider(e)}function $(t,e,n=M){K(t,e).clearInstance(n)}function G(){V.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},H=new s["b"]("app","Firebase",z);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw H.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q=P;function Y(t,e={}){if("object"!==typeof e){const t=e;e={name:t}}const n=Object.assign({name:M,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!==typeof i||!i)throw H.create("bad-app-name",{appName:String(i)});const o=j.get(i);if(o){if(Object(s["g"])(t,o.options)&&Object(s["g"])(n,o.config))return o;throw H.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of V.values())a.addComponent(r);const c=new W(t,n,a);return j.set(i,c),c}function J(t=M){const e=j.get(t);if(!e)throw H.create("no-app",{appName:t});return e}function X(){return Array.from(j.values())}async function Z(t){const e=t.name;j.has(e)&&(j.delete(e),await Promise.all(t.container.getProviders().map(t=>t.delete())),t.isDeleted=!0)}function tt(t,e,n){var i;let s=null!==(i=F[t])&&void 0!==i?i:t;n&&(s+="-"+n);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void h.warn(t.join(" "))}B(new r["a"](s+"-version",()=>({library:s,version:e}),"VERSION"))}function et(t,e){if(null!==t&&"function"!==typeof t)throw H.create("invalid-log-argument");Object(i["d"])(t,e)}function nt(t){Object(i["c"])(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t){B(new r["a"]("platform-logger",t=>new o(t),"PRIVATE")),tt(c,u,t),tt(c,u,"esm2017"),tt("fire-js","")}rt("")},"8f6b":function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Cr})),n.d(e,"b",(function(){return Nr})),n.d(e,"c",(function(){return kr})),n.d(e,"d",(function(){return Or})),n.d(e,"e",(function(){return xr})),n.d(e,"f",(function(){return Rr})),n.d(e,"g",(function(){return Lr})),n.d(e,"h",(function(){return Ar})),n.d(e,"i",(function(){return Dr}));var r,i="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof t?t:"undefined"!==typeof self?self:{},s={},o=o||{},a=i||self;function c(){}function u(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function h(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function l(t){return Object.prototype.hasOwnProperty.call(t,d)&&t[d]||(t[d]=++f)}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function m(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function g(t,e,n){return g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:m,g.apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function w(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function v(){this.s=this.s,this.o=this.o}var b=0,I={};v.prototype.s=!1,v.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=b)){var t=l(this);delete I[t]}},v.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const E=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"===typeof t)return"string"!==typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},T=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i="string"===typeof t?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function _(t){t:{var e=Bn;const n=t.length,r="string"===typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"===typeof t?t.charAt(e):t[e]}function S(t){return Array.prototype.concat.apply([],arguments)}function A(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function D(t){return/^[\s\xa0]*$/.test(t)}var C,k=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function N(t,e){return-1!=t.indexOf(e)}function x(t,e){return t<e?-1:t>e?1:0}t:{var O=a.navigator;if(O){var R=O.userAgent;if(R){C=R;break t}}C=""}function L(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function P(t){const e={};for(const n in t)e[n]=t[n];return e}var M="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function F(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<M.length;e++)n=M[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function j(t){return j[" "](t),t}function V(t){var e=X;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}j[" "]=c;var U,q=N(C,"Opera"),B=N(C,"Trident")||N(C,"MSIE"),K=N(C,"Edge"),$=K||B,G=N(C,"Gecko")&&!(N(C.toLowerCase(),"webkit")&&!N(C,"Edge"))&&!(N(C,"Trident")||N(C,"MSIE"))&&!N(C,"Edge"),z=N(C.toLowerCase(),"webkit")&&!N(C,"Edge");function H(){var t=a.document;return t?t.documentMode:void 0}t:{var W="",Q=function(){var t=C;return G?/rv:([^\);]+)(\)|;)/.exec(t):K?/Edge\/([\d\.]+)/.exec(t):B?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t):z?/WebKit\/(\S+)/.exec(t):q?/(?:Version)[ \/]?(\S+)/.exec(t):void 0}();if(Q&&(W=Q?Q[1]:""),B){var Y=H();if(null!=Y&&Y>parseFloat(W)){U=String(Y);break t}}U=W}var J,X={};function Z(){return V((function(){let t=0;const e=k(String(U)).split("."),n=k("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=x(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||x(0==i[2].length,0==s[2].length)||x(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(a.document&&B){var tt=H();J=tt||(parseInt(U,10)||void 0)}else J=void 0;var et=J,nt=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{a.addEventListener("test",c,e),a.removeEventListener("test",c,e)}catch(n){}return t}();function rt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function it(t,e){if(rt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(G){t:{try{j(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:st[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&it.Z.h.call(this)}}rt.prototype.h=function(){this.defaultPrevented=!0},w(it,rt);var st={2:"touch",3:"pen",4:"mouse"};it.prototype.h=function(){it.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ot="closure_listenable_"+(1e6*Math.random()|0),at=0;function ct(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++at,this.ca=this.fa=!1}function ut(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ht(t){this.src=t,this.g={},this.h=0}function lt(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=E(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(ut(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function dt(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}ht.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=dt(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new ct(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};var ft="closure_lm_"+(1e6*Math.random()|0),pt={};function mt(t,e,n,r,i){if(r&&r.once)return wt(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)mt(t,e[s],n,r,i);return null}return n=St(n),t&&t[ot]?t.N(e,n,h(r)?!!r.capture:!!r,i):gt(t,e,n,!1,r,i)}function gt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=h(i)?!!i.capture:!!i,a=Tt(t);if(a||(t[ft]=a=new ht(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=yt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)nt||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(It(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function yt(){function t(n){return e.call(t.src,t.listener,n)}var e=Et;return t}function wt(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)wt(t,e[s],n,r,i);return null}return n=St(n),t&&t[ot]?t.O(e,n,h(r)?!!r.capture:!!r,i):gt(t,e,n,!0,r,i)}function vt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)vt(t,e[s],n,r,i);else r=h(r)?!!r.capture:!!r,n=St(n),t&&t[ot]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=dt(s,n,r,i),-1<n&&(ut(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Tt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=dt(e,n,r,i)),(n=-1<t?e[t]:null)&&bt(n))}function bt(t){if("number"!==typeof t&&t&&!t.ca){var e=t.src;if(e&&e[ot])lt(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(It(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Tt(e))?(lt(n,t),0==n.h&&(n.src=null,e[ft]=null)):ut(t)}}}function It(t){return t in pt?pt[t]:pt[t]="on"+t}function Et(t,e){if(t.ca)t=!0;else{e=new it(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&bt(t),t=n.call(r,e)}return t}function Tt(t){return t=t[ft],t instanceof ht?t:null}var _t="__closure_events_fn_"+(1e9*Math.random()>>>0);function St(t){return"function"===typeof t?t:(t[_t]||(t[_t]=function(e){return t.handleEvent(e)}),t[_t])}function At(){v.call(this),this.i=new ht(this),this.P=this,this.I=null}function Dt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"===typeof e)e=new rt(e,t);else if(e instanceof rt)e.target=e.target||t;else{var i=e;e=new rt(r,t),F(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Ct(o,r,!0,e)&&i}if(o=e.g=t,i=Ct(o,r,!0,e)&&i,i=Ct(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Ct(o,r,!1,e)&&i}function Ct(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&lt(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}w(At,v),At.prototype[ot]=!0,At.prototype.removeEventListener=function(t,e,n,r){vt(this,t,e,n,r)},At.prototype.M=function(){if(At.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)ut(n[r]);delete e.g[t],e.h--}}this.I=null},At.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},At.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var kt=a.JSON.stringify;function Nt(){var t=Vt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class xt{constructor(){this.h=this.g=null}add(t,e){const n=Rt.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var Ot,Rt=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new Lt,t=>t.reset());class Lt{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Pt(t){a.setTimeout(()=>{throw t},0)}function Mt(t,e){Ot||Ft(),jt||(Ot(),jt=!0),Vt.add(t,e)}function Ft(){var t=a.Promise.resolve(void 0);Ot=function(){t.then(Ut)}}var jt=!1,Vt=new xt;function Ut(){for(var t;t=Nt();){try{t.h.call(t.g)}catch(n){Pt(n)}var e=Rt;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}jt=!1}function qt(t,e){At.call(this),this.h=t||1,this.g=e||a,this.j=g(this.kb,this),this.l=Date.now()}function Bt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Kt(t,e,n){if("function"===typeof t)n&&(t=g(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=g(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function $t(t){t.g=Kt(()=>{t.g=null,t.i&&(t.i=!1,$t(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}w(qt,At),r=qt.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Dt(this,"tick"),this.da&&(Bt(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){qt.Z.M.call(this),Bt(this),delete this.g};class Gt extends v{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:$t(this)}M(){super.M(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function zt(t){v.call(this),this.h=t,this.g={}}w(zt,v);var Ht=[];function Wt(t,e,n,r){Array.isArray(n)||(n&&(Ht[0]=n.toString()),n=Ht);for(var i=0;i<n.length;i++){var s=mt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Qt(t){L(t.g,(function(t,e){this.g.hasOwnProperty(e)&&bt(t)}),t),t.g={}}function Yt(){this.g=!0}function Jt(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var h=u[0];u=u[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+u+"&":o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function Xt(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Zt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+ee(t,n)+(r?" "+r:"")}))}function te(t,e){t.info((function(){return"TIMEOUT: "+e}))}function ee(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return kt(n)}catch(a){return e}}zt.prototype.M=function(){zt.Z.M.call(this),Qt(this)},zt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Yt.prototype.Aa=function(){this.g=!1},Yt.prototype.info=function(){};var ne={},re=null;function ie(){return re=re||new At}function se(t){rt.call(this,ne.Ma,t)}function oe(t){const e=ie();Dt(e,new se(e,t))}function ae(t,e){rt.call(this,ne.STAT_EVENT,t),this.stat=e}function ce(t){const e=ie();Dt(e,new ae(e,t))}function ue(t,e){rt.call(this,ne.Na,t),this.size=e}function he(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}ne.Ma="serverreachability",w(se,rt),ne.STAT_EVENT="statevent",w(ae,rt),ne.Na="timingevent",w(ue,rt);var le={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},de={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function fe(){}function pe(t){return t.h||(t.h=t.i())}function me(){}fe.prototype.h=null;var ge,ye={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function we(){rt.call(this,"d")}function ve(){rt.call(this,"c")}function be(){}function Ie(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new zt(this),this.P=Te,t=$?125:void 0,this.W=new qt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Ee}function Ee(){this.i=null,this.g="",this.h=!1}w(we,rt),w(ve,rt),w(be,fe),be.prototype.g=function(){return new XMLHttpRequest},be.prototype.i=function(){return{}},ge=new be;var Te=45e3,_e={},Se={};function Ae(t,e,n){t.K=1,t.v=Je(Ge(e)),t.s=n,t.U=!0,De(t,null)}function De(t,e){t.F=Date.now(),xe(t),t.A=Ge(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),fn(n.h,"t",r),t.C=0,n=t.l.H,t.h=new Ee,t.g=vr(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Gt(g(t.Ia,t,t.g),t.O)),Wt(t.V,t.g,"readystatechange",t.gb),e=t.H?P(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),oe(1),Jt(t.j,t.u,t.A,t.m,t.X,t.s)}function Ce(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function ke(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=Ne(t,n),r==Se){4==e&&(t.o=4,ce(14),i=!1),Zt(t.j,t.m,null,"[Incomplete Response]");break}if(r==_e){t.o=4,ce(15),Zt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Zt(t.j,t.m,r,null),Me(t,r)}Ce(t)&&r!=Se&&r!=_e&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,ce(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),lr(e),e.L=!0,ce(11))):(Zt(t.j,t.m,n,"[Invalid Chunked Response]"),Pe(t),Le(t))}function Ne(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Se:(n=Number(e.substring(n,r)),isNaN(n)?_e:(r+=1,r+n>e.length?Se:(e=e.substr(r,n),t.C=r+n,e)))}function xe(t){t.Y=Date.now()+t.P,Oe(t,t.P)}function Oe(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=he(g(t.eb,t),e)}function Re(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function Le(t){0==t.l.G||t.I||pr(t.l,t)}function Pe(t){Re(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Bt(t.W),Qt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Me(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||In(n.i,t)))if(n.I=t.N,!t.J&&In(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(u){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;fr(n),er(n)}hr(n),ce(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=he(g(n.ab,n),6e3));if(1>=bn(n.i)&&n.ka){try{n.ka()}catch(u){}n.ka=void 0}}else gr(n,11)}else if((t.J||n.g==t)&&fr(n),!D(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const h=u[5];null!=h&&"number"===typeof h&&0<h&&(r=1.5*h,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=t.g;if(l){const t=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;!s.g&&(N(t,"spdy")||N(t,"quic")||N(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(En(s,s.h),s.h=null))}if(r.D){const t=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,Ye(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=wr(r,r.H?r.la:null,r.W),o.J){Tn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Re(a),xe(a)),r.g=o}else ur(r);0<n.l.length&&ir(n)}else"stop"!=u[0]&&"close"!=u[0]||gr(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?gr(n,7):tr(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}oe(4)}catch(u){}}function Fe(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"===typeof t)return t.split("");if(u(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function je(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(u(t)||"string"===typeof t)T(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(u(t)||"string"===typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=Fe(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Ve(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ve)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Ue(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];qe(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],qe(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function qe(t,e){return Object.prototype.hasOwnProperty.call(t,e)}r=Ie.prototype,r.setTimeout=function(t){this.P=t},r.gb=function(t){t=t.target;const e=this.L;e&&3==Wn(t)?e.l():this.Ia(t)},r.Ia=function(t){try{if(t==this.g)t:{const l=Wn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>l)&&(3!=l||$||this.g&&(this.h.h||this.g.ga()||Qn(this.g)))){this.I||4!=l||7==e||oe(8==e||0>=d?3:2),Re(this);var n=this.g.ba();this.N=n;e:if(Ce(this)){var r=Qn(this.g);t="";var i=r.length,s=4==Wn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Pe(this),Le(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,Xt(this.j,this.u,this.A,this.m,this.X,l,n),this.i){if(this.$&&!this.J){e:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(c)){var h=c;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,ce(12),Pe(this),Le(this);break t}Zt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Me(this,n)}this.U?(ke(this,l,o),$&&this.i&&3==l&&(Wt(this.V,this.W,"tick",this.fb),this.W.start())):(Zt(this.j,this.m,o,null),Me(this,o)),4==l&&Pe(this),this.i&&!this.I&&(4==l?pr(this.l,this):(this.i=!1,xe(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ce(12)):(this.o=0,ce(13)),Pe(this),Le(this)}}}catch(l){}},r.fb=function(){if(this.g){var t=Wn(this.g),e=this.g.ga();this.C<e.length&&(Re(this),ke(this,t,e),this.i&&4!=t&&xe(this))}},r.cancel=function(){this.I=!0,Pe(this)},r.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(te(this.j,this.A),2!=this.K&&(oe(3),ce(17)),Pe(this),this.o=2,Le(this)):Oe(this,this.Y-t)},r=Ve.prototype,r.R=function(){Ue(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},r.T=function(){return Ue(this),this.g.concat()},r.get=function(t,e){return qe(this.h,t)?this.h[t]:e},r.set=function(t,e){qe(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},r.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var Be=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Ke(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function $e(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof $e){this.g=void 0!==e?e:t.g,ze(this,t.j),this.s=t.s,He(this,t.i),We(this,t.m),this.l=t.l,e=t.h;var n=new un;n.i=e.i,e.g&&(n.g=new Ve(e.g),n.h=e.h),Qe(this,n),this.o=t.o}else t&&(n=String(t).match(Be))?(this.g=!!e,ze(this,n[1]||"",!0),this.s=tn(n[2]||""),He(this,n[3]||"",!0),We(this,n[4]),this.l=tn(n[5]||"",!0),Qe(this,n[6]||"",!0),this.o=tn(n[7]||"")):(this.g=!!e,this.h=new un(null,this.g))}function Ge(t){return new $e(t)}function ze(t,e,n){t.j=n?tn(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function He(t,e,n){t.i=n?tn(e,!0):e}function We(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Qe(t,e,n){e instanceof un?(t.h=e,mn(t.h,t.g)):(n||(e=en(e,an)),t.h=new un(e,t.g))}function Ye(t,e,n){t.h.set(e,n)}function Je(t){return Ye(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Xe(t){return t instanceof $e?Ge(t):new $e(t,void 0)}function Ze(t,e,n,r){var i=new $e(null,void 0);return t&&ze(i,t),e&&He(i,e),n&&We(i,n),r&&(i.l=r),i}function tn(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function en(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,nn),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function nn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}$e.prototype.toString=function(){var t=[],e=this.j;e&&t.push(en(e,rn,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(en(e,rn,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(en(n,"/"==n.charAt(0)?on:sn,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",en(n,cn)),t.join("")};var rn=/[#\/\?@]/g,sn=/[#\?:]/g,on=/[#\?]/g,an=/[#\?@]/g,cn=/#/g;function un(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function hn(t){t.g||(t.g=new Ve,t.h=0,t.i&&Ke(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function ln(t,e){hn(t),e=pn(t,e),qe(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,qe(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Ue(t)))}function dn(t,e){return hn(t),e=pn(t,e),qe(t.g.h,e)}function fn(t,e,n){ln(t,e),0<n.length&&(t.i=null,t.g.set(pn(t,e),A(n)),t.h+=n.length)}function pn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function mn(t,e){e&&!t.j&&(hn(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(ln(this,e),fn(this,n,t))}),t)),t.j=e}r=un.prototype,r.add=function(t,e){hn(this),this.i=null,t=pn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},r.forEach=function(t,e){hn(this),this.g.forEach((function(n,r){T(n,(function(n){t.call(e,n,r,this)}),this)}),this)},r.T=function(){hn(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},r.R=function(t){hn(this);var e=[];if("string"===typeof t)dn(this,t)&&(e=S(e,this.g.get(pn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=S(e,t[n])}return e},r.set=function(t,e){return hn(this),this.i=null,t=pn(this,t),dn(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},r.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};var gn=class{constructor(t,e){this.h=t,this.g=e}};function yn(t){this.l=t||wn,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.g&&a.g.Ea&&a.g.Ea()&&a.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var wn=10;function vn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function bn(t){return t.h?1:t.g?t.g.size:0}function In(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function En(t,e){t.g?t.g.add(e):t.h=e}function Tn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function _n(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return A(t.i)}function Sn(){}function An(){this.g=new Sn}function Dn(t,e,n){const r=n||"";try{je(t,(function(t,n){let i=t;h(t)&&(i=kt(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Cn(t,e){const n=new Yt;if(a.Image){const r=new Image;r.onload=y(kn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=y(kn,n,r,"TestLoadImage: error",!1,e),r.onabort=y(kn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=y(kn,n,r,"TestLoadImage: timeout",!1,e),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function kn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(s){}}function Nn(t){this.l=t.$b||null,this.j=t.ib||!1}function xn(t,e){At.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=On,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}yn.prototype.cancel=function(){if(this.i=_n(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},Sn.prototype.stringify=function(t){return a.JSON.stringify(t,void 0)},Sn.prototype.parse=function(t){return a.JSON.parse(t,void 0)},w(Nn,fe),Nn.prototype.g=function(){return new xn(this.l,this.j)},Nn.prototype.i=function(t){return function(){return t}}({}),w(xn,At);var On=0;function Rn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function Ln(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Pn(t)}function Pn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}r=xn.prototype,r.open=function(t,e){if(this.readyState!=On)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Pn(this)},r.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ln(this)),this.readyState=On},r.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Pn(this)),this.g&&(this.readyState=3,Pn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Rn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ln(this):Pn(this),3==this.readyState&&Rn(this)}},r.Ua=function(t){this.g&&(this.response=this.responseText=t,Ln(this))},r.Ta=function(t){this.g&&(this.response=t,Ln(this))},r.ha=function(){this.g&&Ln(this)},r.setRequestHeader=function(t,e){this.v.append(t,e)},r.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(xn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var Mn=a.JSON.parse;function Fn(t){At.call(this),this.headers=new Ve,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=jn,this.K=this.L=!1}w(Fn,At);var jn="",Vn=/^https?$/i,Un=["POST","PUT"];function qn(t){return B&&Z()&&"number"===typeof t.timeout&&void 0!==t.ontimeout}function Bn(t){return"content-type"==t.toLowerCase()}function Kn(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,$n(t),zn(t)}function $n(t){t.D||(t.D=!0,Dt(t,"complete"),Dt(t,"error"))}function Gn(t){if(t.h&&"undefined"!=typeof o&&(!t.C[1]||4!=Wn(t)||2!=t.ba()))if(t.v&&4==Wn(t))Kt(t.Fa,0,t);else if(Dt(t,"readystatechange"),4==Wn(t)){t.h=!1;try{const o=t.ba();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var i=String(t.H).match(Be)[1]||null;if(!i&&a.self&&a.self.location){var s=a.self.location.protocol;i=s.substr(0,s.length-1)}r=!Vn.test(i?i.toLowerCase():"")}n=r}if(n)Dt(t,"complete"),Dt(t,"success");else{t.m=6;try{var c=2<Wn(t)?t.g.statusText:""}catch(u){c=""}t.j=c+" ["+t.ba()+"]",$n(t)}}finally{zn(t)}}}function zn(t,e){if(t.g){Hn(t);const r=t.g,i=t.C[0]?c:null;t.g=null,t.C=null,e||Dt(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function Hn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(a.clearTimeout(t.A),t.A=null)}function Wn(t){return t.g?t.g.readyState:0}function Qn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case jn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(e){return null}}function Yn(t){let e="";return L(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function Jn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=Yn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Ye(t,e,n))}function Xn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zn(t){this.za=0,this.l=[],this.h=new Yt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Xn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Xn("baseRetryDelayMs",5e3,t),this.$a=Xn("retryDelaySeedMs",1e4,t),this.Ya=Xn("forwardChannelMaxRetries",2,t),this.ra=Xn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new yn(t&&t.concurrentRequestLimit),this.Ca=new An,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function tr(t){if(nr(t),3==t.G){var e=t.V++,n=Ge(t.F);Ye(n,"SID",t.J),Ye(n,"RID",e),Ye(n,"TYPE","terminate"),ar(t,n),e=new Ie(t,t.h,e,void 0),e.K=2,e.v=Je(Ge(n)),n=!1,a.navigator&&a.navigator.sendBeacon&&(n=a.navigator.sendBeacon(e.v.toString(),"")),!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=vr(e.l,null),e.g.ea(e.v)),e.F=Date.now(),xe(e)}yr(t)}function er(t){t.g&&(lr(t),t.g.cancel(),t.g=null)}function nr(t){er(t),t.u&&(a.clearTimeout(t.u),t.u=null),fr(t),t.i.cancel(),t.m&&("number"===typeof t.m&&a.clearTimeout(t.m),t.m=null)}function rr(t,e){t.l.push(new gn(t.Za++,e)),3==t.G&&ir(t)}function ir(t){vn(t.i)||t.m||(t.m=!0,Mt(t.Ha,t),t.C=0)}function sr(t,e){return!(bn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=he(g(t.Ha,t,e),mr(t,t.C)),t.C++,!0))}function or(t,e){var n;n=e?e.m:t.V++;const r=Ge(t.F);Ye(r,"SID",t.J),Ye(r,"RID",n),Ye(r,"AID",t.U),ar(t,r),t.o&&t.s&&Jn(r,t.o,t.s),n=new Ie(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=cr(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),En(t.i,n),Ae(n,r,e)}function ar(t,e){t.j&&je({},(function(t,n){Ye(e,n,t)}))}function cr(t,e,n){n=Math.min(t.l.length,n);var r=t.j?g(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=i[a].h;const c=i[a].g;if(n-=e,0>n)e=Math.max(0,i[a].h-100),o=!1;else try{Dn(c,t,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function ur(t){t.g||t.u||(t.Y=1,Mt(t.Ga,t),t.A=0)}function hr(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=he(g(t.Ga,t),mr(t,t.A)),t.A++,!0)}function lr(t){null!=t.B&&(a.clearTimeout(t.B),t.B=null)}function dr(t){t.g=new Ie(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=Ge(t.oa);Ye(e,"RID","rpc"),Ye(e,"SID",t.J),Ye(e,"CI",t.N?"0":"1"),Ye(e,"AID",t.U),ar(t,e),Ye(e,"TYPE","xmlhttp"),t.o&&t.s&&Jn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Je(Ge(e)),n.s=null,n.U=!0,De(n,t)}function fr(t){null!=t.v&&(a.clearTimeout(t.v),t.v=null)}function pr(t,e){var n=null;if(t.g==e){fr(t),lr(t),t.g=null;var r=2}else{if(!In(t.i,e))return;n=e.D,Tn(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=ie(),Dt(r,new ue(r,n,e,i)),ir(t)}else ur(t);else if(i=e.o,3==i||0==i&&0<t.I||!(1==r&&sr(t,e)||2==r&&hr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:gr(t,5);break;case 4:gr(t,10);break;case 3:gr(t,6);break;default:gr(t,2)}}function mr(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function gr(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=g(t.jb,t);n||(n=new $e("//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||ze(n,"https"),Je(n)),Cn(n.toString(),r)}else ce(2);t.G=0,t.j&&t.j.va(e),yr(t),nr(t)}function yr(t){t.G=0,t.I=-1,t.j&&(0==_n(t.i).length&&0==t.l.length||(t.i.i.length=0,A(t.l),t.l.length=0),t.j.ua())}function wr(t,e,n){let r=Xe(n);if(""!=r.i)e&&He(r,e+"."+r.i),We(r,r.m);else{const t=a.location;r=Ze(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&L(t.aa,(function(t,e){Ye(r,e,t)})),e=t.D,n=t.sa,e&&n&&Ye(r,e,n),Ye(r,"VER",t.ma),ar(t,r),r}function vr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Fn(new Nn({ib:!0})):new Fn(t.qa),e.L=t.H,e}function br(){}function Ir(){if(B&&!(10<=Number(et)))throw Error("Environmental error: no available transport.")}function Er(t,e){At.call(this),this.g=new Zn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!D(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!D(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Sr(this)}function Tr(t){we.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function _r(){ve.call(this),this.status=1}function Sr(t){this.g=t}r=Fn.prototype,r.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ge.g(),this.C=this.u?pe(this.u):pe(ge),this.g.onreadystatechange=g(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){return void Kn(this,s)}t=n||"";const i=new Ve(this.headers);r&&je(r,(function(t,e){i.set(e,t)})),r=_(i.T()),n=a.FormData&&t instanceof a.FormData,!(0<=E(Un,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Hn(this),0<this.B&&((this.K=qn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=g(this.pa,this)):this.A=Kt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Kn(this,s)}},r.pa=function(){"undefined"!=typeof o&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Dt(this,"timeout"),this.abort(8))},r.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Dt(this,"complete"),Dt(this,"abort"),zn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),zn(this,!0)),Fn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Gn(this):this.cb())},r.cb=function(){Gn(this)},r.ba=function(){try{return 2<Wn(this)?this.g.status:-1}catch(t){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},r.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),Mn(e)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=Zn.prototype,r.ma=8,r.G=1,r.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(e){}},r.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new Ie(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=P(s),F(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=cr(this,i,e),n=Ge(this.F),Ye(n,"RID",t),Ye(n,"CVER",22),this.D&&Ye(n,"X-HTTP-Session-Id",this.D),ar(this,n),this.o&&s&&Jn(n,this.o,s),En(this.i,i),this.Ra&&Ye(n,"TYPE","init"),this.ja?(Ye(n,"$req",e),Ye(n,"SID","null"),i.$=!0,Ae(i,n,null)):Ae(i,n,e),this.G=2}}else 3==this.G&&(t?or(this,t):0==this.l.length||vn(this.i)||or(this))},r.Ga=function(){if(this.u=null,dr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=he(g(this.bb,this),t)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,ce(10),er(this),dr(this))},r.ab=function(){null!=this.v&&(this.v=null,er(this),hr(this),ce(19))},r.jb=function(t){t?(this.h.info("Successfully pinged google.com"),ce(2)):(this.h.info("Failed to ping google.com"),ce(1))},r=br.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},Ir.prototype.g=function(t,e){return new Er(t,e)},w(Er,At),Er.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Mt(g(t.hb,t,e))),ce(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=wr(t,null,t.W),ir(t)},Er.prototype.close=function(){tr(this.g)},Er.prototype.u=function(t){if("string"===typeof t){var e={};e.__data__=t,rr(this.g,e)}else this.v?(e={},e.__data__=kt(t),rr(this.g,e)):rr(this.g,t)},Er.prototype.M=function(){this.g.j=null,delete this.j,tr(this.g),delete this.g,Er.Z.M.call(this)},w(Tr,we),w(_r,ve),w(Sr,br),Sr.prototype.xa=function(){Dt(this.g,"a")},Sr.prototype.wa=function(t){Dt(this.g,new Tr(t))},Sr.prototype.va=function(t){Dt(this.g,new _r(t))},Sr.prototype.ua=function(){Dt(this.g,"b")},Ir.prototype.createWebChannel=Ir.prototype.g,Er.prototype.send=Er.prototype.u,Er.prototype.open=Er.prototype.m,Er.prototype.close=Er.prototype.close,le.NO_ERROR=0,le.TIMEOUT=8,le.HTTP_ERROR=6,de.COMPLETE="complete",me.EventType=ye,ye.OPEN="a",ye.CLOSE="b",ye.ERROR="c",ye.MESSAGE="d",At.prototype.listen=At.prototype.N,Fn.prototype.listenOnce=Fn.prototype.O,Fn.prototype.getLastError=Fn.prototype.La,Fn.prototype.getLastErrorCode=Fn.prototype.Da,Fn.prototype.getStatus=Fn.prototype.ba,Fn.prototype.getResponseJson=Fn.prototype.Qa,Fn.prototype.getResponseText=Fn.prototype.ga,Fn.prototype.send=Fn.prototype.ea;var Ar=s.createWebChannelTransport=function(){return new Ir},Dr=s.getStatEventTarget=function(){return ie()},Cr=s.ErrorCode=le,kr=s.EventType=de,Nr=s.Event=ne,xr=s.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Or=s.FetchXmlHttpFactory=Nn,Rr=s.WebChannel=me,Lr=s.XhrIo=Fn}).call(this,n("c8ba"))},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},s=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(O){c=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,s=Object.create(i.prototype),o=new k(r||[]);return s._invoke=S(t,n,o),s}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(O){return{type:"throw",arg:O}}}t.wrap=u;var l="suspendedStart",d="suspendedYield",f="executing",p="completed",m={};function g(){}function y(){}function w(){}var v={};c(v,s,(function(){return this}));var b=Object.getPrototypeOf,I=b&&b(b(N([])));I&&I!==n&&r.call(I,s)&&(v=I);var E=w.prototype=g.prototype=Object.create(v);function T(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){function n(i,s,o,a){var c=h(t[i],t,s);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"===typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,o,a)}),(function(t){n("throw",t,o,a)})):e.resolve(l).then((function(t){u.value=t,o(u)}),(function(t){return n("throw",t,o,a)}))}a(c.arg)}var i;function s(t,r){function s(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(s,s):s()}this._invoke=s}function S(t,e,n){var r=l;return function(i,s){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw s;return x()}n.method=i,n.arg=s;while(1){var o=n.delegate;if(o){var a=A(o,n);if(a){if(a===m)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=h(t,e,n);if("normal"===c.type){if(r=n.done?p:d,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function A(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,A(t,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=h(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var s=i.arg;return s?s.done?(n[t.resultName]=s.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,m):s:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function D(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(D,this),this.reset(!0)}function N(t){if(t){var n=t[s];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:x}}function x(){return{value:e,done:!0}}return y.prototype=w,c(E,"constructor",w),c(w,"constructor",y),y.displayName=c(w,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,c(t,a,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},T(_.prototype),c(_.prototype,o,(function(){return this})),t.AsyncIterator=_,t.async=function(e,n,r,i,s){void 0===s&&(s=Promise);var o=new _(u(e,n,r,i),s);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},T(E),c(E,a,"Generator"),c(E,s,(function(){return this})),c(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=N,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return a.type="throw",a.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var s=this.tryEntries.length-1;s>=0;--s){var o=this.tryEntries[s],a=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var s=i;break}}s&&("break"===t||"continue"===t)&&s.tryLoc<=e&&e<=s.finallyLoc&&(s=null);var o=s?s.completion:{};return o.type=t,o.arg=e,s?(this.method="next",this.next=s.finallyLoc,m):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;C(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:N(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},b75b:function(t,e,n){"use strict";n("f567")},df7c:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}function r(t){"string"!==typeof t&&(t+="");var e,n=0,r=-1,i=!0;for(e=t.length-1;e>=0;--e)if(47===t.charCodeAt(e)){if(!i){n=e+1;break}}else-1===r&&(i=!1,r=e+1);return-1===r?"":t.slice(n,r)}function i(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,s=arguments.length-1;s>=-1&&!r;s--){var o=s>=0?arguments[s]:t.cwd();if("string"!==typeof o)throw new TypeError("Arguments to path.resolve must be strings");o&&(e=o+"/"+e,r="/"===o.charAt(0))}return e=n(i(e.split("/"),(function(t){return!!t})),!r).join("/"),(r?"/":"")+e||"."},e.normalize=function(t){var r=e.isAbsolute(t),o="/"===s(t,-1);return t=n(i(t.split("/"),(function(t){return!!t})),!r).join("/"),t||r||(t="."),t&&o&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(i(t,(function(t,e){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t})).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length;e++)if(""!==t[e])break;for(var n=t.length-1;n>=0;n--)if(""!==t[n])break;return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),s=r(n.split("/")),o=Math.min(i.length,s.length),a=o,c=0;c<o;c++)if(i[c]!==s[c]){a=c;break}var u=[];for(c=a;c<i.length;c++)u.push("..");return u=u.concat(s.slice(a)),u.join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){if("string"!==typeof t&&(t+=""),0===t.length)return".";for(var e=t.charCodeAt(0),n=47===e,r=-1,i=!0,s=t.length-1;s>=1;--s)if(e=t.charCodeAt(s),47===e){if(!i){r=s;break}}else i=!1;return-1===r?n?"/":".":n&&1===r?"/":t.slice(0,r)},e.basename=function(t,e){var n=r(t);return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){"string"!==typeof t&&(t+="");for(var e=-1,n=0,r=-1,i=!0,s=0,o=t.length-1;o>=0;--o){var a=t.charCodeAt(o);if(47!==a)-1===r&&(i=!1,r=o+1),46===a?-1===e?e=o:1!==s&&(s=1):-1!==e&&(s=-1);else if(!i){n=o+1;break}}return-1===e||-1===r||0===s||1===s&&e===r-1&&e===n+1?"":t.slice(e,r)};var s="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n("4362"))},e691:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return h})),n.d(e,"d",(function(){return l}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class u{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}function h(t){r.forEach(e=>{e.setLogLevel(t)})}function l(t,e){for(const n of r){let r=null;e&&e.level&&(r=s[e.level]),n.userLogHandler=null===t?null:(e,n,...s)=>{const o=s.map(t=>{if(null==t)return null;if("string"===typeof t)return t;if("number"===typeof t||"boolean"===typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(e){return null}}).filter(t=>t).join(" ");n>=(null!==r&&void 0!==r?r:e.logLevel)&&t({level:i[n].toLowerCase(),message:o,args:s,type:e.name})}}}},f567:function(t,e,n){}}]);
//# sourceMappingURL=chunk-4ba4c3d8.88549736.js.map