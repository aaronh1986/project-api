/* var page = 0; */

/* function getEvents(page) {

  $('#events-panel').show();
  $('#attraction-panel').hide();

  if (page < 0) {
    page = 0;
    return;
  }
  if (page > 0) {
    if (page > getEvents.json.page.totalPages-1) {
      page=0;
    }
  } 
  

    //GET request
    fetch("https://app.ticketmaster.com/discovery/v2/events.json?keyword=deftones&id=16vOZpfQ9G7SOsV&apikey=6UVAl4kH2qy1pxo2XkYN6ZAIgLJIX3SK")
        .then(response => response.json()) //This promise returns response in JSON format
        .then((data) => showEvents(data));    /* sortInfo(data) */

        


  /* $.ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/events.json?keyword=deftones&id=16vOZpfQ9G7SOsV&apikey=6UVAl4kH2qy1pxo2XkYN6ZAIgLJIX3SK"+page,
    async:true,
    dataType: "json",
    success: function(json) {
          getEvents.json = json;
  			  showEvents(json);
  		   },
    error: function(xhr, status, err) {
  			  console.log(err);
  		   }
  }); 
} */

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
    item.children('.note').text(events[i].pleaseNote)
  /*  item.children('.cost').text(events)[i].priceRanges[0].max ;  */
  
    try {
      item.children('.venue').text(events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name);
    } catch (err) {
      console.log(err);
    }
    item.show();
   /* item.off("click");
    item.click(events[i], function(eventObject) {
      console.log(eventObject.data);
      try {
        getAttraction(eventObject.data._embedded.attractions[0].id);
      } catch (err) {
      console.log(err);
      }
    });
    item=item.next();
 } */
  console.log(events)
} 
}

/* Consider un-commenting this.....

 function getAttraction(id) {
    fetch("https://app.ticketmaster.com/discovery/v2/attractions/K8vZ9171pP7?keyword=deftones&locale=en-us")
    .then(response => response.json()) //This promise returns response in JSON format
    .then((data) => showEvents(data));
}
function showAttraction(json) {
  $('#events-panel').hide();
  $('#attraction-panel').show();
  
  $('#attraction-panel').click(function() {
    getEvents(page);
  });
  
  $('#attraction .list-group-item-heading').first().text(json.name);
  $('#attraction img').first().attr('src',json.images[0].url);
  $('#classification').text(json.classifications[0].segment.name + " - " + json.classifications[0].genre.name + " - " + json.classifications[0].subGenre.name);
}

getEvents(page); 

*/


/* https://app.ticketmaster.com/discovery/v2/events.json?keyword=deftones&id=16vOZpfQ9G7SOsV&apikey=6UVAl4kH2qy1pxo2XkYN6ZAIgLJIX3SK */