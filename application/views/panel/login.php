<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<meta name="description" content="">
	<meta name="author" content="">
	<title>Aodia Task - Login</title>
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
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>

</head>

<body class="bg-dark d-table w-100" style="height: 100vh;">
	<div class="center">
		<div class="new d-table-cell align-middle">
			<div class="image-container ">
				<div class="image-container-crnter">
					<!-- <img  class="img-fluid"
                    src="<?=base_url()?>assets/images/logo.png"> -->
				</div>

			</div>
			<div class="card card-login mx-auto rounded-0">
				<div class="card-header text-center font-weight-bold"> LOGIN</div>
				<div class="card-body">
					<!-- Form is Here -->
					<form method="POST" action="<?=base_url()?>login/doLogin" method='POST'>
						<div class="form-group">
							<label for="exampleInputEmail">Username</label>
							<input class="form-control" id="exampleInputEmail" type="text" name="username"
								placeholder="Enter Username">
						</div>
						<div class="form-group">
							<label for="exampleInputPassword">Password</label>
							<input class="form-control" id="exampleInputPassword" name="password" type="password"
								placeholder="Password">
						</div>
						<input type="submit" value="Sign in" id="submit" class="btn btn-primary btn-block">
					</form>
				</div>
			</div>
		</div>
	</div>

	<!-- Bootstrap core JavaScript-->
	<script src="<?=base_url()?>assets/vendor/jquery/jquery.min.js"></script>
	<script src="<?=base_url()?>assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
	<!-- Core plugin JavaScript-->
	<script src="<?=base_url()?>assets/vendor/jquery-easing/jquery.easing.min.js"></script>
	<!-- Page level plugin JavaScript-->
	<script src="<?=base_url()?>assets/vendor/chart.js/Chart.min.js"></script>
	<script src="<?=base_url()?>assets/vendor/datatables/jquery.dataTables.js"></script>
	<script src="<?=base_url()?>assets/vendor/datatables/dataTables.bootstrap4.js"></script>
	<!-- Custom scripts for all pages-->
	<script src="<?=base_url()?>assets/js/sb-admin.min.js"></script>
	<!-- Custom scripts for this page-->
	<script src="<?=base_url()?>assets/js/sb-admin-datatables.min.js"></script>
	<script src="<?=base_url()?>assets/js/sb-admin-charts.min.js"></script>
</body>

</html>
