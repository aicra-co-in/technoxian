export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI0MGY1ZjNiYy1mY2VmLTQ2YmEtOTAwZC0yNmE0MmQyYWQyYzgiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcwMjcyNTQyNCwiZXhwIjoxNzAzMzMwMjI0fQ.EWytuWHtIKcJM0HVXXmai4Onrf-0y6clgO3E1rUeaec";
// API call to create meeting
//Auth token we will use to generate a meeting and connect to it
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
  //Destructuring the roomId from the response
  const { roomId } = await res.json();
  return roomId;
};