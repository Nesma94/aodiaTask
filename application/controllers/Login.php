<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Login extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->helper('url');
        $this->load->model('user_model');

    }
    public function index()
    {

        $this->load->view('panel/login.php');
    }

    public function doLogin()
    {
        $username = trim(strip_tags(stripslashes($this->input->post('username'))));
        $password = trim(strip_tags(stripslashes($this->input->post('password'))));
        $check = $this->user_model->checkUserByName($username);
        $user =  $this->user_model->getUserByName($username);
         $verifying = password_verify($password,$user->password);
        if ($check > 0 && $user->name === $username && $verifying == 1) {
            $login = array(
                'id' => $user->id,
                'username' => $user->name,
                'role' => $user->role,
                'loggedin' => 1,
            );
            $this->session->set_userdata($login);
            redirect(base_url() . 'Account');
        } else {
            $this->load->view('panel/not_registered.php');
        }

    }

    public function logout()
    {
        $id = $_SESSION['id'];
        $this->session->sess_destroy();
        redirect(base_url() . 'login');
    }

}
