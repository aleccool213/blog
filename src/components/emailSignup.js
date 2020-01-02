import React from "react";

import "./emailSignup.css";

const EmailSignup = () => {
  return (
    <div id="mc_embed_signup">
      <form
        action="https://coffee.us15.list-manage.com/subscribe/post?u=a3148896870d61ede572df801&amp;id=c1e98351d4"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <label htmlFor="mce-EMAIL">
            Subscribe to get my latest content by email.
          </label>
          <input
            type="email"
            defaultValue=""
            name="EMAIL"
            className="email"
            id="mce-EMAIL"
            placeholder="email address"
            required
          />

          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_a3148896870d61ede572df801_c1e98351d4"
              tabIndex="-1"
              defaultValue=""
            />
          </div>
          <div className="clear">
            <input
              type="submit"
              value="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default EmailSignup;

// <!-- Begin Mailchimp Signup Form -->
// <link href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css" rel="stylesheet" type="text/css">
// <style type="text/css">
// 	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width:100%;}
// 	/* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
// 	   We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
// </style>
// <div id="mc_embed_signup">
// <form action="https://coffee.us15.list-manage.com/subscribe/post?u=a3148896870d61ede572df801&amp;id=c1e98351d4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
//     <div id="mc_embed_signup_scroll">
// 	<label for="mce-EMAIL">Subscribe to get my latest content by email.</label>
// 	<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
//     <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
//     <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_a3148896870d61ede572df801_c1e98351d4" tabindex="-1" value=""></div>
//     <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
//     </div>
// </form>
// </div>

// <!--End mc_embed_signup--></div>
