<?php
require 'models.php';
class DataBase {
    //$this->db = new PDO('mysql:host=localhost;dbname=nomokoiw_portal;charset=UTF8','nomokoiw_portal','KESRdV2f');
    public $db;
    public function __construct()
    {
        //$this->db = new PDO('mysql:host=localhost;dbname=myblog;charset=UTF8','nlc','12345');
        $this->db = new PDO('mysql:host=localhost;dbname=nomokoiw_box;charset=UTF8','nomokoiw_box','Er&GAs88');
        $this->db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
    }
    private function genInsertQuery($ins, $t){
        $res = array('INSERT INTO '.$t.' (',array());
        $q = '';
        for ($i = 0; $i < count(array_keys($ins)); $i++) {
            $res[0] = $res[0].array_keys($ins)[$i].',';
            $res[1][]=$ins[array_keys($ins)[$i]];
            $q=$q.'?,';
            
        }
        $res[0]=rtrim($res[0],',');
        $res[0]=$res[0].') VALUES ('.rtrim($q,',').');';
        
        return $res;
        
    }
    private function genUpdateQuery($keys, $values, $t, $id){
        $res = array('UPDATE '.$t.' SET ',array());
        $q = '';
        for ($i = 0; $i < count($keys); $i++) {
            if($values[$i]!='now()'){
                $res[0] = $res[0].$keys[$i].'=?, ';
                $res[1][]=$values[$i];
            }
            else{
                $res[0] = $res[0].$keys[$i].'=now(), ';
            }
            
            
        }
        $res[0]=rtrim($res[0],', ');
        $res[0]=$res[0].' WHERE '.rtrim($t,'s').'Id = '.$id;
        
        return $res;
        
    }
    
    //####################Sections Controller#########################
    public function getSections() {
        
        $sth = $this->db->query("SELECT * FROM sections");
        $sth->setFetchMode(PDO::FETCH_CLASS, 'Section');
        
        return $sth->fetchAll();
    }
    public function getSection($id) {
        
        $sth = $this->db->prepare("SELECT * FROM sections where SectionId=?");
        $sth->execute(array($id));
        $sth->setFetchMode(PDO::FETCH_CLASS, 'Section');
        
        return $sth->fetch();
    }
    public function addDeal($d){
        $s = $this->db->prepare("INSERT INTO deals (SectionId,Name,Email,Phone) VALUES (?,?,?,?);");
        $s->execute(array_values($d));
        
        return $this->getDeal($this->db->lastInsertId());
    }
    public function getDeal($id) {
        
        $sth = $this->db->prepare("SELECT * FROM deals where DealId=?");
        $sth->execute(array($id));
        $sth->setFetchMode(PDO::FETCH_CLASS, 'Deal');
        $deal = $sth->fetch();
        $deal->Section = $this->getSection($deal->SectionId);
        
        return $deal;
    }
    
    
    public function changeSection($c, $id){
        $c['Keys'][]='ModifyDate';
        $c['Values'][]='now()';
        $a = $this->genUpdateQuery($c['Keys'], $c['Values'], "sections", $id);
        $s = $this->db->prepare($a[0]);
        
        $s->execute($a[1]);
        
        
        return $a;
    }
    
    //####################Messager Controller###########################
}
?>