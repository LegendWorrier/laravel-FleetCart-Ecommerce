!function(e){var t={};function n(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=305)}({14:function(e,t,n){"use strict";t.a=function(e){(e=e instanceof jQuery?e:$(e)).data("loading-text",e.html()).removeClass("btn-loading").button("reset")},t.b=function(e){return FleetCart.langs[e]}},305:function(e,t,n){e.exports=n(306)},306:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(14);if(FleetCart.stripePublishableKey){var i=Stripe(FleetCart.stripePublishableKey),l=i.elements().create("card",{style:{base:{color:"#32325d",lineHeight:"18px",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#aab7c4"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}},hidePostalCode:!0});l.mount("#stripe-payment");var r=document.getElementById("checkout-form");r.addEventListener("submit",function(e){if("stripe"===$('[name="payment_method"]:checked').val()){e.preventDefault();var t={name:document.getElementById("billing-first-name").value+" "+document.getElementById("billing-last-name").value,address_line1:document.getElementById("billing-address-1").value,address_line2:document.getElementById("billing-address-2").value,address_city:document.getElementById("billing-city").value,address_state:document.getElementById("billing-state").value,address_zip:document.getElementById("billing-zip").value,address_country:document.getElementById("billing-country").value};i.createToken(l,t).then(function(e){if(e.error)Object(a.a)(".btn-checkout");else{var t=document.createElement("input");t.setAttribute("type","hidden"),t.setAttribute("name","stripe_token"),t.setAttribute("value",e.token.id),r.appendChild(t),r.submit()}})}})}}});