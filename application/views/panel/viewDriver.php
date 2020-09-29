<div class="content-wrapper">
    <div class="container-fluid" >
        <h3 class="my-3">Drivers</h3>
          <a href="<?= base_url() ?>Driver/addDriver" class="btn btn-primary rounded-0">Add Driver</a>
        <hr class="my-4">
        <?php if ($this->session->flashdata('true')) { ?>
        <div class="alert alert-success text-center rounded-0 border-success" role="alert">
            <span class="font-weight-bold">
                <i class="fa fa-check-circle-o pr-1"></i>
                <?= $this->session->flashdata('true') ?>
            </span>
        </div>
        <?php

    } ?>
        <?php if ($this->session->flashdata('error')) { ?>
        <div class="alert alert-danger text-center rounded-0 border-danger" role="alert">
            <span class="font-weight-bold">
                <i class="fa fa-times-circle-o pr-1"></i>
                <?= $this->session->flashdata('error') ?>
            </span>
        </div>
        <?php

    } ?>
        <!-- Example DataTables Card-->
        <div class="table-responsive">
            <table class="table table-bordered table-striped" width="100%" cellspacing="0"  id="dataTable">
                <thead>
                    <tr>
                        <!-- Changed from ID to Order -->
                        <th>Name</th>
                        <th>Team</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($drivers as $driver) { ?>
                    <tr>
                        <td>
                            <?= $driver->name ?>
                        </td>
                        <td>
                            <?= $driver->team_name ?>
                        </td>
                     
                        <td>
                            <a class="btn btn-warning btn-block rounded-0" href="<?= base_url() ?>driver/editDriver/<?= $driver->id ?>">Edit</a>
                        </td>
                        <td>
                            <a class="btn btn-danger btn-block rounded-0" onclick="delete_driver(<?= $driver->id ?>)">Delete</a>
                        </td>
                    </tr>
                    <?php

                } ?>
                </tbody>
            </table>
        </div>
    </div>
      <script type="text/javascript">
        function delete_driver(x) {
            var r = confirm(" Do You Really Want To Delete This Driver !!");
            if (r == true) {
                window.location = "<?= base_url() ?>Driver/deleteDriver/" + x;
            }
        }
    </script>