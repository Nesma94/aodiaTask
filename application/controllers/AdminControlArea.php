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

}