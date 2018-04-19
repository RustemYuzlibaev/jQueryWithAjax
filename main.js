$(function () {

  $('#result').load('test.html', function(
    responceTxt, statusTxt, xhr) {
      if(statusTxt == 'success') {
        alert('Fine');
      } else if(statusTxt == 'error') {
        alert('error: '  + xhr.statusText);
      }
    });




  $.get('test.html', function (data) {
    $('#result').html(data);
  });



  $.getJSON('users.json', function (data) {
    $.each(data, function (i, user) {
      $('ul#users').append('<li>'+user.first_name+' '+user.last_name+'</li>');
    })
  })




  $.ajax({
    method: 'GET',
    url: 'http://jsonplaceholder.typicode.com/posts',
    dataType: 'json'
  }).done(data => {
    $.map(data, (post, i)=> {
      $('#result').append('<h3>'+post.title+'</h3><p>'+post.body+'</p>');
    });
  });


  

  $('#postForm').submit(e => {
    e.preventDefault();
    let title = $('#title').val();
    let body = $('#body').val();
    let url = $(this).attr('action');

    $.post(url, {title: title, body: body})
     .done(function (data) {
       console.log(data);
     })
  })

});
