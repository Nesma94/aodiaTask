<div class="content-wrapper">
    <div class="container-fluid" style="margin-top: 60px;">
        <h3 class="my-3">Accounts</h3>
        <a href="<?= base_url() ?>account/addAccount" class="btn btn-primary rounded-0">Add New Account</a>
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
            <!-- id="dataTable" -->
            <table id="dataTable" class="table table-bordered table-striped" width="100%" cellspacing="0">
                <thead>
                    <tr>

                        <th>User</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($users as $users) { ?>
                    <tr>
                        <td>
                            <?= $users->name ?>
                        </td>
                        <td>
                            <?= $users->email ?>
                        </td>
                        <td>****************</td>
                        <td>
                            <a href="<?= base_url() ?>account/editAccount/<?= $users->id ?>" class="btn btn-warning btn-block rounded-0">Edit</a>
                        </td>
                        <td>
                            <a onclick="delete_account(<?= $users->id ?>)" class="btn btn-danger btn-block rounded-0" href="#">Delete</a>
                        </td>
                    </tr>
                    <?php
                } ?>
                </tbody>
            </table>
        </div>
    </div>
    <script type="text/javascript">
        function delete_account(x) {
            var r = confirm(" Do You Really Want To Delete This Account !!");
            if (r == true) {
                window.location = "<?= base_url() ?>account/deleteAccount/" + x;
            } else {}
        }
    </script>