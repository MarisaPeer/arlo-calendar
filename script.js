document.addEventListener("arlocalendarcontrolloaded", function() {
  var calendar = new LS.CalendarControl({
    platformID: "websitetestdata.arlo.co",
    renderTo: "#calendar",
    eventUrl: "/event-template/?eventtemplate={templateID}&eventID={eventID}"
  }).init();				
});