$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    
  // page is now ready, initialize the calendar...
    
    $('#calendar').fullCalendar({
        // put your options and callbacks here
        dayClick: function() {
            alert('Tutor can add an event here!');
        },
        
        header: {
        left:   'title',
        center: '',
        right:  'month agendaWeek listMonth today prev,next'
    }
        
        events: [
        {
            title  : 'event1',
            start  : '2017-5-07'
        },
        {
            title  : 'event2',
            start  : '2017-05-08',
            end    : '2017-05-09'
        },
        {
            title  : 'event3',
            start  : '2017-05-09T19:30:00',
            allDay : false // will make the time show
        }
    ]
    
    });
});
          