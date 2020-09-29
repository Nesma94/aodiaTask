<?php if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

class User_model extends CI_Model
{

    public function __construct()
    {
        parent::__construct();
        $this->load->database();
    }
/**
 * login verification function
 *
 * @return void
 */
    public function verfiyLogin()
    {
        $loggedin = $this->session->userdata('loggedin');
        if (!isset($loggedin) || $loggedin != 1) {
            $this->load->helper('url');
            redirect(base_url() . "login/");
        }
    }
    /**
     * get all stored users function
     *
     * @return void
     */

    public function users(){
        return $this->db->get("users")->result();
    }
    /**
     * Get user by id function
     *
     * @param integer $id
     * @return void
     */

    public function getUserByID(int $id)
    {
        return $this->db->get_where('users', array('id' => $id))->row();
    }
    /**
     * Get user by name function
     *
     * @param string $name
     * @return void
     */

    public function getUserByName(string $name)
    {
        return $this->db->get_where("users", array("name" => $name))->row();
    }
    /**
     * Get user by name function
     *
     * @param string $name
     * @return void
     */

    public function checkUserByName(string $name)
    {
        return $this->db->get_where("users", array("name" => $name))->num_rows();
    }
    /**
     * Get user by email function
     *
     * @param string $email
     * @return void
     */

    public function getUserByEmail(string $email)
    {
        return $this->db->get_where("users", array("email" => $email))->row();
    }
    /**
     * Get user by email function
     *
     * @param string $email
     * @return void
     */

    public function checkUserByEmail(string $email)
    {
        return $this->db->get_where("users", array("email" => $email))->num_rows();
    }
    /**
     * Add new user function
     *
     * @param array $data
     * @return void
     */
    public function addAccount(array $data)
    {
       return $this->db->insert('users', $data);
    }
    /**
     * delete specific user function
     *
     * @param integer $id
     * @return void
     */
    public function deleteUser(int $id){

        return $this->db->delete('users', array('id' => $id));
    }
    /**
     * Edit user function
     *
     * @param array $data
     * @param integer $id
     * @return void
     */
    public function editUser(array $data ,int $id){
        return $this->db->update('users', $data, array('id' => $id));
    }



}
