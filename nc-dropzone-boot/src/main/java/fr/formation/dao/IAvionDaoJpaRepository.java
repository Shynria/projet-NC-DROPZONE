package fr.formation.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.formation.model.Avion;

public interface IAvionDaoJpaRepository extends JpaRepository<Avion, Integer> {
    
}
