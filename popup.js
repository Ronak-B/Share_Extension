chrome.storage.local.get(['username','password'],function(result) {
  if(!result.username) {
    $('#clear').hide();
    $('#ok').on('click',function(event) {
      chrome.storage.local.set({'username':$('#username').val(),'password':$('#pwd').val()},function() {
        console.log("here");
        $('#form').hide();
        $('#ok').hide();
        $('h3').text("Hello "+result.username+result.password+"!");
        return
      });

    });
  } else {
      $('#form').hide();
      $('#ok').hide();
      $('h3').text("Hello "+result.username+result.password+"!");
      $('#clear').show();
      $('#clear').on('click', function() {
        console.log("clicked");
        chrome.storage.local.clear(function() {
          chrome.runtime.reload();
        });
      });
  }
  return
});





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
