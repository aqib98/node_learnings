const dns = require('dns');
// dns.lookup('pluralsight.com',(err,address)=>{
//     console.log(address);
// });

dns.reverse('192.168.1.255',(err,hostname)=>{
    console.log(hostname)
})