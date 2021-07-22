package cr.ac.ucr.apiclient.domain;

import org.springframework.data.repository.query.Param;

import javax.persistence.*;

@Entity
@Table(name = "Client")
@NamedStoredProcedureQuery(name = "Client.getAllClients", procedureName = "SelectClient")

@NamedStoredProcedureQuery(name = "Client.getClientById",procedureName =
        "SelectClientById", parameters = {@StoredProcedureParameter(mode = ParameterMode.IN, name =
        "@Id", type = Integer.class)})

@NamedStoredProcedureQuery(name = "Client.deleteClient",procedureName =
        "DeleteClient", parameters = {@StoredProcedureParameter(mode = ParameterMode.IN, name =
        "Id", type = Integer.class)})

@NamedStoredProcedureQuery(name = "Client.insertClient",procedureName =
        "InsertClient", parameters = {@StoredProcedureParameter(mode = ParameterMode.IN, name =
        "Name", type = String.class),@StoredProcedureParameter(mode = ParameterMode.IN, name =
        "FirstSurname", type = String.class),@StoredProcedureParameter(mode = ParameterMode.IN, name =
        "SecondSurname", type = String.class),@StoredProcedureParameter(mode = ParameterMode.IN, name =
        "Address", type = String.class),@StoredProcedureParameter(mode = ParameterMode.IN, name =
        "Phone", type = Integer.class),@StoredProcedureParameter(mode = ParameterMode.IN, name =
        "SecondContact", type = Integer.class),@StoredProcedureParameter(mode = ParameterMode.IN, name =
        "Email", type = String.class),@StoredProcedureParameter(mode = ParameterMode.IN, name =
        "Password", type = String.class),@StoredProcedureParameter(mode = ParameterMode.IN, name =
        "IdService", type = Integer.class),@StoredProcedureParameter(mode = ParameterMode.IN, name =
        "IdIssue", type = Integer.class)})

@NamedStoredProcedureQuery(name = "Client.updateClient",procedureName =
        "UpdateClient", parameters = {@StoredProcedureParameter(mode = ParameterMode.IN, name =
        "IdClient", type = Integer.class),@StoredProcedureParameter(mode = ParameterMode.IN, name =
        "Name", type = String.class),@StoredProcedureParameter(mode = ParameterMode.IN, name =
        "FirstSurname", type = String.class),@StoredProcedureParameter(mode = ParameterMode.IN, name =
        "SecondSurname", type = String.class),@StoredProcedureParameter(mode = ParameterMode.IN, name =
        "Address", type = String.class),@StoredProcedureParameter(mode = ParameterMode.IN, name =
        "Phone", type = Integer.class),@StoredProcedureParameter(mode = ParameterMode.IN, name =
        "SecondContact", type = Integer.class),@StoredProcedureParameter(mode = ParameterMode.IN, name =
        "Email", type = String.class),@StoredProcedureParameter(mode = ParameterMode.IN, name =
        "Password", type = String.class),@StoredProcedureParameter(mode = ParameterMode.IN, name =
        "IdService", type = Integer.class),@StoredProcedureParameter(mode = ParameterMode.IN, name =
        "IdIssue", type = Integer.class)})
public class Client {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int IdClient;
    private String name;
    private String FirstSurname;
    private String SecondSurname;
    private String Address;
    private int Phone;
    private int SecondContact;
    private String email;
    private String password;
    private int IdService;
    private int IdIssue;

    public Client(){
    }

    public Client(int idClient, String name, String firstSurname, String secondSurname, String address, int phone, int secondContact, String email, String password, int idService, int idIssue) {
        IdClient = idClient;
        this.name = name;
        FirstSurname = firstSurname;
        SecondSurname = secondSurname;
        Address = address;
        Phone = phone;
        SecondContact = secondContact;
        this.email = email;
        this.password = password;
        IdService = idService;
        IdIssue = idIssue;
    }

    public int getIdClient() {
        return IdClient;
    }

    public void setIdClient(int idClient) {
        IdClient = idClient;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getFirstSurname() {
        return FirstSurname;
    }

    public void setFirstSurname(String firstSurname) {
        FirstSurname = firstSurname;
    }

    public String getSecondSurname() {
        return SecondSurname;
    }

    public void setSecondSurname(String secondSurname) {
        SecondSurname = secondSurname;
    }

    public String getAddress() {
        return Address;
    }

    public void setAddress(String address) {
        Address = address;
    }

    public int getPhone() {
        return Phone;
    }

    public void setPhone(int phone) {
        Phone = phone;
    }

    public int getSecondContact() {
        return SecondContact;
    }

    public void setSecondContact(int secondContact) {
        SecondContact = secondContact;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getIdService() {
        return IdService;
    }

    public void setIdService(int idService) {
        IdService = idService;
    }

    public int getIdIssue() {
        return IdIssue;
    }

    public void setIdIssue(int idIssue) {
        IdIssue = idIssue;
    }
}
