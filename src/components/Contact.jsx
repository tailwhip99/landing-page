import React from 'react'
import '../styles/Contact.scss'

function Contact() {
 return (
	<div class="formbold-main-wrapper" id="contacts"> 
 
  <div class="formbold-form-wrapper">
    <form action="https://formbold.com/s/FORM_ID" method="POST">
        <div class="formbold-input-flex">
          <div>
              <label for="firstname" class="formbold-form-label"> Keresztnév </label>
              <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Olivér"
              class="formbold-form-input"
              />
          </div>
          <div>
              <label for="lastname" class="formbold-form-label"> Vezetéknév </label>
              <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Melczer"
              class="formbold-form-input"
              />
          </div>
        </div>

        <div class="formbold-input-flex">
          <div>
              <label for="email" class="formbold-form-label"> Email </label>
              <input
              type="email"
              name="email"
              id="email"
              placeholder="emberke1@gmail.com"
              class="formbold-form-input"
              />
          </div>
          <div>
              <label for="phone" class="formbold-form-label"> Telefonszám </label>
              <input
              type="text"
              name="phone"
              id="phone"
              placeholder="06301111112"
              class="formbold-form-input"
              />
          </div>
        </div>

        <div class="formbold-input-radio-wrapper">
            <label for="jobtitle" class="formbold-form-label"> Mit szeretnél? </label>

            <div class="formbold-radio-flex">
              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input class="formbold-input-radio" type="radio" name="jobtitle" id="jobtitle"/>
                  Landing Page
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>

              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input class="formbold-input-radio" type="radio" name="jobtitle" id="jobtitle"/>
                 eCommerce
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>

			  <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input class="formbold-input-radio" type="radio" name="jobtitle" id="jobtitle"/>
                 Business
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>

              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input class="formbold-input-radio" type="radio" name="jobtitle" id="jobtitle"/>
                 WebDesign
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>

              <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input class="formbold-input-radio" type="radio" name="jobtitle" id="jobtitle"/>
                  Backend
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
			  <div class="formbold-radio-group">
                <label class="formbold-radio-label">
                  <input class="formbold-input-radio" type="radio" name="jobtitle" id="jobtitle"/>
                  Custom
                  <span class="formbold-radio-checkmark"></span>
                </label>
              </div>
            </div>
        </div>

        <div>
            <label for="message" class="formbold-form-label"> Üzenet </label>
            <textarea
                rows="6"
                name="message"
                id="message"
                placeholder="Írd le nekünk mit szeretnél"
                class="formbold-form-input"
            ></textarea>
        </div>

        <button class="formbold-btn">
            Üzenet küldése
        </button>
    </form>
  </div>
  <p className="text">Válassz kínálataink közül!</p>
</div>

 )
 }
export default Contact