import React from 'react';

const Blog = () => {
    return (
        <div>
            <p>Q1: what is cors?</p>
            <p>ans: Cross-Origin Resource Sharing CORs <br />
                is an HTTP-header based mechanism that allows <br />
                a server to indicate any origins domain, scheme, or port <br />
                other than its own from which a browser should permit loading resources.</p>

            <br />
            <p>q2:  Why are you using firebase?  What other options do you have to implement authentication?</p>
            <p> nas ;Firebase helps you develop high-quality apps, grow your user base, and <br />
                earn more money. Each feature works independently, and they work even better together.
                Usually, authentication by a server entails the use of a user name and password. Other ways <br />
                to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
            <br />
            <p>q3: How does the private route work?</p>
            <p>ans: The react private route component renders child components ( children ) if the user is logged in. <br />
                If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
            <br />
<p>q4: What is Node? How does Node work?</p>
<p>ans:js in 2009. Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. <br />
It is a used as backend service where javascript works on the server-side of the application. <br />
 This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts <br />
  javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>

        </div>
    );
};

export default Blog;