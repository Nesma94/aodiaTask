<<<<<<< HEAD
<?php if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

class Driver_model extends CI_Model
{

    public function __construct()
    {
        parent::__construct();
        $this->load->database();
    }
    /**
     * get all stored Drivers function
     *
     * @return void
     */

    public function drivers(){
        $this->db->select("driver.*,team.id as team,team.name as team_name");
        $this->db->from("driver");
        $this->db->join('team', 'team.id = driver.team_id');
        return $this->db->get()->result();
    }
    /**
     * Get Driver by id function
     *
     * @param integer $id
     * @return void
     */

    public function getDriverByID(int $id)
    {
        return $this->db->get_where('driver', array('id' => $id))->row();
    }
    /**
     * Get Driver by name function
     *
     * @param string $name
     * @return void
     */

    public function getDriverByName(string $name)
    {
        return $this->db->get_where('driver', array("name" => $name))->row();
    }
    /**
     * Get Driver by name function
     *
     * @param string $name
     * @return void
     */

    public function checkDriverByName(string $name)
    {
        return $this->db->get_where('driver', array("name" => $name))->num_rows();
    }
    /**
     * Get Driver by email function
     *
     * @param string $email
     * @return void
     */

    public function getDriverByEmail(string $email)
    {
        return $this->db->get_where('driver', array("email" => $email))->row();
    }
    /**
     * Get Driver by email function
     *
     * @param string $email
     * @return void
     */

    public function checkDriverByEmail(string $email)
    {
        return $this->db->get_where('driver', array("email" => $email))->num_rows();
    }
    /**
     * Add new Driver function
     *
     * @param array $data
     * @return void
     */
    public function addDriver(array $data)
    {
       return $this->db->insert('driver', $data);
    }
    /**
     * delete specific Driver function
     *
     * @param integer $id
     * @return void
     */
    public function deleteDriver(int $id){

        return $this->db->delete('driver', array('id' => $id));
    }
    /**
     * Edit Driver function
     *
     * @param array $data
     * @param integer $id
     * @return void
     */
    public function editDriver(array $data ,int $id){
        return $this->db->update('driver', $data, array('id' => $id));
    }
    /**
     * get all teams function
     *
     * @return void
     */
    public function allTeams(){
        return $this->db->get('team')->result();
    }


}
=======
<?php if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

class Driver_model extends CI_Model
{

    public function __construct()
    {
        parent::__construct();
        $this->load->database();
    }
    /**
     * get all stored Drivers function
     *
     * @return void
     */

    public function drivers(){
        $this->db->select("driver.*,team.id as team,team.name as team_name");
        $this->db->from("driver");
        $this->db->join('team', 'team.id = driver.team_id');
        return $this->db->get()->result();
    }
    /**
     * Get Driver by id function
     *
     * @param integer $id
     * @return void
     */

    public function getDriverByID(int $id)
    {
        return $this->db->get_where('driver', array('id' => $id))->row();
    }
    /**
     * Get Driver by name function
     *
     * @param string $name
     * @return void
     */

    public function getDriverByName(string $name)
    {
        return $this->db->get_where('driver', array("name" => $name))->row();
    }
    /**
     * Get Driver by name function
     *
     * @param string $name
     * @return void
     */

    public function checkDriverByName(string $name)
    {
        return $this->db->get_where('driver', array("name" => $name))->num_rows();
    }
    /**
     * Get Driver by email function
     *
     * @param string $email
     * @return void
     */

    public function getDriverByEmail(string $email)
    {
        return $this->db->get_where('driver', array("email" => $email))->row();
    }
    /**
     * Get Driver by email function
     *
     * @param string $email
     * @return void
     */

    public function checkDriverByEmail(string $email)
    {
        return $this->db->get_where('driver', array("email" => $email))->num_rows();
    }
    /**
     * Add new Driver function
     *
     * @param array $data
     * @return void
     */
    public function addDriver(array $data)
    {
       return $this->db->insert('driver', $data);
    }
    /**
     * delete specific Driver function
     *
     * @param integer $id
     * @return void
     */
    public function deleteDriver(int $id){

        return $this->db->delete('driver', array('id' => $id));
    }
    /**
     * Edit Driver function
     *
     * @param array $data
     * @param integer $id
     * @return void
     */
    public function editDriver(array $data ,int $id){
        return $this->db->update('driver', $data, array('id' => $id));
    }
    /**
     * get all teams function
     *
     * @return void
     */
    public function allTeams(){
        return $this->db->get('team')->result();
    }


}
>>>>>>> fdd7924d756c5da9cfce16ee7b255e5384e853ef
