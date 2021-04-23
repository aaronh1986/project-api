//GET request
 fetch("https://app.ticketmaster.com/discovery/v2/events.json?&apikey=6UVAl4kH2qy1pxo2XkYN6ZAIgLJIX3SK&city=['dublin']")
.then(response => response.json()) //This promise returns response in JSON format
.then((data) => displayEvents(data));   

function displayEvents(data) {
  var item = $('.list-group-item');
  var events = data._embedded.events;
 
for (var i = 0; i < events.length; i++) {
    item.children('.list-group-item-heading').text(events[i].name);
    item.children('.list-group-item-text').text(events[i].dates.start.localDate);
    item.children('.status').text(events[i].dates.status.code);
    item.children('.promoter').text(events[i].promoters[1].name);
    item.children('.note').text(events[i].pleaseNote);
    item.children('.venue').text(events[i]._embedded.venues[0].name);
    } 
  console.log(events);

}

 /* https://app.ticketmaster.com/discovery/v2/events.json?keyword=deftones&id=16vOZpfQ9G7SOsV&apikey=6UVAl4kH2qy1pxo2XkYN6ZAIgLJIX3SK */