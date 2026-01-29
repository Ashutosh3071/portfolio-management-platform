package com.portfolio.backend.service;

import com.portfolio.backend.entity.Client;
import java.util.List;

public interface ClientService {

    Client createClient(Client client);

    List<Client> getAllClients();

    Client getClientById(Long id);

    void deleteClient(Long id);
}
