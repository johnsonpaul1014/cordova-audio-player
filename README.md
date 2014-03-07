The MIT License (MIT)

Copyright (c) <year> <copyright holders>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

Cordova Audio Player

This JavaScript library is the start of an attempt to normalize the audio player used in
Cordova with the HTML5 audio tag for ease of use with the Android platform.  Currently,
the audio tag doens't work with android and the Cordova Media API needs to be used
instead.  The goal of this library is to allow use of the HTML5 audio javascript functionality
in the body of your code and use the CordovaAudioPlayer as a wrapper.

This repository contains a full working Android Cordova Eclipse workspace.  The library requires the
watch.js library as well, which is also included.  The example use of the player is in index.js.

Note that there is a merges file that allows you to test the code in the browser as well as
on an Android device with no code changes.  I use Ripple in the browser to simulate the device.