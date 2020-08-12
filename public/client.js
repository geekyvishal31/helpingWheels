const publicVapidKey='BBNKHEprAZJiogNxP0omFGhLCjTZkX0zFn09US5ZRK9AHVVMXlRge1e2Ki4Pjvwxv0_7xyWqESUqu8H3lsnjIxQ';

// //check for service worker
// if('serviceWorker' in navigator ){
//   send().catch(err => console.error(err));
// }

// //register service worker, register push, send push
// async function send(){
//   //register service worker
//  console.log('Registering service worker...');
//  const register = await navigator.serviceWorker.register('/worker.js',{
//    scope: '/'
//  });
//  console.log('Service worker registered...');

//  //register push
//  console.log('Registering Push...');
//  const subscription = await register.pushManager.subscribe({
//    userVisibleOnly:true,
//    applicationServerKey:urlBase64ToUint8Array(publicVapidKey)
//  });
//  console.log('Push registered...');

//  //send push notification
//  console.log('Sending Push...');
//  await fetch('/subscribe',{
//    method: 'POST',
//    body: JSON.stringify(subscription),
//    headers:{
//      'content-type': 'application/json'
//    }
//  });
//  console.log('Push sent...');
// }

// function urlBase64ToUint8Array(base64String) {
//   const padding = '='.repeat((4 - base64String.length % 4) % 4);
//   const base64 = (base64String + padding)
//     .replace(/-/g, '+')
//     .replace(/_/g, '/');

//   const rawData = window.atob(base64);
//   const outputArray = new Uint8Array(rawData.length);

//   for (let i = 0; i < rawData.length; ++i) {
//     outputArray[i] = rawData.charCodeAt(i);
//   }
//   return outputArray;
// }























//Make connection
// var socket = io.connect("http://localhost:5500");

//Query DOM
// var message = document.getElementById('message');
//  handle = document.getElementById('handle'),
//  btn = document.getElementById('send'),
//  output = document.getElementById('output');
//   console.log('handle:',handle.value);
//   console.log('message:',message.value);


//Emit events
// btn.addEventListener('click',function(){
//    socket.emit('chat',{
//      message:message.value,
//      handle: handle.value
//    });
// });

//listener events
// socket.on('chat',function(data){
//   output.innerHTML += '<p><strong>' + data.handle + ':</strong>' + data.message + '</p>';
// });