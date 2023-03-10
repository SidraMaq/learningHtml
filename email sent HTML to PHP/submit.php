<?php
f ($_SERVER['REQUEST_METHOD'] === 'POST') {
//first you need to fetch your feilds
	  $name = $_POST['name'];
	  $email = $_POST['email'];
	  $phone = $_POST['phone'];
	  $message = $_POST['message'];
	  //we have no subject so we will set subject manually
	  $subject = "Contact form submission from $name";
	 
	 //then you need to define email where you want to send user information 
     //keep in mind that email should be provided by your hosting like
	    $to = 'info@auspexsoft.com'; 

	    //define header who is sending email
      $headers = 'From: ' . $name . ' <' . $email . '>';

      /set location for success msg or failed if email sent
        if (mail($to, $subject, $message, $headers)) {
        	        	 header('Location: success.html');
        	        	 exit();
        }

}
?>
