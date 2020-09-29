<div class="content-wrapper content-news-block">
	<div class="container-fluid">
		<h3 class="mt-3">Add Driver</h3>
		<hr class="my-4">
		<div class="row">
			<div class="col-md-9">
				<!-- Form -->
				<form action="<?=base_url()?>Driver/doAddDriver" method="POST">
					<div class="form-group">
						<label for="editor">Teams</label>
						<select name="team" id="" class="form-control" required="">
							<?php foreach ($teams as $team) {?>
							<option value="<?=$team->id?>"><?=$team->name;?></option>
							<?php }?>
						</select>
					</div>
					<div class="form-group">
						<label for="editor">Name</label>
						<input name="name" class="form-control" placeholder="Driver Name goes here..">
					</div>
			</div>
            <div class="col-md-3 ml-auto">
            <button type="submit" class="btn btn-primary btn-block"><i class="fa fa-floppy-o"></i>
                                Save</button>
		</div>
		</div>
	</div>
	</form>
