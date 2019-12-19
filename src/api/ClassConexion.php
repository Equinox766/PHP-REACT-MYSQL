<?php
abstract class ClassConexion
{
    //Conexion con la base de datos
    protected function conectaDB()
    {
        try {
            $Con=new PDO("mysql:host=localhost;dbname=crud-react","root","Polux014");
            return $Con;
        } catch (PDOException $error) {
            echo $error->getMessage();
        }
    }
}
