let e="";const t=document.querySelector("#s"),n=document.querySelector("#o"),c=document.querySelector("#y"),r=document.querySelector("#f"),o=document.querySelector("#z"),i=document.querySelector("#q");async function s(){if(e)return{success:!0,publicKey:e};try{const t=await fetch("/api/getPublicKey",{method:"GET"}),n=await t.json();return e=n.publicKey,{success:!0,publicKey:e}}catch(e){return{success:!1,publicKey:null}}}function a(){return{key:window.forge.random.getBytesSync(32),iv:window.forge.random.getBytesSync(16)}}function u(e,t,n){const c=window.forge.cipher.createCipher("AES-CBC",t);return c.start({iv:n}),c.update(window.forge.util.createBuffer(e)),c.finish(),c.output.toHex()}function l(e,t){const n=window.forge.pki.publicKeyFromPem(t);return window.forge.util.encode64(n.encrypt(e,"RSA-OAEP"))}t.addEventListener("submit",(async function(e){e.preventDefault(),o.classList.add("iw"),i.textContent="Sending...";try{const e=n.value,o=c.value,i=r.value;if(o.length>100)return void alert("Subject cannot exceed 100 characters.");if(i.length>500)return void alert("Message cannot exceed 500 characters.");const y=await s();if(!y.success)throw new Error("Failed to fetch public key");const{key:d,iv:f}=a(),w=u(JSON.stringify({email:e,subject:o,message:i}),d,f),g=l(d,y.publicKey),m=l(f,y.publicKey),p=await fetch(t.action,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:w+"."+g+"."+m})}),h=await p.json();alert(h.message),"success"===h.status&&t.reset()}catch(e){alert("Something went wrong. Please try again.")}finally{o.classList.remove("iw"),i.textContent="Send message"}}));