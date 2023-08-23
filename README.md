// iframe is an HTML element used to embed content from a third party source
// in this case it embed the youtube video with the dynamic videoId
// when users navigate to the url iframes takes it and embeds it allowing the user to watch the video without having to go to youtube
// useParams() is a hook that returns an object containing route parameters extracted form current URL
// In this example we use destructuring to extract the value of videoId parameter from the object returned by useParams
// https://www.youtube.com/embed/ is the base URL for embedding Youtube videos and ${videoId} is the placeholder that is replaced with the actual value of videoId variable.

API
/**************** Optional Parameters *************** */
/***** Search Parameters *****/
// q (Query Parameter) : API will return videos that match query terms. I.E (q=funny dogs will return funny dogs related videos)
// type (Query Parameter) : This is used to filter search results by a specific resource (video, channel, playlist, all). I.E (type=video will return videos)
// maxResults (Query Parameter) : This defines the max number of resultsthat is received from the API response I.E ( maxResults=10 will return 10 videos)
// channelId (Query Parameter) : Returns videos from a specific channel. I.E (channelId=USD23-60-Basd252AS1)
// order (Query Parameter) : Specifies the order of the search results (date, rating, relevance, title, and viewCount). I.E (order=viewCount)
// part (Query Parameter) : Specifies which parts of the resource should be included in the response (snippet, id, contentDetails). I.E (part=snippet)
// publishedAfter and publishedBefore : Filter videoes by publish date.
// videoDuration : Filter videos by their duration (any, short, medium, long). I.E ( videoDuration=short )
// videoType: Filter videos by their type (any, episode, movie). I.E (videoType=episode)
// regionCode : Returns results for a specific country or region. I.E (regionCode=US)
// relatedToVideoId : Returns videos related to a specific video. I.E (relatedtoVideoId=OIS231)
// topicId : Returns videos that match a specific youtube topic ID.
