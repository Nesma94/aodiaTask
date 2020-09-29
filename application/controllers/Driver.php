<?php
defined('BASEPATH') or exit('No direct script access allowed');

class Driver extends CI_Controller
{
    public function __construct()
    {
        parent::__construct();
        $this->load->helper('url');
        $this->load->model('driver_model');
        $this->load->model('user_model');
        $this->user_model->verfiyLogin();
        $role = $this->session->userdata('role');
        if( $role == "admin" && $this->uri->segment(2) == "deleteDriver"){
            $error = "You Can't delete Drivers";
            $this->session->set_flashdata('error', $error);
            redirect(base_url() . "Driver");
        }
    }
    /**
     * all Drivers view function
     *
     * @return void
     */
    public function index()
    {
         
        $data['drivers'] = $this->driver_model->drivers();
        $this->load->view('includes/header.php');
        $this->load->view('panel/viewDriver.php', $data);
        $this->load->view('includes/footer.php');
    }
    /**
     * Add Driver view function
     *
     * @return void
     */
    public function addDriver()
    {
        $data['teams'] = $this->driver_model->allTeams();
        $this->load->view('includes/header.php');
        $this->load->view('panel/addDriver.php', $data);
        $this->load->view('includes/footer.php');
    }
    /**
     * Edit Driver view function
     *
     * @param integer $id
     * @return void
     */
    public function editDriver(int $id)
    {
        $data['driver'] = $this->driver_model->getDriverByID($id);
        $data['teams'] = $this->driver_model->allTeams();
        $this->load->view('includes/header.php', $data);
        $this->load->view('panel/editDriver.php');
        $this->load->view('includes/footer.php');
    }
    /**
     * Edit Driver data function
     *
     * @param integer $id
     * @return void
     */
    public function doEditDriver(int $id)
    {
        
        $user = $this->driver_model->getDriverByID($id);
        $data['name'] = $name = trim(strip_tags($this->input->post('name')));
        $data['team_id'] = trim(strip_tags($this->input->post('team')));

        if ($this->driver_model->editDriver($data,$id)) {
            $true = "Driver Edited Successfully ...";
            $this->session->set_flashdata('true', $true);

            redirect(base_url() . "Driver");
        } else {
            $error = "Failed To Edit Driver, Please Try Again Later ...";
            $this->session->set_flashdata('error', $error);
            redirect(base_url() . "Driver");
        }

    }

    /**
     * Add Driver function
     *
     * @return void
     */
    public function doAddDriver()
    {
        $data['name'] = $name = trim(strip_tags($this->input->post('name')));
        $data['team_id'] = trim(strip_tags($this->input->post('team')));

        if ($this->driver_model->addDriver($data)) {
            $true = "Driver Added Successfully ...";
            $this->session->set_flashdata('true', $true);
            redirect(base_url() . "Driver");
        } else {
            $error = "Failed To Add Driver, Please Try Again Later ...";
            $this->session->set_flashdata('error', $error);
            redirect(base_url() . "Driver");
        }

    }
    /**
     * Delete Driver function
     *
     * @param integer $id
     * @return void
     */
    public function deleteDriver(int $id)
    {
        $user = $this->driver_model->getDriverByID($id);
        if ($this->driver_model->deleteDriver($id)) {
            $true = "Driver Deleted Successfully ...";
            $this->session->set_flashdata('true', $true);
            redirect(base_url() . "Driver");
        } else {
            $error = "Failed To Delete ...";
            $this->session->set_flashdata('error', $error);
            redirect(base_url() . "Driver");
        }
    }
}
