package fr.formation.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.formation.model.SautTandem;

public interface ISautTandemDaoJpaRepository extends JpaRepository<SautTandem, Integer> {
    
}
