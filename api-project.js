//GET request
fetch("https://app.ticketmaster.com/discovery/v2/events.json?keyword=deftones&id=16vOZpfQ9G7SOsV&apikey=6UVAl4kH2qy1pxo2XkYN6ZAIgLJIX3SK")
.then(response => response.json()) //This promise returns response in JSON format
.then((data) => showEvents(data));    /* sortInfo(data) */

function showEvents(json) {
  var items = $('#events .list-group-item');
  items.hide();
  var events = json._embedded.events;
  var item = items.first();
 
  for (var i=0;i<events.length;i++) {
    item.children('.list-group-item-heading').text(events[i].name);
    item.children('.list-group-item-text').text(events[i].dates.start.localDate);
    item.children('.status').text(events[i].dates.status.code);
    item.children('.promoter').text(events[i].promoters[1].name);
    item.children('.note').text(events[i].pleaseNote);

  try {
      item.children('.venue').text(events[i]._embedded.venues[0].name);
    } catch (err) {
      console.log(err);
    }
    item.show();
  console.log(events);
} 
}