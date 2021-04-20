/* Here is the original api call */


function getInfo() {
    //GET request
    fetch("https://app.ticketmaster.com/discovery/v2/events.json?keyword=deftones&id=16vOZpfQ9G7SOsV&apikey=6UVAl4kH2qy1pxo2XkYN6ZAIgLJIX3SK")
        .then(response => response.json()) //This promise returns response in JSON format
        .then((data) => sortInfo(data));
}

function sortInfo(json) {
    var items = $('#events .list-group-item');
    items.hide();
    var events = json._embedded.events
    var item = items.first();
    for (var i = 0; i <events.length; i++) {
        item.children('.list-group-item-heading').text(events[i].name)
        item.children('.list-group-item-text').text(events[i].dates.start.localDate);
    } try {
        item.children('.venue').text(events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name);
      } catch (err) {
        console.log(err);
      }
      item.show();
      item.off("click");
      item.click(events[i], function(eventObject) {
        console.log(eventObject.data);
        try {
          getAttraction(eventObject.data._embedded.attractions[0].id);
        } catch (err) {
        console.log(err);
        }
      });
      item=item.next();
    



    console.log(json);
    /* document.getElementById('apiContainer').innerHTML = events; */
    console.log(events);
}

getInfo();

 /* function showEvents(json) {
    var items = $('#events .list-group-item');
    items.hide();
    var events = json._embedded.events;
    var item = items.first();
    for (var i=0;i<events.length;i++) {
      item.children('.list-group-item-heading').text(events[i].name);
      item.children('.list-group-item-text').text(events[i].dates.start.localDate);
      try {
        item.children('.venue').text(events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name);
      } catch (err) {
        console.log(err);
      }
      item.show();
      item.off("click");
      item.click(events[i], function(eventObject) {
        console.log(eventObject.data);
        try {
          getAttraction(eventObject.data._embedded.attractions[0].id);
        } catch (err) {
        console.log(err);
        }
      });
      item=item.next();
    }
  } */










/* const url = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=deftones&id=16vOZpfQ9G7SOsV&apikey=6UVAl4kH2qy1pxo2XkYN6ZAIgLJIX3SK"

function getData(cb){
var xhr = new XMLHttpRequest();
var data;

xhr.open("GET", url + event + '&')
xhr.send(); 

xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200 ) {
        cb(data = JSON.parse(this.responseText));
    }
};
}


    getData(function(event) {
        document.getElementById('apiContainer').innerHTML = event;
    })


 getData((data) => {
        console.log(data);
    }); */
 






  



/* document.getElementById('apiContainer').innerHTML =  
console.log(JSON.parse(this.responseText));*/









/* function getInfo() {
    //GET request
    fetch("https://app.ticketmaster.com/discovery/v2/events.json?keyword=deftones&id=16vOZpfQ9G7SOsV&apikey=6UVAl4kH2qy1pxo2XkYN6ZAIgLJIX3SK")
        .then(response => response.json()) //This promise returns response in JSON format
        .then((data) => sortInfo(data));
}

function sortInfo(events) {
    console.log(events);
}

getInfo();   */
















/*https://app.ticketmaster.com/discovery/v2/events.json?keyword=deftones&apikey=6UVAl4kH2qy1pxo2XkYN6ZAIgLJIX3SK */

/*https://app.ticketmaster.com/discovery/v2/events.json?keyword=deftones&id=16vOZpfQ9G7SOsV&apikey=6UVAl4kH2qy1pxo2XkYN6ZAIgLJIX3SK */