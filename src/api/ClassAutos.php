<?php
include("ClassConexion.php");

class ClassAutos extends ClassConexion
{
    //Recibir datos de los autos en un Json
    public function recibirAutos()
    {
        $BFetch=$this->conectaDB()->prepare("SELECT * FROM autos");
        $BFetch->execute();

        $J=[];
        $I=0;

        while($Fetch=$BFetch->fetch(PDO::FETCH_ASSOC)){
            $J[$I]=[
                "id"=>$Fetch['id'],
                "Marca"=>$Fetch['Marca'],
                "Modelo"=>$Fetch['Modelo'],
                "Ano"=>$Fetch['Ano']
            ];
            $I++;
            header("Access-Control-Allow-Origin: *");
            header("Content-type: application/json");
            
        }
        echo json_encode($J);
    }
}
