<<<<<<< HEAD
<?php
defined('BASEPATH') or exit('No direct script access allowed');

class AdminControlArea extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->helper('url');
        $this->load->model('user_model');
        $this->user_model->verfiyLogin();
    }
    public function index()
    {
        $this->load->view('includes/header.php');
        $this->load->view('panel/admin.php');
        $this->load->view('includes/footer.php');
    }

=======
<?php
defined('BASEPATH') or exit('No direct script access allowed');

class AdminControlArea extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->helper('url');
        $this->load->model('user_model');
        $this->user_model->verfiyLogin();
    }
    public function index()
    {
        $this->load->view('includes/header.php');
        $this->load->view('panel/admin.php');
        $this->load->view('includes/footer.php');
    }

>>>>>>> fdd7924d756c5da9cfce16ee7b255e5384e853ef
}