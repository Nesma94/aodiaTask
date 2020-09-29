            <footer class="sticky-footer">
                <div class="container">
                    <div class="text-center">
                        <small>Copyright © <a href="<?= base_url(); ?>">aodia</a> <?= date('Y'); ?></small>
                        <br>
                    </div>
                </div>
            </footer>
            <!-- Scroll to Top Button-->
            <a class="scroll-to-top rounded" href="#page-top">
                <i class="fa fa-angle-up"></i>
            </a>
            
            
            
            <!-- Logout Modal-->
            <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span>×</span>
                            </button>
                        </div>
                        <div class="modal-body">Select "Logout" below if you are ready to end your current session.
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <a class="btn btn-primary" href="<?= base_url(); ?>login/logout">Logout</a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Bootstrap core JavaScript-->
            <script src="<?= base_url(); ?>assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            <!-- Core plugin JavaScript-->
            <script src="<?= base_url(); ?>assets/vendor/jquery-easing/jquery.easing.min.js"></script>
            <!-- Page level plugin JavaScript-->
            <script src="<?= base_url(); ?>assets/vendor/chart.js/Chart.min.js"></script>
            <script src="<?= base_url(); ?>assets/vendor/datatables/jquery.dataTables.js"></script>
            <script src="<?= base_url(); ?>assets/vendor/datatables/dataTables.bootstrap4.js"></script>
            <!-- Custom scripts for all pages-->
            <script src="<?= base_url(); ?>assets/js/sb-admin.js"></script>
            <!-- Custom scripts for this page-->
            <script src="<?= base_url(); ?>assets/js/moment.min.js"></script>
            <!-- DatePicker -->
            <script src="<?= base_url(); ?>assets/js/bootstrap-datepicker.min.js"></script>

            <script src="https://cdn.ckeditor.com/4.8.0/full-all/ckeditor.js"></script>
            <script src="<?= base_url(); ?>assets/vendor/nanospell/autoload.js"></script>
            <script src="<?= base_url(); ?>assets/js/lazyload.js"></script>
            <script src="https://cdn.datatables.net/buttons/1.5.4/js/dataTables.buttons.min.js"></script>
            <script src="https://cdn.datatables.net/buttons/1.5.4/js/buttons.bootstrap4.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/pdfmake.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.36/vfs_fonts.js"></script>
            <script src="https://cdn.datatables.net/buttons/1.5.4/js/buttons.html5.min.js"></script>
            <script src="https://cdn.datatables.net/buttons/1.5.4/js/buttons.print.min.js"></script>
            <script src="https://cdn.datatables.net/buttons/1.5.4/js/buttons.colVis.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/1.4.0/perfect-scrollbar.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.perfect-scrollbar/1.4.0/perfect-scrollbar.min.js"></script>
            <!-- Select2 JS -->
            <script src="<?= base_url(); ?>assets/js/select2.min.js"></script>
            <!-- Custom JS SCRIPTS -->
            <script src="<?= base_url(); ?>assets/js/custom.js"></script>
            <!-- DatePicker -->
            <script>
                $(document).ready(function () {

                    $("#dataTable").DataTable({
                        dom: 'Bfrtip',
                        buttons: [
                            'copy', 'csv', 'excel', 'pdf', 'print'
                        ],
                        "pageLength": 50
                    });
                    // Initialize the plugin
                    const demo = document.querySelector('#accordion');
                    const ps = new PerfectScrollbar(demo);

                    // Handle size change
                    document.querySelector('#resize').addEventListener('click', () => {

                        // Get updated values
                        width = document.querySelector('#width').value;
                        height = document.querySelector('#height').value;

                        // Set demo sizes
                        demo.style.width = `${width}px`;
                        demo.style.height = `${height}px`;

                        // Update Perfect Scrollbar
                        ps.update();
                    });
                });
            </script>
            </div>
            </body>

            </html>