package cr.ac.ucr.apiclient.controller;

import cr.ac.ucr.apiclient.domain.Client;
import cr.ac.ucr.apiclient.service.ClientService;
import org.hibernate.sql.Update;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping(path = "/api/client")

public class ClientController {

    @Autowired
        private ClientService service;

    @GetMapping("/getAllClients")
    public List<Client> list() {
        //¿reglas de negocio?
        //if...es admin
        return service.listAll();
    }

    @GetMapping("/getClient/{id}")
    public ResponseEntity<Client> getClientById(@PathVariable Integer id){
        try {
            Client student = service.get(id);
            return new ResponseEntity<Client>(student, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Client>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/saveClient")
    public void insertClient(Client client) { service.save(client);
    }

    @PostMapping("/updateClient")
    public ResponseEntity<Client> updateClient(@RequestBody Client client, @PathVariable Integer id) {
        try {
            Client existingStudent = service.get(id);
            service.save(existingStudent);
            return new ResponseEntity<Client>(client, HttpStatus.OK);
        } catch (NoSuchElementException e) {
            return new ResponseEntity<Client>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/deleteClient/{id}")
        public void deleteClient(@PathVariable int id) {
        service.delete(id);
        }
}
