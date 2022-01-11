<?php

// Class
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

// Validate
if ( isset( $_POST[ 'email' ] ) || array_key_exists( 'email', $_POST ) ) :

	// Message Settings
	$message = array(
		'name'			=>  !empty( $_POST[ 'name' ] ) ? $_POST[ 'name' ] : '',
		'email'			=> !empty( $_POST[ 'email' ] ) ? $_POST[ 'email' ] : '',
		'number'		=> !empty( $_POST[ 'number' ] ) ? $_POST[ 'number' ] : '',
		'message'		=> !empty( $_POST[ 'message' ] ) ? $_POST[ 'message' ] : '',
		'body'			=> '',
		"alerts"		=> array(
			"error"			=> 'Message could not be sent.',
			"success"		=> 'Thank your. Your message has been sent.',
		),
	);
	
	$message[ 'body' ] .= '<br><b>Name:</b> ' . !empty( $message[ 'name' ] ) ? $message[ 'name' ] : '';
	$message[ 'body' ] .= '<br><b>Email:</b> ' . !empty( $message[ 'email' ] ) ? $message[ 'email' ] : '';
	$message[ 'body' ] .= '<br><b>Number:</b> ' . !empty( $message[ 'number' ] ) ? $message[ 'number' ] : '';
	$message[ 'body' ] .= '<br><b>Message:</b> ' . !empty( $message[ 'message' ] ) ? $message[ 'message' ] : '';
	
	// Include
	require 'phpmailer/Exception.php';
	require 'phpmailer/PHPMailer.php';

	$mail = new PHPMailer( true );

	try {
		// Recipients
		$mail->AddReplyTo( $message[ 'email' ], $message[ 'name' ] );
		$mail->setFrom( 'admin@'. $_SERVER['SERVER_NAME'], $message[ 'name' ] );
		$mail->addAddress( $settings[ 'email' ], $settings[ 'name' ] );
		
		// Content
		$mail->isHTML( true );
		$mail->Subject = $message[ 'subject' ];
		$mail->Body    = $message[ 'body' ];
		
		// Send
		$mail->send();
		
		// Success
		echo '["success", "'. $message[ 'alerts' ][ 'success' ] .'"]';
	} catch ( Exception $e ) {
		// Error
		echo '["error", "'. $message[ 'alerts' ][ 'error' ] .'"]';
	}

endif;

if( isset( $_POST['a_email'] ) ) {
	// Message Settings
	$message = array(
		'name'			=> !empty( $_POST[ 'a_name' ] ) ? $_POST[ 'a_name' ] : '',
		'email'			=> !empty( $_POST[ 'a_email' ] ) ? $_POST[ 'a_email' ]  : '',
		'number'		=> !empty( $_POST[ 'a_number' ] ) ? $_POST[ 'a_number' ]: '',
		'service'		=> !empty( $_POST[ 'service' ] ) ? $_POST[ 'service' ]: '',
		'date'			=> !empty( $_POST[ 'date' ] ) ? $_POST[ 'date' ]: '',
		'time'			=> !empty( $_POST[ 'time' ] ) ? $_POST[ 'time' ]: '',
		'message'		=> !empty( $_POST[ 'a_message' ] ) ? $_POST[ 'a_message' ]: '',
		'body'			=> '',
		"alerts"		=> array(
			"error"			=> 'Message could not be sent.',
			"success"		=> 'Thank your. Your message has been sent.',
		),
	);
	



	$message[ 'body' ] .= '<b>Name:</b> ' . !empty( $message[ 'name' ] ) ? $message[ 'name' ] : '';
	$message[ 'body' ] .= '<br><b>Email:</b> ' . !empty( $message[ 'email' ] ) ? $message[ 'email' ]  : '';
	$message[ 'body' ] .= '<br><b>Number:</b> ' . !empty( $message[ 'number' ] ) ? $message[ 'number' ] : '';
	$message[ 'body' ] .= '<br><br><b>Service:</b><br>' . !empty(  $message[ 'service' ] ) ? $message[ 'service' ] : '';
	$message[ 'body' ] .= '<br><br><b>Date:</b><br>' . !empty( $message[ 'date' ] ) ? $message[ 'date' ] : '';
	$message[ 'body' ] .= '<br><br><b>Time:</b><br>' . !empty( $message[ 'time' ] ) ? $message[ 'time' ] : '';
	$message[ 'body' ] .= '<br><br><b>Message:</b><br>' . !empty( $message[ 'message' ] ) ? $message[ 'message' ] : '';

	
	
	// Include
	require 'phpmailer/Exception.php';
	require 'phpmailer/PHPMailer.php';

	$mail = new PHPMailer( true );

	try {
		// Recipients
		$mail->AddReplyTo( $message[ 'email' ], $message[ 'name' ] );
		$mail->setFrom( 'admin@'. $_SERVER['SERVER_NAME'], $message[ 'name' ] );
		$mail->addAddress( $settings[ 'email' ], $settings[ 'name' ] );
		
		// Content
		$mail->isHTML( true );
		$mail->Subject = $message[ 'a_subject' ];
		$mail->Body    = $message[ 'a_body' ];
		
		// Send
		$mail->send();
		
		// Success
		echo '["success", "'. $message[ 'alerts' ][ 'success' ] .'"]';
	} catch ( Exception $e ) {
		// Error
		echo '["error", "'. $message[ 'alerts' ][ 'error' ] .'"]';
	}
}

if( isset( $_POST['aa_email'] ) ) {
	// Message Settings
	$message = array(
		'name'			=> !empty( $_POST[ 'aa_name' ] ) ? $_POST[ 'aa_name' ] : '',
		'email'			=> !empty( $_POST[ 'aa_email' ] ) ? $_POST[ 'aa_email' ]  : '',
		'number'		=> !empty( $_POST[ 'aa_number' ] ) ? $_POST[ 'aa_number' ]: '',
		'service'		=> !empty( $_POST[ 'aa_service' ] ) ? $_POST[ 'aa_service' ]: '',
		'date'			=> !empty( $_POST[ 'aa_date' ] ) ? $_POST[ 'aa_date' ]: '',
		'visited'			=> !empty( $_POST[ 'aa_visited' ] ) ? $_POST[ 'aa_visited' ]: '',
		'message'		=> !empty( $_POST[ 'aa_message' ] ) ? $_POST[ 'aa_message' ]: '',
		'body'			=> '',
		"alerts"		=> array(
			"error"			=> 'Message could not be sent.',
			"success"		=> 'Thank your. Your message has been sent.',
		),
	);


	$message[ 'body' ] .= '<b>Name:</b> ' . !empty( $message[ 'name' ] ) ? $message[ 'name' ] : '';
	$message[ 'body' ] .= '<br><b>Email:</b> ' . !empty( $message[ 'email' ] ) ? $message[ 'email' ]  : '';
	$message[ 'body' ] .= '<br><b>Number:</b> ' . !empty( $message[ 'number' ] ) ? $message[ 'number' ] : '';
	$message[ 'body' ] .= '<br><br><b>Service:</b><br>' . !empty(  $message[ 'service' ] ) ? $message[ 'service' ] : '';
	$message[ 'body' ] .= '<br><br><b>Date:</b><br>' . !empty( $message[ 'date' ] ) ? $message[ 'date' ] : '';
	$message[ 'body' ] .= '<br><br><b>Visited:</b><br>' . !empty( $message[ 'visited' ] ) ? $message[ 'visited' ] : '';
	$message[ 'body' ] .= '<br><br><b>Message:</b><br>' . !empty( $message[ 'message' ] ) ? $message[ 'message' ] : '';

	
	// Include
	require 'phpmailer/Exception.php';
	require 'phpmailer/PHPMailer.php';

	$mail = new PHPMailer( true );

	try {
		// Recipients
		$mail->AddReplyTo( $message[ 'email' ], $message[ 'name' ] );
		$mail->setFrom( 'admin@'. $_SERVER['SERVER_NAME'], $message[ 'name' ] );
		$mail->addAddress( $settings[ 'email' ], $settings[ 'name' ] );
		
		// Content
		$mail->isHTML( true );
		$mail->Subject = $message[ 'a_subject' ];
		$mail->Body    = $message[ 'a_body' ];
		
		// Send
		$mail->send();
		
		// Success
		echo '["success", "'. $message[ 'alerts' ][ 'success' ] .'"]';
	} catch ( Exception $e ) {
		// Error
		echo '["error", "'. $message[ 'alerts' ][ 'error' ] .'"]';
	}
}