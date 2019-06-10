# ISS-Tracker
Javascript web app that dynamically tracks and updates the location of the International Space Station, by pulling the 
latitude and longitude co-ordinates and other information from and external APIs, whilst also utilising leaflet.js and 
webglearth.

The following are some screenshots of the main features of this project:

____________

This shows the location of the ISS by dropping a pin on it's co-ordinates.  Tnis is updated via an external API which refreshes 
the latitude and longitude of the space station.  It also shows the live Twitter feed directly from the ISS page.
   
      
![ScreenShot](https://github.com/S-Maitland/ISS-Tracker/blob/master/ISS%20Pin%20%26%20Twitter%20Feed.png)

__________________

The two pins here show the contrast between the project home in Glasgow and the current ISS location.

![ScreenShot](https://github.com/S-Maitland/ISS-Tracker/blob/master/ISS%20%26%20Glasgow%20Pin.png)

____________________


This page shows some real time information regarding the ISS.  When the modal button is first clicked, it starts a timer that
sends an API fetch request every one second, so the information actually updates whilst viewing.  When the modal is closed, 
the timer is reset.


![ScreenShot](https://github.com/S-Maitland/ISS-Tracker/blob/master/Real%20Time%20Info.png)

________________________

Again fetching from an external API, this view shows a current list of all astronuats currently stationed on the Internation 
Space Station.


![ScreenShot](https://github.com/S-Maitland/ISS-Tracker/blob/master/Astronauts%20Currently%20on%20ISS.png)

______________________

To create a more immersive experience, this enables us to see a live stream of the ISS, directly imported from it's Youtube 
page.

![ScreenShot](https://github.com/S-Maitland/ISS-Tracker/blob/master/Live%20Youtube%20Stream.png)

_________________________
This final screenshot shows the ISS Twitter page after the link has been activated from the Twitter feed.


![ScreenShot](https://github.com/S-Maitland/ISS-Tracker/blob/master/Link%20To%20ISS%20Twitter.png)





