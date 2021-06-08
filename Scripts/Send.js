var SendContact = document.getElementById('submit');
SendContact.onclick =(event) => {
    event.preventDefault();
   //get variables from HTML by IDs
   var name =document.getElementById('name').value;
   var lastname =document.getElementById('lastname').value;
   var email =document.getElementById('email').value;
   var number = document.getElementById('number').value;
   var message =document.getElementById('message').value;
   // validate if following field contains data
   if (name, lastname, email, number, message !== '') {
       // alert if data is given
       alert('Your message is sent');
   order.push({

   });
  } else {
      alert('Please, fill the fields')
  }

}
