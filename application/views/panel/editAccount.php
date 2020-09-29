<div class="content-wrapper">
	<div class="container-fluid" style="margin-top: 60px; ">
		<div class="row">
			<div class="col-12">
				<h5 class="mt-3">Edit Account</h5>
				<hr class="my-5">
				<!-- Form -->
				<form enctype="multipart/form-data" action="<?= base_url() ?>account/doEditAccount/<?= $user->id ?>"
					method="POST">
					<div class="form-group row">
						<label class="col-sm-2 col-form-label">Username
							<span class="text-danger">*</span>
						</label>
						<div class="col-sm-4">
							<input required="" name="name" type="text" value="<?=$user->name?>" class="form-control">
						</div>
					</div>
					<div class="form-group row">
						<label class="col-sm-2 col-form-label">Email Address
							<span class="text-danger">*</span>
						</label>
						<div class="col-sm-4">
							<input required="" name="email" type="email" value="<?= $user->email ?>"
								class="form-control">
						</div>
					</div>
					<div class="form-group row">
						<label class="col-sm-2 col-form-label">Role
							<span class="text-danger">*</span>
						</label>
						<div class="col-sm-4">
							<select name="role" id="" class="form-control" required="">
								<option value="admin" <?php if($user->role == "admin")echo "selected"?>>Admin</option>
								<option value="superAdmin" <?php if($user->role == "superAdmin")echo "selected"?>>Super
									Admin</option>
							</select>
						</div>
					</div>
					<div class="form-group row">
						<label class="col-sm-2 col-form-label">Password
							<span class="text-danger">*</span>
						</label>
						<div class="col-sm-4">
							<input name="password" type="password" placeholder="****************" class="form-control">
						</div>
					</div>
					<div class="form-group row py-5">
						<div class="col-sm-4">
							<!-- <button type="submit" class="btn btn-primary rounded-0">Add New Account</button> -->
							<input type="submit" class="btn btn-primary rounded-0" value="Edit Account">
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>
