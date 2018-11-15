import React from 'react';

const THOUGHTBOT_URL = "https://thoughtbot.com"
const DEVELOPER_URL = "https://markonsoftware.com"

const Credits = () => {
  return (
    <div className="text-xl py-2">
      <span> Guides maintained by </span>
      <a href={THOUGHTBOT_URL} className="text-blue-dark no-underline hover:underline">thoughtbot, inc.</a>,

      <span> check out my </span>
      <a href={DEVELOPER_URL} className="text-blue-dark no-underline hover:underline">blog</a>.
    </div>
  )
}
export default Credits
