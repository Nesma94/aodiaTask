<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="Aodia Panel">
	<meta name="author" content="">
	<title>Aodia's Panel</title>
	<!-- Bootstrap core CSS-->
	<link href="<?=base_url()?>assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	<!-- Custom fonts for this template-->
	<link href="<?=base_url()?>assets/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
	<!-- Page level plugin CSS-->
	<link href="<?=base_url()?>assets/vendor/datatables/dataTables.bootstrap4.css" rel="stylesheet">
	<!-- Custom styles for this template-->
	<link href="<?=base_url()?>assets/css/sb-admin.css" rel="stylesheet">
	<!-- Favicon -->
	<!-- <link rel="shortcut icon" href="<?=base_url()?>assets/images/logo.png" type="image/x-icon"> -->
	<link rel="stylesheet"
		href="//cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.7.1/css/bootstrap-datepicker3.min.css">
	<link href="<?=base_url()?>assets/css/cropper/cropper.css" rel="stylesheet">
	<link href="<?=base_url()?>assets/css/cropper/main.css" rel="stylesheet">
	<!-- JS Libs in Header -->
	<!-- jQuery -->
	<script src="<?=base_url()?>assets/vendor/jquery/jquery.min.js"></script>
	<!-- jQuery UI CDN -->
	<script src="//code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<script src="//cdnjs.cloudflare.com/ajax/libs/jquery.form/4.2.2/jquery.form.min.js"></script>
	<!-- Select2 CSS CDN & Bootstrap Theme -->
	<link href="//cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet">
	<link rel="stylesheet"
		href="//cdnjs.cloudflare.com/ajax/libs/select2-bootstrap-theme/0.1.0-beta.10/select2-bootstrap.min.css">
	<link rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/1.4.0/css/perfect-scrollbar.css">
	<link rel="stylesheet"
		href="https://cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/1.4.0/css/perfect-scrollbar.min.css">
	<link rel="stylesheet"
		href="//cdnjs.cloudflare.com/ajax/libs/select2-bootstrap-theme/0.1.0-beta.10/select2-bootstrap.min.css">
	<link rel="stylesheet"
		href="//cdnjs.cloudflare.com/ajax/libs/select2-bootstrap-theme/0.1.0-beta.10/select2-bootstrap.min.css">
	<!-- Custom CSS -->
	<link rel="stylesheet" href="<?=base_url();?>assets/css/main.css">
	<style>
		.select2-container {
			width: 100% !important;
		}

	</style>
</head>

<body class="fixed-nav sticky-footer bg-dark" id="page-top">
	<!-- Navigation-->
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top pl-0" id="mainNav">
		<a class="navbar-brand d-block text-center" href="<?=base_url()?>slider">
			<!-- <img class="img-fluid w-25 h-25 logo" style="margin-left: -65px !important;"
                src="<?=base_url()?>assets/images/logo.png"> -->
		</a>
		<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
			data-target="#navbarResponsive">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarResponsive">
			<ul class="navbar-nav navbar-sidenav" id="accordion" style="margin-top: 125px;">
				<li class="nav-item" data-toggle="tooltip" data-placement="right" title="Dashboard">
					<a class="nav-link" href="<?=base_url()?>slider">
						<i class="fa fa-fw fa-dashboard"></i>
						<span class="nav-link-text">Dashboard</span>
					</a>
				</li>
				<li class="nav-item" data-toggle="tooltip" data-placement="right" title="Users">
					<a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#users"
						data-parent="#accordion">
						<span class="nav-link-text">Users</span>
					</a>
					<ul class="sidenav-second-level collapse" id="users">
						<li>
							<a href="<?=base_url()?>account">
								All Users
							</a>
						</li>
						<li>
							<a href="<?=base_url()?>account/addAccount">
								Add User
							</a>
						</li>
					</ul>
				</li>
				<li class="nav-item" data-toggle="tooltip" data-placement="right" title="driver">
					<a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#driver"
						data-parent="#accordion">
						<span class="nav-link-text">Driver</span>
					</a>
					<ul class="sidenav-second-level collapse" id="driver">
						<li>
							<a href="<?=base_url()?>Driver">
								all Drivers
							</a>
						</li>
						<li>
							<a href="<?=base_url()?>Driver/addDriver">
								Add Driver
							</a>
						</li>
					</ul>
				</li>
			</ul>

			<ul class="navbar-nav ml-auto">
				<li class="nav-item">
					<a class="nav-link" data-toggle="modal" data-target="#exampleModal">
						<i class="fa fa-fw fa-sign-out text-danger"></i>Sign out</a>
				</li>
			</ul>
		</div>
	</nav>
