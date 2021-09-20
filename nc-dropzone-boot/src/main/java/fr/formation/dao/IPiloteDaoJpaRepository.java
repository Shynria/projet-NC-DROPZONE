package fr.formation.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.formation.model.Pilote;

public interface IPiloteDaoJpaRepository extends JpaRepository<Pilote, Integer>{
    
}
