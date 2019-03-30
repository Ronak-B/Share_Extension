$(document).ready(function() {
    $('#gotoLogin').click(function() {
        $('#index').hide();
        $('#login').show();
        $('#signup').hide();
        $('#home').hide();
    });
    
    $('#gotoSignup').click(function() {
        $('#index').hide();
        $('#login').hide();
        $('#signup').show();
        $('#home').hide();
    });

    $('#signupbutton').click(function() {
        $.ajax({
                  data: {
                    username:$('#signupusername').val(),
                    password:$('#signuppassword').val(),
                    name:$('#signupname').val(),
                    email:$('#signupemail').val()
                  },
                  type:'POST',
                  url:'http://127.0.0.1:5000/signup'
                }).done(function(result) {
                    if(result.result=='success') {
                      $('#index').show()
                      $('#login').hide();
                      $('#signup').hide();
                      $('#home').hide();
                    } else {
                        $('#index').hide();
                        $('#login').hide();
                        $('#signup').show();
                        $('#home').hide();
                    }
                });
    });

    $('#loginbutton').click(function() {
        $.ajax({
            data: {
              username:$('#loginusername').val(),
              password:$('#loginpassword').val(),
            },
            type:'POST',
            url:'http://127.0.0.1:5000/login'
          }).done(function(result) {
              if(result.result=='success') {
                $('#index').hide()
                $('#login').hide();
                $('#signup').hide();
                $('#home').show();
                chrome.storage.local.set({'username':$('#loginusername').val(),'password':$('#loginpassword').val()},function() {
                    console.log("Stored");
              });
              } else {
                  $('#index').hide();
                  $('#login').show();
                  $('#signup').hide();
                  $('#home').hide();
              }
          });
    });

    $('#logoutbutton').click(function() {
        chrome.storage.local.clear(function() {
           chrome.runtime.reload();
       });
    });

});

chrome.storage.local.get(['username','password'],function(result) {
    if(!result.username) {
        $('#index').show();
    } else {
        $('#index').hide();
        $('#login').hide();
        $('#signup').hide();
        $('#home').show();
    }
});


















// chrome.storage.local.get(['username','password'],function(result) {
//   if(!result.username) {
//     $('#clear').hide();
//     $('#ok').on('click',function(event) {
//       chrome.storage.local.set({'username':$('#username').val(),'password':$('#pwd').val()},function() {
//         console.log("here");
//         $('#form').hide();
//         $('#ok').hide();
//         $('h3').text("Hello "+result.username+result.password+"!");
//         return
//       });

//     });
//   } else {
//       $('#form').hide();
//       $('#ok').hide();
//       $('h3').text("Hello "+result.username+result.password+"!");
//       $('#clear').show();
//       $('#clear').on('click', function() {
//         console.log("clicked");
//         chrome.storage.local.clear(function() {
//           chrome.runtime.reload();
//         });
//       });
//   }
//   return
// });





// $(document).ready(function() {
//   $('#ok').on('click',function(event) {
//     $.ajax({
//       data: {
//         username:$('#username').val(),
//         password:$('#pwd').val()
//       },
//       type:'POST',
//       url:'http://127.0.0.1:5000/login'
//     }).done(function(result) {
//         if(result.login) {
//           $('#alert').hide()
//           $('#form').hide();
//           $('#ok').hide();
//           $('h3').text("Hello "+result.username+"!");
//         } else {
//           $('#alert').show()
//         }
//     });
//     event.preventDefault();
//   });
// });
