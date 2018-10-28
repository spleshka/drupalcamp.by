import React from 'react';

class Newsletter extends React.Component {

  render() {
    return (
      <section id="sign_up" className="section bg-cover overlay bg5 light-text align-center">
        <div className="container">
          <h2><span className="highlight">Newsletter</span> Sign Up</h2>
          <small>No Spam - Only latest news, price and activity updates</small>
          <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
            <form id="subscribe_main" action="" method="post" encType="multipart/form-data" className="form row newsletter-form mailchimp-form">
              <fieldset className="col-sm-8">
                <input id="NewsletterEmail" name="NewsletterEmail" type="email" placeholder="email@email.com" />
              </fieldset>
              <fieldset className="col-sm-4">
                <input type="submit" value="submit" className="btn btn-sm btn-outline-clr" />
              </fieldset>
              <div className="response" />
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Newsletter;
