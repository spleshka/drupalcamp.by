import React from 'react';

const Schedule = () => (
  <section className="section align-center">
    <div className="container">

      <span className="icon section-icon icon-office-21" />
      <h3 className="heading-alt schedule-heading">Schedule</h3>

      <div className="row">
        <div className="col-md-10 col-md-offset-1">

          <div className="row schedule">

            <ul className="nav nav-schedule">

              <li className="">
                <a>
                  <h5 className="highlight">Pre Party</h5>
                  <p className="text-alt">17/05/2019</p>
                </a>
              </li>

              <li>
                <a>
                  <h5 className="highlight">Sessions Day</h5>
                  <p className="text-alt">18/05/2019</p>
                </a>
              </li>

              <li>
                <a>
                  <h5 className="highlight">Contribution Day</h5>
                  <p className="text-alt">19/05/2019</p>
                </a>
              </li>

            </ul>

           {/* <div className="tab-content">

              <div id="schedule3_day1" className="tab-pane fade active in">

                <div className="tab-content tab-content-schedule">

                  <div id="schedule3_day1_main" className="tab-pane fade active in">

                    <div className="panel-group" id="schedule3_day1_main_timeline">

                      <div className="panel schedule-item">

                        <div className="lecture-icon-wrapper">
                          <span className="fa fa-cutlery" />
                        </div>

                        <a data-toggle="collapse"
                           data-parent="#schedule3_day1_main_timeline"
                           href="#schedule3_day1_main_time1"
                           className="schedule-item-toggle"
                        >
                          <strong className="time highlight">
                            <span className="icon icon-office-24" />6:30 PM
                          </strong>
                          <h6 className="title">
                            Pre Party starts
                          </h6>
                        </a>

                        <div id="schedule3_day1_main_time1" className="panel-collapse collapse in schedule-item-body">
                          <article>
                            <p className="description">
                              Program: To be confirmed. Stay tuned.
                            </p>
                          </article>
                        </div>

                      </div>
                    </div>

                  </div>

                </div>

              </div>

              <div id="schedule3_day2" className="tab-pane fade in">

                <div className="tab-content tab-content-schedule">


                  <div id="schedule3_day2_main"
                       className="tab-pane fade active in">


                    <div className="panel-group"
                         id="schedule3_day2_main_timeline">

                      <div className="panel schedule-item">
                        <div className="lecture-icon-wrapper">
                          <img src="../assets/img/speakers/speaker1.jpg" alt=""
                               className="img-responsive"/>
                        </div>
                        <a data-toggle="collapse"
                           data-parent="#schedule3_day2_main_timeline"
                           href="#schedule3_day2_main_time1"
                           className="schedule-item-toggle">
                          <strong className="time highlight"><span
                            className="icon icon-office-24"/>2:20
                            PM</strong>
                          <h6 className="title">How to organize great events<i
                            className="icon icon-arrows-06"/></h6>
                        </a>
                        <div id="schedule3_day2_main_time1"
                             className="panel-collapse collapse in schedule-item-body">
                          <article>
                            <p className="description">Lorem Ipsum is simply dummy
                              text of the printing and typesetting industry. Lorem
                              Ipsum has been the industry's standard dummy text
                              ever since the 1500s, when an unknown printer took a
                              galley of type and scrambled it to make a type.</p>
                            <strong className="highlight speaker-name">Michael
                              Lambert</strong>
                          </article>
                        </div>
                      </div>

                      <div className="panel schedule-item">
                        <div className="lecture-icon-wrapper">
                          <img src="../assets/img/speakers/speaker1.jpg" alt=""
                               className="img-responsive"/>
                        </div>
                        <a data-toggle="collapse"
                           data-parent="#schedule3_day2_main_timeline"
                           href="#schedule3_day2_main_time3"
                           className="schedule-item-toggle collapsed">
                          <strong className="time highlight"><span
                            className="icon icon-office-24"/>7:00
                            PM</strong>
                          <h6 className="title">Close your eyes around the world<i
                            className="icon icon-arrows-06"/></h6>
                        </a>
                        <div id="schedule3_day2_main_time3"
                             className="panel-collapse collapse schedule-item-body">
                          <article>
                            <p className="description">Lorem Ipsum is simply dummy
                              text of the printing and typesetting industry. Lorem
                              Ipsum has been the industry's standard dummy text
                              ever since the 1500s, when an unknown printer took a
                              galley of type and scrambled it to make a type.</p>
                            <strong className="highlight speaker-name">Michael
                              Lambert</strong>
                          </article>
                        </div>
                      </div>

                      <div className="panel schedule-item">
                        <div className="lecture-icon-wrapper">
                          <img src="../assets/img/speakers/speaker1.jpg" alt=""
                               className="img-responsive"/>
                        </div>
                        <a data-toggle="collapse"
                           data-parent="#schedule3_day2_main_timeline"
                           href="#schedule3_day2_main_time4"
                           className="schedule-item-toggle collapsed">
                          <strong className="time highlight"><span
                            className="icon icon-office-24"/>7:40
                            PM</strong>
                          <h6 className="title">Passion and people<i
                            className="icon icon-arrows-06"/></h6>
                        </a>
                        <div id="schedule3_day2_main_time4"
                             className="panel-collapse collapse schedule-item-body">
                          <article>
                            <p className="description">Lorem Ipsum is simply dummy
                              text of the printing and typesetting industry. Lorem
                              Ipsum has been the industry's standard dummy text
                              ever since the 1500s, when an unknown printer took a
                              galley of type and scrambled it to make a type.</p>
                            <strong className="highlight speaker-name">Michael
                              Lambert</strong>
                          </article>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

              <div id="schedule3_day3" className="tab-pane fade in">

                <div className="tab-content tab-content-schedule">

                  <div id="schedule3_day3_main"
                       className="tab-pane fade active in">

                    <div className="panel-group"
                         id="schedule3_day3_main_timeline">

                      <div className="panel schedule-item">
                        <div className="lecture-icon-wrapper">
                          <img src="../assets/img/speakers/speaker1.jpg" alt=""
                               className="img-responsive"/>
                        </div>
                        <a data-toggle="collapse"
                           data-parent="#schedule3_day3_main_timeline"
                           href="#schedule3_day3_main_time1"
                           className="schedule-item-toggle">
                          <strong className="time highlight"><span
                            className="icon icon-office-24"/>2:20
                            PM</strong>
                          <h6 className="title">How to organize great events<i
                            className="icon icon-arrows-06"/></h6>
                        </a>
                        <div id="schedule3_day3_main_time1"
                             className="panel-collapse collapse in schedule-item-body">
                          <article>
                            <p className="description">Lorem Ipsum is simply dummy
                              text of the printing and typesetting industry. Lorem
                              Ipsum has been the industry's standard dummy text
                              ever since the 1500s, when an unknown printer took a
                              galley of type and scrambled it to make a type.</p>
                            <strong className="highlight speaker-name">Michael
                              Lambert</strong>
                          </article>
                        </div>
                      </div>

                      <div className="panel schedule-item">
                        <div className="lecture-icon-wrapper">
                          <img src="../assets/img/speakers/speaker1.jpg" alt=""
                               className="img-responsive"/>
                        </div>
                        <a data-toggle="collapse"
                           data-parent="#schedule3_day3_main_timeline"
                           href="#schedule3_day3_main_time2"
                           className="schedule-item-toggle collapsed">
                          <strong className="time highlight"><span
                            className="icon icon-office-24"/>5:40
                            PM</strong>
                          <h6 className="title">Scaling into crowded space<i
                            className="icon icon-arrows-06"/></h6>
                        </a>
                        <div id="schedule3_day3_main_time2"
                             className="panel-collapse collapse schedule-item-body">
                          <article>
                            <p className="description">Lorem Ipsum is simply dummy
                              text of the printing and typesetting industry. Lorem
                              Ipsum has been the industry's standard dummy text
                              ever since the 1500s, when an unknown printer took a
                              galley of type and scrambled it to make a type.</p>
                            <strong className="highlight speaker-name">Michael
                              Lambert</strong>
                          </article>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>*/}

          </div>
        </div>
      </div>

      <p className="text-alt">
        Details will appear as soon as we confirm them.
      </p>

    </div>
  </section>
);

export default Schedule;
