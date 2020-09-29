<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Account extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->helper('url');
        $this->load->model('user_model');
        $this->user_model->verfiyLogin();
    }
    /**
     * all accounts view function
     *
     * @return void
     */
    public function index()
    {
        $data['users'] = $this->user_model->users();
        $this->load->view('includes/header.php');
        $this->load->view('panel/viewAccount.php', $data);
        $this->load->view('includes/footer.php');
    }
    /**
     * Add Account view function
     *
     * @return void
     */
    public function addAccount()
    {
        $this->load->view('includes/header.php');
        $this->load->view('panel/addAccount.php');
        $this->load->view('includes/footer.php');
    }
    /**
     * Edit account view function
     *
     * @param integer $id
     * @return void
     */
    public function editAccount(int $id)
    {
        $data['user'] = $this->user_model->getUserByID($id);
        $this->load->view('includes/header.php', $data);
        $this->load->view('panel/editAccount.php');
        $this->load->view('includes/footer.php');
    }
    /**
     * Edit Account data function
     *
     * @param integer $id
     * @return void
     */
    public function doEditAccount(int $id)
    {
        $user = $this->user_model->getUserByID($id);
        $data['name'] = $name = trim(strip_tags($this->input->post('name')));
        $data['email'] = $email = trim(strip_tags($this->input->post('email')));
        $data['role'] = $name = trim(strip_tags($this->input->post('role')));
        $password = trim(strip_tags($this->input->post('password')));
        $check = $this->user_model->getUserByEmail($email);
        $check1 = $this->user_model->getUserByName($name);

        if (!empty($password)) {
            $data['password'] = password_hash($password,PASSWORD_ARGON2I);
        }
        if ($this->user_model->editUser($data,$id)) {
            $true = "User Edited Successfully ...";
            $this->session->set_flashdata('true', $true);

            redirect(base_url() . "account");
        } else {
            $error = "Failed To Edit User, Please Try Again Later ...";
            $this->session->set_flashdata('error', $error);
            redirect(base_url() . "account");
        }

    }

    /**
     * Add account function
     *
     * @return void
     */
    public function doAddAccount()
    {
        $data['password'] = password_hash(trim(strip_tags($this->input->post('password'))),PASSWORD_ARGON2I);
        $data['name'] = $name = trim(strip_tags($this->input->post('name')));
        $data['role'] = $name = trim(strip_tags($this->input->post('role')));
        $data['email'] = $email = trim(strip_tags($this->input->post('email')));
        $check = $this->user_model->checkUserByEmail($email);
        $check1 = $this->user_model->checkUserByName($name);
        if ($check == 0 && $check1 == 0) {
            if ($this->user_model->addAccount($data)) {
                $true = "User Added Successfully ...";
                $this->session->set_flashdata('true', $true);
                redirect(base_url() . "account");
            } else {
                $error = "Failed To Add User, Please Try Again Later ...";
                $this->session->set_flashdata('error', $error);
                redirect(base_url() . "account");
            }

        } else if ($check != 0) {
            $error = "Email is already exits ...";
            $this->session->set_flashdata('error', $error);
            redirect(base_url() . "account");

        } else if ($check1 != 0) {
            $error = "Name is already exits ...";
            $this->session->set_flashdata('error', $error);
            redirect(base_url() . "account");

        }

    }
    /**
     * Delete Account function
     *
     * @param integer $id
     * @return void
     */
    public function deleteAccount(int $id)
    {
        $user = $this->user_model->getUserByID($id);
        if ($this->user_model->deleteUser($id)) {
            $true = "Account Deleted Successfully ...";
            $this->session->set_flashdata('true', $true);
            redirect(base_url() . "account");
        } else {
            $error = "Failed To Delete ...";
            $this->session->set_flashdata('error', $error);
            redirect(base_url() . "account");
        }
    }
}
