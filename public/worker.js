console.log('Service worker loaded');

self.addEventListener('push', e => {
  const data = e.data.json();
  console.log('push Received...');
  self.registration.showNotification(data.title,{
    body: 'Notified by helping wheels,ride is available'
    
  });
});

// body: 'Notified by helping wheels',