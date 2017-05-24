import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav'
import Footer from './Footer'

export default class signup extends Component {
  render () {
    return
    <div class="content">
            <div class="card-block container col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-3 col-md-6 col-md-offset-3">
                <form role="form" method="post">
                    <h1 class="signupTitle text-center">{{title}}</h1>
                    <!-- FIRST NAME -->
                    <div class="row">
                        <div class="formInput">
                            <div class="form-group">
                                <input type="text" name="firstName" id="firstName" class="form-control input-lg" placeholder="First Name" tabindex="1">
                            </div>
                        </div>
                    </div>
                    <!-- LAST NAME -->
                    <div class="row">
                        <div class="formInput">
                            <div class="form-group">
                                <input type="text" name="lastName" id="lastName" class="form-control input-lg" placeholder="Last Name" tabindex="2">
                            </div>
                        </div>
                    </div>


                    <!-- ZIPCODE -->
                    <div class="row">
                        <div class="formInput">
                            <div class="form-group">
                                <input type="text" name="zip" id="zip" class="form-control input-lg" placeholder="Zipcode" tabindex="7">
                            </div>
                        </div>
                    </div>
                    <!-- EMAIL -->
                    <div class="row">
                        <div class="formInput">
                            <div class="form-group">
                                <input type="text" name="email" id="email" class="form-control input-lg" placeholder="Email Address" tabindex="8">
                            </div>
                        </div>
                    </div>
                    <!-- PASSWORD -->
                    <div class="row">
                        <div class="formInput">
                            <div class="form-group">
                                <input type="password" name="password" id="password" class="form-control input-lg" placeholder="Password" tabindex="9">
                            </div>
                        </div>
                    </div>

                    <!-- <div class="row">
                            <div class="col-xs-12 col-sm-6 col-md-6">
                                <div class="form-group">
                                    <input type="password" name="password_confirmation" id="password_confirmation" class="form-control input-lg" placeholder="Confirm Password" tabindex="10">
                                </div>
                            </div>
                          </div> -->

                    <div class="row">
                        <div class="formInput">
                            <div class="form-group">
                              <label class="photo" for="photo">Upload a photo</label>
                                <input type="file" name="photo" id="photo" class="photoBtn" tabindex="11">
                            </div>
                        </div>
                    </div>

                    <div class="row btnrow">
                        <div class="col-xs-12 col-sm-4 col-sm-offset-4 col-md-4 col-md-offset-4 "><input type="submit" value="SIGN UP" class="siteBtn btn  btn-block btn-lg" tabindex="12"></div>
                    </div>
                </form>
            </div>

        </div>

  }
}
