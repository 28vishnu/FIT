self.addEventListener("notificationclick",e=>{e.notification.close();e.waitUntil(clients.matchAll({type:"window"}).then(c=>c[0]?c[0].focus():clients.openWindow("./")))});
