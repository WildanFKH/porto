import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
      setToggleState(index);
  }; 

  return (
    <section className="qualification section">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My Personal Journey</span>

      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div 
          className={toggleState === 1 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"} onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification_icon"></i>Education
          </div>

          <div 
            className={toggleState === 2 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"} onClick={() => toggleTab(2)}>
            <i className="uil uil-briefcase-alt qualification_icon"></i>Experience
          </div>
        </div>
        <div className="qualification_sections">
          <div 
          className={toggleState === 1 ? "qualification_content qualification_content-active" : "qualification_content"}>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">SD</h3>
                <span className="qualification_subtitle">SDN Padasugih 01</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2007 - 2013 
                </div>
              </div>
              <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">MTS</h3>
                <span className="qualification_subtitle">MTS KHAS Kempek</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2014 - 2016
                </div>
              </div>
             
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">MAN</h3>
                <span className="qualification_subtitle">MA Negri 1 Cirebon</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2020
                </div>
              </div>
              <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">Universitas</h3>
                <span className="qualification_subtitle">Universitas Pamulang</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> 2023 - Present
                </div>
              </div>
             
            </div>
          </div>

          <div className={toggleState === 2 ? "qualification_content qualification_content-active" : "qualification_content"}>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">bla bla bla bla</h3>
                <span className="qualification_subtitle">bla bla bla bla</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i> bla bla bla bla
                </div>
              </div>
              <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
              </div>
            </div>

            <div className="qualification_data">
              <div></div>

              <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
              </div>

              <div>
                <h3 className="qualification_title">bla bla bla bla</h3>
                <span className="qualification_subtitle">bla bla bla bla</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>bla bla bla bla
                </div>
              </div>
             
            </div>

            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">bla bla bla bla</h3>
                <span className="qualification_subtitle">bla bla bla bla</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt"></i>bla bla bla bla
                </div>
              </div>
              <div>
                  <span className="qualification_rounder"></span>
                  <span className="qualification_line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Qualification