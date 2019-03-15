<?php
require 'repositories.php';
header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token , Authorization");

$ctxt = new DataBase();
if(isset($_GET['Key']))
{
    
    switch ($_GET['Key']) {
        case 'get-sections':
            echo json_encode($ctxt->getSections());
            break;
        case 'get-section':
            echo json_encode($ctxt->getSection($_GET['Id']));
            break;
        
        case 'add-deal':
            $b = json_decode(file_get_contents('php://input'), true);  
            echo json_encode($ctxt->addDeal($b));
            break;
        case 'change-section':
            $b = json_decode(file_get_contents('php://input'), true);  
            echo json_encode($ctxt->changeSection($b, $_GET['Id']));
            break;
        
        default:
            echo "Введенный ключ несуществует";
        
    }
    
}
else
{  
    echo "Введенные данные некорректны";
}
// if(isset($_GET['Key']))
// {
    
//     $q = $db->query('SELECT * FROM exam_marks');
//     $res = [];
//     while ($row = $q->fetch()) {
//         $res[] = new Entree($row['MARK']*1, $row['EXAM_DATE']);
        
//     }
//     echo json_encode($res,true);
// }
// else
// {  
//     echo "Введенные данные некорректны";
// }
?>