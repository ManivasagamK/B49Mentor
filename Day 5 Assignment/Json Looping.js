//JSON Looping
//Variable Declaration:
var json1 = [{"id": "1", "msg": "hello Good morning", "time": "23:35 2023-06-30 ","fromWho": "hello1@email.com" }, {"id": "2","msg": "Hope you doing well", "time": "02:25 2023-06-30 ",
    "fromWho": "hello2@email.com"}];

//For Loop
for(let i=0;i<json1.length; i++){
    let object = json1[i];
    console.log('ID: ' + object.id);
    console.log('MSG: ' + object.msg);
    console.log('TIME: ' + object.time);
    console.log('FROMWHO: ' + object.fromWho);
};

//ForEach Loop
json1.forEach(function(item){
    console.log('ID: ' + item.id);
    console.log('MSG: ' + item.msg);
    console.log('TIME: ' + item.time);
    console.log('FROMWHO: ' + item.fromWho);
  });

  //ForIn Loop
  for (var key in json1) {
    if (json1.hasOwnProperty(key)) {
        console.log('ID: ' + json1[key].id);
        console.log('MSG: ' + json1[key].msg);
        console.log('TIME: ' + json1[key].time);
        console.log('FROMWHO: ' + json1[key].fromWho);
    }
    };

    //ForOf Loop
    for(let index of json1){
        console.log('ID: ' + json1[key].id);
        console.log('MSG: ' + json1[key].msg);
        console.log('TIME: ' + json1[key].time);
        console.log('FROMWHO: ' + json1[key].fromWho);
    };