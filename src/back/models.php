<?php


class Section{
     public $SectionId;
     public $ModifyDate;
     public $Name;
     public $Description;
     public $Price;
     public $Image;
}
    
class Deal{
    public $DealId;
    public $SectionId;
    public $CreateDate;
    public $Email;
    public $Phone;
    public $Name;

    public $Section;
}
    

?>