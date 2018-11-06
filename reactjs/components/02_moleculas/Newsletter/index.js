import React from 'react';
import MailchimpSubscribe from 'react-mailchimp-subscribe';

class Newsletter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      EMAIL: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ EMAIL: e.target.value });
  }

  render() {
    return (
      <section id="sign_up" className="section bg-cover overlay bg5 light-text align-center">
        <div className="container">
          <h2>Keep me <span className="highlight">updated</span></h2>
          <small>No Spam - Only latest news, price and activity updates</small>
          <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
            <MailchimpSubscribe
              url="https://drupalcamp.us19.list-manage.com/subscribe/post?u=8c355a91003793c0bc94a4ff6&id=b8305b7949"
              render={({ subscribe, status, message }) => (
                  <form id="subscribe_main" encType="multipart/form-data" className="form row newsletter-form mailchimp-form">
                    {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
                    {status === "success" && <div style={{ color: "#1ac6ff" }} >Subscribed! We will keep you posted.</div>}
                    <fieldset className="col-sm-8">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        onChange={this.onChange}
                      />
                    </fieldset>
                    <fieldset className="col-sm-4">
                      <input
                        type="submit"
                        disabled={status === 'success' || status === 'sending' ? 'disabled' : ''}
                        value={status === 'success' ? 'success!' : status === 'sending' ? 'sending...' : 'submit'}
                        className="btn btn-sm btn-outline-clr"
                        onClick={e => {
                          subscribe(this.state);
                          e.preventDefault();
                        }}
                      />
                    </fieldset>
                    <div className="response" />
                  </form>
              )}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Newsletter;
