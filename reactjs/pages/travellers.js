import React from 'react';

const Travellers = () => (
  <>
    <section className="section align-center mobile-padding">
      <div className="container">
        <span className="icon section-icon icon-badges-votes-13"/>
        <h3 className="heading-alt">Information for Travellers</h3>
        <p className="text-alt">
          Tips & tricks for our guests.
        </p>
      </div>
    </section>


    <section className="fullwidth-section" style={{ marginBottom: 0}}>

      {/* VISA FREE */}
      <div className="fullwidth-path">
        <div
          className="fullwidth-section-bg bg-right"
          style={{backgroundImage: "url(/static/assets/img/travellers/viza-free.jpg)"}}
        />
        <div className="col-sm-6 fullwidth-column">
          <article>
            <h4 style={{marginBottom: '20px'}}>30 days visa-free</h4>

            <p>Yes, you’re able to visit our country for 30 days without going through getting visa procedure.</p>
            <p>The visa-free stay starts on the day of arrival and finishes on the day of departure (regardless the time of arrival and departure). The visa-free stay cannot be extended beyond 30 days.</p>
            <p><strong>Important notes:</strong></p>
            <ul>
              <li>- You must arrive and departure through <a
                href="http://airport.by/en" target="_blank">Minsk National
                Airport</a></li>
              <li>- Make sure your country is in the list of visa-free
                countries
              </li>
            </ul>

            <div className="row btns-block" style={{margin: 0, paddingBottom: 0}}>
              <a
                
                href="http://mfa.gov.by/en/visa/visafreetravel/e0ced19bb1f9bf2c.html"
                target="_blank"
                className="btn btn-sm"
              >
                Official Information
              </a>
              <a
                
                href="https://www.youtube.com/watch?v=KnDWt6srtNM"
                target="_blank"
                className="btn btn-sm"
              >
                Official Video
              </a>
            </div>

          </article>
        </div>
      </div>

      {/* TRANSFER */}
      <div className="fullwidth-path">
        <div
          className="fullwidth-section-bg bg-left"
          style={{backgroundImage: "url(/static/assets/img/travellers/transfer.jpg)"}}
        />
        <div className="col-sm-6 col-sm-offset-6 align-left fullwidth-column">
          <article>
            <h4 style={{marginBottom: '20px'}}>Transfer to / from the airport</h4>

            <p>The Minsk National Airport is 25 miles (40 km) away from the city.</p>

            <p><strong>Option 1:</strong> You can get to / from the city <a href="http://airport.by/en/transport/regular-route-bus" target="_blank">by bus or by shuttle bus</a> that runs every 20-30 minutes and arrives at the Central Bus Station.
              The ticket cost is around €2. The trip takes about an hour.
            </p>

            <p><strong>Option 2:</strong> Use taxi. General advise is to use taxi called <a href="https://taxi5.by/en/" target="_blank">Pyatnica</a> (Taxi5). It is an elegant service, a bit more expensive than others,
              however having drivers wearing suits, good & clean cars, free wifi & chargers. You can also pay via your credit card. The cost of getting to/from the city is fixed there and is 44 BYN (~$20).
            </p>

            <p>The cheaper alternative to Pyatnica is <strong>Yandex.Taxi</strong> (<a href="https://play.google.com/store/apps/details?id=ru.yandex.taxi&hl=en" target="_blank">Android</a>, <a href="https://itunes.apple.com/us/app/yandex-taxi/id472650686?mt=8" target="_blank">iOS</a>). The cost of the trip is not fixed and is around 30 - 40 BYN ($15 - $20).</p>

            <p>General advise is try to avoid ordering a taxi not using the apps, because there is a little chance that you'll be charged unreasonably high price.</p>

            <div className="row btns-block" style={{margin: 0, paddingBottom: 0}}>
              <a
                
                href="https://www.youtube.com/watch?v=Z0azWFh6hIE"
                target="_blank"
                className="btn btn-sm"
              >
                Taxi Video
              </a>
              <a
                
                href="https://www.youtube.com/watch?v=64WqlG1UxaM"
                target="_blank"
                className="btn btn-sm"
              >
                Airport Video
              </a>
            </div>

          </article>
        </div>
      </div>

      {/* MAPS */}
      <div className="fullwidth-path">
        <div
          className="fullwidth-section-bg bg-right"
          style={{backgroundImage: "url(/static/assets/img/travellers/maps.jpg)"}}
        />
        <div className="col-sm-6 fullwidth-column">
          <article>
            <h4 style={{marginBottom: '20px'}}>Maps / Navigation</h4>

            <p>For offline navigation around the city it is recommended to use Maps.me (<a href="https://play.google.com/store/apps/details?id=com.mapswithme.maps.pro&hl=en" target="_blank">Android</a>, <a href="https://itunes.apple.com/us/app/maps.me-offline-map-navigation/id510623322?mt=8" target="_blank">iOS</a>). The alternative to it is Yandex.maps (<a href="https://play.google.com/store/apps/details?id=ru.yandex.yandexmaps&hl=en" target="_blank">Android</a>, <a href="https://itunes.apple.com/us/app/yandex-maps/id313877526?mt=8" target="_blank">iOS</a>).</p>

            <p>If you want to explore the city / country more, below you'll find a good guide that advices other applications to explore local areas.</p>

            <div className="row btns-block" style={{margin: 0, paddingBottom: 0}}>
              <a
                
                href="http://belarusfeed.com/travel-apps-belarus/"
                target="_blank"
                className="btn btn-sm"
              >
                Belarus Pocket Guide
              </a>
            </div>

          </article>
        </div>
      </div>

      {/* SIM CARD */}
      <div className="fullwidth-path">
        <div
          className="fullwidth-section-bg bg-left"
          style={{backgroundImage: "url(/static/assets/img/travellers/sim-card.jpg)"}}
        />
        <div className="col-sm-6 col-sm-offset-6 align-left fullwidth-column">
          <article>
            <h4 style={{marginBottom: '20px'}}>Local sim card</h4>

            <p>There are stands of two Belarusian mobile operators at the airport:</p>

            <ul>
              <li>- A sales point of <strong>MTS</strong> is located near sectors 5-6. <a href="http://en.mts.by/tariffs/for_guests/tourist/" target="_blank">Check out suggested package.</a></li>
              <li>- A sales point of <strong>Life;)</strong> is located closer to international flights sectors. They also offer some tourists-speficic package.</li>
            </ul>

            <div className="row btns-block" style={{margin: 0, paddingBottom: 0}}>
              <a
                
                href="http://belarusfeed.com/buy-sim-card-belarus/"
                target="_blank"
                className="btn btn-sm"
              >
                Read more
              </a>
            </div>

          </article>
        </div>
      </div>

      {/* CURRENCY */}
      <div className="fullwidth-path">
        <div
          className="fullwidth-section-bg bg-right"
          style={{backgroundImage: "url(/static/assets/img/travellers/money.jpg)"}}
        />
        <div className="col-sm-6 fullwidth-column">
          <article>
            <h4 style={{marginBottom: '20px'}}>Money / Currency Exchange</h4>

            <p>The Belarusian ruble, the local currency of Belarus, <strong>is not a fully convertible currency</strong>, so you won’t be able to get any before you arrive in the country.</p>

            <p>Note that in Belarus you can only pay via Belarusian ruble. There are a few exception (like in the airport), but generally it's better to have ~50-100 BYN in cash. Payments through credit cards are accepted in most places all over the country.</p>

            <p>Approximate currency exchange rate: $1 ~ 2.1 BYN, €1 ~ 2.4 BYN.</p>

            <p>You can change money at most banks and there are a large number of ATM machines in Belarus, particularly in Minsk.</p>

            <div className="row btns-block" style={{margin: 0, paddingBottom: 0}}>
              <a
                
                href="https://www.belarus.by/en/travel/money"
                target="_blank"
                className="btn btn-sm"
              >
                Read more
              </a>
            </div>

          </article>
        </div>
      </div>

      {/* LOCAL FOOD & DRINKS */}
      <div className="fullwidth-path">
        <div
          className="fullwidth-section-bg bg-left"
          style={{backgroundImage: "url(/static/assets/img/travellers/food.jpg)"}}
        />
        <div className="col-sm-6 col-sm-offset-6 align-left fullwidth-column">
          <article>
            <h4 style={{marginBottom: '20px'}}>Local Food & Drinks</h4>

            <p>Food industry in Minsk develops really fast. Cafes and restaurants of all kinds appear one after another. What is wonderful, we don't have most of fast food places you are used to see in other spots of the world: you won't find any Subway or Starbucks, so you shall find an alternative among tens of places you can choose from, and we will try to help you to choose wisely..</p>

            <p>Generally many places are located near the city center (as well as the venue for Drupal Camp), so it's recommended to stay somewhere in the center or at least very close to the metro line.</p>

            <p>Famous places with Belarusian cuisine are <a href="https://www.tripadvisor.com/ShowUserReviews-g294448-d3419085-r650949053-Kamyanitsa-Minsk.html" target="_blank">Kamianica</a>, <a href="https://www.tripadvisor.com/Restaurant_Review-g294448-d2470206-Reviews-Kukhmistr-Minsk.html" target="_blank">Kukhmistr</a>, <a href="https://www.tripadvisor.com/Restaurant_Review-g294448-d1440878-Reviews-Rakovsky_Brovar-Minsk.html" target="_blank">Rakovsky Brovar</a> and  <a href="https://www.tripadvisor.com/Restaurant_Review-g294448-d9728302-Reviews-Vasilki-Minsk.html" target="_blank">Vasilki</a>.</p>

            <div className="row btns-block" style={{margin: 0, paddingBottom: 0}}>
              <a
                
                href="https://34travel.me/gotobelarus/en/post/minsk-english-guide#caferest"
                target="_blank"
                className="btn btn-sm"
              >
                Read More
              </a>
            </div>

          </article>
        </div>
      </div>

      {/* INSIGHTS FROM LOCALS */}
      <div className="fullwidth-path">
        <div
          className="fullwidth-section-bg bg-right"
          style={{backgroundImage: "url(/static/assets/img/travellers/street.jpg)"}}
        />
        <div className="col-sm-6 fullwidth-column">
          <article>
            <h4 style={{marginBottom: '20px'}}>Insights from Locals</h4>

            <p><a href="https://yandex.com/maps/-/CCezv4Pu" target="_blank">Kastryčnickaja Street</a> certainly deserves to be mentioned. If you ask how the process of gentrification and revitalization is going on in Minsk, you can always point to the Kastryčnickaja’s example – the former industrial street has in recent years become pretty much the most important exhibition-and-hang-out place in the city.</p>

            <p>This is where Huligan Bar, Depo crêpe house, Monkey Food veggie place, Laŭka snack-bar, and Enzo café work and where progressive advertising agencies, publishing houses, and IT companies have opened their offices. The former plant’s walls are decorated with the murals left over after the Vulica Brazil street-art festival. The most important things happen here at night in the warm time of the year – on the street, of course.</p>

            <p>
              Fridays and Saturdays are the time for fun and chaotic parties when several thousands of people might be hanging out on a little patch of the ground.
            </p>

            <div className="row btns-block" style={{margin: 0, paddingBottom: 0}}>
              <a
                
                href="https://34mag.net/media/34magstuff/kastrychnickaja_map_34mag.pdf"
                target="_blank"
                className="btn btn-sm"
              >
                Download Street Map
              </a>
            </div>

          </article>
        </div>
      </div>

      {/* SUPPORT CHANNEL */}
      <div className="fullwidth-path">
        <div
          className="fullwidth-section-bg bg-left"
          style={{backgroundImage: "url(/static/assets/img/travellers/slack.jpg)"}}
        />
        <div className="col-sm-6 col-sm-offset-6 align-left fullwidth-column">
          <article>
            <h4 style={{marginBottom: '20px'}}>Support</h4>

            <p>If you're travelling from the abroad, you'll likely have more questions that we have covered in this short guide.</p>

            <p>To support all our travellers, we've created a special <span className="highlight">#travellers</span> channel in the Slack workspace of the event. You're more than welcome to join and ask any questions you have in your great mind :-)</p>

            <div className="row btns-block" style={{margin: 0, paddingBottom: 0}}>
              <a
                
                href="https://join.slack.com/t/drupal-belarus/shared_invite/enQtNTc1MTkwMTUxNzAyLWZlMjVlZmY0YmJlOGM3YzkxN2M0ZjNiZGUwNjhhMDBmY2Q0MDZjZTg4ZGUyNDFiZGM2MmVlY2YwZmJmYzE3Y2U"
                target="_blank"
                className="btn btn-sm"
              >
                Join Slack
              </a>
            </div>

          </article>
        </div>
      </div>

    </section>
  </>
);

export default Travellers;
