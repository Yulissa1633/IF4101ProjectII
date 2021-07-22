package cr.ac.ucr.apiclient.repository;

import cr.ac.ucr.apiclient.domain.Client;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ClientRepository extends JpaRepository<Client, Integer> {

    //procedimientos almacenados
    //métodos customizados

    //los que ya existen por defecto


}

