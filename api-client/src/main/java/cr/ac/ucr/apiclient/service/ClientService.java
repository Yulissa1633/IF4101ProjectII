package cr.ac.ucr.apiclient.service;

import cr.ac.ucr.apiclient.domain.Client;
import cr.ac.ucr.apiclient.repository.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional

public class ClientService {

    @Autowired
    private ClientRepository repository;

    public List<Client> listAll() {
        return repository.findAll();
    }

    public void save(Client student) {
        repository.save(student);
    }

    public Client get(int id) {
        return repository.findById(id).get();
    }

    public void delete(int id) {
        repository.deleteById(id);
    }




}
