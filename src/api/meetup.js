import fetchJsonp from 'fetch-jsonp';

async function getGroup(cb) {
  const response = await fetchJsonp('https://api.meetup.com/MadisonJS');
  const meetup = await response.json();

  cb(meetup.data);
}
async function getUpcomingEvents(cb) {
  const response = await fetchJsonp('https://api.meetup.com/MadisonJS/events');
  const eventList = await response.json();

  cb(eventList);
}

export default {
  getGroup,
  getUpcomingEvents
};
