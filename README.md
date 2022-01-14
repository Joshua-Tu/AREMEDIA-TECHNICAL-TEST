# Are Media Back end developer test

Goal: Create an app that extracts all image references & video details to CSV files using the provided data from this json file:
https://gist.github.com/bxm-builduser/c9cdf0705793615c6b1109b811484907

## Instructions
Using the JSON file provided as a sample input, create an app that does the following tasks:
- extract all image references to CSV file with header |id|imageUrl|
- extract the video details (video id, title, link, the highest resolution video URL) using JW Player platform API(https://developer.jwplayer.com/jwplayer/reference/get_v2-media-media-id) to CSV file

You can use any programming language .NET app, NodeJS, or anything you're comfortable with.

## Testing
Code should be unit tested, adhere to sound software engineering principles and be self documenting code. 
Note: A description of what would be tested in a specific component is also acceptable in lieu of a full test suite if time doesn't permit for this.

## When you are finished
- submit the test files via email as a zip folder.
- alternatively, a link to a github repo or dropbox file is also acceptable.
- if you have any questions please don't hesitate to ask us.

## Future improvement for my solution
- Add redis-cache to stop third party api from being calling multiple times.
- Refine error handling in the functions to log all the error types instead of a general error.
- Add some code to deal with empty sample input case
- Add type checks for the request and response for the third party api (if third party api documentation has type dependencies file)

# Just in case, please create a generated_files folder under the root directory to see the generated csv files when running the app